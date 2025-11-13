/**
 * MenuSlideshow Component
 * File: /src/components/MenuSlideshow.jsx
 * Created: 2025-11-13
 * Version: 1.0.0
 * Purpose: Container and orchestrator for 3-slide menu system
 * Status: ACTIVE
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { TitleSlide, ContentSlide, ServicesSlide } from './MenuSlide';
import './MenuSlideshow.css';

/**
 * MenuSlideshow - Orchestrates the 3-slide menu experience
 * Handles auto-advance, manual navigation, and smooth transitions
 */
const MenuSlideshow = ({ data, onClose, isOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoAdvanceTimerRef = useRef(null);

  /**
   * Clear any active auto-advance timer
   */
  const clearAutoAdvance = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
  }, []);

  /**
   * Start auto-advance timer for current slide
   */
  const startAutoAdvance = useCallback(() => {
    clearAutoAdvance();

    // Slide 1 → 2 (2s delay)
    if (currentSlide === 1) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        goToSlide(2);
      }, 2000);
    }
    // Slide 2 → 3 (3s delay)
    else if (currentSlide === 2) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        goToSlide(3);
      }, 3000);
    }
    // Slide 3: No auto-advance (final slide)
  }, [currentSlide]);

  /**
   * Navigate to specific slide with transition
   */
  const goToSlide = useCallback((slideNumber) => {
    if (slideNumber < 1 || slideNumber > 3 || slideNumber === currentSlide) {
      return;
    }

    setIsTransitioning(true);
    clearAutoAdvance();

    // Fade-out current slide (400ms)
    setTimeout(() => {
      setCurrentSlide(slideNumber);
      setIsTransitioning(false);

      // Fade-in new slide happens via CSS
      // Start auto-advance for new slide if applicable
      if (slideNumber < 3) {
        startAutoAdvance();
      }
    }, 400);
  }, [currentSlide, clearAutoAdvance, startAutoAdvance]);

  /**
   * Navigate to next slide
   */
  const nextSlide = useCallback(() => {
    if (currentSlide < 3) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  /**
   * Navigate to previous slide
   */
  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
      default:
        break;
    }
  }, [isOpen, nextSlide, prevSlide, onClose]);

  /**
   * Start auto-advance on mount and when slide changes
   */
  useEffect(() => {
    if (isOpen && currentSlide < 3) {
      startAutoAdvance();
    }

    return () => clearAutoAdvance();
  }, [isOpen, currentSlide, startAutoAdvance, clearAutoAdvance]);

  /**
   * Add keyboard event listener
   */
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  /**
   * Reset to slide 1 when menu closes
   */
  useEffect(() => {
    if (!isOpen) {
      setCurrentSlide(1);
      clearAutoAdvance();
    }
  }, [isOpen, clearAutoAdvance]);

  if (!data) return null;

  return (
    <div className="menu-slideshow" role="region" aria-label="Services menu">
      {/* Slide 1: Title */}
      <TitleSlide
        title={data.title}
        active={currentSlide === 1}
      />

      {/* Slide 2: Description */}
      <ContentSlide
        description={data.description}
        active={currentSlide === 2}
      />

      {/* Slide 3: Services */}
      <ServicesSlide
        services={data.services}
        active={currentSlide === 3}
      />

      {/* Navigation Controls */}
      <div className="menu-slideshow__controls">
        {/* Up/Previous Button */}
        <button
          className="circ-button circ-button--up"
          onClick={prevSlide}
          disabled={currentSlide === 1}
          aria-label="Previous slide"
        >
          <div className="circ-button__border"></div>
          <div className="circ-button__icon">↑</div>
        </button>

        {/* Pagination */}
        <div className="menu-pagination">
          <span className="menu-pagination__text">
            {currentSlide} / 3
          </span>
          <div className="menu-pagination__dots">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`menu-pagination__dot ${
                  num === currentSlide ? 'menu-pagination__dot--active' : ''
                }`}
                onClick={() => goToSlide(num)}
                aria-label={`Go to slide ${num}`}
              />
            ))}
          </div>
        </div>

        {/* Down/Next Button */}
        <button
          className="circ-button circ-button--down"
          onClick={nextSlide}
          disabled={currentSlide === 3}
          aria-label="Next slide"
        >
          <div className="circ-button__border"></div>
          <div className="circ-button__icon">↓</div>
        </button>
      </div>

      {/* Close Button */}
      <button
        className="menu-slideshow__close"
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>
    </div>
  );
};

MenuSlideshow.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundType: PropTypes.oneOf(['animated', 'geometric']),
    services: PropTypes.array.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default MenuSlideshow;
