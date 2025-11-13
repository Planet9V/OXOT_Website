import { useState } from 'react';
import VideoBackground from './VideoBackground';
import ThreeJSBackground from './ThreeJSBackground';
import LottieBackground from './LottieBackground';

/**
 * Comparison component to test all three background approaches side-by-side
 */
export default function BackgroundComparison() {
  const [activeBackground, setActiveBackground] = useState('video');

  const backgrounds = {
    video: {
      name: 'Video Background',
      component: VideoBackground,
      description: 'HTML5 video with autoplay'
    },
    threejs: {
      name: 'Three.js Background',
      component: ThreeJSBackground,
      description: 'WebGL animated geometric shapes'
    },
    lottie: {
      name: 'Lottie Background',
      component: LottieBackground,
      description: 'Vector-based JSON animation'
    }
  };

  const ActiveComponent = backgrounds[activeBackground].component;

  return (
    <div className="background-comparison">
      <ActiveComponent />

      <div className="controls">
        <h2>Background Comparison Tool</h2>
        <p>Switch between different background implementations to compare performance</p>

        <div className="button-group">
          {Object.entries(backgrounds).map(([key, bg]) => (
            <button
              key={key}
              className={activeBackground === key ? 'active' : ''}
              onClick={() => setActiveBackground(key)}
            >
              {bg.name}
            </button>
          ))}
        </div>

        <div className="info">
          <h3>{backgrounds[activeBackground].name}</h3>
          <p>{backgrounds[activeBackground].description}</p>
        </div>
      </div>

      <style jsx>{`
        .background-comparison {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .controls {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.9);
          padding: 20px;
          border-radius: 12px;
          min-width: 400px;
          z-index: 1000;
        }

        .controls h2 {
          margin: 0 0 10px 0;
          color: #fff;
          font-size: 18px;
        }

        .controls p {
          margin: 0 0 15px 0;
          color: #999;
          font-size: 12px;
        }

        .button-group {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        .button-group button {
          flex: 1;
          padding: 12px;
          background: #333;
          color: #fff;
          border: 2px solid #555;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }

        .button-group button:hover {
          background: #444;
          border-color: #00ff88;
        }

        .button-group button.active {
          background: #00ff88;
          border-color: #00ff88;
          color: #000;
        }

        .info {
          background: #222;
          padding: 15px;
          border-radius: 6px;
        }

        .info h3 {
          margin: 0 0 5px 0;
          color: #00ff88;
          font-size: 16px;
        }

        .info p {
          margin: 0;
          color: #ccc;
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .controls {
            min-width: auto;
            width: calc(100% - 40px);
          }

          .button-group {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
