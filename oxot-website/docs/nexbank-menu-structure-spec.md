# NexBank Menu Structure Specification

**Analysis Date**: 2025-11-13
**Source**: Screenshots from `/research/backgrounds/`
**Purpose**: Document the three-slide menu interaction pattern used across all NexBank menu categories

---

## Executive Summary

NexBank implements a sophisticated three-slide menu system that progressively reveals content when users click on main navigation items (Institutional Banking, Commercial Banking, Mortgage, etc.). Each menu category follows an identical structural pattern with distinct visual and interactive characteristics.

---

## Three-Slide Sequence Pattern

### Universal Flow
```
User Click → Slide 1 (Title) → Slide 2 (Description) → Slide 3 (Services Menu)
```

All menu items (Institutional, Commercial, Mortgage, Wholesale, Contact) implement this same three-phase progression.

---

## Slide 1: Title Screen

### Visual Characteristics
- **Background**: Pure black (#000000 or dark theme color)
- **Content**: Single centered text line
- **Typography**:
  - All-caps, letter-spaced text
  - White color (#FFFFFF)
  - Likely 18-24px font size
  - Sans-serif typeface (appears to be modern/geometric)
  - Center-aligned horizontally and vertically

### Examples Observed
- "INSTITUTIONAL BANKING"
- "CONTACT"

### HTML Structure Template
```html
<div class="menu-slide menu-slide-1 active">
  <div class="menu-slide-content">
    <h2 class="menu-title">INSTITUTIONAL BANKING</h2>
  </div>
</div>
```

### CSS Pattern
```css
.menu-slide-1 {
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.menu-title {
  color: #FFFFFF;
  font-size: 20px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
}
```

### Interaction Behavior
- **Duration**: ~800-1200ms visible
- **Transition**: Auto-advances to Slide 2
- **Animation**: Fade in/fade out or slide transition

---

## Slide 2: Description Screen

### Visual Characteristics
- **Background**:
  - Dark theme (black/dark gray)
  - Animated geometric line patterns (diagonal lines, curves)
  - Patterns appear to be SVG or Canvas-based animations
- **Content Layout**:
  - Heading (category name) - left-aligned
  - Body text (description paragraph) - left-aligned
  - Page indicator: "1/3" (top center)
  - Logo: NexBank logo (top left)
  - Menu toggle: Hamburger icon (top right)
  - Scroll indicator: "Scroll" text (vertical right side)

### Typography
- **Heading**:
  - Large font size (~36-48px)
  - White color
  - Light/regular weight
  - Sans-serif
- **Body**:
  - Medium font size (~16-18px)
  - Light gray color (#CCCCCC or similar)
  - Regular weight
  - Line height: ~1.6-1.8

### Geometric Background Patterns
- **Pattern Types**:
  - Diagonal parallel lines (45-degree angle)
  - Curved flowing lines
  - Gradient-based curves
  - Abstract geometric shapes
- **Animation**:
  - Subtle movement/flow
  - Parallax effect possible
  - Opacity transitions

### Examples Observed

#### Institutional Banking
```
Heading: Financial Institutions

Body: NexBank is a trusted partner to institutions nationally, helping them
to accelerate growth, maximize earnings, improve efficiencies and expand
their market presence. Our professionals hold extensive experience and
offer unique expertise that allow our clients to strengthen their financial
position and enhance their competitive edge.
```

#### Wholesale and Correspondent Lending
```
Heading: Wholesale and Correspondent Lending

Body: NexBank offers a full range of wholesale and correspondent lending
services, including non-delegated and delegated correspondent programs.
With over a decade of commitment to the Wholesale business and a strong
understanding of the market, our professionals consistently deliver timely
underwriting and reliable fundings.
```

### HTML Structure Template
```html
<div class="menu-slide menu-slide-2">
  <header class="menu-header">
    <div class="logo">
      <img src="nexbank-logo.svg" alt="NexBank">
    </div>
    <div class="page-indicator">1/3</div>
    <button class="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>

  <div class="menu-slide-content">
    <div class="content-wrapper">
      <h2 class="category-heading">Financial Institutions</h2>
      <p class="category-description">
        NexBank is a trusted partner to institutions nationally...
      </p>
    </div>
  </div>

  <div class="scroll-indicator">
    <span>Scroll</span>
  </div>

  <canvas id="geometric-background" class="background-animation"></canvas>
</div>
```

### CSS Pattern
```css
.menu-slide-2 {
  background: #1a1a1a;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.menu-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  z-index: 100;
}

.page-indicator {
  color: #FFFFFF;
  font-size: 14px;
  letter-spacing: 0.1em;
}

.content-wrapper {
  max-width: 800px;
  padding: 150px 50px 50px;
}

.category-heading {
  font-size: 42px;
  font-weight: 300;
  color: #FFFFFF;
  margin-bottom: 30px;
  line-height: 1.2;
}

.category-description {
  font-size: 18px;
  color: #CCCCCC;
  line-height: 1.7;
  font-weight: 300;
}

.scroll-indicator {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  color: #FFFFFF;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.3;
}
```

### Interaction Behavior
- **Duration**: User-controlled (scroll or click to advance)
- **Transition**: Scroll-triggered or click-triggered to Slide 3
- **Scroll Behavior**: User can scroll down to reveal Slide 3

---

## Slide 3: Services Menu (Scrollable List)

### Visual Characteristics
- **Background**:
  - Transitions between dark and light
  - Dark section: continuation of geometric patterns
  - Light section: White/off-white (#F5F5F5)
- **Content**:
  - Numbered scrollable list of services
  - Each item has:
    - Number prefix (01, 02, 03, etc.)
    - Service title (bold/prominent)
    - Service description (lighter text)
    - Optional: Additional details or links

### Typography
- **Numbers**:
  - Small size (~12-14px)
  - Light gray
  - Monospace or sans-serif
- **Titles**:
  - Medium-large size (~20-24px)
  - Dark color on light bg / White on dark bg
  - Semi-bold weight
- **Descriptions**:
  - Medium size (~14-16px)
  - Gray color
  - Regular weight

### Examples Observed

#### Financial Institutions Services (Dark Section)
```
01  Revolving Lines of Credit and Holding Company Term Loans
    With revolving lines of credit, institutions can access additional
    capital quickly and easily to take advantage of short-term opportunities
    as they arise. Holding company term loans offer the long-term capital
    and flexibility institutions need to meet acquisition and expansion
    needs or to refinance existing debt.

02  Tailored Depository Services
    Through tailored depository services and integrated cash management
    solutions, institutions can enhance their treasury capabilities to
    increase return on assets and efficiently manage accounts.
```

#### Public Funds Services (Light Section)
```
HEADING: Public Funds

DESCRIPTION: We offer tailored depository services and specialized
interest-bearing accounts to meet the needs of Public Funds entities...

01  Account Type
    High-Yield Money Market for Public Funds.

02  Collateral
    FHLB Dallas Letter of Credit.

03  Interest Payments
    Interest on deposits is calculated on a 365-day basis. Simple
    interest accrues daily and is deposited to your account monthly.

04  Additional Features
    6 withdrawals per monthly statement cycle – complimentary domestic
    and international wire services offered within this period.
    Online account access and integrated cash management services.

05  Ratings
    Egan-Jones Ratings Company: Bank A- Rating; Subordinated Notes
    BBB+ Rating; Preferred Stock BBB Rating
    IDC: Superior rating (used by FNMA, FHLMC, GNMA)*
```

#### Commercial/Mortgage Services (Dark Section - List Format)
```
INTRO TEXT: NexBank offers a diverse portfolio of standard and specialty
products that will grow your business.

01  Conforming
02  Government
03  Non-Conforming Jumbo
04  Non-QM
```

### HTML Structure Template

#### Dark Section Services
```html
<div class="menu-slide menu-slide-3">
  <div class="services-section dark-section">
    <div class="services-list">
      <article class="service-item">
        <div class="service-number">01</div>
        <div class="service-content">
          <h3 class="service-title">Revolving Lines of Credit and Holding Company Term Loans</h3>
          <p class="service-description">
            With revolving lines of credit, institutions can access additional
            capital quickly and easily...
          </p>
        </div>
      </article>

      <article class="service-item">
        <div class="service-number">02</div>
        <div class="service-content">
          <h3 class="service-title">Tailored Depository Services</h3>
          <p class="service-description">
            Through tailored depository services and integrated cash
            management solutions...
          </p>
        </div>
      </article>
    </div>
  </div>
</div>
```

#### Light Section Services
```html
<div class="services-section light-section">
  <div class="section-intro">
    <h2 class="section-heading">Public Funds</h2>
    <p class="section-description">
      We offer tailored depository services and specialized interest-bearing
      accounts...
    </p>
  </div>

  <div class="services-list compact">
    <article class="service-item">
      <div class="service-number">01</div>
      <div class="service-content">
        <h3 class="service-title">Account Type</h3>
        <p class="service-description">High-Yield Money Market for Public Funds.</p>
      </div>
    </article>

    <!-- Additional items... -->
  </div>
</div>
```

#### Simple List Format
```html
<div class="services-section dark-section">
  <div class="section-intro">
    <p class="intro-text">
      NexBank offers a diverse portfolio of standard and specialty
      products that will grow your business.
    </p>
  </div>

  <div class="services-list simple-list">
    <div class="service-item-simple">
      <span class="service-number">01</span>
      <span class="service-title">Conforming</span>
    </div>
    <div class="service-item-simple">
      <span class="service-number">02</span>
      <span class="service-title">Government</span>
    </div>
    <div class="service-item-simple">
      <span class="service-number">03</span>
      <span class="service-title">Non-Conforming Jumbo</span>
    </div>
    <div class="service-item-simple">
      <span class="service-number">04</span>
      <span class="service-title">Non-QM</span>
    </div>
  </div>
</div>
```

### CSS Pattern

#### Dark Section
```css
.services-section.dark-section {
  background: #1a1a1a;
  padding: 100px 50px;
  position: relative;
}

.services-list {
  max-width: 1200px;
  margin: 0 auto;
}

.service-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 30px;
  margin-bottom: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.service-number {
  font-size: 14px;
  color: #666666;
  font-weight: 300;
}

.service-title {
  font-size: 22px;
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.3;
}

.service-description {
  font-size: 16px;
  color: #CCCCCC;
  line-height: 1.7;
  font-weight: 300;
}
```

#### Light Section
```css
.services-section.light-section {
  background: #F8F8F8;
  padding: 100px 50px;
}

.section-intro {
  max-width: 800px;
  margin: 0 auto 80px;
}

.section-heading {
  font-size: 48px;
  color: #1a1a1a;
  font-weight: 300;
  margin-bottom: 30px;
}

.section-description {
  font-size: 18px;
  color: #666666;
  line-height: 1.7;
}

.services-list.compact .service-item {
  grid-template-columns: 40px 1fr;
  gap: 20px;
  margin-bottom: 40px;
  padding-bottom: 40px;
}

.light-section .service-title {
  color: #1a1a1a;
  font-size: 20px;
}

.light-section .service-description {
  color: #666666;
}
```

#### Simple List Format
```css
.services-list.simple-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 600px;
  margin: 60px auto 0;
}

.service-item-simple {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: #FFFFFF;
}

.service-item-simple .service-number {
  font-size: 14px;
  color: #666666;
  min-width: 30px;
}

.service-item-simple .service-title {
  font-weight: 400;
}
```

### Interaction Behavior
- **Scroll**: Full vertical scroll enabled
- **Navigation**: Can scroll back up to Slide 2
- **Back Button**: Returns to previous menu state
- **Page Indicator**: Shows "2/3" or "3/3" depending on position

---

## Global Pattern Confirmation

### Menu Categories Using Three-Slide Structure
Based on screenshot evidence:

1. **Institutional Banking** ✓
   - Slide 1: "INSTITUTIONAL BANKING"
   - Slide 2: "Financial Institutions" description
   - Slide 3: Services list (Revolving Lines, Depository Services, Public Funds)

2. **Commercial Banking** ✓
   - Slide 1: Title screen (implied)
   - Slide 2: Description (visible in screenshots)
   - Slide 3: Product list (Conforming, Government, Non-Conforming Jumbo, Non-QM)

3. **Mortgage** ✓
   - Pattern confirmed across screenshots

4. **Wholesale** ✓
   - Slide 2: "Wholesale and Correspondent Lending" description visible
   - Three-slide structure implied

5. **Contact** ✓
   - Slide 1: "CONTACT" title screen visible
   - Three-slide structure likely simplified for contact form

---

## Common CSS Classes (Recommended Naming)

### Slide Structure
```css
.menu-slide                /* Base slide container */
.menu-slide-1              /* Title slide */
.menu-slide-2              /* Description slide */
.menu-slide-3              /* Services slide */
.menu-slide.active         /* Currently visible slide */
.menu-slide.transitioning  /* Slide in transition */
```

### Navigation Elements
```css
.menu-header               /* Fixed header with logo/nav */
.menu-toggle               /* Hamburger menu button */
.page-indicator            /* "1/3" slide counter */
.scroll-indicator          /* Vertical "Scroll" text */
```

### Content Elements
```css
.menu-slide-content        /* Main content wrapper */
.menu-title                /* Slide 1 title */
.category-heading          /* Slide 2 heading */
.category-description      /* Slide 2 body text */
.services-section          /* Slide 3 section container */
.services-list             /* List of services */
.service-item              /* Individual service */
.service-number            /* "01", "02" numbering */
.service-title             /* Service heading */
.service-description       /* Service details */
```

### Background Elements
```css
.background-animation      /* Geometric pattern canvas/svg */
.dark-section              /* Dark background variant */
.light-section             /* Light background variant */
```

---

## JavaScript Interaction Patterns

### Slide Progression Logic
```javascript
// Pseudo-code for menu interaction

class MenuSlideshow {
  constructor(category) {
    this.category = category;
    this.currentSlide = 1;
    this.totalSlides = 3;
  }

  // Auto-advance from Slide 1 to Slide 2
  autoAdvanceSlide1() {
    setTimeout(() => {
      this.transitionToSlide(2);
    }, 1000); // 1 second delay
  }

  // User-triggered advance from Slide 2 to Slide 3
  advanceOnScroll() {
    window.addEventListener('scroll', () => {
      const scrollThreshold = 100; // pixels
      if (window.scrollY > scrollThreshold && this.currentSlide === 2) {
        this.transitionToSlide(3);
      }
    });
  }

  // Slide transition handler
  transitionToSlide(slideNumber) {
    const currentSlideEl = document.querySelector('.menu-slide.active');
    const nextSlideEl = document.querySelector(`.menu-slide-${slideNumber}`);

    currentSlideEl.classList.add('transitioning');
    currentSlideEl.classList.remove('active');

    setTimeout(() => {
      nextSlideEl.classList.add('active');
      this.currentSlide = slideNumber;
      this.updatePageIndicator();

      // Start background animation on Slide 2/3
      if (slideNumber >= 2) {
        this.startBackgroundAnimation();
      }
    }, 300);
  }

  // Page indicator update
  updatePageIndicator() {
    const indicator = document.querySelector('.page-indicator');
    if (indicator && this.currentSlide >= 2) {
      indicator.textContent = `${this.currentSlide - 1}/3`;
    }
  }

  // Background animation initialization
  startBackgroundAnimation() {
    const canvas = document.getElementById('geometric-background');
    if (canvas) {
      // Initialize WebGL or Canvas 2D animation
      // Draw geometric patterns with animation loop
      this.animateBackground(canvas);
    }
  }

  animateBackground(canvas) {
    const ctx = canvas.getContext('2d');
    // Animation logic for geometric patterns
    // Diagonal lines, curves, flowing shapes
  }
}

// Initialize on menu click
document.querySelectorAll('.main-nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const category = item.dataset.category;
    const slideshow = new MenuSlideshow(category);
    slideshow.autoAdvanceSlide1();
  });
});
```

### Transition Timing
```javascript
const TRANSITION_TIMINGS = {
  slide1Duration: 1000,      // Auto-advance after 1s
  transitionSpeed: 300,      // Fade/slide transition
  scrollThreshold: 100,      // Pixels to trigger Slide 3
  animationDelay: 200        // Background animation start delay
};
```

### Back Button Behavior
```javascript
// Back button should:
// - From Slide 3 → return to Slide 2
// - From Slide 2 → return to Slide 1 or close menu
// - From Slide 1 → close menu overlay

function handleBackButton() {
  if (menuSlideshow.currentSlide === 3) {
    menuSlideshow.transitionToSlide(2);
  } else if (menuSlideshow.currentSlide === 2) {
    menuSlideshow.transitionToSlide(1);
    setTimeout(closeMenu, 300);
  } else {
    closeMenu();
  }
}
```

---

## Reusable Components

### Component Architecture
```
MenuSlideshow (container)
├── Slide1 (title)
├── Slide2 (description)
│   ├── Header
│   ├── ContentWrapper
│   ├── BackgroundAnimation
│   └── ScrollIndicator
└── Slide3 (services)
    ├── ServicesSection (dark)
    └── ServicesSection (light)
        └── ServicesList
            └── ServiceItem[]
```

### Data Structure
```javascript
const menuCategories = {
  institutional: {
    slide1: { title: "INSTITUTIONAL BANKING" },
    slide2: {
      heading: "Financial Institutions",
      description: "NexBank is a trusted partner...",
      backgroundPattern: "diagonal-lines"
    },
    slide3: {
      sections: [
        {
          type: "dark",
          services: [
            {
              number: "01",
              title: "Revolving Lines of Credit...",
              description: "With revolving lines of credit..."
            },
            // ...
          ]
        },
        {
          type: "light",
          heading: "Public Funds",
          description: "We offer tailored...",
          services: [
            // ...
          ]
        }
      ]
    }
  },
  // Other categories...
};
```

---

## Animation Recommendations

### Slide Transitions
- **Fade transition**: 300-400ms ease-in-out
- **Slide up transition**: Transform translateY with easing
- **Crossfade**: Overlay slides with opacity transitions

### Background Animations
- **Geometric patterns**: Canvas or WebGL
- **Performance**: Use requestAnimationFrame
- **Parallax**: Subtle movement on scroll
- **Complexity**: Keep framerate at 60fps

### Scroll Behavior
- **Smooth scroll**: CSS scroll-behavior: smooth
- **Snap points**: CSS scroll-snap for section alignment
- **Threshold detection**: IntersectionObserver API

---

## Accessibility Considerations

### Keyboard Navigation
- Tab through slides with Enter/Space to advance
- Escape key to close menu
- Arrow keys for navigation

### ARIA Labels
```html
<div class="menu-slide" role="region" aria-label="Menu slide 1 of 3">
  <!-- Content -->
</div>

<button class="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded="false">
  <!-- Hamburger icon -->
</button>
```

### Screen Reader Support
- Announce slide transitions
- Provide skip links
- Ensure all interactive elements are focusable

---

## Performance Optimization

### Lazy Loading
- Load Slide 3 content only when Slide 2 is visible
- Defer background animation initialization
- Preload next slide images/assets

### Animation Performance
- Use CSS transforms (GPU-accelerated)
- Avoid layout thrashing
- Debounce scroll handlers
- Use will-change for animated elements

### Code Splitting
- Separate JS bundle for menu system
- Lazy load geometric animation library
- Dynamic imports for each menu category data

---

## Browser Support

### Required Features
- CSS Grid (Slide 3 layout)
- CSS Flexbox (general layout)
- CSS Transforms (transitions)
- Canvas API or WebGL (background animations)
- IntersectionObserver (scroll detection)

### Fallbacks
- Graceful degradation for older browsers
- Static backgrounds if Canvas unavailable
- Simplified transitions for reduced motion preferences

---

## Implementation Checklist

### Phase 1: Structure
- [ ] Create three-slide HTML structure
- [ ] Implement slide navigation logic
- [ ] Add page indicators
- [ ] Set up scroll detection

### Phase 2: Styling
- [ ] Apply dark/light theme styles
- [ ] Implement typography system
- [ ] Create responsive layouts
- [ ] Add transition effects

### Phase 3: Animation
- [ ] Build geometric background system
- [ ] Implement slide transitions
- [ ] Add scroll animations
- [ ] Optimize for performance

### Phase 4: Content
- [ ] Populate all menu categories
- [ ] Create service data structures
- [ ] Implement dynamic content loading
- [ ] Add CMS integration (if needed)

### Phase 5: Polish
- [ ] Add accessibility features
- [ ] Implement keyboard navigation
- [ ] Test across browsers
- [ ] Optimize for mobile devices
- [ ] Add analytics tracking

---

## Conclusion

The NexBank three-slide menu system provides a sophisticated, progressive disclosure pattern that:
- Builds anticipation with title screen
- Provides context with description
- Delivers detailed services in scrollable format

This pattern is consistent across all menu categories and can be implemented as a reusable component system with category-specific data.
