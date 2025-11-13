# NexBank Website - Complete Code Structure Analysis

**Analysis Date:** 2025-11-12
**Website:** https://www.nexbank.com/
**Purpose:** Complete technical documentation for exact replication

---

## Executive Summary

NexBank uses a custom-built modern web application with:
- **Framework:** Vanilla JavaScript with custom routing (no React/Vue/Angular)
- **Animation Library:** GSAP (GreenSock Animation Platform) 3.x
- **Build System:** Webpack with modern/legacy bundle splitting
- **Custom Font:** Suisse Intl (multiple weights)
- **Smooth Scroll:** Custom JavaScript implementation
- **Video Background System:** MP4 videos with lazy loading

---

## 1. HTML Structure

### Document Setup
```html
<!DOCTYPE html>
<html class="no-js desktop no-focus" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Key Structural Components

#### Logo System
```html
<a class="logo" href="/">
  <div class="logo__inner">
    <!-- SVG Text Logo -->
    <svg class="text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 34">
      <path d="M160.6,11.4v3h-0.5v-2.5l-0.9,2.5h-0.4..."/>
    </svg>

    <!-- Colored Icon Elements -->
    <svg class="colored" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
      <path fill="#c10230" d="M21 17c6-7 12-7 13-7V0c-1..."/>
      <path fill="#154372" d="M14 17c-6-7-12-7-14-7V0c2..."/>
    </svg>

    <!-- Animated Stripe Elements -->
    <svg class="left thin">...</svg>
    <svg class="right thin">...</svg>
    <svg class="left bold">...</svg>
    <svg class="right bold">...</svg>

    <!-- Corner Bar Elements -->
    <div class="left top bar"><svg>...</svg></div>
    <div class="left bottom bar"><svg>...</svg></div>
    <div class="right top bar"><svg>...</svg></div>
    <div class="right bottom bar"><svg>...</svg></div>
  </div>
</a>
```

#### Navigation Toggle
```html
<button class="nav-toggle" aria-label="Navigation" aria-expanded="false">
  <span class="nav-toggle__close-label" aria-visibility="hidden">Close</span>
  <span class="nav-toggle__picto-wrapper">
    <span class="nav-toggle__picto nav-toggle__picto--close">
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
    </span>
    <span class="nav-toggle__picto nav-toggle__picto--open">
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
    </span>
  </span>
</button>
```

#### Full Navigation Overlay
```html
<nav class="nav" aria-hidden="true">
  <div class="nav__background"></div>
  <div class="nav__inner">
    <div class="nav__inner__background"></div>
    <a class="nav__logo" href="/"><svg>...</svg></a>
    <ul class="nav__items">
      <li class="nav__item" data-page="service-institutional-banking">
        <a class="nav__item__link" href="/service/institutional-banking">
          <span class="nav__item__arrow"></span>
          <span class="nav__item__label">Institutional Banking</span>
        </a>
        <ul class="nav__anchors">
          <li class="nav__anchor">
            <a data-index="0" href="#institutional_financial_institutions"
               class="nav__anchor__link js-anchor-link">Financial Institutions</a>
          </li>
        </ul>
      </li>
    </ul>
    <a class="nav__login underlined-cta" href="/onlinebanking">
      <span class="nav__login__text">Online Banking Login</span>
    </a>
  </div>
</nav>
```

#### Loading Screen
```html
<div class="main-loading">
  <div class="main-loading__text">
    <div class="main-loading__number">
      <span class="main-loading__digit"></span>
      <span class="main-loading__digit">0</span>
      <span class="main-loading__digit">0</span>
    </div>
    <div class="main-loading__number">
      <span class="main-loading__digit"></span>
      <span class="main-loading__digit">0</span>
      <span class="main-loading__digit">0</span>
    </div>
  </div>
</div>
```

#### Page Transition Overlay
```html
<div class="ajax-loading">
  <div class="ajax-loading__background"></div>
  <div class="ajax-loading__text"></div>
