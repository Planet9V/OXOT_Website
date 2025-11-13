# NexBank Navigation System - Technical Specification
**File:** NEXBANK_REBUILD_SPEC.md
**Created:** 2025-11-13
**Version:** v1.0.0
**Author:** Technical Architecture Team
**Purpose:** Complete technical specification for rebuilding NexBank-style navigation system
**Status:** ACTIVE

---

## Executive Summary

This document provides a comprehensive technical specification for rebuilding a sophisticated navigation system inspired by NexBank's design, featuring 3D animated backgrounds, carousel interactions, tab navigation, and choreographed page transitions. The system prioritizes performance, accessibility, and maintainable code architecture.

**Estimated Timeline:** 3-4 weeks (120-160 hours)
**Complexity:** High
**Primary Technologies:** React 18+, Three.js, GSAP 3, TypeScript

---

## 1. Technology Stack

### Core Framework
```yaml
runtime:
  framework: "React 18.2+"
  language: "TypeScript 5.0+"
  build_tool: "Vite 5.0+"
  package_manager: "npm/pnpm"

styling:
  primary: "Tailwind CSS 3.4+"
  css_modules: "CSS Modules (component-scoped)"
  preprocessor: "PostCSS"

animation:
  primary: "GSAP 3.12+ (GreenSock)"
  plugins:
    - "ScrollTrigger"
    - "ScrollToPlugin"
  3d_engine: "Three.js r160+"
  helpers:
    - "drei (React Three Fiber helpers)"

state_management:
  local: "React Hooks (useState, useReducer)"
  complex: "Zustand 4.0+ (if needed)"

performance:
  code_splitting: "React.lazy + Suspense"
  bundling: "Vite automatic code splitting"
  lazy_loading: "IntersectionObserver API"
```

### Development Tools
```yaml
quality:
  linting: "ESLint 8+"
  formatting: "Prettier 3+"
  type_checking: "TypeScript strict mode"

testing:
  unit: "Vitest"
  component: "React Testing Library"
  e2e: "Playwright"
  visual: "Chromatic (optional)"

accessibility:
  testing: "axe-core"
  standards: "WCAG 2.1 AA"
```

---

## 2. Complete File Structure

```
/src
├── /components
│   ├── /navigation
│   │   ├── NavigationSystem.tsx          # Main orchestrator component
│   │   ├── NavigationSystem.module.css   # Component styles
│   │   ├── Background3D.tsx              # Three.js 3D background
│   │   ├── Carousel.tsx                  # Carousel container
│   │   ├── CarouselSlide.tsx            # Individual slide component
│   │   ├── CarouselControls.tsx         # Navigation arrows + pagination
│   │   ├── BottomTabs.tsx               # Tab navigation bar
│   │   ├── PageTransition.tsx           # Full-screen transition overlay
│   │   ├── TypographyAnimation.tsx      # Animated text elements
│   │   └── /hooks
│   │       ├── useCarousel.ts           # Carousel state & logic
│   │       ├── usePageTransition.ts     # Transition orchestration
│   │       └── use3DAnimation.ts        # Three.js animation loop
│   │
│   └── /ui
│       ├── Button.tsx                    # Reusable button component
│       └── Icon.tsx                      # SVG icon wrapper
│
├── /lib
│   ├── /animations
│   │   ├── gsapConfig.ts                # GSAP global configuration
│   │   ├── carouselAnimations.ts       # Carousel transition presets
│   │   ├── pageTransitions.ts          # Page transition timelines
│   │   └── textAnimations.ts           # Typography animation sequences
│   │
│   ├── /three
│   │   ├── WaveGeometry.ts             # Custom 3D wave geometry
│   │   ├── shaders
│   │   │   ├── waveVertex.glsl         # Vertex shader for waves
│   │   │   └── waveFragment.glsl       # Fragment shader for waves
│   │   └── materials.ts                 # Material presets
│   │
│   └── /utils
│       ├── constants.ts                 # Animation timing constants
│       ├── accessibility.ts             # A11y helper functions
│       └── performance.ts               # Performance optimization utils
│
├── /types
│   ├── navigation.types.ts              # Navigation system types
│   ├── carousel.types.ts                # Carousel types
│   └── animations.types.ts              # Animation configuration types
│
├── /styles
│   ├── globals.css                      # Global styles & CSS variables
│   ├── animations.css                   # Keyframe animations
│   └── themes
│       └── dark.css                     # Dark theme variables
│
├── /assets
│   ├── /images
│   │   ├── slide-1.jpg                 # Carousel slide images
│   │   ├── slide-2.jpg
│   │   └── slide-3.jpg
│   │
│   └── /fonts
│       └── custom-font.woff2           # Custom typography
│
├── /hooks
│   ├── useMediaQuery.ts                # Responsive breakpoint hook
│   ├── useReducedMotion.ts             # Accessibility motion detection
│   └── useIntersectionObserver.ts      # Lazy loading helper
│
└── /tests
    ├── /unit
    │   ├── Carousel.test.tsx
    │   └── useCarousel.test.ts
    │
    ├── /integration
    │   └── NavigationSystem.test.tsx
    │
    └── /e2e
        └── navigation-flow.spec.ts
```

---

## 3. Component Architecture

### 3.1 NavigationSystem (Main Orchestrator)

**Responsibility:** Coordinates all navigation subsystems and manages global state.

