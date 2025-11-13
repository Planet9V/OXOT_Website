import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: 'research/nexbank-complete/videos/',
      size: { width: 1920, height: 1080 }
    }
  });

  const page = await context.newPage();

  console.log('🎬 COMPREHENSIVE NEXBANK CAPTURE STARTED\n');
  console.log('='.repeat(70));

  try {
    // === HOMEPAGE CAPTURE ===
    console.log('\n📍 CAPTURING: Homepage (https://www.nexbank.com/)');
    await page.goto('https://www.nexbank.com/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    // Initial state
    await page.screenshot({
      path: 'research/nexbank-complete/screenshots/01-homepage-initial.png',
      fullPage: false
    });
    console.log('  ✓ Screenshot: Initial load');

    // Capture background on scroll
    console.log('  🎥 Recording scroll behavior...');
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, 300));
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `research/nexbank-complete/screenshots/01-homepage-scroll-${i}.png`,
        fullPage: false
      });
    }
    console.log('  ✓ Captured 5 scroll positions');

    // Scroll to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);

    // Full page screenshot
    await page.screenshot({
      path: 'research/nexbank-complete/screenshots/01-homepage-full.png',
      fullPage: true
    });
    console.log('  ✓ Full page screenshot');

    // === NAVIGATION MENU CAPTURE ===
    console.log('\n📍 CAPTURING: Navigation menu interaction');

    // Find and click menu button
    const menuButton = await page.locator('button, [role="button"]').filter({ hasText: /menu|nav/i }).first();
    const hamburger = await page.locator('.nav-toggle, button').last();

    try {
      await hamburger.click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: 'research/nexbank-complete/screenshots/02-menu-open.png',
        fullPage: false
      });
      console.log('  ✓ Menu open screenshot');

      // Close menu
      const closeButton = await page.locator('button').filter({ hasText: /close/i }).first();
      await closeButton.click();
      await page.waitForTimeout(1000);
    } catch (e) {
      console.log('  ⚠ Could not capture menu (may not have overlay menu)');
    }

    // === CAROUSEL BEHAVIOR ===
    console.log('\n📍 CAPTURING: Carousel rotation');
    await page.goto('https://www.nexbank.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    for (let i = 0; i < 3; i++) {
      await page.screenshot({
        path: `research/nexbank-complete/screenshots/03-carousel-slide-${i+1}.png`,
        fullPage: false
      });
      console.log(`  ✓ Carousel slide ${i+1}`);
      await page.waitForTimeout(7000); // Wait for auto-rotation
    }

    // === CSS ANALYSIS ===
    console.log('\n📍 ANALYZING: CSS Properties');
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
        header: getComputedStyles('header'),
        hero: getComputedStyles('[class*="hero"], main > div:first-child'),
        navigation: getComputedStyles('nav, [class*="nav"]'),
        carousel: getComputedStyles('[class*="carousel"], [class*="slider"]')
      };
    });

    fs.writeFileSync(
      'research/nexbank-complete/css-analysis/computed-styles.json',
      JSON.stringify(cssData, null, 2)
    );
    console.log('  ✓ CSS properties exported');

    // === DOM STRUCTURE ===
    console.log('\n📍 CAPTURING: DOM Structure');
    const domStructure = await page.evaluate(() => {
      const captureElement = (el, depth = 0) => {
        if (depth > 5 || !el) return null;

        return {
          tag: el.tagName,
          classes: Array.from(el.classList),
          id: el.id,
          children: Array.from(el.children).slice(0, 10).map(child =>
            captureElement(child, depth + 1)
          ).filter(Boolean)
        };
      };

      return captureElement(document.body);
    });

    fs.writeFileSync(
      'research/nexbank-complete/dom-captures/body-structure.json',
      JSON.stringify(domStructure, null, 2)
    );
    console.log('  ✓ DOM structure exported');

    // === ALL PAGES CAPTURE ===
    const pages = [
      { url: '/institutional-banking', name: '04-institutional-banking' },
      { url: '/commercial-banking', name: '05-commercial-banking' },
      { url: '/mortgage-banking', name: '06-mortgage-banking' },
      { url: '/about', name: '07-about' },
      { url: '/contact', name: '08-contact' }
    ];

    console.log('\n📍 CAPTURING: All site pages');
    for (const pageInfo of pages) {
      try {
        await page.goto(`https://www.nexbank.com${pageInfo.url}`, {
          waitUntil: 'networkidle',
          timeout: 15000
        });
        await page.waitForTimeout(2000);
        await page.screenshot({
          path: `research/nexbank-complete/screenshots/${pageInfo.name}.png`,
          fullPage: true
        });
        console.log(`  ✓ ${pageInfo.name}`);
      } catch (e) {
        console.log(`  ✗ Failed to capture ${pageInfo.name}`);
      }
    }

    console.log('\n' + '='.repeat(70));
    console.log('✅ CAPTURE COMPLETE!');
    console.log('\nFiles saved to:');
    console.log('  📁 research/nexbank-complete/screenshots/');
    console.log('  📁 research/nexbank-complete/videos/');
    console.log('  📁 research/nexbank-complete/css-analysis/');
    console.log('  📁 research/nexbank-complete/dom-captures/');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    await context.close();
    await browser.close();
  }
})();
