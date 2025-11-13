# NexBank Menu System - Implementation Specification

**File:** /home/jim/OXOT_Website-1/oxot-website/docs/nexbank-menu-implementation-spec.md
**Created:** 2025-11-13
**Purpose:** Exact implementation specifications for developers
**Status:** Ready for development

---

## Exact Measurements & Specifications

### Typography Scale (Desktop 1920px)

```css
/* Category Titles (Slide 1) */
h1.category-title {
  font-size: 56px;
  font-weight: 300;
  line-height: 1.2; /* 67.2px */
  letter-spacing: -0.5px;
  color: #ffffff; /* dark background */
  margin-bottom: 32px;
}

/* Service Titles (Slide 2) */
h2.service-title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3; /* 36.4px */
  letter-spacing: 0;
  color: #ffffff;
  margin-bottom: 16px;
}

/* Item Labels (Slide 3) */
h3.item-label {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4; /* 28px */
  letter-spacing: 0;
  color: #2a2a2a; /* light background */
  margin-bottom: 8px;
}

/* Service Numbers */
span.service-number {
  font-size: 16px;
  font-weight: 400;
  color: #999999; /* dark bg */
  color: #666666; /* light bg */
  margin-right: 12px;
  display: inline-block;
  min-width: 24px;
}

/* Body Text */
p.description {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6; /* 28.8px */
  letter-spacing: 0;
  color: #b8b8b8; /* dark bg */
  color: #5a5a5a; /* light bg */
  max-width: 600px;
}

/* Pagination */
span.pagination {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff; /* dark slides */
  color: #2a2a2a; /* light slide */
}
```

### Color Palette (Exact Hex Values)

```css
:root {
  /* Dark State Colors */
  --bg-dark: #1a1a1a;
  --text-primary-dark: #ffffff;
  --text-secondary-dark: #b8b8b8;
  --number-label-dark: #999999;
  --stripe-overlay-dark: rgba(255, 255, 255, 0.03);

  /* Light State Colors */
  --bg-light: #f8f8f8;
  --text-primary-light: #2a2a2a;
  --text-secondary-light: #5a5a5a;
  --number-label-light: #666666;
  --accent-bronze: #8b7355;

  /* Transition Colors */
  --white-shape: #f8f8f8;
  --overlay-shadow: rgba(0, 0, 0, 0.8);

  /* Interactive States */
  --button-bg-idle: rgba(255, 255, 255, 0.1);
  --button-bg-hover: rgba(255, 255, 255, 0.2);
  --button-border: rgba(255, 255, 255, 0.2);
}
```

### Spacing System (8px Base Grid)

```css
:root {
  /* Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 60px;
  --space-4xl: 80px;

  /* Component-Specific Spacing */
  --menu-padding: 80px;
  --carousel-padding: 60px;
  --item-gap-expanded: 60px;
  --item-gap-compact: 32px;
  --number-margin: 12px;
}
```

### Animation Timings (Exact Durations)

```css
:root {
  /* Menu Animations */
  --menu-open-duration: 800ms;
  --menu-close-duration: 600ms;
  --item-cascade-delay: 50ms;
  --item-cascade-duration: 600ms;

  /* Carousel Animations */
  --slide-transition: 800ms;
  --slide-fade-out: 400ms;
  --slide-fade-in: 600ms;
  --pagination-update: 400ms;

  /* White Shape Animation */
  --shape-duration: 1200ms;
  --shape-delay: 0ms;

  /* Easing Functions */
  --ease-menu: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-carousel: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-shape: cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

### Layout Measurements

```css
/* Menu Overlay */
.nav__inner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 80px;
  z-index: 1000;
}

/* Carousel Container */
.carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  position: relative;
}

/* Circular Navigation Buttons */
.circ-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  right: 40px;
}

.circ-button--top {
  top: 40%;
}

.circ-button--bottom {
  bottom: 40%;
}

/* Pagination Position */
.carousel__pagination {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}

/* Service Item Spacing */
.service-item {
  margin-bottom: 60px; /* Expanded format */
  max-width: 600px;
}

