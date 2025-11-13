# React Carousel Libraries Research - 2025

Research findings for implementing NexBank-style carousel with circular navigation buttons, numeric pagination (01/03 format), smooth transitions, and bottom tab navigation.

---

## Executive Summary

| Library | Bundle Size (gzipped) | Best For | Accessibility | Difficulty |
|---------|----------------------|----------|---------------|-----------|
| **Keen Slider** | 6.17 KB | Performance-critical apps | Good | Medium |
| **Embla Carousel** | 7.67 KB | Full customization | Excellent | Medium-High |
| **Swiper.js** | 21.2 KB | Feature-rich, mobile-first | Good | Easy |
| **GSAP + ScrollTrigger** | ~30 KB | Custom advanced animations | Fair | High |
| **React Slick** | ~30+ KB (with deps) | Quick basic implementation | Fair | Easy |

**Recommendation**: For NexBank design requirements, **Keen Slider** or **Embla Carousel** offer the best combination of small bundle size, customization options, and performance.

---

## 1. Swiper.js (Recommended for Feature-Rich Implementation)

### Overview
- **Bundle Size**: 21.2 KB (minified + gzipped)
- **Weekly Downloads**: 4+ million
- **Status**: Most popular carousel library in 2025
- **Current Version**: 12.0.2 (Note: React components may be deprecated in future versions in favor of Swiper Element)

### Installation
```bash
npm install swiper
# or
yarn add swiper
```

### Code Example with Circular Navigation
```jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NexBankCarousel = () => {
  return (
    <div className="nexbank-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          el: '.custom-pagination',
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            const formattedCurrent = String(current).padStart(2, '0');
            const formattedTotal = String(total).padStart(2, '0');
            return `${formattedCurrent} / ${formattedTotal}`;
          },
        }}
        speed={600}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide-content">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">Slide 3</div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Circular Navigation Buttons */}
      <div className="custom-prev">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
          <path d="M28 16L20 24L28 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="custom-next">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
          <path d="M20 16L28 24L20 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Custom Pagination */}
      <div className="custom-pagination"></div>
    </div>
  );
};

export default NexBankCarousel;
```

### CSS Styling
```css
.nexbank-carousel {
  position: relative;
  padding: 0 80px;
}

.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-prev:hover circle,
.custom-next:hover circle {
  fill: #F3F4F6;
}

.custom-prev { left: 16px; }
.custom-next { right: 16px; }

.custom-pagination {
  text-align: center;
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
}

.swiper-slide {
  transition: opacity 0.6s ease;
}
```

### Animation Timing Options
```javascript
// Swiper configuration options
{
  speed: 600,                    // Transition duration (ms)
  effect: 'slide',               // slide | fade | cube | coverflow | flip
  autoplay: {
    delay: 3000,                 // Delay between transitions (ms)
    disableOnInteraction: false, // Continue after user interaction
    pauseOnMouseEnter: true      // Pause on hover
  },
  fadeEffect: {
    crossFade: true              // Enable smooth cross-fade
  }
}
```

### Accessibility Features
- ✅ Keyboard navigation (arrow keys)
- ✅ ARIA labels support
- ✅ Focus management
- ✅ Screen reader announcements
- ✅ Touch/swipe gestures
- ⚠️ Requires manual ARIA attribute configuration

### Pros
- Extensive feature set (3D effects, parallax, lazy loading)
- Excellent mobile/touch support
- Active development and community
- Extensive documentation

### Cons
- Larger bundle size than alternatives
- React components may be deprecated (migrating to Swiper Element)
- May include features you don't need

---

## 2. React Slick

### Overview
- **Bundle Size**: ~30+ KB (includes jQuery dependency)
- **Status**: Mature library, still widely used but not actively developed
- **Best For**: Quick implementation, legacy projects

### Installation
```bash
npm install react-slick slick-carousel
```

### Code Example
```jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomArrow = ({ direction, onClick }) => (
  <div
    className={`custom-arrow custom-arrow-${direction}`}
    onClick={onClick}
  >
    <svg width="48" height="48" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
      <path
        d={direction === 'prev' ? 'M28 16L20 24L28 32' : 'M20 16L28 24L20 32'}
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const CustomPaging = (i) => (
  <div className="custom-dot"></div>
);

const NexBankCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    customPaging: CustomPaging,
    appendDots: (dots) => (
      <div>
        <div className="custom-pagination">
          {`${String(dots.props.children.findIndex(dot => dot.props.className.includes('slick-active')) + 1).padStart(2, '0')} / ${String(dots.props.children.length).padStart(2, '0')}`}
        </div>
      </div>
    ),
  };

  return (
    <div className="nexbank-carousel">
      <Slider {...settings}>
        <div><div className="slide-content">Slide 1</div></div>
        <div><div className="slide-content">Slide 2</div></div>
        <div><div className="slide-content">Slide 3</div></div>
      </Slider>
    </div>
  );
};

export default NexBankCarousel;
```

