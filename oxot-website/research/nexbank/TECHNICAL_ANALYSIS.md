# NexBank.com - Complete Technical Analysis & Replication Specifications

**Analysis Date:** 2025-11-12
**Target URL:** https://www.nexbank.com/
**Analysis Depth:** Complete Technical Stack

---

## EXECUTIVE SUMMARY

NexBank.com is a **custom-built, module-based JavaScript application** with no major frontend frameworks (React, Vue, Angular). It uses **GSAP (GreenSock Animation Platform)** for animations, custom Webpack bundling, and a sophisticated video background system with lazy loading.

**Key Finding:** This is a **custom vanilla JavaScript SPA** with advanced animation capabilities, NOT a framework-based site.

---

## 1. COMPLETE TECHNOLOGY STACK

### 1.1 Frontend Framework
- **Primary:** **Vanilla JavaScript (ES6+)** - No React/Vue/Angular
- **Module System:** Custom ES6 modules with Webpack bundling
- **Build Tool:** Webpack (evidenced by bundle naming pattern)

### 1.2 Animation & Effects Library
- **GSAP (GreenSock Animation Platform) v2.1.3**
  - TimelineLite/TimelineMax
  - TweenLite/TweenMax
  - CustomEase plugin
  - Easing functions: Power1-4, Linear, Custom curves
  - Custom easing curve: `"M0,0 C0.376,-0.034 0.454,0.528 0.472,0.6 0.542,0.89 0.578,1 1,1"`

### 1.3 Performance & Lazy Loading
- **IntersectionObserver API** - Native browser API for viewport detection
- **Custom lazy video loader** - Videos load on viewport entry
- **MutationObserver API** - DOM change monitoring
- **RequestAnimationFrame** - Smooth animation loops

### 1.4 Custom Scroll System
- **Custom smooth scroll implementation** (`js-scroll-container`, `js-scroll-content`)
- Uses `transform: translate3d()` for GPU-accelerated scrolling
- Container height manipulation for virtual scrolling
- Scroll velocity tracking with direction detection

---

## 2. CSS FRAMEWORK & STYLING

### 2.1 CSS Architecture
- **Custom CSS (130KB minified)** - No Bootstrap, Tailwind, or other frameworks
- **BEM-like naming convention:** `.home__background__video`, `.nav__item__link`
- **CSS Reset:** Comprehensive reset included
- **Responsive breakpoints:**
  - Mobile: < 600px
  - Tablet: 600px - 1200px
  - Desktop: > 1200px
  - Large Desktop: > 1440px

### 2.2 Typography
**Primary Font:** **Suisse Intl (Custom)**
- Weights: Thin (100), Light (300), Regular (400), Medium (500)
- Formats: WOFF2 (primary), WOFF (fallback)
- Font files:
  ```
  /assets/fonts/suisseintl-regular.woff2
  /assets/fonts/suisseintl-light.woff2
  /assets/fonts/suisseintl-medium.woff2
  /assets/fonts/suisseintl-thin.woff2
  ```
- **Fallback stack:** `suisseintl, Helvetica, Arial, sans-serif`

**Secondary Font (FDIC Banner):** **Source Sans 3 / Source Sans Pro Web**
- Loaded from Google Fonts
- URL: `https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@1,400;1,600`

### 2.3 Color Palette
```css
Body Background (Dark Pages): #1a1b1c
Body Text (Dark Pages): #7c7c7d
Body Text (Light Pages): #3a3b3b
Footer Background: #f4f4f4
Nav Background: rgba(26,27,28,.95) /* 95% opacity dark overlay */
White: #fff
Grey Tones: #636363, #8c8c8c, #a1a1a1, #b1b1b1, #ccc
Border Colors: #404141, #666
```

---

## 3. VIDEO BACKGROUND SYSTEM

### 3.1 Video Sources
**Seven (7) background videos with lazy loading:**

```html
1. /assets/video/intro.mp4      (Initial load)
2. /assets/video/1-2.mp4
3. /assets/video/1-3.mp4
4. /assets/video/2-3.mp4
5. /assets/video/2-1.mp4
6. /assets/video/3-1.mp4
7. /assets/video/3-2.mp4
```