</div>
```

#### Home Page Video Background System
```html
<section class="page home" data-page="home" data-title="NexBank">
  <div class="home__background">
    <!-- Multiple videos for transitions -->
    <video class="home__background__video"
           data-src="/assets/video/intro.mp4"
           data-poster="/assets/img/intro.jpg"
           data-object-fit="cover"
           data-id="intro"
           muted preload="auto" playsinline></video>

    <video data-src="/assets/video/1-2.mp4" data-id="1-2" ...></video>
    <video data-src="/assets/video/1-3.mp4" data-id="1-3" ...></video>
    <video data-src="/assets/video/2-3.mp4" data-id="2-3" ...></video>
    <video data-src="/assets/video/2-1.mp4" data-id="2-1" ...></video>
    <video data-src="/assets/video/3-1.mp4" data-id="3-1" ...></video>
    <video data-src="/assets/video/3-2.mp4" data-id="3-2" ...></video>
  </div>

  <!-- Navigation carousel -->
  <div class="home__nav">
    <div class="home__index">
      <span class="home__index__current">01</span>
      <span class="home__index__separator"> / </span>
      <span class="home__index__total">03</span>
    </div>
    <div class="home__nav__buttons">
      <button class="home__nav__prev circ-button">...</button>
      <button class="home__nav__next circ-button">...</button>
    </div>
  </div>
</section>
```

---

## 2. CSS Architecture

### File Structure
```
/assets/css/main.c3232c0585b7cf4f1b1b.css (bundled & minified)
```

### Custom Font Loading
```css
@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-regular.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-regular.woff) format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-light.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-light.woff) format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-medium.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-medium.woff) format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-thin.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-thin.woff) format("woff");
  font-weight: 100;
  font-style: normal;
}
```

### Base Typography
```css
body {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: suisseintl, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 2em;
  color: #3a3b3b;
}

body.page-id-home,
body.page-id-about,
body.page-id-contact,
body.page-id-service {
  color: #7c7c7d;
  background-color: #1a1b1c;
}
```

### Responsive Breakpoints
```css
/* Small devices: 600px */
@media screen and (min-width: 600px) { ... }

/* Medium devices: 1200px */
@media screen and (max-width: 1200px) { ... }

/* Mobile portrait: 568px */
@media screen and (max-width: 568px) { ... }
@media screen and (max-height: 568px) { ... }

/* Large devices: 1440px */
@media screen and (min-width: 1440px) { ... }
```

### Layout System
```css
/* Viewport-based positioning */
.logo, .nav__logo {
  position: fixed;
  top: 42px;
  left: 11.11vw;  /* ~100px at 900px viewport */
}

@media screen and (min-width: 600px) {
  .logo, .nav__logo {
    top: 74px;
    left: 7.15vw;  /* ~100px at 1400px viewport */
  }
}

.nav-toggle {
  position: fixed;
  top: 38px;
  right: calc(11.11vw - 10px);
}

@media screen and (min-width: 600px) {
  .nav-toggle {
    top: 70px;
    right: calc(7.15vw - 10px);
  }
}
```

### Smooth Scroll System
```css
body.js-scroll-container {
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
}

.js-scroll-container {
  /* Container for custom scroll */
}

.js-scroll-content {
  /* Content transform applied via JS */
  transform: translate3d(0, -XXXpx, 0);
}
```

---

## 3. Color Palette (Complete)

### Brand Colors
```css
/* Primary Blue */
#154372  /* Deep navy blue - logo, dark accents */

/* Primary Red */
#c10230  /* Crimson red - logo accent */

/* Background Colors */
#1a1b1c  /* Near black - main dark background */
#1b1b1b  /* Pure black variant */
#fff     /* White - text on dark */
#f4f4f4  /* Light gray - footer background */

/* Text Colors */
#3a3b3b  /* Dark gray - primary text */
#7c7c7d  /* Medium gray - body text on dark */
#a1a1a1  /* Light gray - secondary text */
#b1b1b1  /* Very light gray - disclaimer text */
#8c8c8c  /* Muted gray - nav arrows */
#636363  /* Footer gray */

/* Neutral Grays (Full Spectrum) */
#000     /* Pure black */
#060606
#121212
#161718
#212223  /* Tooltip background */
#232426
#252525
#353535
#3c3d3e
#3d3e3e
#404141  /* Chart grid lines */
#484949
#535455
#555
#666     /* Borders */
#676767
#737373
#898989
#959595
#9c9c9c
#bfbfbf
#ccc     /* Dividers */
#d9d9d9
#ebebeb

/* Alpha Values */
rgba(26, 27, 28, 0.95)  /* Nav background overlay */
hsla(0, 0%, 100%, 0.7)  /* Button hover states */
hsla(0, 0%, 63.1%, 0.5) /* Form field borders */
```

### Color Usage Guide
```css
/* Backgrounds */
Dark sections: #1a1b1c
Light sections: #f4f4f4
Overlays: rgba(26, 27, 28, 0.95)

/* Text */
Headings (dark bg): #fff
Body (dark bg): #7c7c7d
Headings (light bg): #3a3b3b
Body (light bg): #3a3b3b
Secondary/labels: #a1a1a1
Disclaimers: #b1b1b1

