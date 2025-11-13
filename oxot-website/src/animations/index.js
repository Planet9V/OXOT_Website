/**
 * GSAP Animation System - Main Entry Point
 * Complete animation system based on NexBank implementation
 */

import gsapConfig from './gsap-config.js';
import LogoAnimation, { initLogoAnimation } from './logo-animation.js';
import NavigationAnimation, { initNavigationAnimation } from './nav-animation.js';
import SmoothScroll, { initSmoothScroll } from './smooth-scroll.js';
import PageTransitionController, {
  initPageTransitions,
  MainLoading,
  AjaxLoading
} from './page-transitions.js';

/**
 * Video Lazy Loading Manager
 * Uses IntersectionObserver for performance
 */
class VideoManager {
  constructor(videoElement, options = {}) {
    this.video = videoElement;
    this.canAutoplay = true;
    this.isLoaded = false;

    const config = {
      rootMargin: options.rootMargin || gsapConfig.observerConfig.rootMargin,
      threshold: options.threshold || gsapConfig.observerConfig.threshold
    };

    this.observer = new IntersectionObserver(
      this.onObserverChange.bind(this),
      config
    );

    this.observer.observe(this.video);
  }

  /**
   * Handle intersection changes
   */
  onObserverChange(entries) {
    const entry = entries[0];

    if (entry.isIntersecting) {
      this.loadAndPlay();
    } else {
      this.pause();
    }
  }

  /**
   * Load video source and attempt playback
   */
  async loadAndPlay() {
    // Load source if not already loaded
    if (!this.video.src && this.video.dataset.src) {
      this.video.src = this.video.dataset.src;
      this.isLoaded = true;
    }

    // Load poster if available
    if (!this.video.poster && this.video.dataset.poster) {
      this.video.poster = this.video.dataset.poster;
    }

    // Attempt autoplay
    if (this.canAutoplay) {
      try {
        await this.video.play();
      } catch (error) {
        console.warn('Video autoplay failed:', error);
        this.canAutoplay = false;

        // Fallback to poster
        if (this.video.dataset.poster && !this.video.poster) {
          this.video.poster = this.video.dataset.poster;
        }
      }
    }
  }

  /**
   * Pause video
   */
  pause() {
    if (!this.video.paused) {
      this.video.pause();
    }
  }

  /**
   * Cleanup
   */
  destroy() {
    this.observer.disconnect();
    this.pause();
  }
}

/**
 * Circular Button Animations
 */
class CircularButton {
  constructor(buttonElement) {
    this.button = buttonElement;
    this.border = this.button.querySelector('.circ-button__border');
    this.picto = this.button.querySelector('.circ-button__picto');

    this.bindEvents();
  }

  bindEvents() {
    this.button.addEventListener('mouseenter', () => this.animateIn());
    this.button.addEventListener('mouseleave', () => this.animateOut());
  }

  animateIn() {
    if (!this.border) return;

    gsapConfig.gsap.to(this.border, {
      scale: 0.93,
      borderColor: 'rgba(255, 255, 255, 0.7)',
      duration: gsapConfig.timings.buttonHover,
      ease: 'power2.out'
    });

    if (this.picto) {
      const lines = this.picto.querySelectorAll('.circ-button__picto__line');

      lines.forEach((line, index) => {
        const isRight = this.button.classList.contains('circ-button--right');
        const isLeft = this.button.classList.contains('circ-button--left');

        let transform = '';

        if (isRight) {
          if (index === 0) transform = 'translate(3px, -3px) rotate(45deg)';
          if (index === 1) transform = 'translate(3px, 3px) rotate(-45deg)';
        } else if (isLeft) {
          if (index === 0) transform = 'translate(-3px, -3px) rotate(-45deg)';
          if (index === 1) transform = 'translate(-3px, 3px) rotate(45deg)';
        }

        if (transform) {
          gsapConfig.gsap.to(line, {
            transform,
            duration: gsapConfig.timings.buttonHover,
            ease: 'power2.out'
          });
        }
      });
    }
  }

