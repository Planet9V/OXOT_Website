import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('📊 COMPARING NEXBANK.COM vs OXOT WEBSITE\n');
  console.log('='.repeat(60));

  try {
    // First, check NexBank.com
    console.log('\n🏦 ANALYZING NEXBANK.COM...\n');
    await page.goto('https://www.nexbank.com/', { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(3000);

    const nexbank = {
      hasVideo: await page.locator('video').count(),
      videoSrc: await page.locator('video source').getAttribute('src').catch(() => 'none'),
      backgroundImages: await page.locator('[style*="background"]').count(),
      animatedElements: await page.locator('[class*="animate"]').count(),
      menuButton: await page.locator('button, [role="button"]').count(),
      navItems: await page.locator('nav a, nav button').count(),
    };

    console.log('NexBank Elements:');
    console.log(`  - Video elements: ${nexbank.hasVideo}`);
    console.log(`  - Video source: ${nexbank.videoSrc}`);
    console.log(`  - Background images: ${nexbank.backgroundImages}`);
    console.log(`  - Animated elements: ${nexbank.animatedElements}`);
    console.log(`  - Menu buttons: ${nexbank.menuButton}`);
    console.log(`  - Navigation items: ${nexbank.navItems}`);

    // Take screenshot
    await page.screenshot({ path: 'scripts/nexbank-reference.png', fullPage: false });
    console.log('  ✓ Screenshot saved: scripts/nexbank-reference.png');

    console.log('\n' + '='.repeat(60));

    // Now check our OXOT site
    console.log('\n🔧 ANALYZING OXOT WEBSITE...\n');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const oxot = {
      hasVideo: await page.locator('video').count(),
      videoSrc: await page.locator('video source').getAttribute('src').catch(() => 'none'),
      hasCarousel: await page.locator('.hero-carousel').isVisible(),
      hasGradient: await page.locator('.hero-carousel__gradient').isVisible(),
      hasParticles: await page.locator('.hero-carousel__particles').isVisible(),
      menuButton: await page.locator('.navigation__toggle, button').count(),
      navVisible: await page.locator('nav').isVisible(),
    };

    console.log('OXOT Elements:');
    console.log(`  - Video elements: ${oxot.hasVideo}`);
    console.log(`  - Video source: ${oxot.videoSrc}`);
    console.log(`  - Hero carousel: ${oxot.hasCarousel}`);
    console.log(`  - Gradient background: ${oxot.hasGradient}`);
    console.log(`  - Particle effects: ${oxot.hasParticles}`);
    console.log(`  - Menu buttons: ${oxot.menuButton}`);
    console.log(`  - Navigation visible: ${oxot.navVisible}`);

    // Take screenshot
    await page.screenshot({ path: 'scripts/oxot-current.png', fullPage: false });
    console.log('  ✓ Screenshot saved: scripts/oxot-current.png');

    console.log('\n' + '='.repeat(60));
    console.log('\n📋 COMPARISON RESULTS:\n');

    if (oxot.hasVideo === 0 && nexbank.hasVideo > 0) {
      console.log('❌ MISSING: Video background (NexBank has it, OXOT doesn\'t)');
    }

    if (!oxot.navVisible) {
      console.log('❌ MISSING: Navigation menu visibility');
    }

    console.log('\n💡 NEXT STEPS NEEDED:');
    console.log('  1. Add video background to hero carousel');
    console.log('  2. Fix navigation menu functionality');
    console.log('  3. Add background movement animations');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
