#!/usr/bin/env node

/**
 * Integration Verification Script
 * Verifies all components are properly integrated
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

console.log('🔍 OXOT Website Integration Verification\n');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m'
};

let passed = 0;
let failed = 0;

function check(name, condition, message = '') {
  if (condition) {
    console.log(`${colors.green}✓${colors.reset} ${name}`);
    passed++;
  } else {
    console.log(`${colors.red}✗${colors.reset} ${name}${message ? ' - ' + message : ''}`);
    failed++;
  }
}

function readFile(path) {
  try {
    return readFileSync(resolve(rootDir, path), 'utf-8');
  } catch {
    return null;
  }
}

function fileExists(path) {
  return existsSync(resolve(rootDir, path));
}

console.log(`${colors.blue}📦 File Structure${colors.reset}`);
check('main.jsx exists', fileExists('src/main.jsx'));
check('App.jsx exists', fileExists('src/App.jsx'));
check('global.css exists', fileExists('src/global.css'));
check('index.html exists', fileExists('index.html'));

console.log(`\n${colors.blue}🎨 CSS System${colors.reset}`);
check('base.css exists', fileExists('src/styles/base.css'));
check('typography.css exists', fileExists('src/styles/typography.css'));
check('animations.css exists', fileExists('src/styles/animations.css'));
check('background-animations.css exists', fileExists('src/styles/background-animations.css'));

console.log(`\n${colors.blue}🧩 Components${colors.reset}`);
const components = [
  'Logo',
  'Navigation',
  'LoadingScreen',
  'PageTransition',
  'VideoBackground'
];

components.forEach(comp => {
  check(`${comp}.jsx exists`, fileExists(`src/components/${comp}.jsx`));
  check(`${comp}.css exists`, fileExists(`src/components/${comp}.css`));
});

console.log(`\n${colors.blue}📄 Pages${colors.reset}`);
const pages = ['HomePage', 'SolutionsPage', 'ServicesPage', 'IndustriesPage'];

pages.forEach(page => {
  check(`${page}.jsx exists`, fileExists(`src/pages/${page}.jsx`));
  check(`${page}.css exists`, fileExists(`src/pages/${page}.css`));
});

console.log(`\n${colors.blue}⚡ GSAP Integration${colors.reset}`);
const mainContent = readFile('src/main.jsx');
if (mainContent) {
  check('GSAP imported', mainContent.includes("import { gsap } from 'gsap'"));
  check('ScrollTrigger imported', mainContent.includes('ScrollTrigger'));
  check('GSAP registered', mainContent.includes('gsap.registerPlugin'));
  check('GSAP configured', mainContent.includes('gsap.config'));
  check('Touch detection', mainContent.includes('isTouchDevice'));
}

console.log(`\n${colors.blue}🧭 Routing${colors.reset}`);
const appContent = readFile('src/App.jsx');
if (appContent) {
  check('Router imported', appContent.includes('BrowserRouter'));
  check('Routes configured', appContent.includes('<Routes>'));
  check('useLocation hook', appContent.includes('useLocation'));
  check('Page transitions', appContent.includes('PageTransition'));
  check('Loading screen', appContent.includes('LoadingScreen'));
}

console.log(`\n${colors.blue}🎨 Global CSS${colors.reset}`);
const globalCss = readFile('src/global.css');
if (globalCss) {
  check('base.css imported', globalCss.includes("@import './styles/base.css'"));
  check('typography imported', globalCss.includes("@import './styles/typography.css'"));
  check('animations imported', globalCss.includes("@import './styles/animations.css'"));
  check('background-animations imported', globalCss.includes("@import './styles/background-animations.css'"));
  check('Logo CSS imported', globalCss.includes("@import './components/Logo.css'"));
  check('Navigation CSS imported', globalCss.includes("@import './components/Navigation.css'"));
}

console.log(`\n${colors.blue}📦 Dependencies${colors.reset}`);
const packageJson = readFile('package.json');
if (packageJson) {
  const pkg = JSON.parse(packageJson);
  check('gsap installed', pkg.dependencies?.gsap !== undefined);
  check('react installed', pkg.dependencies?.react !== undefined);
  check('react-dom installed', pkg.dependencies?.['react-dom'] !== undefined);
  check('react-router-dom installed', pkg.dependencies?.['react-router-dom'] !== undefined);
}

console.log(`\n${colors.blue}🎯 Animation Files${colors.reset}`);
const animationFiles = [
  'index.js',
  'gsap-config.js',
  'logo-animation.js',
  'nav-animation.js',
  'page-transitions.js',
  'smooth-scroll.js'
];

animationFiles.forEach(file => {
  check(`${file} exists`, fileExists(`src/animations/${file}`));
});

console.log(`\n${colors.blue}📋 Summary${colors.reset}`);
console.log(`${colors.green}Passed:${colors.reset} ${passed}`);
console.log(`${colors.red}Failed:${colors.reset} ${failed}`);
console.log(`${colors.blue}Total:${colors.reset} ${passed + failed}`);

if (failed === 0) {
  console.log(`\n${colors.green}✓ All integration checks passed!${colors.reset}`);
  console.log(`${colors.green}✓ Ready for testing${colors.reset}\n`);
  process.exit(0);
} else {
  console.log(`\n${colors.yellow}⚠ Some checks failed${colors.reset}`);
  console.log(`${colors.yellow}⚠ Review failed items above${colors.reset}\n`);
  process.exit(1);
}