```typescript
// NavigationSystem.tsx
interface NavigationSystemProps {
  slides: SlideData[];
  tabs: TabData[];
  initialSlide?: number;
  enableTransitions?: boolean;
  theme?: 'dark' | 'light';
}

interface NavigationState {
  currentSlide: number;
  activeTab: string;
  isTransitioning: boolean;
  direction: 'next' | 'prev' | null;
}

/**
 * Main navigation system orchestrator
 * - Manages carousel state
 * - Coordinates page transitions
 * - Handles tab navigation
 * - Controls 3D background animations
 */
export const NavigationSystem: React.FC<NavigationSystemProps>
```

**Key Features:**
- Centralized state management
- Event coordination between subsystems
- Accessibility keyboard navigation
- Reduced motion support
- Performance monitoring

**Dependencies:**
- `Background3D` - 3D animated background
- `Carousel` - Slide carousel
- `BottomTabs` - Tab navigation
- `PageTransition` - Transition overlay
- `TypographyAnimation` - Animated text

---

### 3.2 Background3D Component

**Responsibility:** Renders animated 3D curved wave background using Three.js.

```typescript
// Background3D.tsx
interface Background3DProps {
  intensity?: number;        // Animation intensity (0-1)
  speed?: number;           // Animation speed multiplier
  colorScheme?: ColorScheme; // Color palette
  pauseOnHover?: boolean;   // Performance optimization
}

/**
 * Three.js 3D background with animated wave geometry
 * - Uses custom vertex/fragment shaders
 * - Responds to scroll position
 * - Optimized for 60fps performance
 */
export const Background3D: React.FC<Background3DProps>
```

**Technical Implementation:**
```typescript
// WaveGeometry.ts - Custom Geometry
class WaveGeometry extends THREE.PlaneGeometry {
  constructor(
    width: number = 100,
    height: number = 100,
    widthSegments: number = 128,
    heightSegments: number = 128
  ) {
    super(width, height, widthSegments, heightSegments);
    this.computeVertexNormals();
  }

  animate(time: number, amplitude: number, frequency: number): void {
    const positions = this.attributes.position.array;
    // Sine wave algorithm for vertex displacement
  }
}
```

**Shader System:**
```glsl
// waveVertex.glsl
uniform float uTime;
uniform float uAmplitude;
uniform float uFrequency;

varying vec2 vUv;
varying float vElevation;

void main() {
  vUv = uv;

  // Calculate wave displacement
  vec3 pos = position;
  float elevation = sin(pos.x * uFrequency + uTime) * uAmplitude;
  elevation += sin(pos.y * uFrequency * 0.5 + uTime * 0.7) * uAmplitude * 0.5;

  pos.z += elevation;
  vElevation = elevation;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
```

**Performance Optimizations:**
- LOD (Level of Detail) based on screen size
- RequestAnimationFrame for smooth 60fps
- Dispose geometry/materials on unmount
- Pause animation when not in viewport

---

### 3.3 Carousel System

**Responsibility:** Manages slide presentation and navigation.

```typescript
// Carousel.tsx
interface CarouselProps {
  slides: SlideData[];
  currentSlide: number;
  onSlideChange: (index: number, direction: 'next' | 'prev') => void;
  transitionDuration?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
}

interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  cta?: {
    label: string;
    href: string;
  };
}
```

**GSAP Animation Timeline:**
```typescript
// carouselAnimations.ts
export const createSlideTransition = (
  direction: 'next' | 'prev',
  currentSlide: HTMLElement,
  nextSlide: HTMLElement
): gsap.core.Timeline => {
  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power3.inOut' }
  });

  const xOffset = direction === 'next' ? 100 : -100;

  tl.to(currentSlide, {
    x: -xOffset,
    opacity: 0,
    scale: 0.95,
    duration: 0.8
  }, 0)
  .fromTo(nextSlide, {
    x: xOffset,
    opacity: 0,
    scale: 1.05
  }, {
    x: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8
  }, 0);

  return tl;
};
```

**Custom Hook:**
```typescript
// useCarousel.ts
export const useCarousel = (
  totalSlides: number,
  options?: CarouselOptions
) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [isAnimating, totalSlides]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [isAnimating, totalSlides]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  }, [isAnimating, currentSlide]);

  return {
    currentSlide,
    direction,
    isAnimating,
    nextSlide,
    prevSlide,
    goToSlide,
    setIsAnimating
  };
};
```

---

### 3.4 CarouselControls Component

**Responsibility:** Navigation arrows and pagination display.

```typescript
// CarouselControls.tsx
interface CarouselControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  disabled?: boolean;
}

/**
 * Circular navigation buttons + numeric pagination
 * - Accessible keyboard navigation
 * - Disabled state during transitions
 * - ARIA labels for screen readers
 */
export const CarouselControls: React.FC<CarouselControlsProps>
```

**Styling:**
```css
/* CarouselControls.module.css */
.controls {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 10;
}

.navButton {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
}

.navButton:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.pagination {
  font-family: 'Courier New', monospace;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.1em;
}

.currentSlide {
  font-weight: 700;
}
```

---

### 3.5 BottomTabs Component

**Responsibility:** Tab navigation synchronized with carousel.

```typescript
// BottomTabs.tsx
interface BottomTabsProps {
  tabs: TabData[];
  activeTab: string;
  onTabClick: (tabId: string, slideIndex: number) => void;
}

interface TabData {
  id: string;
  label: string;
  slideIndex: number; // Maps to carousel slide
}

/**
 * Bottom tab navigation bar
 * - Syncs with carousel slides
 * - Active state visual feedback
 * - Smooth underline animation
 */
export const BottomTabs: React.FC<BottomTabsProps>
```