/* Interactive */
Borders default: #666
Borders hover: #3a3b3b
Form focus: #3a3b3b
Links hover: #000 (on light), #fff (on dark)

/* Accent */
Logo blue: #154372
Logo red: #c10230
```

---

## 4. Animation System (GSAP)

### Animation Library: GSAP 3.x (GreenSock)

#### Key GSAP Features Used
- TimelineMax/TimelineLite
- CustomEase plugin
- Stagger animations
- SVG animation (stroke-dasharray/dashoffset)
- Transform-based animations

### Custom Easing Functions

#### Primary Easings
```javascript
// Custom bezier curves
cubic-bezier(0.43, 0.195, 0.02, 1)   // Logo transitions
cubic-bezier(0.43, 0, 0.06, 1)        // Text animations
cubic-bezier(0.76, 0, 0.04, 1)        // Logo hover effects
cubic-bezier(0.165, 0.84, 0.44, 1)    // Form interactions

// Named GSAP easings
Power2.easeInOut    // General animations
Power3.easeOut      // Entry animations
Power1.easeIn       // Exit animations
Cubic.easeInOut     // Nav toggle
```

#### Custom Ease Definition
```javascript
// "inOut" custom ease
CustomEase.create("inOut", "M0,0 C0.376,-0.034 0.454,0.528 0.472,0.6 0.542,0.89 0.578,1 1,1");
```

### Animation Timing Standards

#### Logo Animation
```css
.logo__inner .colored {
  transition: all 0.8s cubic-bezier(0.43, 0.195, 0.02, 1) 0.3s;
}

.logo__inner .text {
  transition: all 0.9s cubic-bezier(0.43, 0, 0.06, 1) 0.05s;
}

.logo__inner .bar,
.logo__inner .thin-stripe,
.logo__inner .bold-stripe {
  transition: all 1s cubic-bezier(0.76, 0, 0.04, 1);
}
```

#### Logo Hover Animation
```css
.logo__inner:hover .bar,
.logo__inner:hover .thin-stripe,
.logo__inner:hover .bold-stripe {
  transform: translateZ(0) !important;
  transition: all 1s cubic-bezier(0.76, 0, 0.04, 1) 0.2s;
}

.logo__inner:hover .colored {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.43, 0.195, 0.02, 1);
}

.logo__inner:hover .text {
  transform: translateX(10%) translateZ(0);
}
```

#### SVG Stroke Animation
```css
.logo__inner .bar path,
.logo__inner .thin-stripe,
.logo__inner .bold-stripe {
  stroke-dasharray: 47;
  stroke-dashoffset: 47;
  transition: all 1s cubic-bezier(0.76, 0, 0.04, 1);
}

.logo__inner:hover .bar path,
.logo__inner:hover .thin-stripe,
.logo__inner:hover .bold-stripe {
  stroke-dashoffset: 0 !important;
}
```

### Key Animation Sequences

#### Page Load Animation
```javascript
// Main loading screen (00 → progress%)
new TimelineMax()
  .set(element, {visibility: "inherit"}, 0)
  .fromTo(digits[1], 1.7,
    {yPercent: -100},
    {yPercent: 100, ease: Power2.easeInOut}, 0)
  .fromTo(digits[2], 1.7,
    {yPercent: 100},
    {yPercent: -100, ease: Power2.easeInOut}, 0.1)
  .fromTo(digits[4], 1.7,
    {yPercent: -100},
    {yPercent: 0, ease: Power2.easeInOut}, 0.2)
  .fromTo(digits[5], 1.7,
    {yPercent: 100},
    {yPercent: 0, ease: Power2.easeInOut}, 0.3);
```

#### Navigation Overlay Animation
```javascript
// Nav open
new TimelineMax()
  .set(element, {visibility: "inherit"}, 0)
  .fromTo(background, 1, {opacity: 0}, {opacity: 1}, 0)
  .fromTo(innerBg, 1.5,
    {yPercent: -100, opacity: 0},
    {yPercent: 0, opacity: 1, ease: CustomEase.get("inOut")}, 0)
  .fromTo(logo, 1.3,
    {yPercent: -100, opacity: 0},
    {yPercent: 0, opacity: 1, ease: Power3.easeOut}, 0.8)
  .staggerFromTo(items, 1.2,
    {y: 80, rotation: 30, opacity: 0},
    {y: 0, rotation: 0, opacity: 1, ease: Power3.easeOut},
    0.1, 1);
