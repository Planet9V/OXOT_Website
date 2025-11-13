import React, { useEffect, useRef } from 'react';
import './ThreeBackground.css';

const ThreeBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const linesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setCanvasSize();

    // Diagonal line configuration
    const LINE_CONFIG = {
      spacing: 60, // Space between diagonal lines
      thickness: 1.5, // Line thickness
      baseSpeed: 0.3, // Base animation speed
      speedVariation: 0.2, // Speed randomization
      opacity: 0.15, // Line opacity
      glowOpacity: 0.05, // Glow effect opacity
      angle: -45, // Diagonal angle (degrees)
      colors: [
        'rgba(59, 130, 246, ', // Blue
        'rgba(139, 92, 246, ', // Purple
        'rgba(6, 182, 212, ', // Cyan
      ],
    };

    // Initialize diagonal lines
    const initLines = () => {
      linesRef.current = [];
      const diagonal = Math.sqrt(width * width + height * height);
      const numLines = Math.ceil(diagonal / LINE_CONFIG.spacing) + 10;

      for (let i = 0; i < numLines; i++) {
        const colorIndex = i % LINE_CONFIG.colors.length;
        linesRef.current.push({
          offset: i * LINE_CONFIG.spacing - diagonal / 2,
          speed: LINE_CONFIG.baseSpeed + (Math.random() - 0.5) * LINE_CONFIG.speedVariation,
          color: LINE_CONFIG.colors[colorIndex],
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.01,
        });
      }
    };
    initLines();

    // Mouse move handler for parallax effect
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / width - 0.5) * 2;
      mouseRef.current.y = (event.clientY / height - 0.5) * 2;
    };

    // Resize handler
    const handleResize = () => {
      setCanvasSize();
      initLines();
    };

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Clear canvas with dark background
      ctx.fillStyle = '#0f0f0f';
      ctx.fillRect(0, 0, width, height);

      // Save context state
      ctx.save();

      // Translate to center and rotate for diagonal effect
      ctx.translate(width / 2, height / 2);
      ctx.rotate((LINE_CONFIG.angle * Math.PI) / 180);

      // Apply subtle parallax based on mouse position
      const parallaxX = mouseRef.current.x * 20;
      const parallaxY = mouseRef.current.y * 20;
      ctx.translate(parallaxX, parallaxY);

      // Calculate diagonal dimensions
      const diagonal = Math.sqrt(width * width + height * height);
      const halfDiagonal = diagonal / 2 + 200; // Extra padding

      // Draw each diagonal line
      linesRef.current.forEach((line, index) => {
        // Update line position
        line.offset += line.speed;

        // Wrap lines around when they move off screen
        if (line.offset > diagonal / 2 + LINE_CONFIG.spacing * 5) {
          line.offset -= diagonal + LINE_CONFIG.spacing * 10;
        }

        // Calculate pulsing opacity
        line.phase += line.pulseSpeed;
        const pulse = Math.sin(line.phase) * 0.3 + 0.7; // 0.4 to 1.0
        const lineOpacity = LINE_CONFIG.opacity * pulse;
        const glowOpacity = LINE_CONFIG.glowOpacity * pulse;

        const y = line.offset;

        // Draw glow effect (multiple layers for smooth gradient)
        for (let glow = 8; glow >= 1; glow--) {
          ctx.strokeStyle = `${line.color}${(glowOpacity / glow).toFixed(3)})`;
          ctx.lineWidth = LINE_CONFIG.thickness + glow * 2;
          ctx.beginPath();
          ctx.moveTo(-halfDiagonal, y);
          ctx.lineTo(halfDiagonal, y);
          ctx.stroke();
        }

        // Draw main line
        ctx.strokeStyle = `${line.color}${lineOpacity.toFixed(3)})`;
        ctx.lineWidth = LINE_CONFIG.thickness;
        ctx.beginPath();
        ctx.moveTo(-halfDiagonal, y);
        ctx.lineTo(halfDiagonal, y);
        ctx.stroke();
      });

      // Restore context state
      ctx.restore();
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="three-background" />;
};

export default ThreeBackground;
