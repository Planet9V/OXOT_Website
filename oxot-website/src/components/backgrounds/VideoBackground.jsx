import { useEffect, useRef, useState } from 'react';

/**
 * Approach 1: HTML5 Video Background
 * Pros: Easy implementation, guaranteed smooth playback, no complex setup
 * Cons: Large file size (1.6MB), mobile autoplay restrictions, bandwidth usage
 */
export default function VideoBackground() {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    let frameCount = 0;
    let lastTime = startTime;
    let rafId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setPerformanceMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }

      rafId = requestAnimationFrame(measureFPS);
    };

    const video = videoRef.current;

    const handleCanPlay = () => {
      const loadTime = performance.now() - startTime;
      setIsLoaded(true);

      // Measure memory if available
      if (performance.memory) {
        const memoryUsage = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
        setPerformanceMetrics(prev => ({ ...prev, loadTime, memoryUsage }));
      } else {
        setPerformanceMetrics(prev => ({ ...prev, loadTime }));
      }

      // Start FPS monitoring
      rafId = requestAnimationFrame(measureFPS);
    };

    if (video) {
      video.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (video) {
        video.removeEventListener('canplay', handleCanPlay);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="video-background-container">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/video-poster.jpg"
      >
        <source
          src="/research/backgrounds/Geometric_Background_Video_Generation.mp4"
          type="video/mp4"
        />
      </video>

      {/* Performance overlay for testing */}
      {process.env.NODE_ENV === 'development' && (
        <div className="performance-overlay">
          <h3>Video Background Performance</h3>
          <p>Load Time: {performanceMetrics.loadTime.toFixed(0)}ms</p>
          <p>Memory: {performanceMetrics.memoryUsage}MB</p>
          <p>FPS: {performanceMetrics.fps}</p>
          <p>Status: {isLoaded ? '✅ Loaded' : '⏳ Loading...'}</p>
        </div>
      )}

      <style jsx>{`
        .video-background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .video-background {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
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
          .video-background {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