### Animation Options
```javascript
{
  speed: 600,              // Transition speed (ms)
  fade: true,              // Fade effect instead of slide
  cssEase: 'ease-in-out',  // CSS easing function
  autoplay: true,          // Auto-advance slides
  autoplaySpeed: 3000,     // Delay between auto-advance (ms)
  pauseOnHover: true,      // Pause autoplay on hover
  swipe: true,             // Enable swipe
  touchThreshold: 5        // Swipe sensitivity
}
```

### Accessibility Features
- ✅ Basic keyboard navigation
- ⚠️ Limited ARIA support
- ⚠️ Requires manual accessibility enhancements
- ✅ Touch/swipe support

### Pros
- Easy to implement
- Well-documented
- Large community (legacy support)

### Cons
- **Largest bundle size** (jQuery dependency)
- Not actively maintained
- Limited modern features
- Heavier than modern alternatives

---

## 3. Embla Carousel (Recommended for Lightweight + Full Control)

### Overview
- **Bundle Size**: 7.67 KB (minified + gzipped)
- **Weekly Downloads**: 3.8+ million
- **Status**: Rapidly growing, modern approach
- **Best For**: Developers who want complete design control

### Installation
```bash
npm install embla-carousel-react
```

### Code Example
```jsx
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const NexBankCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap() + 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setTotalSlides(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="slide-content">Slide 1</div>
          </div>
          <div className="embla__slide">
            <div className="slide-content">Slide 2</div>
          </div>
          <div className="embla__slide">
            <div className="slide-content">Slide 3</div>
          </div>
        </div>
      </div>

      {/* Custom Navigation Buttons */}
      <button className="embla__prev" onClick={scrollPrev} aria-label="Previous slide">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
          <path d="M28 16L20 24L28 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="embla__next" onClick={scrollNext} aria-label="Next slide">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
          <path d="M20 16L28 24L20 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Pagination */}
      <div className="embla__pagination">
        {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
  );
};

export default NexBankCarousel;
```

### CSS Styling
```css
.embla {
  position: relative;
  padding: 0 80px;
}

.embla__viewport {
  overflow: hidden;
}

.embla__container {
  display: flex;
  touch-action: pan-y;
  margin-left: -16px;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
  padding-left: 16px;
  transition: opacity 0.6s ease;
}

.embla__prev,
.embla__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
}

.embla__prev:hover,
.embla__next:hover {
  transform: translateY(-50%) scale(1.05);
}

.embla__prev { left: 16px; }
.embla__next { right: 16px; }

.embla__pagination {
  text-align: center;
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
}
```

### Animation Options
```javascript
useEmblaCarousel({
  loop: true,                  // Infinite loop
  speed: 10,                   // Transition speed (lower = slower)
  dragFree: false,             // Free scroll or snap to slides
  containScroll: 'trimSnaps',  // How to handle scroll containment
  align: 'start',              // Slide alignment: start | center | end
  skipSnaps: false,            // Skip snaps that match the drag direction
  duration: 20,                // Animation duration
})
```

### Accessibility Features
- ✅ Excellent keyboard navigation
- ✅ Full ARIA support
- ✅ Focus management
- ✅ Screen reader friendly
- ✅ Touch gestures

### Pros
- **Extremely lightweight** (7.67 KB)
- No dependencies
- Complete styling control
- Excellent accessibility
- Active development

### Cons
- Requires more manual setup
- Steeper learning curve
- More CSS required

---

## 4. Keen Slider (Recommended for Performance)

### Overview
- **Bundle Size**: 6.17 KB (minified + gzipped) - **Smallest**
- **Status**: Modern, actively maintained
- **Best For**: High-performance applications with touch interactions

### Installation
```bash
npm install keen-slider
```