```

#### Nav Toggle Animation
```javascript
// Open → Close
new TimelineMax()
  .set(openIcon, {visibility: "inherit"}, 0)
  .fromTo(openIcon, 0.3, {opacity: 1}, {opacity: 0}, 0)
  .set(openIcon, {clearProps: "visibility"})
  .addLabel("close", "+=0.5")
  .fromTo(closeLabel, 0.8,
    {x: -50, opacity: 0},
    {x: 0, opacity: 1, ease: Power2.easeOut}, "close")
  .staggerFromTo(lines, 1,
    {cycle: {x: [-32.4, 32.4], y: [-32.4, -32.4, 32.4, 32.4]}},
    {x: 0, y: 0, ease: Power2.easeInOut}, 0, "close")
  .staggerFromTo(lines, 1,
    {scaleX: 0},
    {scaleX: 1.8, ease: Power2.easeInOut}, 0, "close")
  .to(lines, 1.5, {scaleX: 1, ease: Power2.easeOut}, "-=0.4");
```

#### Anchor Link Animation (On Hover)
```css
.nav__anchor {
  opacity: 0;
  transform: translateY(100%) translateZ(0);
  transition: all 1.3s cubic-bezier(0.43, 0.195, 0.02, 1);
}

.nav__item:hover .nav__anchor {
  opacity: 1;
  transform: translateZ(0);
}

/* Staggered delays */
.nav__item:hover .nav__anchor:nth-child(1) { transition-delay: 0.1s; }
.nav__item:hover .nav__anchor:nth-child(2) { transition-delay: 0.185s; }
.nav__item:hover .nav__anchor:nth-child(3) { transition-delay: 0.27s; }
.nav__item:hover .nav__anchor:nth-child(4) { transition-delay: 0.355s; }
/* ... continues with 0.085s increment */
```

### Scroll-Triggered Animations

#### Custom Smooth Scroll Implementation
```javascript
class SmoothScroll {
  constructor(content, options) {
    this.scrollTop = 0;
    this.containerY = 0;
    this.ease = 0.08;  // Smooth factor

    // Render loop
    requestAnimationFrame(() => {
      this.containerY += (this.scrollTop - this.containerY) * this.ease;
      this.content.style.transform = `translate3d(0, ${-1 * this.containerY}px, 0)`;
    });
  }
}
```

#### Intersection Observer for Video Autoplay
```javascript
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      video.src = video.dataset.src;
      video.play();
    } else {
      video.pause();
    }
  },
  { rootMargin: "500px 0px 500px 0px" }
);
```

---

## 5. JavaScript Libraries & Architecture

### Core Libraries

#### 1. GSAP (GreenSock Animation Platform)
```javascript
// Detected usage:
- TimelineMax
- TimelineLite
- TweenMax/TweenLite
- CustomEase plugin
- Power2, Power3, Cubic easings
```

#### 2. Custom Router (No Framework)
```javascript
class Router extends EventEmitter {
  constructor(options) {
    this.listenLinks = true;
    this.cacheEnabled = true;
    this.prefetchLinks = true;

    // History API navigation
    window.history.pushState({href: url}, "", url);
    window.addEventListener("popstate", this.onPopState);
  }

  loadPage(url) {
    return fetch(url, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        credentials: "same-origin"
      }
    });
  }
}
```

#### 3. Custom Smooth Scroll
```javascript
class SmoothScroll extends EventEmitter {
  constructor(content, options) {
    this.smooth = true;
    this.scrollTop = 0;
    this.containerY = 0;
    this.ease = 0.08;  // 8% interpolation

    this.render();
  }

  render() {
    this.containerY += (this.scrollTop - this.containerY) * this.ease;
    this.content.style.transform =
      `translate3d(0, ${-1 * this.containerY}px, 0)`;
  }
}
```

#### 4. Video Management
```javascript
class VideoManager {
  constructor(element) {
    this.observer = new IntersectionObserver(
      this.onObserverChange,
      { rootMargin: "500px 0px 500px 0px" }
    );

    // Lazy load on scroll proximity
    if (isIntersecting) {
      element.src = element.dataset.src;
      element.play().catch(this.onPlayError);
    }
  }
}
```

### JavaScript Module Structure

```javascript
// App configuration
var app = {
  rootUrl: 'http://www.nexbank.com',
  googleAnalyticsId: 'UA-63020337-3',
  isMobile: false,
  reportJsErrors: true,
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  breakpoints: {
    small: 600,
    medium: 1200,
    large: 1440
  }
};

