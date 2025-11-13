import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  console.log('🎬 COMPREHENSIVE OXOT CAPTURE STARTED\n');
  console.log('='.repeat(70));

  try {
    // === HOMEPAGE CAPTURE ===
    console.log('\n📍 CAPTURING: OXOT Homepage');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    // Initial state
    await page.screenshot({
      path: 'research/nexbank-complete/screenshots/oxot-01-homepage-initial.png',
      fullPage: false
    });
    console.log('  ✓ Screenshot: Initial load');

    // Capture background on scroll
    console.log('  🎥 Recording scroll behavior...');
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, 300));
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `research/nexbank-complete/screenshots/oxot-01-homepage-scroll-${i}.png`,
        fullPage: false
      });
    }
    console.log('  ✓ Captured 5 scroll positions');

    // Scroll to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);

    // Full page screenshot
    await page.screenshot({
      path: 'research/nexbank-complete/screenshots/oxot-01-homepage-full.png',
      fullPage: true
    });
    console.log('  ✓ Full page screenshot');

    // === NAVIGATION MENU CAPTURE ===
    console.log('\n📍 CAPTURING: OXOT Navigation menu');
    const menuButton = await page.locator('.nav-toggle').first();
    await menuButton.click();
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: 'research/nexbank-complete/screenshots/oxot-02-menu-open.png',
      fullPage: false
    });
    console.log('  ✓ Menu open screenshot');

    await menuButton.click(); // Close
    await page.waitForTimeout(1000);

    // === CAROUSEL BEHAVIOR ===
    console.log('\n📍 CAPTURING: OXOT Carousel');
    for (let i = 0; i < 3; i++) {
      await page.screenshot({
        path: `research/nexbank-complete/screenshots/oxot-03-carousel-slide-${i+1}.png`,
        fullPage: false
      });
      console.log(`  ✓ Carousel slide ${i+1}`);

      if (i < 2) {
        const nextButton = await page.locator('.hero-carousel__arrow--next').first();
        await nextButton.click();
        await page.waitForTimeout(1500);
      }
    }

    // === CSS ANALYSIS ===
    console.log('\n📍 ANALYZING: OXOT CSS Properties');
    const cssData = await page.evaluate(() => {
      const getComputedStyles = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const styles = window.getComputedStyle(el);
        return {
          background: styles.background,
          backgroundColor: styles.backgroundColor,
          backgroundImage: styles.backgroundImage,
          fontSize: styles.fontSize,
          fontFamily: styles.fontFamily,
          color: styles.color,
          padding: styles.padding,
          margin: styles.margin,
          position: styles.position,
          zIndex: styles.zIndex
        };
      };

      return {
        body: getComputedStyles('body'),
        heroCarousel: getComputedStyles('.hero-carousel'),
        heroSlide: getComputedStyles('.hero-slide'),
        navigation: getComputedStyles('nav'),
        logo: getComputedStyles('.logo')
      };
    });

    fs.writeFileSync(
      'research/nexbank-complete/css-analysis/oxot-computed-styles.json',
      JSON.stringify(cssData, null, 2)
    );
    console.log('  ✓ CSS properties exported');

    // === MEASURE ACTUAL ELEMENTS ===
    console.log('\n📍 MEASURING: Actual element dimensions');
    const measurements = await page.evaluate(() => {
      const measure = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left
        };
      };

      return {
        logo: measure('.logo'),
        navToggle: measure('.nav-toggle'),
        heroCarousel: measure('.hero-carousel'),
        heroTitle: measure('.hero-slide__title'),
        serviceCards: Array.from(document.querySelectorAll('.service-card')).map(card => {
          const rect = card.getBoundingClientRect();
          return { width: rect.width, height: rect.height };
        })
      };
    });

    fs.writeFileSync(
      'research/nexbank-complete/analysis/oxot-measurements.json',
      JSON.stringify(measurements, null, 2)
    );
    console.log('  ✓ Element measurements exported');

    console.log('\n' + '='.repeat(70));
    console.log('✅ OXOT CAPTURE COMPLETE!');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    await context.close();
    await browser.close();
  }
})();