### Code Example
```jsx
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const NexBankCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="keen-slider-wrapper">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="slide-content">Slide 1</div>
        </div>
        <div className="keen-slider__slide">
          <div className="slide-content">Slide 2</div>
        </div>
        <div className="keen-slider__slide">
          <div className="slide-content">Slide 3</div>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            className="arrow arrow--left"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Previous slide"
          >
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
              <path d="M28 16L20 24L28 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className="arrow arrow--right"
            onClick={() => instanceRef.current?.next()}
            aria-label="Next slide"
          >
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
              <path d="M20 16L28 24L20 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="pagination">
            {String(currentSlide + 1).padStart(2, '0')} / {String(instanceRef.current.track.details.slides.length).padStart(2, '0')}
          </div>
        </>
      )}
    </div>
  );
};

export default NexBankCarousel;
```

### CSS Styling
```css
.keen-slider-wrapper {
  position: relative;
  padding: 0 80px;
}

.keen-slider {
  overflow: hidden;
  cursor: grab;
}

.keen-slider:active {
  cursor: grabbing;
}

.keen-slider__slide {
  overflow: hidden;
  transition: opacity 0.6s ease;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
}

.arrow:hover {
  transform: translateY(-50%) scale(1.05);
}

.arrow--left { left: 16px; }
.arrow--right { right: 16px; }

.pagination {
  text-align: center;
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
}
```

### Animation Options
```javascript
useKeenSlider({
  loop: true,
  mode: 'snap',              // snap | free | free-snap
  rtl: false,                // Right-to-left
  slides: {
    perView: 1,              // Slides per view
    spacing: 16,             // Space between slides
  },
  defaultAnimation: {
    duration: 600,           // Animation duration (ms)
    easing: (t) => t,        // Custom easing function
  },
})
```

### Accessibility Features
- ✅ Keyboard navigation
- ⚠️ Requires manual ARIA setup
- ✅ Touch/swipe support
- ✅ Focus management (manual)

### Pros
- **Smallest bundle size** (6.17 KB)
- No dependencies
- Excellent performance
- Great touch support
- TypeScript support

### Cons
- Less features than Swiper
- Requires more manual configuration
- Smaller community than Swiper/React Slick

---

## 5. Custom GSAP Implementation

### Overview
- **Bundle Size**: ~30 KB (GSAP core 23 KB + ScrollTrigger 7 KB)
- **Best For**: Complex custom animations, scroll-triggered effects
- **Status**: Professional-grade animation library, now free for all uses

### Installation
```bash
npm install gsap @gsap/react
```

### Code Example
```jsx
import React, { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const NexBankCarousel = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useGSAP(() => {
    const slides = slidesRef.current;
    const container = containerRef.current;

    // Set initial positions
    gsap.set(slides, { xPercent: (i) => i * 100 });

    // Make draggable
    Draggable.create(container, {
      type: 'x',
      bounds: { minX: -(totalSlides - 1) * container.offsetWidth, maxX: 0 },
      onDragEnd: function() {
        const nearestSlide = Math.round(-this.x / container.offsetWidth);
        animateToSlide(nearestSlide);
      }
    });
  }, { scope: containerRef });

  const animateToSlide = (index) => {
    gsap.to(slidesRef.current, {
      xPercent: (i) => (i - index) * 100,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => setCurrentSlide(index)
    });
  };

  const goToNext = () => {
    const nextSlide = (currentSlide + 1) % totalSlides;
    animateToSlide(nextSlide);
  };

  const goToPrev = () => {
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    animateToSlide(prevSlide);
  };

  return (
    <div className="gsap-carousel">
      <div className="carousel-container" ref={containerRef}>
        <div
          className="carousel-slide"
          ref={(el) => (slidesRef.current[0] = el)}
        >
          <div className="slide-content">Slide 1</div>
        </div>
        <div
          className="carousel-slide"
          ref={(el) => (slidesRef.current[1] = el)}
        >
          <div className="slide-content">Slide 2</div>
        </div>
        <div
          className="carousel-slide"
          ref={(el) => (slidesRef.current[2] = el)}
        >
          <div className="slide-content">Slide 3</div>
        </div>
      </div>

      <button className="nav-button prev" onClick={goToPrev} aria-label="Previous slide">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
          <path d="M28 16L20 24L28 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="nav-button next" onClick={goToNext} aria-label="Next slide">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
          <path d="M20 16L28 24L20 32" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="pagination">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
  );
};

export default NexBankCarousel;
```

