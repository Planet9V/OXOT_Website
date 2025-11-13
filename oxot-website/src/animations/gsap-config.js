/**
 * GSAP Configuration and Custom Easing Functions
 * Exact replication of NexBank animation system
 */

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

// Register plugins
gsap.registerPlugin(CustomEase);

/**
 * Custom Easing Functions (from NexBank)
 * These cubic-bezier curves define the brand-specific animation feel
 */
export const easings = {
  // Logo transitions - smooth deceleration
  logoTransition: 'cubic-bezier(0.43, 0.195, 0.02, 1)',

  // Text animations - gentle ease
  textAnimation: 'cubic-bezier(0.43, 0, 0.06, 1)',

  // Logo hover effects - strong ease out
  logoHover: 'cubic-bezier(0.76, 0, 0.04, 1)',

  // Form interactions - bounce effect
  formInteraction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',

  // Custom "inOut" ease for page transitions
  inOut: CustomEase.create("inOut", "M0,0 C0.376,-0.034 0.454,0.528 0.472,0.6 0.542,0.89 0.578,1 1,1")
};

/**
 * Animation Timing Standards (in seconds)
 */
export const timings = {
  // Logo animations
  logoColored: 0.8,
  logoText: 0.9,
  logoBar: 1.0,
  logoHoverDelay: 0.2,

  // Navigation
  navBackground: 1.0,
  navInnerBg: 1.5,
  navLogo: 1.3,
  navItems: 1.2,
  navToggle: 0.3,
  navToggleDelay: 0.5,
  navCloseLabel: 0.8,
  navToggleLines: 1.0,
  navToggleScale: 1.5,

  // Loading screens
  mainLoading: 1.7,
  ajaxLoadingIn: 1.6,
  ajaxLoadingOut: 1.6,
  ajaxLoadingDelay: 0.1,

  // Staggered animations
  staggerShort: 0.1,    // Navigation items
  staggerMedium: 0.185, // Anchor links (2nd item)
  staggerLong: 0.27,    // Anchor links (3rd item)

  // Hover states
  anchorHover: 1.3,
  buttonHover: 0.3,

  // Smooth scroll
  smoothScrollEase: 0.08, // 8% interpolation per frame

  // Video transitions
  videoFade: 0.6
};

/**
 * Stagger Configuration
 * Used for sequential animation of multiple elements
 */
export const staggerConfig = {
  // Navigation items stagger
  navItems: {
    amount: 0.1,
    from: "start",
    ease: "power3.out"
  },

  // Anchor links stagger (with increasing delays)
  anchorLinks: [
    { delay: 0.1 },
    { delay: 0.185 },
    { delay: 0.27 },
    { delay: 0.355 },
    { delay: 0.44 },
    { delay: 0.525 },
    { delay: 0.61 },
    { delay: 0.695 }
  ],

  // Loading digits stagger
  loadingDigits: [
    { delay: 0 },
    { delay: 0.1 },
    { delay: 0.2 },
    { delay: 0.3 }
  ],

  // Word stagger for page transitions
  words: {
    amount: 0.1,
    from: "start"
  }
};

/**
 * SVG Stroke Animation Configuration
 */
export const strokeConfig = {
  dasharray: 47,
  dashoffset: 47,
  duration: 1.0,
  ease: easings.logoHover
};

/**
 * Transform Defaults
 * Hardware acceleration and performance optimization
 */
export const transformDefaults = {
  force3D: true,
  transformOrigin: "center center",
  backfaceVisibility: "hidden",
  perspective: 1000
};

/**
 * GSAP Global Configuration
 */
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
  trialWarn: false,
  units: { left: "%", top: "%", rotation: "deg" }
});

/**
 * Default animation properties
 */
export const defaultProps = {
  ease: "power2.inOut",
  duration: 0.8,
  ...transformDefaults
};

/**
 * Animation States
 */
export const states = {
  OPEN: 'open',
  CLOSE: 'close',
  LOADING: 'loading',
  LOADED: 'loaded',
  ANIMATING: 'animating',
  IDLE: 'idle'
};

/**
 * Helper function to create timeline with defaults
 */
export const createTimeline = (options = {}) => {
  return gsap.timeline({
    defaults: defaultProps,
    ...options
  });
};

/**
 * Helper function to set hardware acceleration
 */
export const setHardwareAcceleration = (element) => {
  gsap.set(element, {
    force3D: true,
    transformOrigin: "center center",
    backfaceVisibility: "hidden"
  });
};

/**
 * Performance threshold for smooth scroll
 */
export const SCROLL_THRESHOLD = 0.001;

/**
 * Intersection Observer configuration for lazy loading
 */
export const observerConfig = {
  rootMargin: "500px 0px 500px 0px",
  threshold: 0
};

/**
 * Export all GSAP-related utilities
 */
export default {
  gsap,
  CustomEase,
  easings,
  timings,
  staggerConfig,
  strokeConfig,
  transformDefaults,
  defaultProps,
  states,
  createTimeline,
  setHardwareAcceleration,
  SCROLL_THRESHOLD,
  observerConfig
};