**Animation:**
```typescript
// Tab active state animation
const animateActiveTab = (tabElement: HTMLElement) => {
  gsap.to('.tab-indicator', {
    x: tabElement.offsetLeft,
    width: tabElement.offsetWidth,
    duration: 0.4,
    ease: 'power2.out'
  });
};
```

**Styling:**
```css
/* BottomTabs.module.css */
.tabContainer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 20;
}

.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 3rem;
  position: relative;
}

.tab {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 1rem 1.5rem;
  transition: color 0.3s ease;
}

.tab.active {
  color: rgba(255, 255, 255, 1);
}

.tabIndicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #00d4ff, #0066ff);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### 3.6 PageTransition Component

**Responsibility:** Full-screen animated transitions between major sections.

```typescript
// PageTransition.tsx
interface PageTransitionProps {
  isActive: boolean;
  text?: string;
  onComplete?: () => void;
  duration?: number;
}

/**
 * Full-screen transition overlay
 * - Text reveal animations ("CONTACT")
 * - Background color transitions
 * - Choreographed timing sequences
 */
export const PageTransition: React.FC<PageTransitionProps>
```

**GSAP Timeline:**
```typescript
// pageTransitions.ts
export const createPageTransition = (
  transitionText: string = 'LOADING'
): gsap.core.Timeline => {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.inOut' }
  });

  // Phase 1: Dark overlay covers screen (0.6s)
  tl.fromTo('.transition-overlay', {
    clipPath: 'circle(0% at 50% 50%)'
  }, {
    clipPath: 'circle(150% at 50% 50%)',
    duration: 0.6
  })

  // Phase 2: Text reveal with split animation (0.8s)
  .fromTo('.transition-text', {
    y: 100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    stagger: 0.05 // Stagger each letter
  }, 0.3)

  // Phase 3: Hold (0.4s)
  .to({}, { duration: 0.4 })

  // Phase 4: Text exit (0.4s)
  .to('.transition-text', {
    y: -100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05
  })

  // Phase 5: Overlay fades to light (0.6s)
  .to('.transition-overlay', {
    clipPath: 'circle(0% at 50% 50%)',
    duration: 0.6
  });

  return tl;
};
```

**Styling:**
```css
/* PageTransition.module.css */
.overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.overlay.active {
  pointer-events: all;
}

.text {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
  text-stroke: 2px rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
}
```

---

### 3.7 TypographyAnimation Component

**Responsibility:** Animated text elements (outlined text, vertical text).

```typescript
// TypographyAnimation.tsx
interface TypographyAnimationProps {
  text: string;
  variant: 'outlined' | 'vertical' | 'split';
  animationDelay?: number;
  strokeWidth?: number;
}

/**
 * Animated typography component
 * - Large outlined text (NexBank style)
 * - Vertical text orientation
 * - Stroke drawing animation
 * - Split text letter-by-letter reveals
 */
export const TypographyAnimation: React.FC<TypographyAnimationProps>
```

**Stroke Animation:**
```typescript
// textAnimations.ts
export const animateStrokeText = (element: HTMLElement): void => {
  const text = element.textContent || '';
  const letters = text.split('');

  // Create SVG path for each letter
  const timeline = gsap.timeline();

  letters.forEach((letter, i) => {
    timeline.fromTo(`.letter-${i}`, {
      strokeDashoffset: 1000,
      strokeDasharray: 1000,
      fillOpacity: 0
    }, {
      strokeDashoffset: 0,
      fillOpacity: 0.1,
      duration: 1.2,
      ease: 'power2.inOut'
    }, i * 0.1);
  });
};
```

**Styling:**
```css
/* TypographyAnimation.module.css */
.outlined {
  position: absolute;
  right: -10%;
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(8rem, 15vw, 18rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
  text-stroke: 2px rgba(255, 255, 255, 0.2);
  letter-spacing: -0.05em;
  z-index: 1;
  pointer-events: none;
}

.vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}
```

---

## 4. Animation System Architecture

### 4.1 GSAP Configuration

```typescript
// gsapConfig.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Global configuration
export const GSAP_CONFIG = {
  defaults: {
    duration: 0.8,
    ease: 'power3.inOut'
  },
  carousel: {
    transitionDuration: 0.8,
    ease: 'power3.inOut',
    stagger: 0.05
  },
  pageTransition: {
    duration: 2.4, // Total transition time
    phases: {
      coverIn: 0.6,
      textReveal: 0.8,
      hold: 0.4,
      textExit: 0.4,
      coverOut: 0.6
    }
  },
  typography: {
    strokeDuration: 1.2,
    strokeEase: 'power2.inOut',
    letterStagger: 0.1
  }
} as const;

// Performance optimization
gsap.config({
  force3D: true,
  nullTargetWarn: false
});

// Cleanup function for unmounting
export const cleanupGSAP = (): void => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.globalTimeline.clear();
};
```

### 4.2 Animation Constants

```typescript
// constants.ts
export const TIMING = {
  CAROUSEL_TRANSITION: 800,      // ms
  PAGE_TRANSITION_TOTAL: 2400,   // ms
  TAB_TRANSITION: 400,           // ms
  HOVER_TRANSITION: 300,         // ms
  BACKGROUND_FRAME_RATE: 60,     // fps
} as const;

export const EASING = {
  SMOOTH: 'power3.inOut',
  BOUNCE: 'elastic.out(1, 0.3)',
  SNAP: 'power4.out',
  LINEAR: 'none'
} as const;

