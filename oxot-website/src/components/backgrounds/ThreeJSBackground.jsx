import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Approach 2: WebGL/Three.js Animated Background
 * Pros: Interactive, customizable, smaller initial load, GPU-accelerated
 * Cons: GPU intensive, complexity, requires WebGL support
 */
export default function ThreeJSBackground() {
  const containerRef = useRef(null);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0,
    drawCalls: 0,
    triangles: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.BoxGeometry(1, 1, 1)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshPhongMaterial({
        color: 0x0088ff,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshPhongMaterial({
        color: 0xff0088,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      })
    ];

    // Create multiple shapes
    const shapes = [];
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 50;
      mesh.position.y = (Math.random() - 0.5) * 50;
      mesh.position.z = (Math.random() - 0.5) * 50;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };

      shapes.push(mesh);
      scene.add(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ff88, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0088ff, 1, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Performance monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    const loadTime = lastTime - startTime;

    // Animation loop
    function animate() {
      frameCount++;
      const currentTime = performance.now();

      // Update FPS every second
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        const info = renderer.info;

        const metrics = {
          loadTime,
          fps,
          drawCalls: info.render.calls,
          triangles: info.render.triangles
        };

        if (performance.memory) {
          metrics.memoryUsage = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
        }

        setPerformanceMetrics(metrics);
        frameCount = 0;
        lastTime = currentTime;
      }

      // Animate shapes
      shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
      });

      // Subtle camera movement
      camera.position.x = Math.sin(currentTime * 0.0001) * 5;
      camera.position.y = Math.cos(currentTime * 0.0001) * 5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);

      // Dispose of Three.js resources
      shapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="threejs-background-container">
      <div ref={containerRef} className="threejs-canvas" />

      {/* Performance overlay for testing */}
      {process.env.NODE_ENV === 'development' && (
        <div className="performance-overlay">
          <h3>Three.js Background Performance</h3>
          <p>Load Time: {performanceMetrics.loadTime.toFixed(0)}ms</p>
          <p>Memory: {performanceMetrics.memoryUsage}MB</p>
          <p>FPS: {performanceMetrics.fps}</p>
          <p>Draw Calls: {performanceMetrics.drawCalls}</p>
          <p>Triangles: {performanceMetrics.triangles}</p>
        </div>
      )}

      <style jsx>{`
        .threejs-background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .threejs-canvas {
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }

        .performance-overlay {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          color: #00ff00;
          padding: 15px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 12px;
          z-index: 9999;
        }

        .performance-overlay h3 {
          margin: 0 0 10px 0;
          color: #fff;
        }

        .performance-overlay p {
          margin: 5px 0;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .threejs-canvas {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
