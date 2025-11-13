import puppeteer from 'puppeteer';
import fs from 'fs';

async function createComparison() {
  console.log('\n🎨 VISUAL COMPARISON\n');
  console.log('='.repeat(60));

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // Capture OXOT site
    console.log('\n📸 Capturing OXOT website...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
    await page.waitForTimeout(2000);

    if (!fs.existsSync('research/comparison')) {
      fs.mkdirSync('research/comparison', { recursive: true });
    }

    await page.screenshot({ path: 'research/comparison/oxot-hero.png', fullPage: false });
    console.log('  ✓ OXOT screenshot saved');

    // Analyze OXOT design elements
    const oxotAnalysis = await page.evaluate(() => {
      const elements = {
        hasCarousel: !!document.querySelector('.hero-carousel'),
        hasBottomTabs: !!document.querySelector('.bottom-tab-navigation'),
        hasPagination: !!document.querySelector('.carousel-pagination'),
        hasVerticalText: !!document.querySelector('.vertical-text'),
        hasOutlinedText: !!document.querySelector('.outlined-text'),
        hasStripePattern: !!document.querySelector('.wave-background__stripes'),
        carouselNavButtons: document.querySelectorAll('.carousel-nav-button').length,
        bottomTabCount: document.querySelectorAll('.bottom-tab').length
      };
      return elements;
    });

    console.log('\n📊 OXOT DESIGN ELEMENTS:');
    console.log(`  - Carousel: ${oxotAnalysis.hasCarousel ? '✅' : '❌'}`);
    console.log(`  - Bottom Tabs (${oxotAnalysis.bottomTabCount}): ${oxotAnalysis.hasBottomTabs ? '✅' : '❌'}`);
    console.log(`  - Pagination: ${oxotAnalysis.hasPagination ? '✅' : '❌'}`);
    console.log(`  - Vertical Text: ${oxotAnalysis.hasVerticalText ? '✅' : '❌'}`);
    console.log(`  - Outlined Typography: ${oxotAnalysis.hasOutlinedText ? '✅' : '❌'}`);
    console.log(`  - Stripe Pattern: ${oxotAnalysis.hasStripePattern ? '✅' : '❌'}`);
    console.log(`  - Nav Buttons: ${oxotAnalysis.carouselNavButtons}`);

    // Compare with NexBank requirements
    console.log('\n📋 NEXBANK COMPARISON:');
    const nexbankRequirements = {
      'Circular Navigation Buttons': oxotAnalysis.carouselNavButtons === 2,
      'Numeric Pagination (01/03)': oxotAnalysis.hasPagination,
      'Bottom Tab Navigation': oxotAnalysis.hasBottomTabs && oxotAnalysis.bottomTabCount === 3,
      'Vertical "Online Banking Login"': oxotAnalysis.hasVerticalText,
      'Outlined Typography': oxotAnalysis.hasOutlinedText,
      'Diagonal Stripe Pattern': oxotAnalysis.hasStripePattern
    };

    let matchCount = 0;
    for (const [requirement, matches] of Object.entries(nexbankRequirements)) {
      console.log(`  ${matches ? '✅' : '❌'} ${requirement}`);
      if (matches) matchCount++;
    }

    const matchPercentage = Math.round((matchCount / Object.keys(nexbankRequirements).length) * 100);
    console.log(`\n🎯 MATCH SCORE: ${matchPercentage}% (${matchCount}/${Object.keys(nexbankRequirements).length} features)`);

    console.log('\n='.repeat(60));
    console.log('✅ COMPARISON COMPLETE!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

createComparison();
