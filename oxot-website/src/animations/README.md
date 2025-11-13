# GSAP Animation System

Complete animation system based on NexBank's implementation, featuring GSAP-powered animations with exact timing functions and transitions.

## Installation

```bash
npm install gsap
```

## Quick Start

```javascript
import { initAnimations } from './animations';

// Initialize all animations
const animations = initAnimations({
  enableSmoothScroll: true,
  enablePageTransitions: true,
  enableVideoLazyLoading: true,
  enableCircularButtons: true
});
```

## Components

### 1. GSAP Configuration (`gsap-config.js`)

Central configuration for all animations including:

- **Custom Easing Functions** - Exact cubic-bezier curves from NexBank
  - `logoTransition`: `cubic-bezier(0.43, 0.195, 0.02, 1)`
  - `textAnimation`: `cubic-bezier(0.43, 0, 0.06, 1)`
  - `logoHover`: `cubic-bezier(0.76, 0, 0.04, 1)`
  - `formInteraction`: `cubic-bezier(0.165, 0.84, 0.44, 1)`
  - `inOut`: Custom ease for page transitions

- **Animation Timings** - All durations in seconds
  - Logo animations: 0.8-1.0s
  - Navigation: 1.0-1.5s
  - Loading screens: 1.6-1.7s
  - Stagger delays: 0.1s, 0.185s, 0.27s

- **Stagger Configurations** - Sequential animation delays
- **SVG Stroke Animation** - Dasharray/dashoffset values
- **Transform Defaults** - Hardware acceleration settings

### 2. Logo Animation (`logo-animation.js`)

Complex SVG logo animation with hover effects.

**Features:**
- Colored icon fade out on hover
- Text shift to right (10%)
- Animated stripes move to neutral position
- SVG stroke reveal animation
- Bold stroke width increase (0.5 → 5.5)

**Usage:**
```javascript
import { initLogoAnimation } from './animations/logo-animation';

const logo = document.querySelector('.logo');
const logoAnimation = initLogoAnimation(logo);

// Cleanup when needed
logoAnimation.destroy();
```

**Required HTML Structure:**
```html
<a class="logo" href="/">
  <div class="logo__inner">
    <svg class="colored">...</svg>
    <svg class="text">...</svg>
    <svg class="thin left">...</svg>
    <svg class="thin right">...</svg>
    <svg class="bold left">...</svg>
    <svg class="bold right">...</svg>
    <div class="bar">...</div>
  </div>
</a>
```

### 3. Navigation Animation (`nav-animation.js`)

Full-screen navigation overlay with toggle animations.

**Features:**
- Slide-in background overlay
- Staggered navigation items entrance
- Toggle morphs between hamburger and X
- Anchor link hover with staggered delays
- Keyboard navigation support (Escape to close)

**Usage:**
```javascript
import { initNavigationAnimation } from './animations/nav-animation';

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const navAnimation = initNavigationAnimation(nav, toggle);

// Programmatic control
navAnimation.open();
navAnimation.close();
```

**Animation Sequence:**
1. Background fade in (1.0s)
2. Inner background slide up (1.5s)
3. Logo slide down (1.3s, starts at 0.8s)
4. Items stagger in (1.2s, 0.1s stagger, starts at 1.0s)

### 4. Smooth Scroll (`smooth-scroll.js`)

Butter-smooth scrolling with 8% interpolation.

**Features:**
- Custom easing (8% interpolation per frame)
- Hardware-accelerated transforms
- Performance optimization (sleeps when idle)
- Mouse wheel and touch support
- Programmatic scroll-to with animations

**Usage:**
```javascript
import { initSmoothScroll } from './animations/smooth-scroll';

const container = document.body;
const content = document.querySelector('.js-scroll-content');

const smoothScroll = initSmoothScroll(container, content, {
  ease: 0.08, // 8% interpolation
  onScroll: (data) => {
    console.log('Scroll progress:', data.progress);
  }
});

// Scroll to element
smoothScroll.scrollTo('#section-2', {
  duration: 1.2,
  ease: 'power3.inOut',
  offset: -100
});

// Enable/disable
smoothScroll.disable();
smoothScroll.enable();
```