.detail-item {
  margin-bottom: 32px; /* Compact format */
}
```

---

## Complete CSS Implementation

### Base Menu Structure

```css
/* Navigation Container */
.nav {
  position: relative;
  z-index: 1000;
}

/* Hamburger Toggle */
.nav-toggle {
  position: fixed;
  top: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 12px;
}

.nav-toggle__bar {
  width: 24px;
  height: 2px;
  background-color: #2a2a2a;
  transition: transform 300ms ease, opacity 300ms ease;
}

.nav-toggle.is-open .nav-toggle__bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.nav-toggle.is-open .nav-toggle__bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle.is-open .nav-toggle__bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Full-Screen Overlay */
.nav__inner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-dark);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--menu-open-duration) var(--ease-menu),
              visibility 0ms var(--menu-open-duration);
  z-index: 1000;
  overflow-y: auto;
  padding: var(--menu-padding);
}

.nav__inner.is-open {
  opacity: 1;
  visibility: visible;
  transition-delay: 0ms;
}

/* Diagonal Stripe Background */
.nav__inner__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 8px,
    var(--stripe-overlay-dark) 8px,
    var(--stripe-overlay-dark) 10px
  );
  pointer-events: none;
  z-index: -1;
}
```

### Menu Navigation Items

```css
/* Menu List */
.nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}

/* Menu Items with Stagger Animation */
.nav__item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp var(--item-cascade-duration) var(--ease-menu) forwards;
  animation-delay: calc(var(--item-index) * var(--item-cascade-delay));
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav__item:nth-child(1) { --item-index: 0; }
.nav__item:nth-child(2) { --item-index: 1; }
.nav__item:nth-child(3) { --item-index: 2; }
.nav__item:nth-child(4) { --item-index: 3; }
.nav__item:nth-child(5) { --item-index: 4; }
.nav__item:nth-child(6) { --item-index: 5; }

/* Menu Links */
.nav__item__link {
  display: inline-block;
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary-dark);
  text-decoration: none;
  padding: var(--space-md) 0;
  transition: opacity 300ms ease;
}

.nav__item__link:hover {
  opacity: 0.7;
}
```

### Carousel System

```css
/* Carousel Container */
.carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--carousel-padding) 40px;
  min-height: 80vh;
}

/* Carousel Slides */
.carousel__slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--slide-transition) var(--ease-carousel),
              visibility 0ms var(--slide-transition);
  pointer-events: none;
}

.carousel__slide.is-active {
  opacity: 1;
  visibility: visible;
  transition-delay: 0ms;
  pointer-events: all;
}

/* Light Background Slide */
.carousel__slide--light {
  background-color: var(--bg-light);
  color: var(--text-primary-light);
  padding: 40px;
  border-radius: 8px;
}

.carousel__slide--light .carousel__pagination {
  color: var(--text-primary-light);
}

/* Pagination Indicator */
.carousel__pagination {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary-dark);
  transition: color 300ms ease;
}

/* Circular Navigation Buttons */
.circ-button {
  position: absolute;
  right: 40px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--button-bg-idle);
  border: 1px solid var(--button-border);
  cursor: pointer;
  transition: background-color 300ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circ-button:hover {
  background-color: var(--button-bg-hover);
}

.circ-button--top {
  top: 40%;
}

.circ-button--bottom {
  bottom: 40%;
}

.circ-button svg {
  width: 16px;
  height: 16px;
  fill: var(--text-primary-dark);
}
```

### Service Items (Expanded Format)

```css
/* Service Item Container */
.service-item {
  margin-bottom: var(--item-gap-expanded);
  max-width: 600px;
}

/* Service Number Label */
.service-item__number {
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  color: var(--number-label-dark);
  margin-right: var(--number-margin);
  min-width: 24px;
  vertical-align: top;
}

/* Service Title */
.service-item__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary-dark);
  margin-bottom: var(--space-md);
  display: inline-block;
  max-width: calc(100% - 36px); /* Account for number width */
  vertical-align: top;
}

