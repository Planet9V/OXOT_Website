/**
 * Smooth Scroll Implementation
 * Exact replication of NexBank smooth scroll with 8% interpolation
 */

import { gsap } from 'gsap';
import { SCROLL_THRESHOLD, timings } from './gsap-config.js';

/**
 * Smooth Scroll Class
 * Provides butter-smooth scrolling with custom easing
 */
class SmoothScroll {
  constructor(container, content, options = {}) {
    if (!container || !content) {
      console.warn('Container or content element not found');
      return;
    }

    this.container = container;
    this.content = content;

    // Configuration
    this.ease = options.ease || timings.smoothScrollEase; // 8% interpolation
    this.smooth = options.smooth !== undefined ? options.smooth : true;
    this.direction = options.direction || 'vertical';
    this.gestureDirection = options.gestureDirection || 'vertical';

    // Scroll state
    this.scrollTop = 0;
    this.containerY = 0;
    this.containerOldY = 0;
    this.scrollHeight = 0;
    this.containerHeight = 0;

    // Performance
    this.isSleeping = false;
    this.animationFrame = null;
    this.resizeTimeout = null;

    // Callbacks
    this.onScrollCallback = options.onScroll || null;
    this.onResizeCallback = options.onResize || null;

    // Bindings
    this.render = this.render.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);

    this.init();
  }

  /**
   * Initialize smooth scroll
   */
  init() {
    // Set up container
    this.container.style.overflow = 'hidden';
    this.container.style.position = 'fixed';
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.top = '0';
    this.container.style.left = '0';

    // Set up content
    gsap.set(this.content, {
      force3D: true,
      transformOrigin: 'center center',
      backfaceVisibility: 'hidden'
    });

    // Calculate dimensions
    this.updateDimensions();

    // Bind events
    this.bindEvents();

    // Start render loop
    this.wake();
  }

  /**
   * Update scroll dimensions
   */
  updateDimensions() {
    this.scrollHeight = this.content.offsetHeight;
    this.containerHeight = this.container.offsetHeight;

    // Update body height to enable native scrollbar
    document.body.style.height = `${this.scrollHeight}px`;
  }

  /**
   * Bind scroll and resize events
   */
  bindEvents() {
    // Scroll events
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('wheel', this.onMouseWheel, { passive: false });

    // Touch events
    window.addEventListener('touchstart', this.onTouchStart, { passive: true });
    window.addEventListener('touchmove', this.onTouchMove, { passive: false });

    // Resize
    window.addEventListener('resize', this.onResize);
  }

  /**
   * Unbind all events
   */
  unbindEvents() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('wheel', this.onMouseWheel);
    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('resize', this.onResize);
  }

  /**
   * Handle native scroll event
   */
  onScroll() {
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.wake();
  }

  /**
   * Handle mouse wheel
   */
  onMouseWheel(event) {
    if (!this.smooth) return;

    // Prevent default only if we're handling scroll
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();

      // Update scroll position
      this.scrollTop += event.deltaY;
      this.scrollTop = Math.max(0, Math.min(this.scrollTop, this.scrollHeight - this.containerHeight));

      window.scrollTo(0, this.scrollTop);
      this.wake();
    }
  }

  /**
   * Touch event handlers
   */
  onTouchStart(event) {
    this.touchStartY = event.touches[0].clientY;
    this.touchScrollTop = this.scrollTop;
  }

  onTouchMove(event) {
    if (!this.smooth) return;

    const touchY = event.touches[0].clientY;
    const deltaY = this.touchStartY - touchY;

    this.scrollTop = this.touchScrollTop + deltaY;
    this.scrollTop = Math.max(0, Math.min(this.scrollTop, this.scrollHeight - this.containerHeight));

    window.scrollTo(0, this.scrollTop);
    this.wake();
  }

  /**
   * Handle window resize
   */
  onResize() {
    clearTimeout(this.resizeTimeout);

    this.resizeTimeout = setTimeout(() => {
      this.updateDimensions();

      // Clamp scroll position
      this.scrollTop = Math.max(0, Math.min(this.scrollTop, this.scrollHeight - this.containerHeight));
      this.containerY = this.scrollTop;

      // Update transform immediately
      gsap.set(this.content, {
        y: -this.containerY
      });

      if (this.onResizeCallback) {
        this.onResizeCallback();
      }
    }, 200);
  }

  /**
   * Wake up render loop
   */
  wake() {
    if (!this.isSleeping) return;

    this.isSleeping = false;
    this.render();
  }

  /**
   * Put render loop to sleep (performance optimization)
   */
  sleep() {
    this.isSleeping = true;

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  /**
   * Main render loop with 8% interpolation
   */
  render() {
    if (this.isSleeping) return;

    // Store old position
    this.containerOldY = this.containerY;

    // Smooth interpolation (8% ease)
    this.containerY += (this.scrollTop - this.containerY) * this.ease;

    // Apply transform
    gsap.set(this.content, {
      y: -this.containerY,
      force3D: true
    });

    // Calculate progress
    const diffProgress = Math.abs(this.containerY - this.containerOldY);
    const hasActiveItem = diffProgress > SCROLL_THRESHOLD;

    // Scroll callback
    if (this.onScrollCallback) {
      this.onScrollCallback({
        scrollTop: this.containerY,
        scrollHeight: this.scrollHeight,
        containerHeight: this.containerHeight,
        progress: this.containerY / (this.scrollHeight - this.containerHeight)
      });
    }

    // Continue or sleep
    if (hasActiveItem) {
      this.animationFrame = requestAnimationFrame(this.render);
    } else {
      this.sleep();
    }
  }

  /**
   * Scroll to specific position
   */
  scrollTo(target, options = {}) {
    const duration = options.duration !== undefined ? options.duration : 1.2;
    const ease = options.ease || 'power3.inOut';
    const offset = options.offset || 0;

    let targetY = 0;

    // Handle different target types
    if (typeof target === 'number') {
      targetY = target;
    } else if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (element) {
        targetY = element.offsetTop;
      }
    } else if (target instanceof HTMLElement) {
      targetY = target.offsetTop;
    }

    targetY += offset;
    targetY = Math.max(0, Math.min(targetY, this.scrollHeight - this.containerHeight));

    // Animate scroll position
    gsap.to(this, {
      scrollTop: targetY,
      duration,
      ease,
      onUpdate: () => {
        window.scrollTo(0, this.scrollTop);
        this.wake();
      },
      onComplete: options.onComplete
    });
  }

  /**
   * Enable smooth scrolling
   */
  enable() {
    this.smooth = true;
    this.wake();
  }

  /**
   * Disable smooth scrolling
   */
  disable() {
    this.smooth = false;
    this.sleep();
  }

  /**
   * Cleanup and destroy
   */
  destroy() {
    this.sleep();
    this.unbindEvents();

    // Reset styles
    this.container.style.overflow = '';
    this.container.style.position = '';
    this.container.style.width = '';
    this.container.style.height = '';
    this.container.style.top = '';
    this.container.style.left = '';

    document.body.style.height = '';

    gsap.set(this.content, { clearProps: 'all' });
  }
}

/**
 * Initialize smooth scroll
 */
export const initSmoothScroll = (container, content, options) => {
  return new SmoothScroll(container, content, options);
};

export default SmoothScroll;