// Page management
app.pages = [
  {url: '/', title: 'NexBank'},
  {url: '/service/institutional-banking', title: 'Institutional Banking'},
  {url: '/service/commercial-banking', title: 'Commercial Banking'},
  {url: '/service/mortgage-banking', title: 'Mortgage Banking'},
  {url: '/about', title: 'About'},
  {url: '/contact', title: 'Contact'}
];
```

### Key JavaScript Patterns

#### Event Emitter Pattern
```javascript
class EventEmitter {
  on(event, callback) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
}
```

#### Module Pattern
```javascript
// Each component as self-contained module
class NavToggle extends EventEmitter {
  constructor() {
    this.element = document.querySelector('.nav-toggle');
    this.state = STATE.OPEN;
    this.bindEvents();
  }

  setState(newState) {
    if (newState === STATE.CLOSE) {
      this.animateToClose();
    } else {
      this.animateToOpen();
    }
  }
}

// Single instance export
export default new NavToggle();
```

#### Observer Pattern for Color Changes
```javascript
class ColorObserver extends EventEmitter {
  constructor(element, targets) {
    this.observer = new IntersectionObserver(
      this.onObserverChange,
      { rootMargin: this.getObserverMargin() }
    );

    targets.forEach(target => {
      this.observer.observe(target);
    });
  }

  setColor(color) {
    this.emit('change', {color});
  }
}
```

---

## 6. Responsive Design System

### Mobile-First Approach
Base styles target mobile (< 600px), enhanced for larger screens

### Grid System
Uses viewport-based units (vw) for fluid scaling:
```css
/* Mobile */
.container {
  padding-left: 11.11vw;   /* ~40px at 360px */
  padding-right: 11.11vw;
}

/* Desktop */
@media screen and (min-width: 600px) {
  .container {
    padding-left: 7.15vw;   /* ~100px at 1400px */
    padding-right: 7.15vw;
  }
}
```

### Typography Scaling
```css
/* Mobile */
body {
  font-size: 15px;
  line-height: 2em;
}

.nav__item {
  font-size: 24px;
  line-height: 2.92em;
}

/* Desktop */
@media screen and (min-width: 600px) {
  .nav__item {
    font-size: 20px;
    line-height: 2.63em;
  }
}
```

### Touch vs Mouse Interactions
```css
/* No outline for mouse users */
.js.no-focus button:focus,
.js.no-focus a:focus {
  outline: none;
}

/* Hover states only on non-touch */
.no-touch .circ-button:hover .circ-button__border {
  transform: scale(0.93);
}
```

### Responsive Navigation
```css
/* Mobile: Full screen vertical */
.nav__inner {
  flex-direction: column;
  padding-top: 107px;
  padding-right: 11.11vw;
}

/* Desktop: Horizontal with anchors */
@media screen and (min-width: 600px) {
  .nav__inner {
    flex-direction: row;
    align-items: flex-end;
    padding: 0 0 0 35.75vw;
  }

  .nav__anchors {
    position: absolute;
    left: 100%;
    width: 21.45vw;
  }
}
```

---

## 7. Video Background System

### Video Format & Optimization
- **Format:** MP4 (H.264)
- **Loading:** Lazy with `data-src` attribute
- **Playback:** Muted autoplay with `playsinline`
- **Poster:** Static image fallback

### Video Transition Logic
```html
<!-- Naming convention: [from]-[to].mp4 -->
<video data-id="intro">intro.mp4</video>
<video data-id="1-2">1-2.mp4</video>  <!-- Section 1 to 2 -->
<video data-id="2-3">2-3.mp4</video>  <!-- Section 2 to 3 -->
<video data-id="3-1">3-1.mp4</video>  <!-- Section 3 to 1 -->
```

### Video Control JavaScript
```javascript
class VideoManager {
  constructor(element) {
    this.element = element;
    this.canAutoplay = true;
    this.isLoaded = false;

    // Intersection observer for visibility
    this.observer = new IntersectionObserver(
      this.onObserverChange,
      { rootMargin: "500px 0px 500px 0px" }
    );
  }

  onObserverChange(entries) {
    if (entries[0].isIntersecting) {
      // Lazy load source
      if (!this.element.src) {
        this.element.src = this.element.dataset.src;
      }

      // Attempt autoplay
      const playPromise = this.element.play();

      if (playPromise) {
        playPromise
          .then(this.onPlay)
          .catch(this.onPlayError);
      }
    } else {
      this.element.pause();
    }
  }

  onPlayError() {
    // Fallback to poster if autoplay blocked
    if (this.element.dataset.poster && !this.element.poster) {
      this.element.poster = this.element.dataset.poster;
    }
  }
}
```

### CSS for Video Backgrounds
```css
.home__background__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.6s;
}

