import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isLoading && !isAnimating) {
      setIsAnimating(true);

      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsAnimating(false);
              if (onComplete) onComplete();
            }, 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, isAnimating, onComplete]);

  if (!isLoading && !isAnimating) return null;

  const digits = progress.toFixed(0).padStart(3, '0').split('');

  return (
    <div className={`main-loading ${isAnimating ? 'is-active' : ''}`}>
      <div className="main-loading__text">
        <div className="main-loading__number">
          <span className="main-loading__digit">{digits[0]}</span>
          <span className="main-loading__digit">{digits[1]}</span>
          <span className="main-loading__digit">{digits[2]}</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