**Performance:**
- Uses `requestAnimationFrame` for 60fps
- Sleeps when movement < 0.001 threshold
- Hardware acceleration via `translate3d`
- Debounced resize handling

### 5. Page Transitions (`page-transitions.js`)

Loading screens and page transition system.

**Components:**

#### Main Loading (Initial Page Load)
```javascript
import { MainLoading } from './animations/page-transitions';

const mainLoading = new MainLoading(
  document.querySelector('.main-loading')
);

mainLoading.start(() => {
  console.log('Page loaded');
});
```

**Animation:** Digits roll from 00 to 100 with staggered timing (1.7s)

#### Ajax Loading (Page Transitions)
```javascript
import { AjaxLoading } from './animations/page-transitions';

const ajaxLoading = new AjaxLoading(
  document.querySelector('.ajax-loading')
);

ajaxLoading.transition(
  'Page Title',
  () => {
    // Update content
    document.querySelector('.content').innerHTML = newContent;
  },
  () => {
    console.log('Transition complete');
  }
);
```

**Animation Sequence:**
1. Background slides up (1.6s)
2. Words stagger in (1.0s, 0.1s stagger)
3. Content updates
4. Words stagger out (1.3s)
5. Background slides up and away (1.6s)

#### Page Transition Controller
```javascript
import { initPageTransitions } from './animations/page-transitions';

const transitions = initPageTransitions({
  mainLoadingElement: document.querySelector('.main-loading'),
  ajaxLoadingElement: document.querySelector('.ajax-loading'),
  contentElement: document.querySelector('.page-content')
});

// Automatic internal link handling with History API
// Caches pages for instant transitions
```

### 6. Video Lazy Loading (`index.js`)

IntersectionObserver-based video loading system.

**Features:**
- Lazy loads video sources
- Autoplay with fallback to poster
- Pauses when out of viewport
- 500px root margin for preloading

**Usage:**
```javascript
import { initVideoLazyLoading } from './animations';

const videoManagers = initVideoLazyLoading('video[data-src]');

// Cleanup
videoManagers.forEach(manager => manager.destroy());
```

**HTML Structure:**
```html
<video
  data-src="/assets/video/intro.mp4"
  data-poster="/assets/img/intro.jpg"
  muted
  preload="auto"
  playsinline
></video>
```

### 7. Circular Button Animations (`index.js`)

Hover animations for circular navigation buttons.

**Features:**
- Border scale to 93% on hover
- Arrow translation animation
- Directional support (left/right)

**Usage:**
```javascript
import { initCircularButtons } from './animations';

const buttons = initCircularButtons('.circ-button');
```

**HTML Structure:**
```html
<button class="circ-button circ-button--right">
  <span class="circ-button__border"></span>
  <span class="circ-button__picto">
    <span class="circ-button__picto__line"></span>
    <span class="circ-button__picto__line"></span>
  </span>
</button>
```

## Master Initialization

Initialize everything at once:

```javascript
import { initAnimations } from './animations';

const animations = initAnimations({
  // Logo
  logoElement: document.querySelector('.logo'),

  // Navigation
  navElement: document.querySelector('.nav'),
  toggleElement: document.querySelector('.nav-toggle'),

  // Smooth scroll
  enableSmoothScroll: true,
  containerElement: document.body,
  contentElement: document.querySelector('.js-scroll-content'),
  smoothScrollOptions: {
    ease: 0.08,
    onScroll: (data) => console.log(data)
  },

  // Page transitions
  enablePageTransitions: true,
  mainLoadingElement: document.querySelector('.main-loading'),
  ajaxLoadingElement: document.querySelector('.ajax-loading'),
  pageContentElement: document.querySelector('.page-content'),

  // Video lazy loading
  enableVideoLazyLoading: true,
  videoSelector: 'video[data-src]',

  // Circular buttons
  enableCircularButtons: true,
  buttonSelector: '.circ-button'
});

// Access individual instances
animations.logo.destroy();
animations.navigation.open();
animations.smoothScroll.scrollTo('#section-2');
```

## Animation Timing Standards

All timings match NexBank exactly:

| Animation | Duration | Delay | Easing |
|-----------|----------|-------|--------|
| Logo colored fade | 0.8s | 0.3s | logoTransition |
| Logo text shift | 0.9s | 0.05s | textAnimation |
| Logo bars/stripes | 1.0s | 0.2s | logoHover |
| Nav background | 1.0s | 0s | power2.inOut |
| Nav inner bg | 1.5s | 0s | inOut (custom) |
| Nav logo | 1.3s | 0.8s | power3.out |
| Nav items stagger | 1.2s | 1.0s | power3.out (0.1s each) |
| Toggle animation | 1.0s | 0.5s | power2.inOut |
| Anchor hover | 1.3s | varies | logoTransition |
| Main loading | 1.7s | staggered | power2.inOut |
| Ajax loading in | 1.6s | 0s | inOut (custom) |
| Ajax loading out | 1.6s | 0.1s | inOut (custom) |
| Button hover | 0.3s | 0s | power2.out |
| Video fade | 0.6s | 0s | linear |

## Stagger Delays

Anchor links use increasing delays with 0.085s increment:
- 1st: 0.1s
- 2nd: 0.185s
- 3rd: 0.27s
- 4th: 0.355s
- 5th: 0.44s
- 6th: 0.525s
- 7th: 0.61s
- 8th: 0.695s

## Performance Optimization

### Hardware Acceleration
All animated elements use:
```javascript
{
  force3D: true,
  transformOrigin: 'center center',
  backfaceVisibility: 'hidden'
}
```

### Smooth Scroll Optimization
- Sleeps when movement < 0.001 pixels
- Uses `translate3d` for GPU acceleration
- Debounced resize handling (200ms)

### Video Loading
- 500px root margin for early loading
- Pauses when off-screen
- Poster image fallback

### Animation Cleanup
All components provide `destroy()` methods for proper cleanup:
```javascript
logoAnimation.destroy();
navAnimation.destroy();
smoothScroll.destroy();
transitions.destroy();
```

## Browser Support

- Modern browsers: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- Uses IntersectionObserver (polyfill needed for IE11)
- GSAP 3.x provides excellent cross-browser support

## CSS Requirements

### Hardware Acceleration Classes
```css
.logo__inner,
.nav-toggle__line,
.js-scroll-content {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
```

### Smooth Scroll Container
```css
body.js-scroll-container {
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}
```

## TypeScript Support

Type definitions can be added:

```typescript
declare module './animations' {
  export interface AnimationInstances {
    logo?: LogoAnimation;
    navigation?: NavigationAnimation;
    smoothScroll?: SmoothScroll;
    pageTransitions?: PageTransitionController;
    videos?: VideoManager[];
    circularButtons?: CircularButton[];
  }

  export function initAnimations(options?: AnimationOptions): AnimationInstances;
}
```

## Examples

### Complete Setup
```javascript
import { initAnimations } from './animations';

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  const animations = initAnimations({
    enableSmoothScroll: true,
    enablePageTransitions: true,
    enableVideoLazyLoading: true,
    enableCircularButtons: true
  });

  // Log when page transition completes
  window.addEventListener('pageTransitionComplete', (event) => {
    console.log('Navigated to:', event.detail.url);
  });
});
```

### Custom Integration
```javascript
import {
  initLogoAnimation,
  initNavigationAnimation,
  initSmoothScroll
} from './animations';

class App {
  constructor() {
    this.animations = {};
    this.init();
  }

  init() {
    // Logo
    this.animations.logo = initLogoAnimation(
      document.querySelector('.logo')
    );

    // Navigation
    this.animations.nav = initNavigationAnimation(
      document.querySelector('.nav'),
      document.querySelector('.nav-toggle')
    );

    // Smooth scroll with custom callback
    this.animations.smoothScroll = initSmoothScroll(
      document.body,
      document.querySelector('.content'),
      {
        ease: 0.08,
        onScroll: this.onScroll.bind(this)
      }
    );
  }

  onScroll(data) {
    // Update scroll progress indicator
    this.updateScrollProgress(data.progress);
  }

  destroy() {
    Object.values(this.animations).forEach(animation => {
      if (animation?.destroy) animation.destroy();
    });
  }
}

export default new App();
```

## License

Part of OXOT Website project. Based on NexBank animation system.