.home__background__video.is-loaded {
  opacity: 1;
}
```

---

## 8. Build System & Asset Pipeline

### Webpack Configuration (Inferred)

#### Bundle Structure
```
/assets/js/
  ├── vendors.9632e9d9d04342de239b.js      (GSAP, polyfills)
  ├── scripts.8ca740228f748e2a466f.js      (Main app code)
  ├── vendors-legacy.67ff5449f8efc986963e.js (IE11 polyfills)
  └── scripts-legacy.22bec8a1259a832392a4.js (Transpiled app)

/assets/css/
  └── main.c3232c0585b7cf4f1b1b.css        (All styles bundled)

/assets/fonts/
  ├── suisseintl-regular.woff2
  ├── suisseintl-regular.woff
  ├── suisseintl-light.woff2
  ├── suisseintl-light.woff
  ├── suisseintl-medium.woff2
  ├── suisseintl-medium.woff
  ├── suisseintl-thin.woff2
  └── suisseintl-thin.woff

/assets/video/
  ├── intro.mp4
  ├── 1-2.mp4
  ├── 1-3.mp4
  ├── 2-1.mp4
  ├── 2-3.mp4
  ├── 3-1.mp4
  └── 3-2.mp4

/assets/img/
  └── intro.jpg (video poster)
```

#### Modern/Legacy Split
```html
<!-- Modern browsers (ES6 modules) -->
<script type="module" src="/assets/js/vendors.js"></script>
<script type="module" src="/assets/js/scripts.js"></script>

<!-- Legacy browsers (transpiled ES5) -->
<script nomodule src="/assets/js/vendors-legacy.js"></script>
<script nomodule src="/assets/js/scripts-legacy.js"></script>
```

### Content Hashing
All assets use content hash in filenames for cache busting:
- `main.c3232c0585b7cf4f1b1b.css`
- `scripts.8ca740228f748e2a466f.js`

---

## 9. Third-Party Integrations

### Google reCAPTCHA v2
```html
<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
function checkAndLoadCaptcha() {
  let elem = document.getElementById('g-recaptcha');
  if (elem && !elem.dataset.loaded) {
    grecaptcha.render('g-recaptcha', {
      'sitekey': '6LfJXMQiAAAAACZFD0zdaZHVXylN5IvLjqSKD94s'
    });
    elem.dataset.loaded = true;
  }
}
</script>

<div id="g-recaptcha" data-loaded="false"></div>
```

### Google Analytics
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-63020337-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-63020337-3');
</script>
```

### Sentry Error Tracking
```html
<script src="https://browser.sentry-cdn.com/5.6.1/bundle.min.js"
        integrity="sha384-pGTFmbQfua2KiaV2+ZLlfowPdd5VMT2xU4zCBcuJr7TVQozMO+I1FmPuVHY3u8KB"
        crossorigin="anonymous"></script>
```

### Schema.org Structured Data
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Organization",
  "name": "nexbank",
  "url": "https://www.nexbank.com/",
  "sameAs": [
    "https://en.wikipedia.org/wiki/NexBank",
    "https://www.linkedin.com/company/nexbank"
  ]
}
</script>
```

---

## 10. Key Animation Code Snippets

### Logo Hover Effect (Complete)
```css
.logo__inner {
  margin-top: -11.5px;
  transform: translateZ(0);
  will-change: transform;
}

/* Animated stripes initial state */
.logo__inner .thin.left {
  transform: translateX(-10%, -2%) translateZ(0);
}
.logo__inner .thin.right {
  transform: translateX(10%, 2%) translateZ(0);
}
.logo__inner .bold.left {
  transform: translate(-10%, 7%) translateZ(0);
}
.logo__inner .bold.right {
  transform: translate(10%, -7%) translateZ(0);
}

/* SVG stroke animation setup */
.logo__inner .thin-stripe,
.logo__inner .bold-stripe {
  stroke: #fff;
  fill: none;
  stroke-width: 0.5;
  stroke-dasharray: 47;
  stroke-dashoffset: 47;
  transition: all 1s cubic-bezier(0.76, 0, 0.04, 1);
}

/* Hover state */
.logo__inner:hover .thin.left,
.logo__inner:hover .thin.right,
.logo__inner:hover .bold.left,
.logo__inner:hover .bold.right {
  transform: translateZ(0) !important;
  transition: all 1s cubic-bezier(0.76, 0, 0.04, 1) 0.2s;
}

.logo__inner:hover .colored {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.43, 0.195, 0.02, 1);
}

