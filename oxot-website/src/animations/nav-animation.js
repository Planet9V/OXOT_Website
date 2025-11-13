/**
 * Navigation Animation System
 * Exact replication of NexBank navigation overlay and toggle animations
 */

import { gsap } from 'gsap';
import { easings, timings, staggerConfig, createTimeline, setHardwareAcceleration } from './gsap-config.js';

/**
 * Navigation Animation Class
 */
class NavigationAnimation {
  constructor(navElement, toggleElement) {
    if (!navElement || !toggleElement) {
      console.warn('Navigation or toggle element not found');
      return;
    }

    this.nav = navElement;
    this.toggle = toggleElement;

    // Navigation elements
    this.background = this.nav.querySelector('.nav__background');
    this.innerBg = this.nav.querySelector('.nav__inner__background');
    this.logo = this.nav.querySelector('.nav__logo');
    this.items = this.nav.querySelectorAll('.nav__item');
    this.anchors = this.nav.querySelectorAll('.nav__anchor');
    this.loginBtn = this.nav.querySelector('.nav__login');

    // Toggle elements
    this.closeLabel = this.toggle.querySelector('.nav-toggle__close-label');
    this.openIcon = this.toggle.querySelector('.nav-toggle__picto--open');
    this.closeIcon = this.toggle.querySelector('.nav-toggle__picto--close');
    this.lines = this.toggle.querySelectorAll('.nav-toggle__line');

    // State
    this.isOpen = false;
    this.timeline = null;

    this.init();
  }

  /**
   * Initialize navigation system
   */
  init() {
    // Apply hardware acceleration
    setHardwareAcceleration(this.nav);
    setHardwareAcceleration(this.toggle);

    this.items?.forEach(item => setHardwareAcceleration(item));
    this.lines?.forEach(line => setHardwareAcceleration(line));

    // Set initial state
    this.setInitialState();

    // Bind events
    this.bindEvents();
  }

  /**
   * Set initial state (nav hidden, toggle in open state)
   */
  setInitialState() {
    // Hide navigation
    gsap.set(this.nav, {
      visibility: 'hidden',
      attr: { 'aria-hidden': 'true' }
    });

    gsap.set(this.background, { opacity: 0 });

    gsap.set(this.innerBg, {
      yPercent: -100,
      opacity: 0
    });

    gsap.set(this.logo, {
      yPercent: -100,
      opacity: 0
    });

    gsap.set(this.items, {
      y: 80,
      rotation: 30,
      opacity: 0
    });

    if (this.loginBtn) {
      gsap.set(this.loginBtn, {
        y: 80,
        rotation: 30,
        opacity: 0
      });
    }

    // Toggle in "open" state initially
    gsap.set(this.closeLabel, {
      x: -50,
      opacity: 0
    });

    gsap.set(this.closeIcon, {
      visibility: 'hidden'
    });

    // Set toggle button aria
    this.toggle.setAttribute('aria-expanded', 'false');
  }

  /**
   * Bind click event to toggle
   */
  bindEvents() {
    this.toggle.addEventListener('click', () => {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    });

    // Setup anchor link hover animations
    this.setupAnchorHoverAnimations();
  }

  /**
   * Open navigation with full animation sequence
   */
  open() {
    if (this.isOpen || this.timeline?.isActive()) return;

    this.isOpen = true;
    this.toggle.setAttribute('aria-expanded', 'true');
    this.nav.setAttribute('aria-hidden', 'false');

    // Kill any existing timeline
    if (this.timeline) {
      this.timeline.kill();
    }

    this.timeline = createTimeline();

    // Make nav visible
    this.timeline.set(this.nav, {
      visibility: 'inherit'
    }, 0);

    // Fade in background
    this.timeline.fromTo(this.background,
      { opacity: 0 },
      {
        opacity: 1,
        duration: timings.navBackground
      }, 0
    );

    // Slide in inner background
    this.timeline.fromTo(this.innerBg,
      {
        yPercent: -100,
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: timings.navInnerBg,
        ease: easings.inOut
      }, 0
    );

    // Slide in logo
    this.timeline.fromTo(this.logo,
      {
        yPercent: -100,
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: timings.navLogo,
        ease: 'power3.out'
      }, 0.8
    );

    // Stagger in navigation items
    this.timeline.fromTo(this.items,
      {
        y: 80,
        rotation: 30,
        opacity: 0
      },
      {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: timings.navItems,
        ease: 'power3.out',
        stagger: staggerConfig.navItems.amount
      }, 1
    );

    // Animate login button if present
    if (this.loginBtn) {
      this.timeline.fromTo(this.loginBtn,
        {
          y: 80,
          rotation: 30,
          opacity: 0
        },
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: timings.navItems,
          ease: 'power3.out'
        }, 1.2
      );
    }

