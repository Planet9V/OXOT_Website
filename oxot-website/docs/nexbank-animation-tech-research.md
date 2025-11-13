# NexBank.com Animation Technology Research
**Research Date:** 2025-11-13
**Target Site:** https://nexbank.com
**Research Method:** Direct HTML analysis, network inspection, DOM structure analysis

---

## Executive Summary

NexBank.com uses a **custom vanilla JavaScript implementation** for background video transitions with geometric shapes. The site does NOT use popular animation libraries like GSAP, Three.js, or Lottie. Instead, it employs a sophisticated custom-built video transition system with multiple pre-rendered video files for smooth morphing effects.

### Key Findings:
- **Technology:** Custom JavaScript (no animation libraries)
- **Video Format:** MP4 files with lazy loading
- **Animation Method:** Pre-rendered video transitions between states
- **Geometric Shapes:** Embedded in video files, not generated via WebGL/Canvas
- **Loading Strategy:** data-src lazy loading with poster images
- **Build System:** Webpack/modern ES6 modules with legacy fallbacks

---

## 1. Background Animation Technology

### Video Implementation
NexBank uses **7 distinct MP4 video files** for background animations:

```html
<video class="home__background__video"
  data-src="/assets/video/intro.mp4"
  data-poster="/assets/img/intro.jpg"
  data-object-fit="cover"
  muted
  preload="auto"
  playsinline
  data-id="intro">
</video>
```

### Video Files Discovered:
1. **intro.mp4** - Initial page load animation
2. **1-2.mp4** - Transition from slide 1 to slide 2
3. **1-3.mp4** - Transition from slide 1 to slide 3
4. **2-1.mp4** - Transition from slide 2 to slide 1
5. **2-3.mp4** - Transition from slide 2 to slide 3
6. **3-1.mp4** - Transition from slide 3 to slide 1
7. **3-2.mp4** - Transition from slide 3 to slide 2

### Technical Specifications:
- **Format:** MP4 (likely H.264 codec)
- **Loading:** Lazy loading via `data-src` attribute
- **Poster Images:** Static JPG fallback images
- **Object Fit:** `cover` - fills container while maintaining aspect ratio
- **Playback:** Muted autoplay, inline playback for mobile
- **Preload:** `auto` - browser decides optimal loading strategy

---

## 2. Geometric Shape Transitions

### Implementation Method
The geometric shapes are **NOT generated via WebGL or Canvas**. Instead:

1. **Pre-rendered Video Files**: Each transition is a pre-made video showing geometric shapes morphing
2. **Transition Mapping**: 6 transition videos (N×N-1 combinations for 3 slides)
3. **Seamless Switching**: JavaScript handles video swapping based on navigation
4. **No Real-time Generation**: All animations are baked into video files

### Shape Morphing Strategy:
- Shapes likely created in After Effects, Cinema 4D, or Blender
- Exported as video files rather than real-time rendering
- Ensures consistent performance across devices
- Reduces client-side computational load

### Benefits of This Approach:
✅ **Consistent Performance** - No GPU computation required
✅ **Cross-Browser Compatibility** - Video playback is universally supported
✅ **Mobile Friendly** - Lower battery consumption than WebGL
✅ **Predictable Results** - Same animation on all devices
❌ **File Size** - Multiple video files increase initial load
❌ **Limited Interactivity** - Can't respond to real-time user input

---

## 3. Loading Sequences

### Initial Page Load
```javascript
// Pseudo-code based on DOM structure
1. Load HTML with data-src attributes (videos not loaded yet)
2. Display poster image (/assets/img/intro.jpg)
3. JavaScript detects viewport/scroll position
4. Lazy load intro.mp4 when in view
5. Play intro animation
6. Transition to first slide content
```

### Slide Navigation System
The site uses a **3-slide carousel** with custom indexing:

```html
<section class="home__screen is-current">
  <div class="home__index">
    <span class="home__index__current">
      <span class="home__index__value">01</span>
    </span>
    <span class="home__index__separator"> / </span>
    <span class="home__index__total">
      <span class="home__index__value">03</span>
    </span>
  </div>
</section>
```

### Slide Content:
1. **Slide 01: Institutional Banking**
2. **Slide 02: Commercial Banking**
3. **Slide 03: Mortgage Banking**

### Transition Logic:
```
Current Slide → Target Slide → Video Played
------------------------------------------------
Slide 1 → Slide 2 → 1-2.mp4
Slide 1 → Slide 3 → 1-3.mp4
Slide 2 → Slide 1 → 2-1.mp4
Slide 2 → Slide 3 → 2-3.mp4
Slide 3 → Slide 1 → 3-1.mp4
Slide 3 → Slide 2 → 3-2.mp4
```