export const COLORS = {
  background: {
    dark: '#0a0a0a',
    light: '#f5f5f5',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
  },
  accent: {
    primary: '#00d4ff',
    secondary: '#0066ff'
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    muted: 'rgba(255, 255, 255, 0.4)'
  }
} as const;
```

### 4.3 Reduced Motion Support

```typescript
// useReducedMotion.ts
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Apply to GSAP animations
export const getAnimationConfig = (
  reducedMotion: boolean,
  config: gsap.TweenVars
): gsap.TweenVars => {
  if (reducedMotion) {
    return {
      ...config,
      duration: 0.01, // Near-instant
      ease: 'none'
    };
  }
  return config;
};
```

---

## 5. Implementation Phases

### Phase 1: Foundation & Core Systems (Week 1)
**Estimated Time: 30-40 hours**

#### Tasks:
1. **Project Setup (4 hours)**
   - Initialize React + TypeScript + Vite project
   - Configure Tailwind CSS + PostCSS
   - Install dependencies (GSAP, Three.js, etc.)
   - Setup ESLint + Prettier
   - Configure TypeScript strict mode
   - Create folder structure

2. **Core Type Definitions (3 hours)**
   - Define TypeScript interfaces for all components
   - Create animation configuration types
   - Setup constants file with timing/easing values

3. **GSAP Configuration (4 hours)**
   - Setup global GSAP configuration
   - Register plugins (ScrollTrigger, ScrollToPlugin)
   - Create animation utility functions
   - Implement reduced motion support

4. **Base Components (8 hours)**
   - Create NavigationSystem orchestrator shell
   - Build Button and Icon UI components
   - Setup CSS module architecture
   - Create global styles and CSS variables

5. **3D Background System (12 hours)**
   - Setup Three.js scene with React
   - Create custom WaveGeometry class
   - Write vertex/fragment shaders
   - Implement animation loop with RAF
   - Add LOD performance optimization
   - Test on different devices/browsers

**Deliverables:**
- ✅ Working 3D animated background
- ✅ Project structure and tooling configured
- ✅ Type system established
- ✅ Animation framework ready

**Testing Focus:**
- Background renders at 60fps on target devices
- No memory leaks in animation loop
- Shaders compile correctly

---

### Phase 2: Carousel & Navigation (Week 2)
**Estimated Time: 35-45 hours**

#### Tasks:
1. **Carousel Core Logic (10 hours)**
   - Implement useCarousel hook
   - Create state management for slides
   - Add keyboard navigation support
   - Handle edge cases (rapid clicks, boundary conditions)
   - Add autoplay functionality

2. **Carousel Components (12 hours)**
   - Build Carousel container component
   - Create CarouselSlide component with image lazy loading
   - Implement CarouselControls (arrows + pagination)
   - Add touch/swipe gesture support (optional)

3. **GSAP Carousel Animations (8 hours)**
   - Create slide transition timelines
   - Implement directional animations (next/prev)
   - Add content stagger animations
   - Optimize performance with will-change

4. **Bottom Tab Navigation (8 hours)**
   - Build BottomTabs component
   - Create tab-to-slide mapping logic
   - Implement active state animations
   - Add smooth underline indicator transition
   - Sync tabs with carousel state

5. **Integration Testing (6 hours)**
   - Test carousel-tab synchronization
   - Verify animation timing coordination
   - Accessibility testing (keyboard nav, ARIA)
   - Cross-browser compatibility testing

**Deliverables:**
- ✅ Fully functional carousel system
- ✅ Tab navigation working
- ✅ Smooth 800ms transitions
- ✅ Keyboard accessible

**Testing Focus:**
- Carousel transitions are smooth across browsers
- Tab state syncs correctly with slides
- No animation jank or layout shift
- Keyboard navigation works intuitively

---

### Phase 3: Typography & Transitions (Week 3)
**Estimated Time: 30-40 hours**

#### Tasks:
1. **Typography Animation Component (10 hours)**
   - Build TypographyAnimation base component
   - Implement outlined text with stroke animation
   - Create vertical text orientation variant
   - Add split-text letter reveal
   - Optimize SVG path rendering

2. **Page Transition System (12 hours)**
   - Build PageTransition component
   - Create multi-phase GSAP timeline
   - Implement text reveal choreography
   - Add circular clip-path animation
   - Create transition trigger logic

3. **Transition Orchestration (8 hours)**
   - Build usePageTransition hook
   - Coordinate transitions with route changes
   - Add transition queue for multiple triggers
   - Implement completion callbacks
   - Handle user interruptions gracefully

4. **Visual Polish (6 hours)**
   - Fine-tune animation timing
   - Adjust easing curves for smoothness
   - Add subtle micro-interactions
   - Implement hover states
   - Refine responsive breakpoints

5. **Performance Optimization (4 hours)**
   - Code splitting with React.lazy
   - Image optimization and lazy loading
   - Bundle size analysis
   - Lighthouse audit and fixes

**Deliverables:**
- ✅ Animated typography system
- ✅ Full-screen page transitions
- ✅ Polished visual effects
- ✅ Optimized performance

**Testing Focus:**
- Page transitions feel choreographed and intentional
- Typography animations render smoothly
- No visual glitches during transitions
- Performance budget maintained (<100KB JS)

---

### Phase 4: Integration & Polish (Week 4)
**Estimated Time: 25-35 hours**

#### Tasks:
1. **Full System Integration (8 hours)**
   - Connect all subsystems in NavigationSystem
   - Implement global state coordination
   - Add error boundaries
   - Test complete user flows
   - Verify all edge cases

2. **Accessibility Audit (6 hours)**
   - WCAG 2.1 AA compliance check
   - Screen reader testing
   - Keyboard navigation audit
   - Focus management review
   - Color contrast validation
   - Add ARIA labels where needed

3. **Responsive Design (8 hours)**
   - Mobile layout adjustments
   - Tablet breakpoint optimization
   - Touch gesture refinement
   - Reduce 3D complexity on mobile
   - Test on real devices

4. **Documentation (5 hours)**
   - Component API documentation
   - Usage examples
   - Animation customization guide
   - Performance tips
   - Troubleshooting guide

5. **Testing & QA (8 hours)**
   - Write unit tests for hooks
   - Component integration tests
   - E2E testing with Playwright
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Performance testing across devices

**Deliverables:**
- ✅ Production-ready navigation system
- ✅ Comprehensive documentation
- ✅ Full test coverage
- ✅ Accessibility compliant

**Testing Focus:**
- System works flawlessly across all target browsers
- Accessibility standards met
- Performance targets achieved
- No console errors or warnings

---

## 6. Performance Budget & Optimization

### Performance Targets
```yaml
loading:
  initial_js: "< 100KB gzipped"
  total_bundle: "< 300KB gzipped"
  first_contentful_paint: "< 1.5s"
  time_to_interactive: "< 3.0s"