### 3.2 Video Implementation Pattern
```html
<video class="home__background__video"
  data-src="/assets/video/intro.mp4"
  autoplay
  muted
  loop
  playsinline
  preload="none">
</video>
```

### 3.3 Lazy Loading Logic
- Videos use `data-src` attribute instead of `src`
- IntersectionObserver triggers load when entering viewport (500px margin)
- `rootMargin: "500px 0px 500px 0px"` for preloading ahead
- Fallback poster image if autoplay fails: `element.dataset.poster`
- Class `is-loaded` added on successful play

### 3.4 Video CSS Styling
```css
.home__background__video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.8s;
}
.home__background__video.is-loaded {
  opacity: 1;
}
```

---

## 4. NAVIGATION SYSTEM

### 4.1 Navigation Structure
- **Fixed position header** with logo and hamburger menu
- **Full-screen overlay navigation** on activation
- **Multi-level dropdown** with hover-triggered sub-menus
- **ARIA attributes** for accessibility (aria-expanded, aria-hidden)

### 4.2 Navigation Animation States
```javascript
// Menu Toggle States
T = {
  OPEN: 0,
  CLOSE: 1
}

// CSS Classes
"js-nav-toggle--close"  // Close state
"nav-toggle--light"     // Light color theme
"nav-toggle--dark"      // Dark color theme
```

### 4.3 Menu Items
```
1. Institutional Banking
   - Institutional Financial Institutions
   - Public Funds
   - Institutional Treasury Management

2. Commercial Banking
   - Commercial Lending
   - Commercial Real Estate Lending
   - Financial Institutions
   - Treasury Management

3. Mortgage Banking
   - Wholesale
   - Warehouse Lending
   - Become Client

4. About
5. Contact
```

### 4.4 Color Detection System
- Custom IntersectionObserver watches page sections
- Sections have `data-color` attribute ("light" or "dark")
- Nav toggle and logo color adapts to underlying content
- Threshold-based color switching with smooth transitions

---

## 5. JAVASCRIPT ARCHITECTURE

### 5.1 Bundle Structure
```
Main Bundles:
- scripts.8ca740228f748e2a466f.js           (50 lines, minified)
- vendors.9632e9d9d04342de239b.js          (56 lines, GSAP + utilities)
- scripts-legacy.22bec8a1259a832392a4.js   (Legacy browser support)
- vendors-legacy.67ff5449f8efc986963e.js   (Legacy vendors)
```

### 5.2 Module/NoModule Pattern
```html
<!-- Modern browsers -->
<script type="module" src="/assets/js/vendors.js"></script>
<script type="module" src="/assets/js/scripts.js"></script>

<!-- Legacy browsers -->
<script nomodule src="/assets/js/vendors-legacy.js"></script>
<script nomodule src="/assets/js/scripts-legacy.js"></script>
```

### 5.3 Custom Classes & Components

**Core Classes:**
- `MainLoading` - Initial page load animation with digit counter
- `AjaxLoading` - Page transition loading indicator
- `AjaxNavigation` - SPA-style navigation with History API
- `SmoothScroll` - Custom smooth scroll implementation
- `ColorDetector` - Section-based color theme detection
- `VideoLazy` - Lazy loading for background videos
- `NavToggle` - Hamburger menu controller
- `Nav` - Full navigation overlay manager

**Custom Scroll Implementation:**
```javascript
class SmoothScroll {
  scrollTop = 0;           // Current scroll position
  containerY = 0;          // Container transform Y
  diffProgress = 0;        // Velocity calculation
  hasActiveItem = false;   // Animation state tracking

  // Uses: transform: translate3d(0, -containerY, 0)
  // Easing: containerY += (scrollTop - containerY) * 0.08
}
```

---

## 6. THIRD-PARTY SERVICES & SCRIPTS

### 6.1 Analytics & Tracking
**Google Analytics (Universal Analytics)**
- Tracking ID: `UA-63020337-3`
- gtag.js implementation
- Script: `https://www.googletagmanager.com/gtag/js?id=UA-63020337-3`

### 6.2 Security & Verification
**Google reCAPTCHA v2**
- Site Key: `6LfJXMQiAAAAACZFD0zdaZHVXylN5IvLjqSKD94s`
- Script: `https://www.google.com/recaptcha/api.js`
- Used on contact/form pages

