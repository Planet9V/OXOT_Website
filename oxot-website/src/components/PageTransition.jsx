import React, { useEffect, useState } from 'react';
import './PageTransition.css';

const PageTransition = ({ isTransitioning, pageName, onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (isTransitioning) {
      setIsAnimating(true);
      setCurrentPage(pageName);

      // Animation timing matches NexBank: 1.6s in + 0.1s delay + 1.6s out
      const timer = setTimeout(() => {
        setIsAnimating(false);
        if (onComplete) onComplete();
      }, 3300);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, pageName, onComplete]);

  if (!isAnimating) return null;

  // Split page name into words for animation
  const words = currentPage.split(' ').map((word, index) => (
    <span
      key={index}
      className="ajax-loading__word"
      style={{
        animationDelay: `${0.7 + index * 0.1}s`,
        transitionDelay: `${index * 0.1}s`
      }}
    >
      {word}
    </span>
  ));

  return (
    <div className={`ajax-loading ${isAnimating ? 'is-active' : ''}`}>
      <div className="ajax-loading__background"></div>
      <div className="ajax-loading__text">
        {words}
      </div>
    </div>
  );
};

export default PageTransition;