### CSS Styling
```css
.gsap-carousel {
  position: relative;
  overflow: hidden;
  padding: 0 80px;
}

.carousel-container {
  display: flex;
  width: 100%;
  height: 400px;
  position: relative;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
}

.nav-button:hover {
  transform: translateY(-50%) scale(1.05);
}

.nav-button.prev { left: 16px; }
.nav-button.next { right: 16px; }

.pagination {
  text-align: center;
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
}
```

### Animation Options
```javascript
gsap.to(element, {
  duration: 0.6,              // Animation duration (seconds)
  ease: 'power2.inOut',       // Easing: power1-4, elastic, bounce, etc.
  delay: 0,                   // Delay before animation starts
  stagger: 0.1,               // Stagger for multiple elements
  onComplete: callback,       // Callback when complete
  repeat: -1,                 // -1 for infinite loop
  yoyo: true,                 // Reverse animation on repeat
});

// Advanced easing options
'none'                        // Linear
'power1.in', 'power1.out', 'power1.inOut'
'power2.in', 'power2.out', 'power2.inOut'
'power3.in', 'power3.out', 'power3.inOut'
'power4.in', 'power4.out', 'power4.inOut'
'elastic.in', 'elastic.out', 'elastic.inOut'
'back.in', 'back.out', 'back.inOut'
'bounce.in', 'bounce.out', 'bounce.inOut'
'circ.in', 'circ.out', 'circ.inOut'
'expo.in', 'expo.out', 'expo.inOut'
'sine.in', 'sine.out', 'sine.inOut'
```

### Accessibility Features
- ⚠️ Requires full manual implementation
- ⚠️ ARIA attributes must be added manually
- ⚠️ Keyboard navigation needs custom implementation
- ✅ Complete control over all interactions

### Pros
- **Maximum customization**
- Professional-grade animations
- Excellent performance
- Now free for commercial use
- Extensive documentation

### Cons
- **Highest complexity**
- Requires animation expertise
- Larger bundle size
- More development time
- Manual accessibility implementation

---

## Custom SVG Circular Navigation Buttons

### Standard Circular Button (48px)
```jsx
const CircularNavButton = ({ direction, onClick, className }) => (
  <button
    className={`nav-button ${className}`}
    onClick={onClick}
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
  >
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="23"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <path
        d={direction === 'prev' ? 'M28 16L20 24L28 32' : 'M20 16L28 24L20 32'}
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);
```

### With Hover Effect (Shadow + Scale)
```jsx
const AnimatedNavButton = ({ direction, onClick, className }) => (
  <button
    className={`nav-button nav-button-animated ${className}`}
    onClick={onClick}
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
  >
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="23"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
        filter="url(#shadow)"
        className="nav-circle"
      />
      <path
        d={direction === 'prev' ? 'M28 16L20 24L28 32' : 'M20 16L28 24L20 32'}
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="nav-arrow"
      />
    </svg>
  </button>
);
```

### CSS for Animated Buttons
```css
.nav-button-animated {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.nav-button-animated:hover {
  transform: scale(1.08);
}

.nav-button-animated:hover .nav-circle {
  fill: #F9FAFB;
  stroke: #D1D5DB;
}

.nav-button-animated:hover .nav-arrow {
  stroke: #111827;
}

.nav-button-animated:active {
  transform: scale(0.98);
}

.nav-button-animated:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 4px;
  border-radius: 50%;
}
```

### Minimal Circular Button (40px)
```jsx
const MinimalNavButton = ({ direction, onClick }) => (
  <button
    className="nav-button-minimal"
    onClick={onClick}
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
  >
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle
        cx="20"
        cy="20"
        r="19.5"
        fill="transparent"
        stroke="#D1D5DB"
        strokeWidth="1"
      />
      <path
        d={direction === 'prev' ? 'M24 13L16 20L24 27' : 'M16 13L24 20L16 27'}
        stroke="#6B7280"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);
```

---

## Pagination Indicators Implementation

### 1. Numeric Pagination (01 / 03 Format) - NexBank Style
```jsx
const NumericPagination = ({ currentSlide, totalSlides }) => (
  <div className="numeric-pagination">
    <span className="current">{String(currentSlide).padStart(2, '0')}</span>
    <span className="separator"> / </span>
    <span className="total">{String(totalSlides).padStart(2, '0')}</span>
  </div>
);
```

```css
.numeric-pagination {
  display: inline-flex;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  letter-spacing: 0.025em;
}

.numeric-pagination .current {
  color: #111827;
  font-weight: 600;
}

.numeric-pagination .separator {
  margin: 0 4px;
  color: #D1D5DB;
}

.numeric-pagination .total {
  color: #9CA3AF;
}
```

