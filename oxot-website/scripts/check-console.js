import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  const warnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    } else if (msg.type() === 'warning') {
      warnings.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    errors.push(`PAGE ERROR: ${error.message}`);
  });

  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    console.log('=== BROWSER CONSOLE REPORT ===\n');

    if (errors.length > 0) {
      console.log('❌ ERRORS:');
      errors.forEach(err => console.log(`  - ${err}`));
      console.log('');
    } else {
      console.log('✅ No console errors\n');
    }

    if (warnings.length > 0) {
      console.log('⚠️  WARNINGS:');
      warnings.forEach(warn => console.log(`  - ${warn}`));
      console.log('');
    }

    // Check what's actually loaded
    const loadedModules = await page.evaluate(() => {
      return {
        gsap: typeof window.gsap,
        ScrollTrigger: typeof window.ScrollTrigger,
        React: typeof window.React,
      };
    });

    console.log('📦 LOADED MODULES:');
    console.log(`  - GSAP: ${loadedModules.gsap}`);
    console.log(`  - ScrollTrigger: ${loadedModules.ScrollTrigger}`);
    console.log(`  - React: ${loadedModules.React}`);

  } catch (error) {
    console.error('Script error:', error.message);
  } finally {
    await browser.close();
  }
})();
