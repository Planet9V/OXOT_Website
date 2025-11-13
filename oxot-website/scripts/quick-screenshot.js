import puppeteer from 'puppeteer';

async function quickScreenshot() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 15000 });
    await page.waitForTimeout(3000); // Wait for Three.js
    await page.screenshot({ path: 'scripts/oxot-with-threejs.png', fullPage: false });
    console.log('✅ Screenshot saved: scripts/oxot-with-threejs.png');
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

quickScreenshot();
