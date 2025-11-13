/**
 * Logo Animation System
 * Exact replication of NexBank logo hover effects
 */

import { gsap } from 'gsap';
import { easings, timings, strokeConfig, setHardwareAcceleration } from './gsap-config.js';

/**
 * Logo Animation Class
 * Handles complex SVG animations with multiple elements
 */
class LogoAnimation {
  constructor(logoElement) {
    if (!logoElement) {
      console.warn('Logo element not found');
      return;
    }

    this.logo = logoElement;
    this.inner = this.logo.querySelector('.logo__inner');

    // SVG elements
    this.colored = this.inner?.querySelector('.colored');
    this.text = this.inner?.querySelector('.text');
    this.bars = this.inner?.querySelectorAll('.bar');
    this.thinStripes = this.inner?.querySelectorAll('.thin');
    this.boldStripes = this.inner?.querySelectorAll('.bold');

    // Animation state
    this.isHovered = false;
    this.timeline = null;

    this.init();
  }

  /**
   * Initialize logo animations
   */
  init() {
    if (!this.inner) return;

    // Apply hardware acceleration to all elements
    setHardwareAcceleration(this.inner);

    if (this.colored) setHardwareAcceleration(this.colored);
    if (this.text) setHardwareAcceleration(this.text);

    this.bars?.forEach(bar => setHardwareAcceleration(bar));
    this.thinStripes?.forEach(stripe => setHardwareAcceleration(stripe));
    this.boldStripes?.forEach(stripe => setHardwareAcceleration(stripe));

    // Set initial positions for animated stripes
    this.setInitialPositions();

    // Set up SVG stroke animation properties
    this.setupStrokeAnimation();

    // Bind hover events
    this.bindEvents();
  }

  /**
   * Set initial positions for animated stripe elements
   */
  setInitialPositions() {
    // Thin stripes
    const thinLeft = this.inner?.querySelector('.thin.left');
    const thinRight = this.inner?.querySelector('.thin.right');

    if (thinLeft) {
      gsap.set(thinLeft, {
        x: '-10%',
        y: '-2%',
        force3D: true
      });
    }

    if (thinRight) {
      gsap.set(thinRight, {
        x: '10%',
        y: '2%',
        force3D: true
      });
    }

    // Bold stripes
    const boldLeft = this.inner?.querySelector('.bold.left');
    const boldRight = this.inner?.querySelector('.bold.right');

    if (boldLeft) {
      gsap.set(boldLeft, {
        x: '-10%',
        y: '7%',
        force3D: true
      });
    }

    if (boldRight) {
      gsap.set(boldRight, {
        x: '10%',
        y: '-7%',
        force3D: true
      });
    }
  }

  /**
   * Setup SVG stroke animation properties
   */
  setupStrokeAnimation() {
    // Apply stroke animation to all bars and stripes
    const strokeElements = [
      ...Array.from(this.bars || []).flatMap(bar => Array.from(bar.querySelectorAll('path'))),
      ...Array.from(this.thinStripes || []),
      ...Array.from(this.boldStripes || [])
    ];

    strokeElements.forEach(element => {
      gsap.set(element, {
        strokeDasharray: strokeConfig.dasharray,
        strokeDashoffset: strokeConfig.dashoffset
      });
    });
  }

  /**
   * Bind hover events
   */
  bindEvents() {
    if (!this.inner) return;

    this.inner.addEventListener('mouseenter', () => this.animateHoverIn());
    this.inner.addEventListener('mouseleave', () => this.animateHoverOut());
  }

