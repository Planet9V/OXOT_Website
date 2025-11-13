/**
 * GSAP Animation System - Test Setup
 * Verify all components are working correctly
 */

import { gsap } from 'gsap';
import gsapConfig from './gsap-config.js';

/**
 * Test GSAP Configuration
 */
export function testGSAPConfig() {
  console.log('🧪 Testing GSAP Configuration...');

  const tests = {
    gsapLoaded: typeof gsap !== 'undefined',
    customEaseLoaded: typeof gsapConfig.CustomEase !== 'undefined',
    easingsDefined: Object.keys(gsapConfig.easings).length === 5,
    timingsDefined: Object.keys(gsapConfig.timings).length > 20,
    staggerConfigDefined: Object.keys(gsapConfig.staggerConfig).length === 3,
    strokeConfigDefined: Object.keys(gsapConfig.strokeConfig).length === 4
  };

  console.log('✅ GSAP Configuration Tests:');
  Object.entries(tests).forEach(([test, passed]) => {
    console.log(`  ${passed ? '✅' : '❌'} ${test}`);
  });

  return Object.values(tests).every(v => v);
}

/**
 * Test Custom Easing Functions
 */
export function testEasingFunctions() {
  console.log('\n🧪 Testing Easing Functions...');

  const easings = gsapConfig.easings;

  const tests = {
    logoTransition: easings.logoTransition === 'cubic-bezier(0.43, 0.195, 0.02, 1)',
    textAnimation: easings.textAnimation === 'cubic-bezier(0.43, 0, 0.06, 1)',
    logoHover: easings.logoHover === 'cubic-bezier(0.76, 0, 0.04, 1)',
    formInteraction: easings.formInteraction === 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    customInOut: easings.inOut !== null
  };

  console.log('✅ Easing Functions:');
  Object.entries(tests).forEach(([test, passed]) => {
    console.log(`  ${passed ? '✅' : '❌'} ${test}`);
  });

  return Object.values(tests).every(v => v);
}

/**
 * Test Animation Timings
 */
export function testAnimationTimings() {
  console.log('\n🧪 Testing Animation Timings...');

  const timings = gsapConfig.timings;

  const tests = {
    logoColored: timings.logoColored === 0.8,
    logoText: timings.logoText === 0.9,
    logoBar: timings.logoBar === 1.0,
    navBackground: timings.navBackground === 1.0,
    navInnerBg: timings.navInnerBg === 1.5,
    navLogo: timings.navLogo === 1.3,
    navItems: timings.navItems === 1.2,
    smoothScrollEase: timings.smoothScrollEase === 0.08,
    staggerShort: timings.staggerShort === 0.1,
    staggerMedium: timings.staggerMedium === 0.185,
    staggerLong: timings.staggerLong === 0.27
  };

  console.log('✅ Animation Timings (seconds):');
  Object.entries(tests).forEach(([test, passed]) => {
    console.log(`  ${passed ? '✅' : '❌'} ${test}`);
  });

  return Object.values(tests).every(v => v);
}

/**
 * Test Stagger Configuration
 */
export function testStaggerConfig() {
  console.log('\n🧪 Testing Stagger Configuration...');

  const stagger = gsapConfig.staggerConfig;

  const tests = {
    navItemsConfig: stagger.navItems.amount === 0.1,
    anchorLinksLength: stagger.anchorLinks.length === 8,
    firstAnchorDelay: stagger.anchorLinks[0].delay === 0.1,
    secondAnchorDelay: stagger.anchorLinks[1].delay === 0.185,
    thirdAnchorDelay: stagger.anchorLinks[2].delay === 0.27,
    loadingDigitsLength: stagger.loadingDigits.length === 4
  };

  console.log('✅ Stagger Configuration:');
  Object.entries(tests).forEach(([test, passed]) => {
    console.log(`  ${passed ? '✅' : '❌'} ${test}`);
  });

  return Object.values(tests).every(v => v);
}

/**
 * Test SVG Stroke Configuration
 */
export function testStrokeConfig() {
  console.log('\n🧪 Testing SVG Stroke Configuration...');

  const stroke = gsapConfig.strokeConfig;

  const tests = {
    dasharray: stroke.dasharray === 47,
    dashoffset: stroke.dashoffset === 47,
    duration: stroke.duration === 1.0,
    easeDefined: stroke.ease !== undefined
  };

  console.log('✅ SVG Stroke Configuration:');
  Object.entries(tests).forEach(([test, passed]) => {
    console.log(`  ${passed ? '✅' : '❌'} ${test}`);
  });

  return Object.values(tests).every(v => v);
}

/**
 * Test GSAP Animation
 */
export function testGSAPAnimation() {
  console.log('\n🧪 Testing GSAP Animation...');

  try {
    // Create test element
    const testDiv = document.createElement('div');
    testDiv.style.cssText = 'position: absolute; opacity: 0; pointer-events: none;';
    document.body.appendChild(testDiv);

    // Test basic animation
    gsap.to(testDiv, {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.inOut',
      onComplete: () => {
        console.log('  ✅ Basic animation works');
        document.body.removeChild(testDiv);
      }
    });

    return true;
  } catch (error) {
    console.log('  ❌ Animation test failed:', error.message);
    return false;
  }
}

/**
 * Test Timeline Creation
 */
export function testTimelineCreation() {
  console.log('\n🧪 Testing Timeline Creation...');

  try {
    const timeline = gsapConfig.createTimeline({
      paused: true
    });

    const tests = {
      timelineCreated: timeline !== null,
      isGSAPTimeline: timeline.constructor.name === 'Timeline',
      isPaused: timeline.paused(),
      hasDefaultEase: timeline.defaults.ease !== undefined
    };

    console.log('✅ Timeline Creation:');
    Object.entries(tests).forEach(([test, passed]) => {
      console.log(`  ${passed ? '✅' : '❌'} ${test}`);
    });

    timeline.kill();

    return Object.values(tests).every(v => v);
  } catch (error) {
    console.log('  ❌ Timeline test failed:', error.message);
    return false;
  }
}

/**
 * Run All Tests
 */
export function runAllTests() {
  console.log('🚀 GSAP Animation System - Running Tests\n');
  console.log('='.repeat(50));

  const results = {
    config: testGSAPConfig(),
    easings: testEasingFunctions(),
    timings: testAnimationTimings(),
    stagger: testStaggerConfig(),
    stroke: testStrokeConfig(),
    animation: testGSAPAnimation(),
    timeline: testTimelineCreation()
  };

  console.log('\n' + '='.repeat(50));
  console.log('\n📊 Test Results:');

  const passed = Object.values(results).filter(v => v).length;
  const total = Object.values(results).length;

  Object.entries(results).forEach(([test, passed]) => {
    console.log(`  ${passed ? '✅' : '❌'} ${test}`);
  });

  console.log(`\n${passed === total ? '✅' : '❌'} ${passed}/${total} tests passed`);

  if (passed === total) {
    console.log('\n🎉 All tests passed! GSAP system is ready.');
  } else {
    console.log('\n⚠️  Some tests failed. Check configuration.');
  }

  return passed === total;
}

/**
 * Auto-run tests if this file is executed directly
 */
if (typeof window !== 'undefined') {
  // Wait for DOM if in browser
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAllTests);
  } else {
    runAllTests();
  }
}

export default {
  runAllTests,
  testGSAPConfig,
  testEasingFunctions,
  testAnimationTimings,
  testStaggerConfig,
  testStrokeConfig,
  testGSAPAnimation,
  testTimelineCreation
};