runtime:
  animation_frame_rate: "60 fps"
  carousel_transition: "< 800ms"
  page_transition: "2.4s (choreographed)"
  memory_usage: "< 50MB increase"

accessibility:
  lighthouse_score: "> 90"
  wcag_compliance: "AA level"
  keyboard_navigation: "100% functional"
```

### Optimization Strategies

#### 1. Code Splitting
```typescript
// Lazy load heavy components
const Background3D = lazy(() => import('./components/navigation/Background3D'));
const TypographyAnimation = lazy(() => import('./components/navigation/TypographyAnimation'));

// Suspense with fallback
<Suspense fallback={<LoadingSpinner />}>
  <Background3D />
</Suspense>
```

#### 2. Image Optimization
```typescript
// Use modern formats with fallbacks
<picture>
  <source srcset="slide-1.avif" type="image/avif" />
  <source srcset="slide-1.webp" type="image/webp" />
  <img src="slide-1.jpg" alt="Slide 1" loading="lazy" />
</picture>
```

#### 3. Three.js Optimization
```typescript
// Reduce geometry detail on mobile
const isMobile = window.innerWidth < 768;
const geometry = new WaveGeometry(
  100, 100,
  isMobile ? 64 : 128,  // Fewer segments on mobile
  isMobile ? 64 : 128
);

// Dispose resources properly
useEffect(() => {
  return () => {
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}, []);
```

#### 4. Animation Performance
```typescript
// Use will-change sparingly
.carousel-slide {
  will-change: transform, opacity;
}

// Remove will-change after animation
gsap.to(element, {
  x: 100,
  onComplete: () => {
    element.style.willChange = 'auto';
  }
});
```

#### 5. Bundle Size Optimization
```javascript
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-animation': ['gsap'],
          'vendor-3d': ['three'],
          'vendor-react': ['react', 'react-dom']
        }
      }
    }
  }
};
```

---

## 7. Accessibility Standards

### WCAG 2.1 AA Compliance Checklist

#### Keyboard Navigation
```typescript
// All interactive elements must be keyboard accessible
const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowLeft':
      prevSlide();
      break;
    case 'ArrowRight':
      nextSlide();
      break;
    case 'Home':
      goToSlide(0);
      break;
    case 'End':
      goToSlide(totalSlides - 1);
      break;
    case 'Tab':
      // Allow natural tab order
      break;
  }
};
```

#### ARIA Labels
```tsx
// Carousel component
<div
  role="region"
  aria-label="Image carousel"
  aria-live="polite"
>
  <button
    onClick={prevSlide}
    aria-label="Previous slide"
    aria-controls="carousel-slides"
  >
    <Icon name="chevron-left" aria-hidden="true" />
  </button>

  <div
    id="carousel-slides"
    role="group"
    aria-roledescription="slide"
    aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
  >
    {/* Slide content */}
  </div>
</div>
```

#### Focus Management
```typescript
// Trap focus during page transitions
const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isActive]);
};
```

#### Reduced Motion
```typescript
// Respect prefers-reduced-motion
const reducedMotion = useReducedMotion();

const transition = reducedMotion
  ? { duration: 0.01, ease: 'none' }
  : { duration: 0.8, ease: 'power3.inOut' };
```

#### Color Contrast
```css
/* Ensure 4.5:1 contrast ratio for text */
.tab {
  color: rgba(255, 255, 255, 0.6); /* Contrast: 5.2:1 on dark bg */
}