/* Service Description */
.service-item__description {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary-dark);
  padding-left: 36px; /* Align with title (24px number + 12px margin) */
}
```

### Detail Items (Compact Format)

```css
/* Detail Item Container */
.detail-item {
  margin-bottom: var(--item-gap-compact);
  display: flex;
  gap: var(--number-margin);
}

/* Detail Number */
.detail-item__number {
  font-size: 16px;
  font-weight: 400;
  color: var(--number-label-light);
  min-width: 24px;
  flex-shrink: 0;
}

/* Detail Content */
.detail-item__content {
  flex: 1;
}

/* Detail Title */
.detail-item__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary-light);
  margin-bottom: var(--space-sm);
}

/* Detail Description */
.detail-item__description {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary-light);
}

/* Section Title (e.g., "Public Funds") */
.section-title {
  font-size: 36px;
  font-weight: 600;
  color: var(--accent-bronze);
  margin-bottom: var(--space-3xl);
}
```

### White Shape Animation

```css
/* White Transition Shape */
.white-transition-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150%;
  height: 150%;
  background-color: var(--white-shape);
  clip-path: polygon(0% 100%, 0% 60%, 40% 0%, 100% 0%, 100% 100%);
  transform: translateY(100%) scale(0.1);
  opacity: 0;
  transition: transform var(--shape-duration) var(--ease-shape),
              opacity var(--shape-duration) var(--ease-shape);
  pointer-events: none;
  z-index: -1;
  will-change: transform, opacity;
}

/* Trigger animation when transitioning out of slide 2 */
.carousel__slide[data-slide="2"].is-transitioning-out .white-transition-shape {
  transform: translateY(0) scale(1.5);
  opacity: 1;
}

/* Reset after transition completes */
.carousel__slide[data-slide="2"].is-transitioning-out.transition-complete .white-transition-shape {
  transition: none;
  transform: translateY(100%) scale(0.1);
  opacity: 0;
}
```

---

## Complete JavaScript Implementation

```javascript
/**
 * NexBank Menu Carousel
 * Handles multi-slide carousel navigation with white shape animation
 */

class NexBankMenuCarousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.slides = Array.from(this.carousel.querySelectorAll('.carousel__slide'));
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.isAnimating = false;

    // Get navigation elements
    this.prevButton = this.carousel.querySelector('.circ-button--top');
    this.nextButton = this.carousel.querySelector('.circ-button--bottom');
    this.pagination = this.carousel.querySelector('.carousel__pagination');

    this.init();
  }

  init() {
    // Set initial slide
    this.showSlide(0, false);

    // Bind event listeners
    this.bindEvents();

    // Add keyboard navigation
    this.setupKeyboardNav();
  }

  bindEvents() {
    this.prevButton.addEventListener('click', () => this.previousSlide());
    this.nextButton.addEventListener('click', () => this.nextSlide());
  }

  setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (!this.carousel.closest('.nav__inner.is-open')) return;

      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.previousSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.nextSlide();
          break;
      }
    });
  }

  showSlide(index, animate = true) {
    if (this.isAnimating) return;

    const previousIndex = this.currentIndex;

    // Prevent out of bounds
    if (index < 0) index = this.totalSlides - 1;
    if (index >= this.totalSlides) index = 0;

    // Check if transitioning from slide 2 to slide 3 (indices 1 to 2)
    const shouldAnimateShape = animate && previousIndex === 1 && index === 2;

    // Start animation lock
    this.isAnimating = true;

    // Handle white shape animation
    if (shouldAnimateShape) {
      this.animateWhiteShape(previousIndex);
    }

    // Hide current slide
    this.slides.forEach((slide, i) => {
      if (i === previousIndex) {
        slide.classList.remove('is-active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    // Show new slide with delay for white shape animation
    const showDelay = shouldAnimateShape ? 200 : 0;

    setTimeout(() => {
      this.slides[index].classList.add('is-active');
      this.slides[index].setAttribute('aria-hidden', 'false');
      this.slides[index].setAttribute('aria-current', 'true');

      // Update pagination
      this.updatePagination(index);

      // Update current index
      this.currentIndex = index;

      // Release animation lock after transition completes
      const unlockDelay = shouldAnimateShape ? 1200 : 800;
      setTimeout(() => {
        this.isAnimating = false;
      }, unlockDelay);
    }, showDelay);
  }

  animateWhiteShape(slideIndex) {
    const slide = this.slides[slideIndex];
    const whiteShape = slide.querySelector('.white-transition-shape');

    if (!whiteShape) return;

    // Trigger animation
    slide.classList.add('is-transitioning-out');

    // Clean up after animation completes
    setTimeout(() => {
      slide.classList.remove('is-transitioning-out');
      slide.classList.add('transition-complete');

      // Reset after brief delay
      setTimeout(() => {
        slide.classList.remove('transition-complete');
      }, 100);
    }, 1200);
  }

  updatePagination(index) {
    if (this.pagination) {
      this.pagination.textContent = `${index + 1}/${this.totalSlides}`;
      this.pagination.setAttribute('aria-live', 'polite');
    }
  }

  nextSlide() {
    this.showSlide(this.currentIndex + 1);
  }

  previousSlide() {
    this.showSlide(this.currentIndex - 1);
  }

  // Public method to reset carousel
  reset() {
    this.showSlide(0, false);
  }
}

/**
 * Main Menu Controller
 * Handles menu open/close and carousel initialization
 */

class NexBankMenu {
  constructor() {
    this.menuToggle = document.querySelector('.nav-toggle');
    this.menuOverlay = document.querySelector('.nav__inner');
    this.isOpen = false;
    this.carousels = [];

    this.init();
  }

  init() {
    // Bind menu toggle
    this.menuToggle.addEventListener('click', () => this.toggle());

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Initialize carousels
    this.initCarousels();
  }

  initCarousels() {
    const carouselElements = document.querySelectorAll('.carousel');

    carouselElements.forEach(carouselEl => {
      const carousel = new NexBankMenuCarousel(carouselEl);
      this.carousels.push(carousel);
    });
  }

  open() {
    this.menuOverlay.classList.add('is-open');
    this.menuToggle.classList.add('is-open');
    this.menuToggle.setAttribute('aria-expanded', 'true');
    this.isOpen = true;

    // Trap focus
    this.trapFocus();

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.menuOverlay.classList.remove('is-open');
    this.menuToggle.classList.remove('is-open');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.isOpen = false;

    // Return focus to toggle
    this.menuToggle.focus();

    // Restore body scroll
    document.body.style.overflow = '';

    // Reset all carousels
    this.carousels.forEach(carousel => carousel.reset());
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  trapFocus() {
    const focusableElements = this.menuOverlay.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    this.menuOverlay.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });

    // Focus first element when menu opens
    setTimeout(() => firstElement.focus(), 100);
  }
}

// Initialize menu on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new NexBankMenu();
});
```

---

## HTML Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexBank Menu System</title>
  <link rel="stylesheet" href="nexbank-menu.css">
</head>
<body>

  <!-- Main Navigation -->
  <nav class="nav" role="navigation">
    <!-- Hamburger Toggle -->
    <button class="nav-toggle" aria-label="Navigation" aria-expanded="false">
      <span class="nav-toggle__bar"></span>
      <span class="nav-toggle__bar"></span>
      <span class="nav-toggle__bar"></span>
    </button>

    <!-- Full-Screen Overlay Menu -->
    <div class="nav__inner">
      <!-- Diagonal Stripe Background -->
      <div class="nav__inner__background"></div>

      <!-- Primary Menu Items -->
      <ul class="nav__list">
        <!-- Institutional Banking with Submenu Carousel -->
        <li class="nav__item">
          <a href="#" class="nav__item__link">Institutional Banking</a>

          <!-- Submenu Carousel -->
          <div class="carousel" aria-label="Institutional Banking services carousel">
            <!-- Slide 1: Overview -->
            <div class="carousel__slide" data-slide="1" aria-current="true" aria-hidden="false">
              <h1 class="category-title">Financial Institutions</h1>
              <p class="description">
                NexBank is a trusted partner to institutions nationally, helping them to
                accelerate growth, maximize earnings, improve efficiencies and expand
                their market presence. Our professionals hold extensive experience and
                offer unique expertise that allow our clients to strengthen their financial
                position and enhance their competitive edge.
              </p>
              <span class="carousel__pagination" aria-live="polite">1/3</span>
            </div>

            <!-- Slide 2: Service Items with White Shape -->
            <div class="carousel__slide" data-slide="2" aria-hidden="true">
              <article class="service-item">
                <span class="service-item__number">01</span>
                <h2 class="service-item__title">
                  Revolving Lines of Credit and Holding Company Term Loans
                </h2>
                <p class="service-item__description">
                  With revolving lines of credit, institutions can access additional
                  capital quickly and easily to take advantage of short-term opportunities
                  as they arise. Holding company term loans offer the long-term capital
                  and flexibility institutions need to meet acquisition and expansion
                  needs or to refinance existing debt.
                </p>
              </article>

              <article class="service-item">
                <span class="service-item__number">02</span>
                <h2 class="service-item__title">Tailored Depository Services</h2>
                <p class="service-item__description">
                  Through tailored depository services and integrated cash management
                  solutions, institutions can enhance their treasury capabilities to
                  increase return on assets and efficiently manage accounts.
                </p>
              </article>

              <span class="carousel__pagination" aria-live="polite">2/3</span>

              <!-- White Transition Shape -->
              <div class="white-transition-shape"></div>
            </div>

            <!-- Slide 3: Detailed Specifications (Light Background) -->
            <div class="carousel__slide carousel__slide--light" data-slide="3" aria-hidden="true">
              <h2 class="section-title">Public Funds</h2>

              <article class="detail-item">
                <span class="detail-item__number">01</span>
                <div class="detail-item__content">
                  <h3 class="detail-item__title">Account Type</h3>
                  <p class="detail-item__description">
                    High-Yield Money Market for Public Funds.
                  </p>
                </div>
              </article>

              <article class="detail-item">
                <span class="detail-item__number">02</span>
                <div class="detail-item__content">
                  <h3 class="detail-item__title">Collateral</h3>
                  <p class="detail-item__description">
                    FHLB Dallas Letter of Credit.
                  </p>
                </div>
              </article>

              <article class="detail-item">
                <span class="detail-item__number">03</span>
                <div class="detail-item__content">
                  <h3 class="detail-item__title">Interest Payments</h3>
                  <p class="detail-item__description">
                    Interest on deposits is calculated on a 365-day basis. Simple
                    interest accrues daily and is deposited to your account monthly.
                  </p>
                </div>
              </article>

              <article class="detail-item">
                <span class="detail-item__number">04</span>
                <div class="detail-item__content">
                  <h3 class="detail-item__title">Additional Features</h3>
                  <p class="detail-item__description">
                    6 withdrawals per monthly statement cycle – complimentary domestic
                    and international wire services offered within this period. Online
                    account access and integrated cash management services.
                  </p>
                </div>
              </article>

              <article class="detail-item">
                <span class="detail-item__number">05</span>
                <div class="detail-item__content">
                  <h3 class="detail-item__title">Ratings</h3>
                  <p class="detail-item__description">
                    Egan-Jones Ratings Company: Bank A- Rating; Subordinated Notes
                    BBB+ Rating; Preferred Stock BBB Rating. IDC: Superior rating
                    (used by FNMA, FHLMC, GNMA).
                  </p>
                </div>
              </article>

              <span class="carousel__pagination" aria-live="polite">3/3</span>
            </div>

            <!-- Carousel Navigation Buttons -->
            <button class="circ-button circ-button--top" aria-label="Previous slide">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 12 L4 8 L8 4" stroke="currentColor" fill="none" stroke-width="2"/>
              </svg>
            </button>

            <button class="circ-button circ-button--bottom" aria-label="Next slide">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 4 L8 8 L4 12" stroke="currentColor" fill="none" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </li>

        <!-- Additional Menu Items -->
        <li class="nav__item">
          <a href="#" class="nav__item__link">Commercial Banking</a>
          <!-- Add similar carousel structure -->
        </li>

        <li class="nav__item">
          <a href="#" class="nav__item__link">Mortgage Banking</a>
          <!-- Add similar carousel structure -->
        </li>

        <li class="nav__item">
          <a href="/about" class="nav__item__link">About</a>
        </li>

        <li class="nav__item">
          <a href="/contact" class="nav__item__link">Contact</a>
        </li>

        <li class="nav__item">
          <a href="/login" class="nav__item__link nav__login">Online Banking Login</a>
        </li>
      </ul>
    </div>
  </nav>

  <script src="nexbank-menu.js"></script>
</body>
</html>
```