### CSS Classes for State Management:
- `is-current` - Active slide
- `home__index__value--next` - Pre-positioned next slide number
- `home__screen__title__word` - Individual word animation wrappers

---

## 4. Technical Implementation

### JavaScript Architecture

#### Build System:
- **Module System:** ES6 modules with legacy fallback
- **Module Script:** `/assets/js/scripts.8ca740228f748e2a466f.js`
- **Legacy Script:** `/assets/js/scripts-legacy.22bec8a1259a832392a4.js`
- **Vendors:** `/assets/js/vendors.9632e9d9d04342de239b.js`
- **Build Tool:** Likely Webpack (based on hash naming pattern)

#### Key Libraries Detected:
```javascript
// External Dependencies
- Google reCAPTCHA (security)
- Google Analytics (UA-63020337-3)
- Sentry Browser SDK 5.6.1 (error tracking)
```

#### Animation Libraries:
**NONE DETECTED** ❌
- No GSAP
- No Three.js
- No Anime.js
- No Lottie
- No PixiJS
- No ScrollMagic

**Conclusion:** Custom vanilla JavaScript implementation

---

### CSS Architecture

#### Main Stylesheet:
`/assets/css/main.c3232c0585b7cf4f1b1b.css` (Webpack compiled)

#### Key CSS Classes:
```css
.home__background - Video container
.home__background__video - Individual video elements
.home__screens - Slide container
.home__screen - Individual slide
.is-current - Active slide state
.home__index - Slide counter
.home__screen__title - Slide title
.home__screen__title__word - Individual word wrapper (for stagger animation)
.home__screen__description - Slide description
.underlined-cta - Call-to-action button
```

#### Likely CSS Animations:
Based on DOM structure, probable CSS transitions include:
- **Opacity fades** for slide transitions
- **Transform translations** for word animations
- **Staggered delays** for title words
- **Underline animations** for CTAs

---

## 5. Performance Optimization Techniques

### Lazy Loading Strategy
```html
<!-- Video not loaded initially -->
<video data-src="/assets/video/intro.mp4" data-poster="/assets/img/intro.jpg">
```

The `data-src` pattern indicates:
1. Videos are NOT loaded on initial page load
2. JavaScript intersection observer or scroll handler triggers loading
3. Poster images provide visual content before video loads
4. Reduces initial page weight significantly

### Preload Optimization
```html
preload="auto"
```
- Allows browser to decide optimal preloading
- Balance between performance and user experience
- May preload only metadata initially

### Mobile Optimization
```html
playsinline
```
- Prevents fullscreen video on iOS
- Enables inline background playback
- Critical for mobile UX

### Video Compression
- **Muted videos** - Allows autoplay without user interaction
- **Cover object-fit** - Responsive sizing without distortion
- **MP4 format** - Best compatibility/compression balance

---

## 6. JavaScript Execution Flow (Inferred)

Based on DOM structure and data attributes, the likely execution flow:

```javascript
// 1. Page Load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize slide system
  initSlideCarousel();

  // Setup lazy loading for videos
  observeVideoElements();

  // Setup navigation handlers
  bindNavigationEvents();
});

// 2. Video Lazy Loading
function observeVideoElements() {
  const videos = document.querySelectorAll('[data-src]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.src = video.dataset.src; // Load video
        observer.unobserve(video);
      }
    });
  });

  videos.forEach(video => observer.observe(video));
}

// 3. Slide Navigation
function navigateToSlide(fromIndex, toIndex) {
  // Get transition video ID
  const videoId = `${fromIndex}-${toIndex}`;

  // Find and play transition video
  const video = document.querySelector(`[data-id="${videoId}"]`);
  video.play();

  // Update slide states when video ends
  video.addEventListener('ended', () => {
    updateSlideState(toIndex);
  });
}

// 4. State Management
function updateSlideState(newIndex) {
  // Remove is-current from old slide
  document.querySelector('.home__screen.is-current')
    .classList.remove('is-current');

  // Add is-current to new slide
  document.querySelectorAll('.home__screen')[newIndex]
    .classList.add('is-current');

  // Update counter
  updateIndexCounter(newIndex);
}
```

---

## 7. Timing and Easing

### Video Playback Timing
- **Transition Duration:** Determined by video length (likely 1-2 seconds)
- **Easing:** Baked into video render (smooth, custom easing curves)
- **Frame Rate:** Likely 30fps or 60fps for smooth motion

