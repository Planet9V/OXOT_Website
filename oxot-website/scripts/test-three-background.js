import puppeteer from 'puppeteer';

async function testThreeBackground() {
  console.log('\n🎨 TESTING THREE.JS BACKGROUND\n');
  console.log('='.repeat(60));

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('\n📡 Connecting to site...');
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 15000 });

    await page.waitForTimeout(3000); // Wait for Three.js to initialize

    // Check for Three.js canvas
    const hasThreeCanvas = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      return {
        exists: !!canvas,
        width: canvas?.width,
        height: canvas?.height,
        context: canvas?.getContext('webgl') ? 'webgl' : 'none'
      };
    });

    console.log('\n🎨 THREE.JS CANVAS:');
    console.log(`  Canvas exists: ${hasThreeCanvas.exists ? '✅' : '❌'}`);
    console.log(`  Dimensions: ${hasThreeCanvas.width}x${hasThreeCanvas.height}`);
    console.log(`  WebGL context: ${hasThreeCanvas.context}`);

    // Check for menu components
    const menuComponents = await page.evaluate(() => {
      return {
        hasMenuOverlay: !!document.querySelector('.menu-overlay'),
        hasBottomTabs: !!document.querySelector('.bottom-tab-navigation'),
        bottomTabCount: document.querySelectorAll('.bottom-tab').length,
        hasVerticalText: !!document.querySelector('.vertical-text')
      };
    });

    console.log('\n🗂️  MENU COMPONENTS:');
    console.log(`  Bottom tabs: ${menuComponents.bottomTabCount} ${menuComponents.hasBottomTabs ? '✅' : '❌'}`);
    console.log(`  Vertical text: ${menuComponents.hasVerticalText ? '✅' : '❌'}`);

    // Capture screenshot
    await page.screenshot({ path: 'research/comparison/oxot-three-background.png', fullPage: false });
    console.log('\n📸 Screenshot saved: research/comparison/oxot-three-background.png');

    // Check for JS errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    if (errors.length > 0) {
      console.log('\n⚠️  JAVASCRIPT ERRORS:');
      errors.forEach(err => console.log(`  - ${err}`));
    } else {
      console.log('\n✅ No JavaScript errors detected');
    }

    console.log('\n' + '='.repeat(60));
    console.log('✅ TEST COMPLETE');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

testThreeBackground();