    // Animate toggle to close state
    this.animateToggleToClose();
  }

  /**
   * Close navigation with reverse animation
   */
  close() {
    if (!this.isOpen || this.timeline?.isActive()) return;

    this.isOpen = false;
    this.toggle.setAttribute('aria-expanded', 'false');
    this.nav.setAttribute('aria-hidden', 'true');

    // Kill any existing timeline
    if (this.timeline) {
      this.timeline.kill();
    }

    this.timeline = createTimeline();

    // Fade out navigation items
    this.timeline.to(this.items, {
      y: -80,
      rotation: -30,
      opacity: 0,
      duration: timings.navItems * 0.8,
      ease: 'power2.in',
      stagger: staggerConfig.navItems.amount * 0.5
    }, 0);

    if (this.loginBtn) {
      this.timeline.to(this.loginBtn, {
        y: -80,
        rotation: -30,
        opacity: 0,
        duration: timings.navItems * 0.8,
        ease: 'power2.in'
      }, 0.1);
    }

    // Slide out logo
    this.timeline.to(this.logo, {
      yPercent: -100,
      opacity: 0,
      duration: timings.navLogo * 0.8,
      ease: 'power2.in'
    }, 0.2);

    // Slide out inner background
    this.timeline.to(this.innerBg, {
      yPercent: -100,
      opacity: 0,
      duration: timings.navInnerBg * 0.8,
      ease: easings.inOut
    }, 0.3);

    // Fade out background
    this.timeline.to(this.background, {
      opacity: 0,
      duration: timings.navBackground * 0.8
    }, 0.4);

    // Hide nav when complete
    this.timeline.set(this.nav, {
      visibility: 'hidden'
    });

    // Animate toggle to open state
    this.animateToggleToOpen();
  }

  /**
   * Animate toggle from open to close state
   */
  animateToggleToClose() {
    const tl = gsap.timeline();

    // Fade out open icon
    tl.set(this.closeIcon, { visibility: 'inherit' }, 0);
    tl.fromTo(this.openIcon,
      { opacity: 1 },
      {
        opacity: 0,
        duration: timings.navToggle
      }, 0
    );
    tl.set(this.openIcon, { visibility: 'hidden' });

    // Add label for synchronized animations
    tl.addLabel('close', `+=${timings.navToggleDelay}`);

    // Slide in close label
    tl.fromTo(this.closeLabel,
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: timings.navCloseLabel,
        ease: 'power2.out'
      }, 'close'
    );

    // Animate lines to X formation
    const linePositions = [
      { x: -32.4, y: -32.4 },
      { x: 32.4, y: -32.4 },
      { x: -32.4, y: 32.4 },
      { x: 32.4, y: 32.4 }
    ];

    this.lines.forEach((line, index) => {
      tl.fromTo(line,
        linePositions[index],
        {
          x: 0,
          y: 0,
          duration: timings.navToggleLines,
          ease: 'power2.inOut'
        }, 'close'
      );

      tl.fromTo(line,
        { scaleX: 0 },
        {
          scaleX: 1.8,
          duration: timings.navToggleLines,
          ease: 'power2.inOut'
        }, 'close'
      );
    });

    // Final scale adjustment
    tl.to(this.lines, {
      scaleX: 1,
      duration: timings.navToggleScale,
      ease: 'power2.out'
    }, '-=0.4');
  }

  /**
   * Animate toggle from close to open state
   */
  animateToggleToOpen() {
    const tl = gsap.timeline();

    // Hide close label
    tl.to(this.closeLabel, {
      x: -50,
      opacity: 0,
      duration: timings.navToggle,
      ease: 'power2.in'
    }, 0);

    // Animate lines back to hamburger
    tl.to(this.lines, {
      x: 0,
      y: 0,
      scaleX: 1,
      duration: timings.navToggleLines,
      ease: 'power2.inOut'
    }, 0);

    // Show open icon
    tl.set(this.openIcon, { visibility: 'inherit' });
    tl.fromTo(this.openIcon,
      { opacity: 0 },
      {
        opacity: 1,
        duration: timings.navToggle,
        ease: 'power2.out'
      }
    );

    tl.set(this.closeIcon, { visibility: 'hidden' });
  }

  /**
   * Setup hover animations for anchor links
   */
  setupAnchorHoverAnimations() {
    this.items.forEach((item) => {
      const anchors = item.querySelectorAll('.nav__anchor');

      if (anchors.length === 0) return;

      // Set initial state
      gsap.set(anchors, {
        opacity: 0,
        y: '100%',
        force3D: true
      });

      item.addEventListener('mouseenter', () => {
        anchors.forEach((anchor, index) => {
          const delay = staggerConfig.anchorLinks[index]?.delay || 0;

          gsap.to(anchor, {
            opacity: 1,
            y: 0,
            force3D: true,
            duration: timings.anchorHover,
            ease: easings.logoTransition,
            delay
          });
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(anchors, {
          opacity: 0,
          y: '100%',
          force3D: true,
          duration: timings.anchorHover * 0.7,
          ease: easings.logoTransition
        });
      });
    });
  }

  /**
   * Cleanup and destroy
   */
  destroy() {
    if (this.timeline) {
      this.timeline.kill();
    }

    this.toggle.removeEventListener('click', this.open);
  }
}

/**
 * Initialize navigation animation
 */
export const initNavigationAnimation = (navElement, toggleElement) => {
  return new NavigationAnimation(navElement, toggleElement);
};

export default NavigationAnimation;
