import { chromium } from 'playwright';
import fs from 'fs';

async function analyzeNexBankMenu() {
  const analysis = {
    navigation_structure: {},
    carousel_system: {},
    animations: {},
    color_scheme: {},
    typography: {},
    numbered_items: {},
    timing_observations: []
  };

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  try {
    console.log('🔍 Navigating to NexBank...');
    await page.goto('https://www.nexbank.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Take initial screenshot
    await page.screenshot({ path: 'research/menu-analysis/state_01_initial.png', fullPage: false });

    // Find hamburger menu button - try multiple strategies
    console.log('🔍 Looking for menu button...');

    // Debug: print all buttons on page
    const allButtons = await page.locator('button').evaluateAll(btns =>
      btns.map(b => ({ text: b.textContent.trim(), class: b.className, aria: b.getAttribute('aria-label') }))
    );
    console.log('All buttons found:', JSON.stringify(allButtons, null, 2));

    // Try various selectors
    let menuButton = await page.locator('button.hamburger').first();
    if (await menuButton.count() === 0) {
      menuButton = await page.locator('[class*="menu"]').filter({ hasText: '' }).first();
    }
    if (await menuButton.count() === 0) {
      menuButton = await page.locator('button').filter({ has: page.locator('svg, span[class*="bar"]') }).first();
    }
    if (await menuButton.count() === 0) {
      // Look for three horizontal lines icon
      menuButton = await page.locator('button').filter({ has: page.locator('[class*="hamburger"], [class*="toggle"]') }).first();
    }

    if (await menuButton.count() > 0) {
      console.log('✓ Found menu button');

      // Record start time
      const startTime = Date.now();

      // Click menu to open
      await menuButton.click();
      await page.waitForTimeout(1000);

      analysis.timing_observations.push({
        action: 'Menu open',
        duration: `${Date.now() - startTime}ms`
      });

      await page.screenshot({ path: 'research/menu-analysis/state_02_menu_open.png', fullPage: false });

      // Analyze menu structure
      const menuNav = await page.locator('nav, .menu-overlay, .main-menu').first();

      // Get all top-level menu items
      const topLevelItems = await menuNav.locator('a, button').evaluateAll(elements => {
        return elements
          .filter(el => el.offsetParent !== null) // visible only
          .map(el => ({
            text: el.textContent.trim(),
            tag: el.tagName,
            classes: el.className
          }));
      });

      analysis.navigation_structure.top_level_items = topLevelItems.length;
      analysis.navigation_structure.items = topLevelItems;

      console.log(`✓ Found ${topLevelItems.length} top-level menu items`);

      // Look for "Commercial" or "Financial Institutions"
      const commercialLink = await page.locator('text=/Commercial|Business Banking|Financial Institutions/i').first();

      if (await commercialLink.count() > 0) {
        console.log('✓ Found commercial banking section');

        const clickTime = Date.now();
        await commercialLink.click();
        await page.waitForTimeout(1500);

        analysis.timing_observations.push({
          action: 'Submenu transition',
          duration: `${Date.now() - clickTime}ms`
        });

        await page.screenshot({ path: 'research/menu-analysis/state_03_submenu_slide1.png', fullPage: false });

        // Look for slide indicator (1/3, 2/3, 3/3)
        const slideIndicator = await page.locator('text=/\\d+\\/\\d+/').first();
        if (await slideIndicator.count() > 0) {
          const indicatorText = await slideIndicator.textContent();
          console.log(`✓ Found carousel indicator: ${indicatorText}`);

          analysis.carousel_system.indicator = indicatorText;
          analysis.carousel_system.type = 'numbered slides';
        }

        // Look for carousel navigation
        const nextButton = await page.locator('button[aria-label*="next"], .carousel-next, .swiper-button-next, button:has-text("Next")').first();

        if (await nextButton.count() > 0) {
          console.log('✓ Found carousel next button');

          // Slide to 2/3
          const slide2Time = Date.now();
          await nextButton.click();
          await page.waitForTimeout(800);

          analysis.timing_observations.push({
            action: 'Carousel slide 1→2',
            duration: `${Date.now() - slide2Time}ms`
          });

          await page.screenshot({ path: 'research/menu-analysis/state_04_submenu_slide2.png', fullPage: false });

          // Slide to 3/3
          const slide3Time = Date.now();
          await nextButton.click();
          await page.waitForTimeout(800);

          analysis.timing_observations.push({
            action: 'Carousel slide 2→3',
            duration: `${Date.now() - slide3Time}ms`
          });

          await page.screenshot({ path: 'research/menu-analysis/state_05_submenu_slide3.png', fullPage: false });

          analysis.carousel_system.total_slides = 3;
          analysis.carousel_system.navigation_type = 'button-based';
        }

        // Look for numbered service items (01, 02, 03)
        const numberedItems = await page.locator('text=/^0\\d\\s/').evaluateAll(elements => {
          return elements.map(el => {
            const parent = el.closest('div, section, article');
            return {
              number: el.textContent.trim().match(/^0\d/)[0],
              title: parent ? parent.querySelector('h2, h3, h4, strong')?.textContent.trim() : null,
              description: parent ? parent.textContent.trim().substring(0, 150) : null
            };
          });
        });

        if (numberedItems.length > 0) {
          console.log(`✓ Found ${numberedItems.length} numbered service items`);
          analysis.numbered_items = numberedItems;
        }
      }

      // Analyze colors and backgrounds
      const colorAnalysis = await page.evaluate(() => {
        const menuEl = document.querySelector('nav, .menu-overlay, .main-menu');
        if (!menuEl) return null;

        const styles = window.getComputedStyle(menuEl);

        // Find diagonal stripe pattern
        const hasPattern = styles.backgroundImage.includes('linear-gradient') ||
                          styles.backgroundImage.includes('repeating-linear-gradient');

        return {
          backgroundColor: styles.backgroundColor,
          backgroundImage: styles.backgroundImage.substring(0, 200), // truncate
          color: styles.color,
          hasStripePattern: hasPattern,
          transition: styles.transition,
          animation: styles.animation
        };
      });

      if (colorAnalysis) {
        analysis.color_scheme = colorAnalysis;
        console.log('✓ Captured color scheme analysis');
      }

      // Analyze typography
      const typographyAnalysis = await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll('.menu h1, .menu h2, .menu h3, nav h1, nav h2, nav h3'));

        return headings.map(h => {
          const styles = window.getComputedStyle(h);
          return {
            tag: h.tagName,
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            fontFamily: styles.fontFamily.split(',')[0],
            letterSpacing: styles.letterSpacing,
            lineHeight: styles.lineHeight
          };
        });
      });

      if (typographyAnalysis.length > 0) {
        analysis.typography.hierarchy = typographyAnalysis;
        console.log(`✓ Analyzed typography for ${typographyAnalysis.length} headings`);
      }

    } else {
      console.log('✗ Could not find menu button');
    }

  } catch (error) {
    console.error('Error during analysis:', error);
  } finally {
    await browser.close();
  }

  // Save analysis to JSON
  fs.writeFileSync(
    'research/menu-analysis/nexbank_menu_analysis.json',
    JSON.stringify(analysis, null, 2)
  );

  console.log('\n=== ANALYSIS COMPLETE ===');
  console.log(JSON.stringify(analysis, null, 2));
}

analyzeNexBankMenu().catch(console.error);