---

## Responsive Breakpoints

### Desktop (1200px+) - Reference Baseline

Already defined above.

### Tablet (768px - 1199px)

```css
@media (max-width: 1199px) and (min-width: 768px) {
  /* Typography Scale Reduction (90%) */
  h1.category-title {
    font-size: 48px; /* was 56px */
  }

  h2.service-item__title {
    font-size: 24px; /* was 28px */
  }

  h3.detail-item__title {
    font-size: 18px; /* was 20px */
  }

  p.description,
  .service-item__description {
    font-size: 16px; /* was 18px */
    max-width: 500px; /* was 600px */
  }

  .detail-item__description {
    font-size: 15px; /* was 16px */
  }

  /* Spacing Adjustments */
  .nav__inner {
    padding: 60px; /* was 80px */
  }

  .carousel {
    padding: 40px 30px; /* was 60px 40px */
  }

  .circ-button {
    width: 44px; /* was 48px, touch-friendly */
    height: 44px;
    right: 30px; /* was 40px */
  }

  .service-item {
    margin-bottom: 48px; /* was 60px */
  }

  .detail-item {
    margin-bottom: 28px; /* was 32px */
  }
}
```

### Mobile (<768px)

```css
@media (max-width: 767px) {
  /* Typography Scale Reduction (75%) */
  h1.category-title {
    font-size: 36px; /* was 56px */
    line-height: 1.3; /* increased for readability */
  }

  h2.service-item__title {
    font-size: 20px; /* was 28px */
  }

  h3.detail-item__title {
    font-size: 18px; /* was 20px */
  }

  p.description,
  .service-item__description {
    font-size: 16px; /* was 18px */
    max-width: 100%; /* full width */
  }

  .detail-item__description {
    font-size: 14px; /* was 16px */
  }

  .section-title {
    font-size: 28px; /* was 36px */
  }

  /* Layout Adjustments */
  .nav__inner {
    padding: 24px; /* was 80px */
  }

  .carousel {
    padding: 24px 16px; /* was 60px 40px */
    min-height: 70vh; /* reduced from 80vh */
  }

  /* Navigation Buttons - Hide in favor of swipe */
  .circ-button {
    display: none; /* Replace with swipe gestures */
  }

  /* Pagination - Dot Style Instead */
  .carousel__pagination {
    bottom: 16px;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0; /* Hide text */
  }

  .carousel__pagination::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: currentColor;
    margin: 0 4px;
    opacity: 0.3;
  }

  .carousel__pagination[data-active="1"]::before:nth-child(1),
  .carousel__pagination[data-active="2"]::before:nth-child(2),
  .carousel__pagination[data-active="3"]::before:nth-child(3) {
    opacity: 1;
  }

  /* Service Items - Reduced Spacing */
  .service-item {
    margin-bottom: 36px; /* was 60px */
  }

  .detail-item {
    margin-bottom: 24px; /* was 32px */
  }

  /* Menu Items - Stack */
  .nav__item {
    display: block;
  }

  .nav__item__link {
    font-size: 24px; /* was 32px */
    padding: 12px 0; /* was 16px 0 */
  }

  /* Touch-Friendly Adjustments */
  .nav-toggle {
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  }
}
```