.tab.active {
  color: rgba(255, 255, 255, 1); /* Contrast: 21:1 on dark bg */
}
```

---

## 8. Testing Strategy

### Unit Tests (Vitest + React Testing Library)

```typescript
// useCarousel.test.ts
describe('useCarousel', () => {
  it('should navigate to next slide', () => {
    const { result } = renderHook(() => useCarousel(3));

    act(() => {
      result.current.nextSlide();
    });

    expect(result.current.currentSlide).toBe(1);
  });

  it('should wrap to first slide after last', () => {
    const { result } = renderHook(() => useCarousel(3));

    act(() => {
      result.current.goToSlide(2);
      result.current.nextSlide();
    });

    expect(result.current.currentSlide).toBe(0);
  });

  it('should prevent navigation during animation', () => {
    const { result } = renderHook(() => useCarousel(3));

    act(() => {
      result.current.setIsAnimating(true);
      result.current.nextSlide();
    });

    expect(result.current.currentSlide).toBe(0);
  });
});
```

### Component Tests

```typescript
// Carousel.test.tsx
describe('Carousel', () => {
  const mockSlides = [
    { id: '1', title: 'Slide 1', imageUrl: '/slide1.jpg' },
    { id: '2', title: 'Slide 2', imageUrl: '/slide2.jpg' },
    { id: '3', title: 'Slide 3', imageUrl: '/slide3.jpg' }
  ];

  it('should render current slide', () => {
    render(<Carousel slides={mockSlides} currentSlide={0} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('should call onSlideChange when next button clicked', () => {
    const handleChange = vi.fn();
    render(
      <Carousel
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={handleChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Next slide'));
    expect(handleChange).toHaveBeenCalledWith(1, 'next');
  });

  it('should be keyboard accessible', () => {
    render(<Carousel slides={mockSlides} currentSlide={0} />);

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    // Assert slide changed
  });
});
```

### E2E Tests (Playwright)

```typescript
// navigation-flow.spec.ts
test.describe('Navigation System', () => {
  test('should complete full carousel navigation flow', async ({ page }) => {
    await page.goto('/');

    // Wait for 3D background to load
    await page.waitForSelector('.background-3d');

    // Verify initial state
    await expect(page.locator('[aria-label="Slide 1 of 3"]')).toBeVisible();

    // Click next button
    await page.click('[aria-label="Next slide"]');
    await page.waitForTimeout(900); // Wait for 800ms transition + buffer

    // Verify slide changed
    await expect(page.locator('[aria-label="Slide 2 of 3"]')).toBeVisible();

    // Click tab navigation
    await page.click('text=MORTGAGE');
    await page.waitForTimeout(900);

    // Verify tab and slide synced
    await expect(page.locator('[aria-label="Slide 3 of 3"]')).toBeVisible();
  });

  test('should trigger page transition', async ({ page }) => {
    await page.goto('/');

    // Trigger transition (implementation specific)
    await page.click('[data-testid="contact-link"]');

    // Verify transition overlay appears
    await expect(page.locator('.transition-overlay')).toBeVisible();
    await expect(page.locator('text=CONTACT')).toBeVisible();

    // Wait for full transition (2400ms)
    await page.waitForTimeout(2500);

    // Verify transition completed
    await expect(page.locator('.transition-overlay')).not.toBeVisible();
  });

  test('should respect reduced motion preference', async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    // Verify animations are simplified
    const animation = await page.evaluate(() => {
      const slide = document.querySelector('.carousel-slide');
      return window.getComputedStyle(slide!).transitionDuration;
    });

    expect(parseFloat(animation)).toBeLessThan(0.1); // Near-instant
  });
});
```

### Visual Regression Tests (Chromatic - Optional)

```typescript
// NavigationSystem.stories.tsx
export default {
  title: 'Navigation/NavigationSystem',
  component: NavigationSystem,
  parameters: {
    chromatic: {
      delay: 1000, // Wait for animations
      pauseAnimationAtEnd: true
    }
  }
};

export const Default = () => (
  <NavigationSystem
    slides={mockSlides}
    tabs={mockTabs}
  />
);

export const SlideTwo = () => (
  <NavigationSystem
    slides={mockSlides}
    tabs={mockTabs}
    initialSlide={1}
  />
);

export const DuringTransition = () => (
  <NavigationSystem
    slides={mockSlides}
    tabs={mockTabs}
    enableTransitions={true}
  />
);
```

---

## 9. Code Architecture Patterns

### 9.1 Component Composition Pattern

```typescript
// NavigationSystem.tsx - Composition example
export const NavigationSystem: React.FC<NavigationSystemProps> = ({
  slides,
  tabs,
  initialSlide = 0,
  enableTransitions = true,
  theme = 'dark'
}) => {
  const {
    currentSlide,
    direction,
    isAnimating,
    nextSlide,
    prevSlide,
    goToSlide,
    setIsAnimating
  } = useCarousel(slides.length);

  const {
    isTransitioning,
    triggerTransition
  } = usePageTransition();

  const handleTabClick = (tabId: string, slideIndex: number) => {
    if (enableTransitions) {
      triggerTransition(() => goToSlide(slideIndex));
    } else {
      goToSlide(slideIndex);
    }
  };

  return (
    <div className={styles.container} data-theme={theme}>
      {/* 3D Background - Always rendered */}
      <Background3D intensity={0.5} speed={1} />

      {/* Main Carousel */}
      <Carousel
        slides={slides}
        currentSlide={currentSlide}
        direction={direction}
        onSlideChange={(index, dir) => {
          if (dir === 'next') nextSlide();
          else prevSlide();
        }}
        onAnimationComplete={() => setIsAnimating(false)}
      />

      {/* Navigation Controls */}
      <CarouselControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        disabled={isAnimating || isTransitioning}
      />

      {/* Bottom Tab Navigation */}
      <BottomTabs
        tabs={tabs}
        activeTab={tabs[currentSlide]?.id}
        onTabClick={handleTabClick}
      />

      {/* Typography Decoration */}
      <TypographyAnimation
        text="NexBank"
        variant="outlined"
        animationDelay={500}
      />

      <TypographyAnimation
        text="Online Banking Login"
        variant="vertical"
        animationDelay={800}
      />

      {/* Page Transition Overlay */}
      {enableTransitions && (
        <PageTransition
          isActive={isTransitioning}
          text="LOADING"
        />
      )}
    </div>
  );
};
```

### 9.2 Custom Hook Pattern

```typescript
// usePageTransition.ts - Encapsulated transition logic
export const usePageTransition = (duration: number = 2400) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const callbackRef = useRef<(() => void) | null>(null);

  const triggerTransition = useCallback((onMidpoint?: () => void) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    callbackRef.current = onMidpoint || null;

    const tl = createPageTransition();
    timelineRef.current = tl;

    // Execute callback at midpoint
    tl.add(() => {
      callbackRef.current?.();
    }, duration / 2 / 1000);

    tl.eventCallback('onComplete', () => {
      setIsTransitioning(false);
      timelineRef.current = null;
    });

    tl.play();
  }, [isTransitioning, duration]);

  const skipTransition = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.progress(1);
    }
  }, []);

  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return {
    isTransitioning,
    triggerTransition,
    skipTransition
  };
};
```

### 9.3 Render Props Pattern (Alternative)

```typescript
// Carousel with render props for custom slide rendering
interface CarouselRenderProps {
  currentSlide: SlideData;
  isActive: boolean;
  direction: 'next' | 'prev' | null;
}