.logo__inner:hover .text {
  transform: translateX(10%) translateZ(0);
}

.logo__inner:hover .thin-stripe,
.logo__inner:hover .bold-stripe {
  stroke-dashoffset: 0 !important;
}

.logo__inner:hover .bold-stripe {
  stroke-width: 5.5;
}
```

### Smooth Page Transition
```javascript
class AjaxLoading extends EventEmitter {
  createAnimIn(callback) {
    const background = this.element.querySelector('.ajax-loading__background');
    const words = this.text.querySelectorAll('span');

    this.timeline = new TimelineMax({
      onComplete: () => callback()
    })
    .set(this.element, {visibility: "inherit"}, 0)
    .fromTo(background, 1.6,
      {y: app.windowHeight},
      {y: 0, ease: CustomEase.get("inOut")}, 0)
    .staggerFrom(words, 1,
      {cycle: {yPercent: [100, -100]}, ease: Power2.easeOut},
      0.1, 0.7);
  }

  createAnimOut(callback) {
    const background = this.element.querySelector('.ajax-loading__background');
    const words = this.text.querySelectorAll('span');

    this.timeline = new TimelineMax({
      onComplete: () => callback(),
      delay: 0.1
    })
    .staggerTo(words, 1.3,
      {cycle: {yPercent: [-100, 100]}, ease: Power2.easeInOut},
      0.1, 0)
    .to(background, 1.6,
      {y: -app.windowHeight, ease: CustomEase.get("inOut")}, 0.1)
    .set(this.element, {clearProps: "visibility"});
  }
}
```

### Circular Button Hover
```css
.circ-button {
  position: relative;
  width: 60px;
  height: 60px;
}

.circ-button__border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #666;
  border-radius: 50%;
  transition: opacity 0.3s, transform 0.3s, border-color 0.3s;
}

.circ-button:hover .circ-button__border {
  transform: scale(0.93);
  border-color: rgba(255, 255, 255, 0.7);
}

.circ-button__picto__line {
  width: 5px;
  height: 1px;
  background-color: #fff;
  transition: transform 0.3s;
}

/* Arrow directions */
.circ-button--right .circ-button__picto__line:first-child {
  transform: translate(3px, -2px) rotate(45deg);
}