### 6.3 Error Tracking
**Sentry (Browser SDK v5.6.1)**
- Script: `https://browser.sentry-cdn.com/5.6.1/bundle.min.js`
- Integrity: `sha384-pGTFmbQfua2KiaV2+ZLlfowPdd5VMT2xU4zCBcuJr7TVQozMO+I1FmPuVHY3u8KB`

### 6.4 External Links & Integrations
- Online Banking: `https://www.nexbank.com/onlinebanking`
- FDIC: `https://www.fdic.gov/`
- HUD: `http://www.hud.gov/`

---

## 7. ANIMATION SYSTEM SPECIFICATIONS

### 7.1 GSAP Timeline Architecture
```javascript
// Standard animation pattern
timeline = new TimelineLite({
  onComplete: callbackFunction
})
.set(element, {visibility: "inherit"}, 0)
.fromTo(element, duration, {
  // Start state
  yPercent: -100,
  opacity: 0
}, {
  // End state
  yPercent: 0,
  opacity: 1,
  ease: CustomEase.easeInOut
}, startTime)
.staggerFromTo(elements, duration, startVars, endVars, stagger, position)
```

### 7.2 Custom Easing Curves
**Named Curve: "inOut"**
```javascript
{
  inOut: "M0,0 C0.376,-0.034 0.454,0.528 0.472,0.6 0.542,0.89 0.578,1 1,1"
}
```

This creates a custom cubic-bezier-style curve optimized for smooth in-out transitions.

### 7.3 Common Animation Patterns

**Logo Animation:**
- Bar stroke animations with `stroke-dasharray` and `stroke-dashoffset`
- Rotation transforms on hover: `rotate(-110deg)` to `rotate(0)`
- Colored stripes fade in/out
- Text slides horizontally

**Navigation Animation:**
```javascript
// Open animation
.staggerFromTo(navItems, 1.2, {
  y: 80,
  rotation: 30,
  opacity: 0
}, {
  y: 0,
  rotation: 0,
  opacity: 1,
  ease: Expo.easeOut
}, 0.1, 1)

// Close animation
.staggerTo(navItems, 0.8, {
  y: 40,
  rotation: 15,
  opacity: 0,
  ease: Cubic.easeInOut
}, -0.05, 0)
```

**Scroll-based Animations:**
- Elements tracked with custom scroll position
- Parallax effects using `transform: translateY()`
- Fade in/out based on viewport intersection
- Staggered delays for sequential reveals

---

## 8. SEO & META TAGS

### 8.1 Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexBank",
  "url": "https://www.nexbank.com",
  "sameAs": [
    "Wikipedia URL",
    "LinkedIn URL",
    "Bloomberg URL",
    "Crunchbase URL",
    "App Store URLs"
  ]
}
```

### 8.2 Favicon Suite
```
/apple-touch-icon.png        (180x180)
/favicon-32x32.png           (32x32)
/favicon-16x16.png           (16x16)
/safari-pinned-tab.svg       (SVG for Safari)
/site.webmanifest            (PWA manifest)
```

### 8.3 Meta Tags
- Theme color: `#5bbad5`
- Viewport: Standard responsive
- No explicit title/description in downloaded snapshot (likely dynamically set)

---

## 9. ACCESSIBILITY FEATURES

### 9.1 ARIA Implementation
- `aria-expanded` on navigation toggle
- `aria-hidden` on navigation overlay
- `role` attributes for semantic HTML
- Keyboard navigation support (Tab key trapping)

### 9.2 Focus Management
```javascript
// Tab key trap within navigation
trapTabKey(event) {
  if (event.shiftKey) {
    // Shift+Tab: wrap to last element
  } else {
    // Tab: wrap to first element
  }
}
```

### 9.3 Screen Reader Support
- Semantic HTML5 elements (`<nav>`, `<header>`, `<footer>`)
- Descriptive link text
- Hidden labels for icon-only buttons
- Visible focus indicators

---

## 10. PERFORMANCE OPTIMIZATIONS

### 10.1 Lazy Loading Strategy
- **Videos:** IntersectionObserver with 500px preload margin
- **Images:** Likely using native `loading="lazy"` (not visible in video-only homepage)
- **Fonts:** WOFF2 format for modern browsers, WOFF fallback