interface CarouselProps {
  slides: SlideData[];
  renderSlide: (props: CarouselRenderProps) => React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  renderSlide
}) => {
  // ... carousel logic

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => (
        <div key={slide.id} className={styles.slide}>
          {renderSlide({
            currentSlide: slide,
            isActive: index === currentSlide,
            direction
          })}
        </div>
      ))}
    </div>
  );
};

// Usage:
<Carousel
  slides={slides}
  renderSlide={({ currentSlide, isActive }) => (
    <CustomSlideContent
      data={currentSlide}
      animate={isActive}
    />
  )}
/>
```

### 9.4 Context API for Global State (If Needed)

```typescript
// NavigationContext.tsx - Optional for complex state
interface NavigationContextValue {
  currentSlide: number;
  isAnimating: boolean;
  isTransitioning: boolean;
  goToSlide: (index: number) => void;
  triggerTransition: (callback?: () => void) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const carousel = useCarousel(3);
  const transition = usePageTransition();

  const value = {
    currentSlide: carousel.currentSlide,
    isAnimating: carousel.isAnimating,
    isTransitioning: transition.isTransitioning,
    goToSlide: carousel.goToSlide,
    triggerTransition: transition.triggerTransition
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within NavigationProvider');
  }
  return context;
};
```

---

## 10. Browser Compatibility

### Target Browser Support
```yaml
browsers:
  chrome: ">= 90"
  firefox: ">= 88"
  safari: ">= 14"
  edge: ">= 90"

mobile:
  ios_safari: ">= 14"
  chrome_android: ">= 90"
  samsung_internet: ">= 14"
```

### Polyfills Required
```javascript
// vite.config.ts
export default {
  build: {
    target: 'es2015',
    polyfillDynamicImport: true
  }
};

// Install polyfills if targeting older browsers
// npm install core-js regenerator-runtime
```

### Feature Detection
```typescript
// Check for WebGL support (required for Three.js)
const hasWebGL = (() => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
})();

// Fallback for browsers without WebGL
if (!hasWebGL) {
  // Use static background image instead
  console.warn('WebGL not supported, using fallback background');
}
```

---

## 11. Deployment Checklist

### Pre-Deployment
- [ ] Run full test suite (`npm test`)
- [ ] Run Lighthouse audit (score > 90)
- [ ] Check bundle size (`npm run build -- --analyze`)
- [ ] Test on real devices (iOS, Android)
- [ ] Verify accessibility (axe DevTools)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Check console for errors/warnings
- [ ] Validate meta tags and SEO

### Build Configuration
```javascript
// vite.config.ts - Production optimizations
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-animation': ['gsap'],
          'vendor-3d': ['three'],
          'vendor-react': ['react', 'react-dom']
        }
      }
    },
    sourcemap: false, // Disable in production
    cssCodeSplit: true
  },
  optimizeDeps: {
    include: ['gsap', 'three']
  }
});
```

### Performance Monitoring
```typescript
// Add performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}
```

---

## 12. Maintenance & Extensibility

### Adding New Slides
```typescript
// Easy slide addition
const slides: SlideData[] = [
  {
    id: 'institutional',
    title: 'Institutional Banking',
    subtitle: 'Enterprise Solutions',
    description: 'Comprehensive banking services for large institutions',
    imageUrl: '/images/institutional.jpg',
    cta: { label: 'Learn More', href: '/institutional' }
  },
  // Add new slides here
];
```

### Customizing Animations
```typescript
// Override default animation config
const customCarouselConfig = {
  ...GSAP_CONFIG.carousel,
  transitionDuration: 1.2, // Slower transition
  ease: 'elastic.out(1, 0.5)' // Bouncy effect
};

<Carousel animationConfig={customCarouselConfig} />
```

### Theming
```typescript
// Create new theme
const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  accent: '#ff6b6b'
};