### Mobile Swipe Gestures (Additional JavaScript)

```javascript
// Add to NexBankMenuCarousel class

setupTouchNavigation() {
  let touchStartX = 0;
  let touchEndX = 0;

  this.carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  this.carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }, { passive: true });
}

handleSwipe() {
  const swipeThreshold = 50; // Minimum distance for swipe
  const difference = touchStartX - touchEndX;

  if (Math.abs(difference) < swipeThreshold) return;

  if (difference > 0) {
    // Swipe left - next slide
    this.nextSlide();
  } else {
    // Swipe right - previous slide
    this.previousSlide();
  }
}

// Call in init() method for mobile devices
init() {
  this.showSlide(0, false);
  this.bindEvents();
  this.setupKeyboardNav();

  // Add touch navigation on mobile
  if ('ontouchstart' in window) {
    this.setupTouchNavigation();
  }
}
```

---

## Performance Optimization

### GPU Acceleration

```css
/* Force GPU acceleration for animated elements */
.carousel__slide,
.white-transition-shape,
.nav__inner {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0); /* Force GPU layer */
}

/* Remove will-change after animations complete */
.carousel__slide.animation-complete {
  will-change: auto;
}
```

### Content Containment

```css
/* Isolate repaint boundaries */
.service-item,
.detail-item,
.carousel__slide {
  contain: layout style paint;
}
```