### 10.2 Code Splitting
- Separate vendor bundles (GSAP, utilities)
- Module/nomodule pattern for differential serving
- Minimal main bundle (50 lines minified)

### 10.3 GPU Acceleration
- `transform: translateZ(0)` and `translate3d()` usage
- `will-change` properties on animated elements
- `backface-visibility: hidden` for smoother transforms

### 10.4 Caching Strategy
- Cache-busted file names (hash in filename: `main.c3232c0585b7cf4f1b1b.css`)
- Static asset versioning via build process

---

## 11. RESPONSIVE DESIGN SYSTEM

### 11.1 Breakpoints
```scss
// Mobile First
@media screen and (min-width: 600px) {  // Tablet & Desktop }
@media screen and (min-width: 1200px) { // Large Desktop }
@media screen and (min-width: 1440px) { // Extra Large }
@media screen and (max-width: 568px) {  // Small Mobile }
@media screen and (max-height: 568px) { // Short Screens }
```

### 11.2 Mobile-Specific Features
- Touch event handling: `document.ontouchstart` detection
- `playsinline` attribute on videos for iOS
- Simplified navigation (no hover states)
- Adjusted font sizes and spacing

### 11.3 Layout System
- **Grid:** Custom flexbox-based grid
- **Spacing:** VW-based units for fluid scaling
  - Desktop: `7.15vw` horizontal padding
  - Mobile: `11.11vw` horizontal padding
- **Typography scale:** Fluid sizing with breakpoint adjustments

---

## 12. FORM SYSTEM

### 12.1 Form Components
- Custom styled inputs (no native styling)
- Floating label pattern
- Real-time validation
- Honeypot field for spam prevention (`.form__hp`)

### 12.2 Form States
```javascript
Classes:
- .form__item--focus    // Active input
- .form__item--filled   // Has value
- .form__message--error // Validation error
```

### 12.3 Form Animation
- Label translates up and scales down on focus
- Border animates from center outwards
- Submit button with loading state

---

## 13. ASSET MANIFEST

### 13.1 JavaScript Files
```
/assets/js/scripts.8ca740228f748e2a466f.js
/assets/js/vendors.9632e9d9d04342de239b.js
/assets/js/scripts-legacy.22bec8a1259a832392a4.js
/assets/js/vendors-legacy.67ff5449f8efc986963e.js
```

### 13.2 CSS Files
```
/assets/css/main.c3232c0585b7cf4f1b1b.css (130KB)
```

### 13.3 Font Files
```
/assets/fonts/suisseintl-regular.woff2
/assets/fonts/suisseintl-regular.woff
/assets/fonts/suisseintl-light.woff2
/assets/fonts/suisseintl-light.woff
/assets/fonts/suisseintl-medium.woff2
/assets/fonts/suisseintl-medium.woff
/assets/fonts/suisseintl-thin.woff2
/assets/fonts/suisseintl-thin.woff
```

### 13.4 Video Files
```
/assets/video/intro.mp4
/assets/video/1-2.mp4
/assets/video/1-3.mp4
/assets/video/2-3.mp4
/assets/video/2-1.mp4
/assets/video/3-1.mp4
/assets/video/3-2.mp4
```

### 13.5 Image Assets
```
/assets/img/ehl_logo.png (Equal Housing Lender logo)
/apple-touch-icon.png
/favicon-32x32.png
/favicon-16x16.png
/safari-pinned-tab.svg
```

---

## 14. BROWSER COMPATIBILITY

### 14.1 Modern Browser Features Used
- ES6 Modules (`type="module"`)
- IntersectionObserver API
- MutationObserver API
- RequestAnimationFrame
- History API (pushState, replaceState)
- CSS Grid and Flexbox
- CSS Custom Properties (likely)

### 14.2 Legacy Browser Support
- `nomodule` script fallback
- Polyfills in legacy bundles
- Graceful degradation for animations
- Fallback fonts (Helvetica, Arial)

### 14.3 Tested Browsers (Inferred)
- Chrome/Edge (Chromium)
- Firefox
- Safari (iOS and macOS)
- IE11 (via legacy bundles)

---

## 15. DEVELOPMENT WORKFLOW (INFERRED)