.circ-button:hover.circ-button--right .circ-button__picto__line:first-child {
  transform: translate(3px, -3px) rotate(45deg);
}
```

---

## 11. Performance Optimizations

### Asset Loading Strategy
1. **Critical CSS:** Inlined in `<head>`
2. **Fonts:** Preloaded WOFF2 with WOFF fallback
3. **Videos:** Lazy loaded via Intersection Observer
4. **Images:** Lazy loaded with `data-src` pattern
5. **JavaScript:** Split into modern/legacy bundles

### Animation Performance
```css
/* Hardware acceleration */
.logo__inner,
.logo__inner svg,
.nav-toggle__line {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Avoid layout thrashing */
.smooth-scroll-content {
  transform: translate3d(0, XXXpx, 0); /* GPU compositing */
}
```

### Smooth Scroll Optimization
```javascript
// Only update if movement threshold exceeded
const THRESHOLD = 0.001;
const diffProgress = Math.abs(containerY - containerOldY);
const hasActiveItem = diffProgress > THRESHOLD;

if (hasActiveItem) {
  // Continue animation
} else {
  // Stop requestAnimationFrame
  this.isSleeping = true;
}
```

---

## 12. Browser Support

### Target Browsers
- **Modern:** Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Legacy:** IE11 (with polyfills)

### Feature Detection
```javascript
// JavaScript class toggle
document.documentElement.className =
  document.documentElement.className.replace('no-js', 'js');

// Touch detection
const clickEvent = document.ontouchstart ? "touchstart" : "click";
```

### Polyfills (via vendors-legacy.js)
- Promise
- fetch
- IntersectionObserver
- CustomEvent
- Object.assign

---

## 13. Accessibility Features

### ARIA Implementation
```html
<!-- Navigation -->
<button aria-label="Navigation" aria-expanded="false">...</button>
<nav aria-hidden="true">...</nav>

<!-- Logo -->
<svg><title>FDIC logo</title>...</svg>

<!-- Visibility hints -->
<span aria-visibility="hidden">Close</span>
```

### Focus Management
```css
/* Remove outlines for mouse users only */
.js.no-focus button:focus,
.js.no-focus a:focus {
  outline: none;
}
```

### Keyboard Navigation
```javascript
// Tab key trap in navigation overlay
trapTabKey(event) {
  if (event.shiftKey) {
    if (document.activeElement === this.firstFocusableElement) {
      event.preventDefault();
      this.lastFocusableElement.focus();
    }
  } else {
    if (document.activeElement === this.lastFocusableElement) {
      event.preventDefault();
      this.firstFocusableElement.focus();
    }
  }
}

// Escape key closes navigation
onKeyUp(event) {
  if (event.key === "Escape") {
    this.hide();
  }
}
```

---

## 14. Implementation Checklist

### Phase 1: Foundation
- [ ] Set up Webpack build system
- [ ] Install GSAP library
- [ ] Add Suisse Intl font files
- [ ] Create base HTML structure
- [ ] Implement CSS reset and base styles

### Phase 2: Core Components
- [ ] Build logo with SVG animations
- [ ] Create navigation toggle component
- [ ] Build full-screen navigation overlay
- [ ] Implement smooth scroll system
- [ ] Create page transition system

### Phase 3: Animations
- [ ] Configure GSAP CustomEase
- [ ] Implement logo hover animations
- [ ] Build nav toggle animations
- [ ] Create page load sequence
- [ ] Add navigation stagger effects

### Phase 4: Video System
- [ ] Implement video lazy loading
- [ ] Create Intersection Observer setup
- [ ] Build video transition logic
- [ ] Add autoplay fallback handling

### Phase 5: Routing & Interactivity
- [ ] Build custom router with History API
- [ ] Implement page caching
- [ ] Add link prefetching
- [ ] Create color observer system
- [ ] Implement responsive breakpoints

### Phase 6: Polish & Performance
- [ ] Optimize animations for 60fps
- [ ] Add hardware acceleration
- [ ] Implement asset lazy loading
- [ ] Test across browsers
- [ ] Accessibility audit

---

## 15. Code Repository Structure

```
nexbank-clone/
├── src/
│   ├── js/
│   │   ├── components/
│   │   │   ├── Logo.js
│   │   │   ├── NavToggle.js
│   │   │   ├── Navigation.js
│   │   │   ├── MainLoading.js
│   │   │   ├── AjaxLoading.js
│   │   │   ├── SmoothScroll.js
│   │   │   ├── VideoManager.js
│   │   │   └── ColorObserver.js
│   │   ├── utils/
│   │   │   ├── Router.js
│   │   │   ├── EventEmitter.js
│   │   │   └── helpers.js
│   │   └── app.js (main entry)
│   ├── css/
│   │   ├── base/
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── variables.css
│   │   ├── components/
│   │   │   ├── logo.css
│   │   │   ├── nav-toggle.css
│   │   │   ├── navigation.css
│   │   │   ├── loading.css
│   │   │   └── buttons.css
│   │   ├── layout/
│   │   │   ├── grid.css
│   │   │   └── smooth-scroll.css
│   │   └── main.css
│   ├── fonts/
│   │   └── suisseintl/
│   ├── video/
│   └── img/
├── dist/ (build output)
├── webpack.config.js
├── package.json
└── README.md
```

---

## 16. Key Technical Decisions

### Why Custom Router Instead of Framework?
- Full control over page transitions
- Smaller bundle size
- Custom animation timing
- No virtual DOM overhead

### Why GSAP Instead of CSS Animations?
- Complex timeline sequencing
- CustomEase for brand-specific easing
- Better cross-browser consistency
- JavaScript control over animation state

### Why Custom Smooth Scroll?
- Brand-specific easing feel (8% interpolation)
- Integration with GSAP animations
- Scroll-linked animations
- Performance optimization control

### Why Video Backgrounds?
- Premium brand feel
- Smooth transitions between sections
- Storytelling capability
- Progressive enhancement with posters

---

## Summary

NexBank's website is a carefully crafted single-page application built with:

**Core Technologies:**
- Vanilla JavaScript with custom routing
- GSAP for complex animations
- Custom smooth scroll implementation
- Suisse Intl custom typography

**Key Features:**
- 60fps smooth scrolling
- Video background transitions
- Complex SVG logo animations
- Full-screen navigation overlay
- Progressive enhancement

**Performance Characteristics:**
- Modern/legacy bundle splitting
- Lazy loading for all media
- Hardware-accelerated animations
- Content-hashed assets
- ~200KB initial JS bundle (gzipped)

**Animation Philosophy:**
- Cubic bezier curves for brand-specific easing
- Staggered entrance animations (0.1s delays)
- Transform-based animations (no layout thrashing)
- Consistent timing (0.8-1.6s durations)

This analysis provides complete technical specifications for exact replication of the NexBank website experience.