### Lazy Loading (JavaScript)

```javascript
// Delay carousel initialization until menu opens
class NexBankMenu {
  // ... existing code ...

  open() {
    this.menuOverlay.classList.add('is-open');
    this.menuToggle.classList.add('is-open');
    this.isOpen = true;

    // Initialize carousels on first open only
    if (this.carousels.length === 0) {
      this.initCarousels();
    }

    this.trapFocus();
    document.body.style.overflow = 'hidden';
  }
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Diagonal stripe pattern renders correctly on all backgrounds
- [ ] White shape animation transitions smoothly (slide 2→3)
- [ ] Color inversion (dark→light) is seamless
- [ ] Typography hierarchy is clear and readable
- [ ] Numbered items (01, 02, 03) align properly
- [ ] Circular buttons are visible and accessible
- [ ] Pagination updates correctly (1/3, 2/3, 3/3)

### Functional Testing
- [ ] Menu opens/closes with hamburger click (800ms/600ms)
- [ ] Carousel slides advance with next button (~800ms)
- [ ] Carousel slides go back with prev button
- [ ] Keyboard navigation works (Tab, Arrow keys, Escape)
- [ ] White shape animation triggers only on slide 2→3
- [ ] Focus trap prevents tab-out of open menu
- [ ] Carousel loops correctly (slide 3 → slide 1)

### Accessibility Testing
- [ ] Screen reader announces slide changes
- [ ] ARIA labels present on all buttons
- [ ] Keyboard-only navigation fully functional
- [ ] Color contrast meets WCAG AA (minimum)
- [ ] Focus indicators visible on all interactive elements
- [ ] Reduced motion preference respected

### Performance Testing
- [ ] Menu animation maintains 60fps
- [ ] Carousel transitions maintain 60fps
- [ ] White shape animation smooth (no jank)
- [ ] No layout shifts during animations
- [ ] Bundle size under 15KB (gzipped)
- [ ] First interaction under 100ms

### Responsive Testing
- [ ] Desktop (1920px) - Full experience
- [ ] Laptop (1366px) - Adjusted spacing
- [ ] Tablet (1024px) - 90% typography scale
- [ ] Mobile landscape (667px) - Touch-friendly
- [ ] Mobile portrait (375px) - Swipe navigation

### Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS 14+)
- [ ] Chrome Android (latest)

---

**Implementation Status:** ✅ Complete specifications provided
**Estimated Development Time:** 16-24 hours (design + development + testing)
**Complexity Level:** Moderate-High (custom animations, carousel system)
**Browser Support:** Modern browsers (ES6+, CSS Grid, Flexbox)

---

*For additional context, refer to:*
- *nexbank-menu-system-analysis.md - Detailed analysis*
- *nexbank-menu-flow-diagram.md - Visual diagrams*
- *nexbank-menu-research-summary.md - Quick reference*