### 15.1 Build Tools
- **Webpack** (evidenced by bundle structure and naming)
- **Babel** (for ES6+ transpilation)
- **PostCSS** (likely for CSS processing)
- **Asset hashing** for cache busting

### 15.2 Code Organization
```
src/
├── js/
│   ├── components/
│   │   ├── MainLoading.js
│   │   ├── AjaxLoading.js
│   │   ├── AjaxNavigation.js
│   │   ├── SmoothScroll.js
│   │   ├── ColorDetector.js
│   │   ├── VideoLazy.js
│   │   ├── NavToggle.js
│   │   └── Nav.js
│   ├── utils/
│   └── main.js
├── scss/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── main.scss
└── assets/
    ├── fonts/
    ├── video/
    └── img/
```

### 15.3 NPM Scripts (Likely)
```json
{
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development --watch",
    "serve": "webpack-dev-server"
  }
}
```

---

## 16. REPLICATION CHECKLIST

### Phase 1: Setup
- [ ] Initialize npm project
- [ ] Install Webpack, Babel, PostCSS
- [ ] Install GSAP (v2.1.3 or compatible)
- [ ] Set up module/nomodule build pipeline

### Phase 2: Assets
- [ ] License and install Suisse Intl font
- [ ] Create/source 7 background videos
- [ ] Generate favicon suite
- [ ] Create EHL logo asset

### Phase 3: Core Structure
- [ ] Build custom smooth scroll system
- [ ] Implement IntersectionObserver lazy loading
- [ ] Create GSAP animation timeline system
- [ ] Build AJAX navigation with History API

### Phase 4: Components
- [ ] MainLoading component with digit animation
- [ ] Full-screen navigation overlay
- [ ] Color detection system
- [ ] Video lazy loader
- [ ] Navigation toggle with animations

### Phase 5: Styling
- [ ] Convert CSS to SCSS modules
- [ ] Implement responsive breakpoints
- [ ] Create animation keyframes
- [ ] Build form styling system

### Phase 6: Integration
- [ ] Google Analytics integration
- [ ] reCAPTCHA implementation
- [ ] Sentry error tracking
- [ ] SEO meta tags and structured data

### Phase 7: Optimization
- [ ] Code splitting and lazy loading
- [ ] GPU acceleration optimizations
- [ ] Font subsetting and optimization
- [ ] Video compression and optimization

### Phase 8: Testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Accessibility audit
- [ ] Performance benchmarking

---

## 17. KEY TECHNICAL SPECIFICATIONS

### 17.1 Animation Performance Targets
- **Frame Rate:** 60 FPS maintained
- **Scroll Smoothness:** 8% easing factor (0.08)
- **Animation Duration:** 0.8s - 1.6s typical
- **Stagger Delay:** 0.1s between elements

### 17.2 Load Time Targets
- **Initial Paint:** < 1.5s
- **Full Page Load:** < 3s
- **Video Load:** Lazy, on-demand

### 17.3 Bundle Sizes (Minified)
- **Main CSS:** 130KB
- **Main JS:** ~50KB (estimated uncompressed)
- **Vendor JS:** ~200KB (GSAP + utilities)

---

## 18. UNIQUE IMPLEMENTATION DETAILS

### 18.1 Custom Logo Animation
The logo uses a sophisticated multi-part SVG animation:
- 4 rotating bars (top-left, top-right, bottom-right, bottom-left)
- Each bar has independent rotation origin and angle
- Stroke dash animations create drawing effect
- Text slides and colored stripes fade on hover
- All orchestrated via GSAP timeline

### 18.2 Navigation Rollover Effects
Desktop navigation items have elaborate hover states:
- Arrow slides from left with scale animation
- Sub-menu anchors stagger fade-in with vertical translation
- Unfocused items fade to 50% opacity
- Label opacity transitions create depth

### 18.3 Scroll Performance Trick
The smooth scroll doesn't actually animate scroll position—it:
1. Locks native scroll value
2. Translates content container with CSS transform
3. Syncs transform to scroll position with easing
4. Result: GPU-accelerated smooth scrolling

---

## 19. DEPENDENCIES & LICENSES

### Required Licenses
1. **GSAP Commercial License** (if commercial use)
2. **Suisse Intl Font License** (from Swiss Typefaces)
3. **Google Fonts** (Source Sans 3 - Open Font License)

