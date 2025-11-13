/**
 * Page Transition System
 * Exact replication of NexBank page transitions with loading screens
 */

import { gsap } from 'gsap';
import { easings, timings, staggerConfig, createTimeline } from './gsap-config.js';

/**
 * Main Loading Screen (Initial Page Load)
 * Animates from 00 to 100 with rolling digits
 */
class MainLoading {
  constructor(element) {
    if (!element) {
      console.warn('Main loading element not found');
      return;
    }

    this.element = element;
    this.digits = this.element.querySelectorAll('.main-loading__digit');
    this.timeline = null;
    this.onCompleteCallback = null;
  }

  /**
   * Start loading animation
   */
  start(onComplete) {
    this.onCompleteCallback = onComplete;

    if (this.digits.length < 6) {
      console.warn('Not enough digit elements found');
      if (onComplete) onComplete();
      return;
    }

    this.timeline = createTimeline({
      onComplete: () => this.animateOut()
    });

    // Make visible
    this.timeline.set(this.element, {
      visibility: 'inherit'
    }, 0);

    // Animate digits with staggered timing
    // First set (00 → rolling)
    this.timeline.fromTo(this.digits[1],
      { yPercent: -100 },
      {
        yPercent: 100,
        duration: timings.mainLoading,
        ease: 'power2.inOut'
      }, 0
    );

    this.timeline.fromTo(this.digits[2],
      { yPercent: 100 },
      {
        yPercent: -100,
        duration: timings.mainLoading,
        ease: 'power2.inOut'
      }, staggerConfig.loadingDigits[1].delay
    );

    // Second set (00 → 100)
    this.timeline.fromTo(this.digits[4],
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: timings.mainLoading,
        ease: 'power2.inOut'
      }, staggerConfig.loadingDigits[2].delay
    );

    this.timeline.fromTo(this.digits[5],
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: timings.mainLoading,
        ease: 'power2.inOut'
      }, staggerConfig.loadingDigits[3].delay
    );
  }

  /**
   * Animate out after loading complete
   */
  animateOut() {
    const tl = createTimeline({
      onComplete: () => {
        this.element.style.display = 'none';
        if (this.onCompleteCallback) {
          this.onCompleteCallback();
        }
      }
    });

    tl.to(this.element, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  /**
   * Cleanup
   */
  destroy() {
    if (this.timeline) {
      this.timeline.kill();
    }
  }
}

/**
 * Ajax Loading Screen (Page Transitions)
 * Slides in from bottom with animated text
 */
class AjaxLoading {
  constructor(element) {
    if (!element) {
      console.warn('Ajax loading element not found');
      return;
    }

    this.element = element;
    this.background = this.element.querySelector('.ajax-loading__background');
    this.text = this.element.querySelector('.ajax-loading__text');
    this.words = [];
    this.timeline = null;

    // Get window dimensions
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    // Update dimensions on resize
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    });
  }

  /**
   * Set text for transition
   */
  setText(text) {
    if (!this.text) return;

    // Split text into words and wrap in spans
    const words = text.split(' ');
    this.text.innerHTML = words.map(word =>
      `<span style="display: inline-block; overflow: hidden;">
        <span style="display: inline-block;">${word}</span>
       </span>`
    ).join(' ');

    this.words = this.text.querySelectorAll('span span');
  }

  /**
   * Animate in (cover page)
   */
  animateIn(callback) {
    if (this.timeline?.isActive()) {
      this.timeline.kill();
    }

    this.timeline = createTimeline({
      onComplete: () => {
        if (callback) callback();
      }
    });

    // Make visible
    this.timeline.set(this.element, {
      visibility: 'inherit'
    }, 0);

    // Slide background up from bottom
    this.timeline.fromTo(this.background,
      {
        y: this.windowHeight
      },
      {
        y: 0,
        duration: timings.ajaxLoadingIn,
        ease: easings.inOut
      }, 0
    );

    // Stagger words in
    if (this.words.length > 0) {
      this.timeline.staggerFromTo(this.words,
        timings.navBackground,
        {
          yPercent: (index) => index % 2 === 0 ? 100 : -100
        },
        {
          yPercent: 0,
          ease: 'power2.out'
        },
        staggerConfig.words.amount,
        0.7
      );
    }
  }

  /**
   * Animate out (reveal new page)
   */
  animateOut(callback) {
    if (this.timeline?.isActive()) {
      this.timeline.kill();
    }

    this.timeline = createTimeline({
      delay: timings.ajaxLoadingDelay,
      onComplete: () => {
        this.element.style.visibility = 'hidden';
        if (callback) callback();
      }
    });

    // Stagger words out
    if (this.words.length > 0) {
      this.timeline.staggerTo(this.words,
        timings.navLogo,
        {
          yPercent: (index) => index % 2 === 0 ? -100 : 100,
          ease: 'power2.inOut'
        },
        staggerConfig.words.amount,
        0
      );
    }

    // Slide background up and away
    this.timeline.to(this.background,
      {
        y: -this.windowHeight,
        duration: timings.ajaxLoadingOut,
        ease: easings.inOut
      }, timings.ajaxLoadingDelay
    );
  }

  /**
   * Full transition sequence
   */
  transition(text, onMiddle, onComplete) {
    this.setText(text);

    this.animateIn(() => {
      // Call middle callback (update content)
      if (onMiddle) onMiddle();

      // Animate out
      setTimeout(() => {
        this.animateOut(onComplete);
      }, 300);
    });
  }

  /**
   * Cleanup
   */
  destroy() {
    if (this.timeline) {
      this.timeline.kill();
    }
  }
}