<NavigationSystem theme="light" />
```

### Adding New Transition Types
```typescript
// pageTransitions.ts - Add new transition variant
export const createSplitTransition = (): gsap.core.Timeline => {
  const tl = gsap.timeline();

  tl.to('.left-panel', { x: '-100%', duration: 0.8 })
    .to('.right-panel', { x: '100%', duration: 0.8 }, 0);

  return tl;
};
```

---

## 13. Troubleshooting Guide

### Common Issues

#### 1. Three.js Performance Issues
**Problem:** Low frame rate, stuttering 3D background

**Solutions:**
- Reduce geometry segments: `new WaveGeometry(100, 100, 64, 64)` instead of 128
- Lower animation update frequency
- Disable 3D on mobile: `const isMobile = window.innerWidth < 768;`
- Check GPU usage in DevTools Performance panel

#### 2. GSAP Animation Conflicts
**Problem:** Animations don't complete or overlap incorrectly

**Solutions:**
- Use `overwrite: 'auto'` in GSAP config
- Kill existing timelines before starting new ones: `timeline?.kill()`
- Check for duplicate GSAP instances
- Ensure proper cleanup in useEffect hooks

#### 3. Carousel Rapid Click Issues
**Problem:** Slides skip or animations break with rapid clicks

**Solutions:**
- Disable navigation during animations: `disabled={isAnimating}`
- Debounce navigation functions
- Add animation queue system
- Check `isAnimating` flag before state changes

#### 4. Memory Leaks
**Problem:** Memory usage increases over time

**Solutions:**
- Dispose Three.js resources: `geometry.dispose()`, `material.dispose()`
- Kill GSAP timelines on unmount
- Remove event listeners in cleanup
- Use `useEffect` cleanup functions consistently

#### 5. Accessibility Issues
**Problem:** Screen reader or keyboard navigation problems

**Solutions:**
- Add missing ARIA labels
- Verify focus order with Tab key
- Test with screen reader (NVDA, VoiceOver)
- Check color contrast ratios
- Ensure all interactive elements are keyboard accessible

---

## 14. Future Enhancements (Post-MVP)

### Potential Features
1. **Advanced Gestures**
   - Pinch-to-zoom on slides
   - Swipe velocity detection
   - Multi-touch gesture support

2. **Video Backgrounds**
   - Replace 3D background with video option
   - WebM/MP4 format support
   - Autoplay with muted audio

3. **Parallax Effects**
   - Depth-based parallax scrolling
   - Mouse-following 3D perspective
   - Gyroscope integration on mobile

4. **Advanced Transitions**
   - Flip card transitions
   - 3D cube rotation
   - Liquid morph effects

5. **Analytics Integration**
   - Track slide view duration
   - Monitor interaction patterns
   - A/B testing framework

6. **CMS Integration**
   - Dynamic slide content loading
   - Real-time content updates
   - Admin dashboard for slide management

---

## 15. Summary & Key Takeaways

### Critical Success Factors
1. **Performance First**: 60fps animations are non-negotiable
2. **Accessibility**: WCAG AA compliance from day one
3. **Progressive Enhancement**: Core functionality without JavaScript
4. **Mobile Optimization**: Reduce complexity on smaller devices
5. **Code Quality**: TypeScript strict mode, comprehensive testing

### Risk Mitigation
- **Complexity**: Start with simple versions, iterate
- **Performance**: Continuous profiling and optimization
- **Browser Compatibility**: Test early and often on target browsers
- **Scope Creep**: Stick to phase deliverables, defer enhancements

### Timeline Summary
| Phase | Duration | Focus | Critical Path |
|-------|----------|-------|---------------|
| Phase 1 | 1 week | Foundation + 3D Background | ✅ Must complete |
| Phase 2 | 1 week | Carousel + Navigation | ✅ Must complete |
| Phase 3 | 1 week | Typography + Transitions | ✅ Must complete |
| Phase 4 | 1 week | Polish + Testing | ✅ Must complete |
| **Total** | **4 weeks** | **Complete System** | **120-160 hours** |

### Final Deliverables
- ✅ 3D animated curved background (Three.js + shaders)
- ✅ 3-slide carousel with 800ms GSAP transitions
- ✅ Circular navigation buttons + numeric pagination
- ✅ Bottom tab navigation (3 tabs, synced with slides)
- ✅ Full-screen page transitions with text reveals
- ✅ Animated typography (outlined + vertical text)
- ✅ WCAG 2.1 AA accessible
- ✅ 60fps performance target
- ✅ Comprehensive documentation + tests

---

## Appendix A: Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "gsap": "^3.12.5",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.92.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/three": "^0.160.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "prettier": "^3.1.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@playwright/test": "^1.40.0",
    "axe-core": "^4.8.0"
  }
}
```

---

## Appendix B: Glossary

**GSAP**: GreenSock Animation Platform - Professional-grade JavaScript animation library
**Three.js**: JavaScript 3D library for creating WebGL experiences
**Vertex Shader**: GPU program that processes 3D vertex positions
**Fragment Shader**: GPU program that determines pixel colors
**LOD**: Level of Detail - Optimization technique adjusting complexity based on distance/size
**RequestAnimationFrame (RAF)**: Browser API for smooth 60fps animations
**WCAG**: Web Content Accessibility Guidelines - International accessibility standards
**Clip-path**: CSS property for creating custom element shapes
**Stroke Animation**: SVG technique for animating outlined text drawing
**Reduced Motion**: Accessibility preference for users sensitive to motion

---

## Document Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| v1.0.0 | 2025-11-13 | Initial specification created | Technical Architecture Team |

---

**End of Technical Specification**

For questions or clarifications, refer to:
- GSAP Documentation: https://greensock.com/docs/
- Three.js Documentation: https://threejs.org/docs/
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
