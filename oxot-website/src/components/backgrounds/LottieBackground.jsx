import { useEffect, useRef, useState } from 'react';

/**
 * Approach 3: Lottie Animation Background
 * Pros: Small file size, smooth vector animation, scalable, no GPU dependency
 * Cons: Need to create/export animation, less dynamic than WebGL
 */
export default function LottieBackground() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [lottie, setLottie] = useState(null);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0,
    fileSize: 0
  });

  // Sample Lottie animation data (geometric shapes)
  const sampleAnimation = {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 1920,
    h: 1080,
    nm: "Geometric Background",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Shape Layer 1",
        sr: 1,
        ks: {
          o: { a: 0, k: 30 },
          r: { a: 1, k: [
            { t: 0, s: [0], e: [360] },
            { t: 180, s: [360] }
          ]},
          p: { a: 0, k: [960, 540, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [200, 200] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "st",
                c: { a: 0, k: [0, 1, 0.533, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 3 },
                lc: 1,
                lj: 1
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Shape Layer 2",
        sr: 1,
        ks: {
          o: { a: 0, k: 30 },
          r: { a: 1, k: [
            { t: 0, s: [0], e: [-360] },
            { t: 180, s: [-360] }
          ]},
          p: { a: 0, k: [480, 270, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [80, 80, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                d: 1,
                s: { a: 0, k: [150, 150] },
                p: { a: 0, k: [0, 0] }
              },
              {
                ty: "st",
                c: { a: 0, k: [0, 0.533, 1, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 3 },
                lc: 1,
                lj: 1
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      }
    ]
  };

  useEffect(() => {
    const startTime = performance.now();

    // Dynamically import lottie-web
    import('lottie-web').then((module) => {
      const lottieLib = module.default;
      setLottie(lottieLib);

      if (!containerRef.current) return;

      const animation = lottieLib.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: sampleAnimation
      });

      animationRef.current = animation;

      // Performance monitoring
      const loadTime = performance.now() - startTime;
      const fileSize = (JSON.stringify(sampleAnimation).length / 1024).toFixed(2);

      let frameCount = 0;
      let lastTime = performance.now();

      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime >= lastTime + 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          const metrics = { loadTime, fps, fileSize };

          if (performance.memory) {
            metrics.memoryUsage = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
          }

          setPerformanceMetrics(metrics);
          frameCount = 0;
          lastTime = currentTime;
        }

        requestAnimationFrame(measureFPS);
      };

      animation.addEventListener('DOMLoaded', () => {
        requestAnimationFrame(measureFPS);
      });
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="lottie-background-container">
      <div ref={containerRef} className="lottie-canvas" />

      {/* Performance overlay for testing */}
      {process.env.NODE_ENV === 'development' && (
        <div className="performance-overlay">
          <h3>Lottie Background Performance</h3>
          <p>Load Time: {performanceMetrics.loadTime.toFixed(0)}ms</p>
          <p>Memory: {performanceMetrics.memoryUsage}MB</p>
          <p>FPS: {performanceMetrics.fps}</p>
          <p>File Size: {performanceMetrics.fileSize}KB</p>
        </div>
      )}

      <style jsx>{`
        .lottie-background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .lottie-canvas {
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
          .lottie-canvas {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
