import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroCarousel.css';

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const slidesRef = useRef([]);
  const videoRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    // Auto-play carousel
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Animate slide transition
    if (slidesRef.current[currentSlide]) {
      const currentSlideEl = slidesRef.current[currentSlide];
      const title = currentSlideEl.querySelector('.hero-slide__title');
      const category = currentSlideEl.querySelector('.hero-slide__category');
      const cta = currentSlideEl.querySelector('.hero-slide__cta');

      // Fade in animation with stagger
      gsap.fromTo(
        [category, title, cta],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, [currentSlide]);

  return (
    <div className="hero-carousel" ref={carouselRef}>
      {/* Animated Background */}
      <div className="hero-carousel__background">
        <div className="hero-carousel__gradient"></div>
        <div className="hero-carousel__particles"></div>
      </div>

      {/* Slides */}
      <div className="hero-carousel__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'is-active' : ''}`}
            ref={(el) => (slidesRef.current[index] = el)}
            style={{
              backgroundImage: slide.backgroundVideo
                ? 'none'
                : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.backgroundImage})`,
            }}
          >
            {slide.backgroundVideo && (
              <video
                ref={videoRef}
                className="hero-slide__video"
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={(e) => {
                  e.target.play().catch(err => console.log('Video play prevented:', err));
                }}
              >
                <source src={slide.backgroundVideo} type="video/mp4" />
              </video>
            )}

            <div className="hero-slide__content">
              <div className="hero-slide__category">{slide.category}</div>
              <h1 className="hero-slide__title">{slide.title}</h1>
              {slide.description && (
                <p className="hero-slide__description">{slide.description}</p>
              )}
              <button className="hero-slide__cta circular-button">
                <span>{slide.cta}</span>
              </button>
            </div>

            <div className="hero-slide__indicator">
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="hero-carousel__controls">
        <button
          className="hero-carousel__arrow hero-carousel__arrow--prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <button
          className="hero-carousel__arrow hero-carousel__arrow--next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="hero-carousel__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel__dot ${index === currentSlide ? 'is-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
