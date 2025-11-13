import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('🧪 Testing Navigation Menu...\n');

    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Find and click the hamburger menu
    console.log('1️⃣ Looking for hamburger menu button...');
    const menuButton = await page.locator('.nav-toggle, button[aria-label="Navigation"]').first();
    const isVisible = await menuButton.isVisible();
    console.log(`   Menu button visible: ${isVisible}`);

    if (isVisible) {
      console.log('2️⃣ Clicking menu button...');
      await menuButton.click();
      await page.waitForTimeout(1500);

      // Check if nav opened
      const navOpen = await page.locator('.nav.is-open').isVisible();
      console.log(`   Navigation overlay open: ${navOpen}`);

      if (navOpen) {
        console.log('   ✅ MENU WORKS!');

        // Take screenshot of open menu
        await page.screenshot({ path: 'scripts/menu-open.png' });
        console.log('   📸 Screenshot saved: scripts/menu-open.png');

        // Check menu items
        const menuItems = await page.locator('.nav__item').count();
        console.log(`   Menu items: ${menuItems}`);
      } else {
        console.log('   ❌ MENU DID NOT OPEN');
      }
    } else {
      console.log('   ❌ MENU BUTTON NOT FOUND');
    }

    console.log('\n3️⃣ Checking video element...');
    const videoCount = await page.locator('video').count();
    console.log(`   Video elements: ${videoCount}`);

    if (videoCount > 0) {
      const isVideoVisible = await page.locator('video').first().isVisible();
      const videoSrc = await page.locator('video source').first().getAttribute('src');
      console.log(`   Video visible: ${isVideoVisible}`);
      console.log(`   Video source: ${videoSrc}`);

      // Check if video is playing
      const isPlaying = await page.evaluate(() => {
        const video = document.querySelector('video');
        return video && !video.paused;
      });
      console.log(`   Video playing: ${isPlaying}`);
    }

    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