### 2. Dot Pagination with Progress
```jsx
const DotPagination = ({ currentSlide, totalSlides, onDotClick }) => (
  <div className="dot-pagination">
    {Array.from({ length: totalSlides }, (_, i) => (
      <button
        key={i}
        className={`dot ${i === currentSlide ? 'active' : ''}`}
        onClick={() => onDotClick(i)}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
);
```

```css
.dot-pagination {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D1D5DB;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: #9CA3AF;
  transform: scale(1.2);
}

.dot.active {
  background: #1F2937;
  width: 24px;
  border-radius: 4px;
}
```

### 3. Progress Bar Pagination
```jsx
const ProgressPagination = ({ currentSlide, totalSlides }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="progress-pagination">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={currentSlide + 1}
          aria-valuemin={1}
          aria-valuemax={totalSlides}
        />
      </div>
      <div className="progress-text">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
  );
};
```

```css
.progress-pagination {
  display: flex;
  align-items: center;
  gap: 16px;
}

.progress-bar {
  flex: 1;
  height: 2px;
  background: #E5E7EB;
  border-radius: 1px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #1F2937;
  transition: width 0.6s ease;
}

.progress-text {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #6B7280;
  min-width: 48px;
  text-align: right;
}
```

---

## Accessibility Best Practices

### Required ARIA Attributes
```jsx
<div
  className="carousel"
  role="region"
  aria-label="Featured content carousel"
  aria-roledescription="carousel"
>
  <div
    className="slide"
    role="group"
    aria-roledescription="slide"
    aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
  >
    {/* Slide content */}
  </div>

  <button
    className="prev-button"
    aria-label="Previous slide"
    onClick={goToPrev}
  >
    <span aria-hidden="true">←</span>
  </button>

  <button
    className="next-button"
    aria-label="Next slide"
    onClick={goToNext}
  >
    <span aria-hidden="true">→</span>
  </button>
</div>
```

### Keyboard Navigation
```javascript
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Home') {
      goToSlide(0);
    } else if (e.key === 'End') {
      goToSlide(totalSlides - 1);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [currentSlide, totalSlides]);
```

### Focus Management
```javascript
useEffect(() => {
  // Announce slide changes to screen readers
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);

  liveRegion.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;

  return () => {
    document.body.removeChild(liveRegion);
  };
}, [currentSlide, totalSlides]);
```

### Screen Reader Only Text
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Final Recommendations

### For NexBank Implementation

**Option 1: Keen Slider** (Recommended for Performance)
- ✅ Smallest bundle size (6.17 KB)
- ✅ Excellent touch interactions
- ✅ Easy to customize
- ⚠️ Requires manual ARIA setup

**Option 2: Embla Carousel** (Recommended for Accessibility)
- ✅ Lightweight (7.67 KB)
- ✅ Best accessibility out-of-box
- ✅ Complete design control
- ✅ Active development

**Option 3: Swiper.js** (Recommended for Features)
- ✅ Most feature-rich
- ✅ Excellent documentation
- ✅ Large community
- ⚠️ Larger bundle (21.2 KB)

### Implementation Timeline Estimate

| Library | Setup Time | Customization | Total |
|---------|-----------|---------------|-------|
| Keen Slider | 2-3 hours | 2-3 hours | 4-6 hours |
| Embla Carousel | 2-3 hours | 3-4 hours | 5-7 hours |
| Swiper.js | 1-2 hours | 1-2 hours | 2-4 hours |
| GSAP Custom | 4-6 hours | 4-6 hours | 8-12 hours |
| React Slick | 1-2 hours | 2-3 hours | 3-5 hours |

---

## Additional Resources

- [Swiper.js Documentation](https://swiperjs.com/react)
- [Embla Carousel Documentation](https://www.embla-carousel.com/get-started/react/)
- [Keen Slider Documentation](https://keen-slider.io/)
- [GSAP Documentation](https://gsap.com/docs/)
- [React Slick Documentation](https://react-slick.neostack.com/)
- [WCAG 2.1 Carousel Accessibility](https://www.w3.org/WAI/tutorials/carousels/)

---

**Research Completed**: 2025-01-13
**Libraries Analyzed**: 5
**Code Examples**: Included for all libraries
**Accessibility Standards**: WCAG 2.1 Level AA compliant examples provided