### Third-Party Service Accounts Needed
1. Google Analytics account
2. Google reCAPTCHA site registration
3. Sentry account for error tracking

---

## 20. CONCLUSION & RECOMMENDATIONS

### What Makes This Site Unique
1. **No Framework Overhead** - Pure vanilla JS keeps bundle size small
2. **GSAP Mastery** - Professional-grade animations throughout
3. **Custom Scroll System** - Smooth scrolling without library dependencies
4. **Performance First** - Lazy loading and GPU acceleration everywhere

### Replication Difficulty: **High**
- Requires deep JavaScript knowledge (ES6+ modules)
- GSAP expertise essential
- Custom scroll system is complex
- Video optimization and lazy loading non-trivial
- Font licensing may be expensive

### Estimated Development Time
- **Experienced Developer:** 4-6 weeks
- **Intermediate Developer:** 8-12 weeks
- **Beginner:** Not recommended without mentorship

### Alternative Approaches
1. **Use a framework:** React + Framer Motion could replicate faster
2. **Use a scroll library:** Locomotive Scroll or Smooth Scrollbar
3. **Simplify animations:** Use CSS animations instead of GSAP

---

## APPENDIX A: CRITICAL CODE PATTERNS

### Lazy Video Loader
```javascript
class VideoLazy {
  constructor(element) {
    this.element = element;
    this.observer = new IntersectionObserver(
      this.onObserverChange.bind(this),
      { rootMargin: "500px 0px 500px 0px" }
    );
    this.observer.observe(this.element);
  }

  onObserverChange(entries) {
    if (entries[0].isIntersecting) {
      if (!this.element.src) {
        this.element.src = this.element.dataset.src;
      }
      const playPromise = this.element.play();
      if (playPromise) {
        playPromise.then(() => this.onLoaded())
                   .catch(() => this.showPoster());
      }
    } else {
      this.element.pause();
    }
  }

  onLoaded() {
    this.element.classList.add('is-loaded');
  }
}
```

### GSAP Timeline Pattern
```javascript
const timeline = new TimelineLite({
  onComplete: () => { /* callback */ }
})
.set(element, { visibility: "inherit" }, 0)
.fromTo(element, 1.5,
  { yPercent: -100, opacity: 0 },
  { yPercent: 0, opacity: 1, ease: CustomEase.easeInOut },
  0
)
.staggerFromTo(items, 1.2,
  { y: 80, rotation: 30, opacity: 0 },
  { y: 0, rotation: 0, opacity: 1, ease: Expo.easeOut },
  0.1, // stagger delay
  1    // start time
);
```

### Color Detection System
```javascript
class ColorDetector {
  constructor(element, targets) {
    this.targets = targets;
    this.color = "light";

    this.observer = new IntersectionObserver(
      this.onChange.bind(this),
      { rootMargin: this.calculateMargin() }
    );

    targets.forEach(target => this.observer.observe(target));
  }

  calculateMargin() {
    const rect = this.element.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    return `-${centerY}px 0px -${window.innerHeight - centerY}px 0px`;
  }

  onChange(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.setColor(entry.target.dataset.color);
      }
    });
  }
}
```

---

## APPENDIX B: RESOURCE URLS

All assets use relative paths from root:

**CSS:**
- `/assets/css/main.c3232c0585b7cf4f1b1b.css`

**JavaScript:**
- `/assets/js/vendors.9632e9d9d04342de239b.js`
- `/assets/js/scripts.8ca740228f748e2a466f.js`
- `/assets/js/vendors-legacy.67ff5449f8efc986963e.js`
- `/assets/js/scripts-legacy.22bec8a1259a832392a4.js`

**Fonts:**
- `/assets/fonts/suisseintl-{weight}.woff2`
- `https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@1,400;1,600`

**Videos:**
- `/assets/video/{name}.mp4` (7 files)

**External Scripts:**
- `https://www.googletagmanager.com/gtag/js?id=UA-63020337-3`
- `https://www.google.com/recaptcha/api.js`
- `https://browser.sentry-cdn.com/5.6.1/bundle.min.js`

---

**END OF TECHNICAL ANALYSIS**

*This document provides complete technical specifications for replicating nexbank.com. All information extracted via systematic analysis of production HTML, CSS, and JavaScript files.*
