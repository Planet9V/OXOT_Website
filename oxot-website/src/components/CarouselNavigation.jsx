import React from 'react';
import './CarouselNavigation.css';

const CarouselNavigation = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  return (
    <div className="carousel-navigation">
      {/* Circular Navigation Buttons */}
      <div className="carousel-navigation__controls">
        <button
          className="carousel-nav-button carousel-nav-button--prev"
          onClick={onPrev}
          aria-label="Previous slide"
          disabled={currentSlide === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="carousel-nav-button carousel-nav-button--next"
          onClick={onNext}
          aria-label="Next slide"
          disabled={currentSlide === totalSlides - 1}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Numeric Pagination */}
      <div className="carousel-pagination">
        <span className="carousel-pagination__current">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="carousel-pagination__separator"> / </span>
        <span className="carousel-pagination__total">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default CarouselNavigation;