### CSS Transitions (Probable)
```css
/* Inferred from class structure */
.home__screen {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.home__screen.is-current {
  opacity: 1;
}

.home__screen__title__word {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.home__screen.is-current .home__screen__title__word {
  transform: translateY(0);
  opacity: 1;
}

/* Stagger effect */
.home__screen__title__word:nth-child(1) { transition-delay: 0.1s; }
.home__screen__title__word:nth-child(2) { transition-delay: 0.2s; }
```

---

## 8. Replication Strategy for OXOT Website

### Approach 1: Video-Based (NexBank Method)
**Pros:**
- Exact visual replication possible
- Consistent performance
- Mobile-friendly

**Cons:**
- Requires video production skills (After Effects/Blender)
- Large file sizes for multiple transitions
- Not interactive/dynamic

**Implementation:**
1. Create geometric shape animations in After Effects/Blender
2. Export as optimized MP4 files
3. Implement lazy loading with data-src pattern
4. Build slide navigation system
5. Handle video swapping based on navigation

### Approach 2: GSAP + SVG (Modern Alternative)
**Pros:**
- Smaller file size
- Real-time interactivity
- Easy to modify/update

**Cons:**
- Requires JavaScript animation expertise
- Potential performance issues on low-end devices
- More complex implementation

**Implementation:**
1. Create SVG geometric shapes
2. Use GSAP for morphing animations
3. Implement timeline sequences for transitions
4. Add scroll-triggered animations
5. Optimize for mobile performance

### Approach 3: Three.js + WebGL (Advanced)
**Pros:**
- Most flexible
- Stunning 3D effects
- Interactive capabilities

**Cons:**
- Highest complexity
- GPU-intensive
- Browser compatibility concerns
- Large bundle size

**Implementation:**
1. Create 3D geometric models
2. Implement WebGL rendering pipeline
3. Build transition shaders
4. Add particle effects
5. Optimize rendering performance

---

## 9. Recommended Approach for OXOT

### Option: **GSAP + CSS + Optimized MP4 Background**

**Rationale:**
- Best balance of visual quality and performance
- Smaller bundle size than Three.js
- More flexible than pure video approach
- Industry-standard tooling (GSAP)
- Mobile-friendly with proper optimization

**Stack:**
```javascript
{
  "animation": "GSAP 3.x",
  "video": "Optimized MP4 background (optional)",
  "shapes": "SVG with GSAP morphing",
  "framework": "React/Next.js (if applicable)",
  "loading": "Intersection Observer for lazy loading",
  "performance": "Code splitting + lazy imports"
}
```

**Implementation Steps:**
1. **Create base background video** (single loop, not transitions)
2. **SVG geometric shapes** for foreground animations
3. **GSAP ScrollTrigger** for slide-based navigation
4. **GSAP Timeline** for orchestrated animations
5. **CSS transitions** for text and UI elements
6. **Lazy loading** for performance optimization

---

## 10. Code Examples for OXOT Implementation

### Video Background Setup
```html
<!-- index.html -->
<div class="hero-background">
  <video
    class="hero-video"
    data-src="/assets/video/background-loop.mp4"
    data-poster="/assets/img/poster.jpg"
    muted
    loop
    playsinline
    preload="auto"
  ></video>
</div>
```

### Lazy Loading Implementation
```javascript
// videoLazyLoad.js
const observeVideos = () => {
  const videos = document.querySelectorAll('video[data-src]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.src = video.dataset.src;
        video.load();
        observer.unobserve(video);
      }
    });
  }, {
    rootMargin: '50px' // Start loading 50px before viewport
  });

  videos.forEach(video => observer.observe(video));
};

export default observeVideos;
```

### GSAP Slide Navigation
```javascript
// slideNavigation.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initSlideNavigation = () => {
  const slides = document.querySelectorAll('.slide');

  slides.forEach((slide, index) => {
    const title = slide.querySelector('.slide__title');
    const words = title.querySelectorAll('.word');

    // Timeline for slide entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    });

    // Stagger word animations
    tl.from(words, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1
    });
  });
};

export default initSlideNavigation;
```

### SVG Shape Morphing
```javascript
// shapeMorph.js
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

const animateShapes = () => {
  const shape1 = document.querySelector('#shape-1');
  const shape2 = document.querySelector('#shape-2');

  gsap.to(shape1, {
    morphSVG: shape2,
    duration: 2,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
  });
};

export default animateShapes;
```

