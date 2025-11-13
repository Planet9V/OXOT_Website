import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the website
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 10000 });

    // Wait a moment for animations
    await page.waitForTimeout(2000);

    // Take screenshot
    await page.screenshot({ path: 'scripts/website-screenshot.png', fullPage: true });

    // Get page title and body text
    const title = await page.title();
    const bodyText = await page.locator('body').textContent();

    // Check for specific elements
    const hasCarousel = await page.locator('.hero-carousel').count();
    const hasServices = await page.locator('.service-card').count();
    const hasLogo = await page.locator('.logo').count();

    // Get console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    console.log('=== WEBSITE VERIFICATION ===');
    console.log('Title:', title);
    console.log('Has Carousel:', hasCarousel > 0);
    console.log('Service Cards:', hasServices);
    console.log('Has Logo:', hasLogo > 0);
    console.log('Screenshot saved to: scripts/website-screenshot.png');
    console.log('\nVisible Text (first 500 chars):');
    console.log(bodyText.substring(0, 500));

    if (errors.length > 0) {
      console.log('\n=== CONSOLE ERRORS ===');
      errors.forEach(err => console.log(err));
    }

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