/**
 * Page Transition Controller
 * Manages transitions between pages using History API
 */
class PageTransitionController {
  constructor(options = {}) {
    this.mainLoadingElement = options.mainLoadingElement;
    this.ajaxLoadingElement = options.ajaxLoadingElement;
    this.contentElement = options.contentElement;

    this.mainLoading = this.mainLoadingElement ? new MainLoading(this.mainLoadingElement) : null;
    this.ajaxLoading = this.ajaxLoadingElement ? new AjaxLoading(this.ajaxLoadingElement) : null;

    this.cache = new Map();
    this.currentUrl = window.location.href;
    this.isTransitioning = false;

    this.init();
  }

  /**
   * Initialize page transitions
   */
  init() {
    // Show main loading on first load
    if (this.mainLoading) {
      this.mainLoading.start(() => {
        this.onInitialLoadComplete();
      });
    } else {
      this.onInitialLoadComplete();
    }

    // Bind navigation events
    this.bindEvents();
  }

  /**
   * Called when initial page load completes
   */
  onInitialLoadComplete() {
    // Cache current page
    if (this.contentElement) {
      this.cache.set(this.currentUrl, this.contentElement.innerHTML);
    }

    // Trigger custom event
    window.dispatchEvent(new CustomEvent('pageLoadComplete'));
  }

  /**
   * Bind click events for internal navigation
   */
  bindEvents() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');

      if (!link) return;

      const href = link.getAttribute('href');

      // Check if internal link
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        event.preventDefault();
        this.navigateTo(href, link.textContent);
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
      if (event.state?.url) {
        this.navigateTo(event.state.url, 'Page', true);
      }
    });
  }

  /**
   * Navigate to new page with transition
   */
  async navigateTo(url, title = 'Page', skipHistory = false) {
    if (this.isTransitioning) return;
    if (url === this.currentUrl) return;

    this.isTransitioning = true;

    // Check cache first
    let content = this.cache.get(url);

    if (!this.ajaxLoading) {
      window.location.href = url;
      return;
    }

    // Start transition
    this.ajaxLoading.transition(
      title,
      async () => {
        // Fetch new content if not cached
        if (!content) {
          try {
            const response = await fetch(url, {
              headers: {
                'X-Requested-With': 'XMLHttpRequest'
              }
            });

            if (response.ok) {
              content = await response.text();
              this.cache.set(url, content);
            } else {
              throw new Error('Failed to load page');
            }
          } catch (error) {
            console.error('Navigation error:', error);
            window.location.href = url;
            return;
          }
        }

        // Update content
        if (this.contentElement && content) {
          this.contentElement.innerHTML = content;
        }

        // Update history
        if (!skipHistory) {
          window.history.pushState({ url }, title, url);
        }

        // Update current URL
        this.currentUrl = url;

        // Scroll to top
        window.scrollTo(0, 0);

        // Trigger custom event
        window.dispatchEvent(new CustomEvent('pageTransitionComplete', {
          detail: { url, title }
        }));
      },
      () => {
        this.isTransitioning = false;
      }
    );
  }

  /**
   * Cleanup
   */
  destroy() {
    if (this.mainLoading) {
      this.mainLoading.destroy();
    }

    if (this.ajaxLoading) {
      this.ajaxLoading.destroy();
    }

    this.cache.clear();
  }
}

/**
 * Initialize page transitions
 */
export const initPageTransitions = (options) => {
  return new PageTransitionController(options);
};

export {
  MainLoading,
  AjaxLoading,
  PageTransitionController
};

export default PageTransitionController;