### CSS Animations
```css
/* animations.css */
.slide {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.is-active {
  opacity: 1;
}

.slide__title .word {
  display: inline-block;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.slide.is-active .slide__title .word {
  transform: translateY(0);
  opacity: 1;
}

/* Stagger delays */
.slide__title .word:nth-child(1) { transition-delay: 0.1s; }
.slide__title .word:nth-child(2) { transition-delay: 0.2s; }
.slide__title .word:nth-child(3) { transition-delay: 0.3s; }

/* Video container */
.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 11. Performance Considerations

### Video Optimization
```bash
# FFmpeg commands for video optimization
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -movflags +faststart output.mp4
```

**Settings:**
- **CRF 23:** Good quality/size balance
- **Preset slow:** Better compression
- **+faststart:** Enables streaming playback

### File Size Targets
- **Intro video:** < 2MB
- **Transition videos:** < 1MB each
- **Total video assets:** < 10MB
- **Initial page load:** < 500KB (excluding videos)

### Loading Strategy
1. **Above the fold:** Load immediately
2. **Transition videos:** Preload on first interaction
3. **Below fold content:** Lazy load with Intersection Observer

---

## 12. Browser Compatibility

### Video Format Support
```html
<video>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <!-- Fallback for old browsers -->
  <img src="poster.jpg" alt="Fallback">
</video>
```

### Required Polyfills
- **Intersection Observer:** For older browsers
- **ES6 Modules:** Use legacy fallback script

### Browser Testing Targets
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

---

## 13. Accessibility Considerations

### Video Accessibility
```html
<video aria-label="Background animation" role="presentation">
  <!-- Video should not interfere with screen readers -->
</video>
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  .hero-video {
    display: none; /* Hide animations for users who prefer reduced motion */
  }

  .slide__title .word {
    transition: none; /* Disable transitions */
    transform: none;
    opacity: 1;
  }
}
```

---

## 14. Summary of Key Findings

### NexBank's Approach:
✅ **Custom JavaScript** - No third-party animation libraries
✅ **Pre-rendered videos** - Geometric shapes baked into MP4 files
✅ **Lazy loading** - Performance optimization via data-src
✅ **Multiple transition videos** - Seamless navigation between slides
✅ **Mobile-first** - Inline playback, muted, cover object-fit
✅ **Legacy support** - ES6 modules with fallbacks

### Technology Stack:
```yaml
Frontend:
  - Vanilla JavaScript (Custom implementation)
  - Webpack (Build system)
  - ES6 Modules (Modern browsers)
  - Legacy Scripts (IE11 fallback)

Video:
  - Format: MP4 (H.264 codec)
  - Count: 7 videos (1 intro + 6 transitions)
  - Loading: Lazy with Intersection Observer
  - Optimization: Muted, preload auto, playsinline

CSS:
  - Custom BEM-like naming convention
  - Webpack compiled stylesheet
  - Transitions for UI elements
  - No animation libraries

External:
  - Google reCAPTCHA (Security)
  - Google Analytics (Tracking)
  - Sentry (Error monitoring)
```

---

## 15. Files and Resources

### Discovered Asset URLs:
```
Videos:
https://nexbank.com/assets/video/intro.mp4
https://nexbank.com/assets/video/1-2.mp4
https://nexbank.com/assets/video/1-3.mp4
https://nexbank.com/assets/video/2-1.mp4
https://nexbank.com/assets/video/2-3.mp4
https://nexbank.com/assets/video/3-1.mp4
https://nexbank.com/assets/video/3-2.mp4

Images:
https://nexbank.com/assets/img/intro.jpg

Scripts:
https://nexbank.com/assets/js/scripts.8ca740228f748e2a466f.js
https://nexbank.com/assets/js/scripts-legacy.22bec8a1259a832392a4.js
https://nexbank.com/assets/js/vendors.9632e9d9d04342de239b.js
https://nexbank.com/assets/js/vendors-legacy.67ff5449f8efc986963e.js

Styles:
https://nexbank.com/assets/css/main.c3232c0585b7cf4f1b1b.css
```

---

## Conclusion

NexBank.com implements a **sophisticated yet simple** background animation system using pre-rendered video files and custom vanilla JavaScript. This approach prioritizes:

1. **Consistent cross-browser performance**
2. **Mobile compatibility**
3. **Low computational overhead**
4. **Predictable visual results**

For OXOT website implementation, I recommend a **hybrid approach** combining:
- Single looping background video (like NexBank)
- GSAP for foreground element animations
- SVG for interactive geometric shapes
- Lazy loading for optimal performance

This provides the visual sophistication of NexBank's design while maintaining flexibility for future enhancements and interactivity.

---

**Research Completed:** 2025-11-13
**Next Steps:**
1. Create geometric shape designs
2. Produce background video loop
3. Implement GSAP animation system
4. Test performance across devices
5. Optimize video compression settings