  /**
   * Hover in animation
   * All elements animate to neutral position with stroke reveal
   */
  animateHoverIn() {
    if (this.isHovered) return;
    this.isHovered = true;

    // Kill any existing timeline
    if (this.timeline) {
      this.timeline.kill();
    }

    this.timeline = gsap.timeline();

    // Animate stripes and bars to neutral position
    const animatedElements = [
      ...Array.from(this.thinStripes || []),
      ...Array.from(this.boldStripes || []),
      ...Array.from(this.bars || [])
    ];

    this.timeline.to(animatedElements, {
      x: 0,
      y: 0,
      force3D: true,
      duration: timings.logoBar,
      ease: easings.logoHover,
      delay: timings.logoHoverDelay
    }, 0);

    // Fade out colored icon
    if (this.colored) {
      this.timeline.to(this.colored, {
        opacity: 0,
        duration: timings.logoColored,
        ease: easings.logoTransition
      }, 0);
    }

    // Move text to the right
    if (this.text) {
      this.timeline.to(this.text, {
        x: '10%',
        force3D: true,
        duration: timings.logoText,
        ease: easings.textAnimation
      }, 0);
    }

    // Animate stroke reveal on bars and stripes
    const strokeElements = [
      ...Array.from(this.bars || []).flatMap(bar => Array.from(bar.querySelectorAll('path'))),
      ...Array.from(this.thinStripes || []),
      ...Array.from(this.boldStripes || [])
    ];

    this.timeline.to(strokeElements, {
      strokeDashoffset: 0,
      duration: strokeConfig.duration,
      ease: strokeConfig.ease,
      delay: timings.logoHoverDelay
    }, 0);

    // Increase stroke width on bold stripes
    this.boldStripes?.forEach(stripe => {
      this.timeline.to(stripe, {
        attr: { 'stroke-width': 5.5 },
        duration: strokeConfig.duration,
        ease: strokeConfig.ease,
        delay: timings.logoHoverDelay
      }, 0);
    });
  }

  /**
   * Hover out animation
   * Return all elements to initial state
   */
  animateHoverOut() {
    if (!this.isHovered) return;
    this.isHovered = false;

    // Kill any existing timeline
    if (this.timeline) {
      this.timeline.kill();
    }

    this.timeline = gsap.timeline();

    // Return stripes and bars to initial positions
    const thinLeft = this.inner?.querySelector('.thin.left');
    const thinRight = this.inner?.querySelector('.thin.right');
    const boldLeft = this.inner?.querySelector('.bold.left');
    const boldRight = this.inner?.querySelector('.bold.right');

    if (thinLeft) {
      this.timeline.to(thinLeft, {
        x: '-10%',
        y: '-2%',
        force3D: true,
        duration: timings.logoBar,
        ease: easings.logoHover
      }, 0);
    }

    if (thinRight) {
      this.timeline.to(thinRight, {
        x: '10%',
        y: '2%',
        force3D: true,
        duration: timings.logoBar,
        ease: easings.logoHover
      }, 0);
    }

    if (boldLeft) {
      this.timeline.to(boldLeft, {
        x: '-10%',
        y: '7%',
        force3D: true,
        duration: timings.logoBar,
        ease: easings.logoHover
      }, 0);
    }

    if (boldRight) {
      this.timeline.to(boldRight, {
        x: '10%',
        y: '-7%',
        force3D: true,
        duration: timings.logoBar,
        ease: easings.logoHover
      }, 0);
    }

    // Fade in colored icon
    if (this.colored) {
      this.timeline.to(this.colored, {
        opacity: 1,
        duration: timings.logoColored,
        ease: easings.logoTransition,
        delay: timings.logoColored * 0.3
      }, 0);
    }

    // Return text to original position
    if (this.text) {
      this.timeline.to(this.text, {
        x: '0%',
        force3D: true,
        duration: timings.logoText,
        ease: easings.textAnimation,
        delay: timings.logoColored * 0.05
      }, 0);
    }

    // Reset stroke animation
    const strokeElements = [
      ...Array.from(this.bars || []).flatMap(bar => Array.from(bar.querySelectorAll('path'))),
      ...Array.from(this.thinStripes || []),
      ...Array.from(this.boldStripes || [])
    ];

    this.timeline.to(strokeElements, {
      strokeDashoffset: strokeConfig.dashoffset,
      duration: strokeConfig.duration,
      ease: strokeConfig.ease
    }, 0);

    // Reset stroke width on bold stripes
    this.boldStripes?.forEach(stripe => {
      this.timeline.to(stripe, {
        attr: { 'stroke-width': 0.5 },
        duration: strokeConfig.duration,
        ease: strokeConfig.ease
      }, 0);
    });
  }

  /**
   * Cleanup and destroy
   */
  destroy() {
    if (this.timeline) {
      this.timeline.kill();
    }

    if (this.inner) {
      this.inner.removeEventListener('mouseenter', this.animateHoverIn);
      this.inner.removeEventListener('mouseleave', this.animateHoverOut);
    }
  }
}

/**
 * Initialize logo animation
 */
export const initLogoAnimation = (logoElement) => {
  return new LogoAnimation(logoElement);
};

export default LogoAnimation;