  animateOut() {
    if (!this.border) return;

    gsapConfig.gsap.to(this.border, {
      scale: 1,
      borderColor: '#666',
      duration: gsapConfig.timings.buttonHover,
      ease: 'power2.out'
    });

    if (this.picto) {
      const lines = this.picto.querySelectorAll('.circ-button__picto__line');

      lines.forEach((line, index) => {
        const isRight = this.button.classList.contains('circ-button--right');
        const isLeft = this.button.classList.contains('circ-button--left');

        let transform = '';

        if (isRight) {
          if (index === 0) transform = 'translate(3px, -2px) rotate(45deg)';
          if (index === 1) transform = 'translate(3px, 2px) rotate(-45deg)';
        } else if (isLeft) {
          if (index === 0) transform = 'translate(-3px, -2px) rotate(-45deg)';
          if (index === 1) transform = 'translate(-3px, 2px) rotate(45deg)';
        }

        if (transform) {
          gsapConfig.gsap.to(line, {
            transform,
            duration: gsapConfig.timings.buttonHover,
            ease: 'power2.out'
          });
        }
      });
    }
  }

  destroy() {
    this.button.removeEventListener('mouseenter', this.animateIn);
    this.button.removeEventListener('mouseleave', this.animateOut);
  }
}

/**
 * Initialize all video lazy loading
 */
export const initVideoLazyLoading = (selector = 'video[data-src]') => {
  const videos = document.querySelectorAll(selector);
  const managers = [];

  videos.forEach(video => {
    managers.push(new VideoManager(video));
  });

  return managers;
};

/**
 * Initialize all circular buttons
 */
export const initCircularButtons = (selector = '.circ-button') => {
  const buttons = document.querySelectorAll(selector);
  const instances = [];

  buttons.forEach(button => {
    instances.push(new CircularButton(button));
  });

  return instances;
};

/**
 * Master initialization function
 * Sets up all animation systems
 */
export const initAnimations = (options = {}) => {
  const instances = {};

  // Logo animation
  if (options.logoElement || document.querySelector('.logo')) {
    instances.logo = initLogoAnimation(
      options.logoElement || document.querySelector('.logo')
    );
  }

  // Navigation animation
  const navElement = options.navElement || document.querySelector('.nav');
  const toggleElement = options.toggleElement || document.querySelector('.nav-toggle');

  if (navElement && toggleElement) {
    instances.navigation = initNavigationAnimation(navElement, toggleElement);
  }

  // Smooth scroll
  const containerElement = options.containerElement || document.body;
  const contentElement = options.contentElement || document.querySelector('.js-scroll-content');

  if (options.enableSmoothScroll && containerElement && contentElement) {
    instances.smoothScroll = initSmoothScroll(
      containerElement,
      contentElement,
      options.smoothScrollOptions || {}
    );
  }

  // Page transitions
  if (options.enablePageTransitions) {
    instances.pageTransitions = initPageTransitions({
      mainLoadingElement: options.mainLoadingElement || document.querySelector('.main-loading'),
      ajaxLoadingElement: options.ajaxLoadingElement || document.querySelector('.ajax-loading'),
      contentElement: options.pageContentElement || document.querySelector('.page-content')
    });
  }

  // Video lazy loading
  if (options.enableVideoLazyLoading !== false) {
    instances.videos = initVideoLazyLoading(options.videoSelector);
  }

  // Circular buttons
  if (options.enableCircularButtons !== false) {
    instances.circularButtons = initCircularButtons(options.buttonSelector);
  }

  return instances;
};

/**
 * Export all components
 */
export {
  gsapConfig,
  LogoAnimation,
  NavigationAnimation,
  SmoothScroll,
  PageTransitionController,
  MainLoading,
  AjaxLoading,
  VideoManager,
  CircularButton,
  initLogoAnimation,
  initNavigationAnimation,
  initSmoothScroll,
  initPageTransitions
};

/**
 * Export GSAP instance for external use
 */
export const { gsap, CustomEase } = gsapConfig;

export default {
  gsapConfig,
  initAnimations,
  initLogoAnimation,
  initNavigationAnimation,
  initSmoothScroll,
  initPageTransitions,
  initVideoLazyLoading,
  initCircularButtons,
  LogoAnimation,
  NavigationAnimation,
  SmoothScroll,
  PageTransitionController,
  MainLoading,
  AjaxLoading,
  VideoManager,
  CircularButton,
  gsap,
  CustomEase
};
