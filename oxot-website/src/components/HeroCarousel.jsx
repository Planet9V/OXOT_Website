import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ThreeBackground from './ThreeBackground';
import CarouselNavigation from './CarouselNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import VerticalText from './VerticalText';
import MenuOverlay from './MenuOverlay';
import menuData from '../data/menuData';
import './HeroCarousel.css';

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('solutions');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenuSection, setCurrentMenuSection] = useState(null);
  const carouselRef = useRef(null);
  const slidesRef = useRef([]);
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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Open 3-slide menu overlay with NexBank-style sequence
    setCurrentMenuSection(tabId);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setCurrentMenuSection(null);
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
      {/* Three.js Geometric Background */}
      <ThreeBackground />

      {/* Slides */}
      <div className="hero-carousel__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'is-active' : ''}`}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            {/* Removed video/image backgrounds - NexBank uses solid colors only */}

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

      {/* Carousel Navigation with Circular Buttons + Pagination */}
      <CarouselNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
      />

      {/* Bottom Tab Navigation */}
      <BottomTabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Vertical Text - Request Consultation */}
      <VerticalText text="Request Consultation" />

      {/* 3-Slide Menu Overlay - NexBank Style */}
      {isMenuOpen && currentMenuSection && menuData[currentMenuSection] && (
        <MenuOverlay
          sectionId={currentMenuSection}
          isOpen={isMenuOpen}
          onClose={handleMenuClose}
        />
      )}
    </div>
  );
};

export default HeroCarousel;
