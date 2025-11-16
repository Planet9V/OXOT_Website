# OXOT Website - Complete Codebase Exploration Report

**Date:** November 16, 2025
**Git Branch:** claude/rebuild-cybersecurity-site-014agQ2GtfmyZHTwXewxUWrG
**Status:** Clean working directory

---

## CRITICAL FINDINGS

### 1. r3f-Background-Test Route Status
- **File Location:** `/home/user/OXOT_Website/oxot-website/src/pages/BackgroundTestPage.jsx`
- **Status:** Component exists but is NOT currently added to routes in App.jsx
- **Route Path Should Be:** `/background-test`
- **Current Implementation:** Uses `BackgroundComparison.jsx` component with 3 background options
- **ACTION REQUIRED:** Add route to App.jsx routing configuration

### 2. Missing AEON Cyber Digital Twin Information
- **Status:** Not found in codebase
- **Note:** "Digital Twin for Operational Resilience" is mentioned in Solutions but no AEON-specific branding
- **Recommendation:** This should be added as a featured solution

### 3. Missing Blind Spot Content
- **Status:** Referenced only in content articles as security concept
- **Location:** Appears in content files like "SOTI_2025_8_ENERGY_DER_Advanced Cyber Threats to Modern Energy.md"
- **Note:** Not a dedicated product - appears as industry concept

---

## DIRECTORY STRUCTURE

```
/home/user/OXOT_Website/
├── .git/                          # Git repository
├── .kilocode/                     # Configuration
├── .kilocodemodes                 # Settings
├── docs/                          # Root documentation
│   ├── PROJECT_CONSTITUTION.md
│   ├── PRD.md
│   └── TECHNICAL_SPEC.md
├── IMPLEMENTATION_SUCCESS.md      # Implementation report
└── oxot-website/                  # Main React/Vite application
    ├── public/
    │   ├── assets/
    │   │   ├── fonts/             # Custom font files
    │   │   └── images/            # Brand imagery
    │   └── vite.svg
    ├── src/
    │   ├── animations/            # GSAP animations
    │   ├── assets/                # App assets
    │   ├── components/            # React components
    │   │   └── backgrounds/       # Background implementations
    │   ├── data/                  # Static data
    │   ├── examples/              # Example components
    │   ├── pages/                 # Page components
    │   ├── styles/                # Global styles
    │   ├── App.jsx                # Main app component
    │   ├── global.css             # Global styles
    │   └── main.jsx               # React entry point
    ├── content/                   # CRITICAL: 89 content files
    ├── docs/                      # Project documentation
    ├── research/                  # Research and analysis
    ├── scripts/                   # Utility scripts
    ├── index.html                 # HTML entry point
    ├── package.json               # Dependencies
    ├── vite.config.js             # Vite configuration
    ├── eslint.config.js           # ESLint rules
    └── Dockerfile                 # Docker setup

```

---

## TECHNOLOGY STACK

### Core Technologies
- **React:** 19.2.0
- **Vite:** 7.2.2
- **React Router DOM:** 7.9.5
- **Three.js:** 0.181.1 (for 3D backgrounds)
- **GSAP:** 3.13.0 (animations)
- **Lottie Web:** 5.13.0 (vector animations)
- **Swiper:** 12.0.3 (carousels)
- **Vanta:** 0.5.24 (WebGL effects)

### Development Tools
- ESLint 9.39.1
- Playwright 1.56.1
- TypeScript types

---

## ROUTING CONFIGURATION

### Current Routes (App.jsx)
```
/               → HomePage
/solutions      → SolutionsPage
/services       → ServicesPage
/service/:serviceName → ServicesPage (dynamic)
/industries     → IndustriesPage
/about          → SolutionsPage (placeholder)
/contact        → IndustriesPage (placeholder)
```

### MISSING ROUTE
**Route:** `/background-test` 
**Component:** `BackgroundTestPage.jsx`
**Status:** NOT in App.jsx - must be added

---

## PAGE COMPONENTS (5 total)

### 1. HomePage.jsx
- **Path:** `/home/user/OXOT_Website/oxot-website/src/pages/HomePage.jsx`
- **Content:**
  - Hero carousel with 3 OXOT-focused slides
  - Trust banner with IEC 62443 certification
  - 4 OT/ICS services cards
  - Value proposition section ("Cybernetic Serenity, Delivered")
  - Industry cards (4): Energy, Manufacturing, Transportation, Water
- **Styling:** `HomePage.css`

### 2. SolutionsPage.jsx
- **Path:** `/home/user/OXOT_Website/oxot-website/src/pages/SolutionsPage.jsx`
- **Content:** 4 OXOT Solutions
  - Breach Disclosure Mitigation (OXOT True Diligence™)
  - Digital Twin for Operational Resilience (CyberOperative)
  - Cyber Defender Program
  - Confidential SOC-as-a-Service
- **Styling:** `SolutionsPage.css`

### 3. ServicesPage.jsx
- **Path:** `/home/user/OXOT_Website/oxot-website/src/pages/ServicesPage.jsx`
- **Content:** 7 OXOT Service Categories
  - Cyber Assurance, Testing & Validation
  - Crisis Management
  - Cyber Engineering & Integration
  - Cyber Technology Training & Awareness
  - Adversarial AI-Based Cyber Defense Testing
  - Artificial Intelligence
  - Supply Chain Assurance
- **Styling:** `ServicesPage.css`

### 4. IndustriesPage.jsx
- **Path:** `/home/user/OXOT_Website/oxot-website/src/pages/IndustriesPage.jsx`
- **Content:** 4 Industry Focus Areas
  - Energy Sector: Electricity
  - Water Management
  - Manufacturing
  - Transportation
- **Styling:** `IndustriesPage.css`

### 5. BackgroundTestPage.jsx
- **Path:** `/home/user/OXOT_Website/oxot-website/src/pages/BackgroundTestPage.jsx`
- **Route:** Should be `/background-test` (NOT currently in routing)
- **Component:** BackgroundComparison with 3 implementations
- **Status:** ORPHANED - needs to be added to routes

---

## COMPONENT ARCHITECTURE

### Layout Components
1. **Logo.jsx** - Fixed logo with animations (Logo.css)
2. **Navigation.jsx** - Full-screen nav overlay (Navigation.css)
3. **LoadingScreen.jsx** - Loading counter animation (LoadingScreen.css)
4. **PageTransition.jsx** - Page transition effects (PageTransition.css)
5. **Navbar.jsx** - Simple navbar (Navbar.css)
6. **VerticalText.jsx** - Vertical text component (VerticalText.css)

### Content Components
1. **HeroCarousel.jsx** - Swiper-based carousel (HeroCarousel.css)
2. **CarouselNavigation.jsx** - Carousel controls (CarouselNavigation.css)
3. **BottomTabNavigation.jsx** - Tab navigation (BottomTabNavigation.css)
4. **MenuSlideshow.jsx** - Menu slideshow (MenuSlideshow.css)
5. **MenuSlide.jsx** - Individual menu slide
6. **MenuOverlay.jsx** - Menu overlay system

### Background Components (backgrounds/ directory)
1. **BackgroundComparison.jsx** - Comparison tool (no CSS, inline styles)
2. **VideoBackground.jsx** - HTML5 video implementation (VideoBackground.jsx)
3. **ThreeJSBackground.jsx** - WebGL Three.js (recommended)
4. **LottieBackground.jsx** - Vector animations
5. **index.js** - Component exports

### Other Components
- **ThreeBackground.jsx** - Legacy Three.js implementation (ThreeBackground.css)
- **VideoBackground.jsx** - Legacy video component (VideoBackground.css)
- **WaveBackground.jsx** - Wave effect component (WaveBackground.css)

---

## BACKGROUND ANIMATION SYSTEMS

### Three Implementations Available

#### 1. Video Background
- File: `VideoBackground.jsx`
- Type: HTML5 video
- File Size: 1.53 MB
- Performance: 30 FPS
- Mobile: Limited due to autoplay restrictions
- Status: Available but NOT recommended

#### 2. Three.js WebGL (RECOMMENDED)
- File: `ThreeJSBackground.jsx`
- Type: WebGL geometric shapes
- File Size: 15 KB
- Performance: 60 FPS desktop, 30-45 FPS mobile
- Memory: 35-50 MB
- Status: **RECOMMENDED** - Production ready
- Customization: Colors, shapes, speeds adjustable
- Browser Support: 99.5%

#### 3. Lottie Animation
- File: `LottieBackground.jsx`
- Type: Vector JSON animation
- File Size: 5-50 KB
- Performance: 60 FPS SVG, 30-45 FPS canvas
- Memory: 20-40 MB
- Status: Alternative option

### BackgroundComparison Tool
- **Access Point:** `/background-test` (when route is added)
- **Features:** Side-by-side testing of all 3 implementations
- **Controls:** Bottom panel to switch between options

---

## ANIMATION SYSTEM

### GSAP Implementation Files
```
/home/user/OXOT_Website/oxot-website/src/animations/
├── gsap-config.js              # Core GSAP setup
├── logo-animation.js           # Logo hover effects
├── nav-animation.js            # Navigation animations
├── smooth-scroll.js            # Custom scroll (8% interpolation)
├── page-transitions.js         # Loading/transition system
├── test-setup.js               # Test utilities
├── index.js                    # Master export
└── README.md                   # Full animation documentation
```

### Global Animation Styles
- `base.css` - Foundation styles
- `typography.css` - Font system
- `animations.css` - Keyframes and transitions
- `background-animations.css` - Background effect animations
- `nexbank.css` - Color palette and brand variables

---

## DATA & CONFIGURATION

### Menu Data
- **File:** `src/data/menuData.js`
- **Purpose:** Centralized menu structure
- **Content:** Three sections (institutional, commercial, mortgage)
- **Status:** Currently configured for NexBank banking services (not OXOT)
- **ACTION NEEDED:** Should be restructured for OXOT services

### Menu System Components
- `MenuOverlay.jsx` - Menu display
- `MenuSlideshow.jsx` - Animated menu slides
- `MenuSlide.jsx` - Individual slide
- Related Documentation: `MENU_SYSTEM_ANALYSIS.md`, `MENU_QUICK_REFERENCE.md`

---

## CONTENT FILES (89 total)

### Location
`/home/user/OXOT_Website/oxot-website/content/`

### Content Categories

#### IEC 62443 Standards (9 files)
- IEC-62443_Complete-Guide.md
- IEC-62443_Complete-Technical-Reference.md
- IEC-62443_Reference Guide.md
- IEC-62443-ZCR-Visualization-Guide.md
- IEC-62443-Asset Criticality and IEC 62443 SL-T Determination.md
- IEC-62443-Information-Requirements.md
- IEC-62443_Template-CSMS.md
- IEC 62443 Data Center Build Program.md (2 versions)

#### Industrial Control Systems (IACS) (10 files)
- IACS_Power Plant Equipment and Systems Inventory.md
- IACS_Arch_Energy Farm Design and Connections.md
- IACS_Chemical Plant Equipment Inventory and Flow.md
- IACS_Port Terminal Equipment Systems Inventory.md
- IACS_Urban Traffic Control System Inventory.md
- IACS_Public Transit Equipment Inventory and Systems.md (2 versions)
- IACS_Manufacturing Traffic Control Systems.md
- IACS_Water Management Equipment Manufacturing.md (2 versions)
- IACS_Airplane Systems_ Design, Connections, Inventory.md
- IACS_Freight Train Equipment Inventory and Relations.md

#### Cybersecurity Threat Reports (7 files)
- SOTI_2025_8_ENERGY_DER_Advanced Cyber Threats to Modern Energy.md
- SOTI_2025_8_MANU_Threat Intelligence_Report.md
- EAB_2025_Q2_Threat_Landscape_Report.md
- OTCE_Critical Infrastructure Cybersecurity Briefing 2025-8.md
- OTCE_2025_8_15_Cyber_News.md
- OTCE_2025_8_Breach_Focus_IngramMicro.md
- OTCE_2025_8_TVA_MANU_ENERGY.md
- And more OTCE/SOTI/EAB reports

#### Ransomware Readiness (5 files)
- RRA_Ransomware Readiness Framework for Industry.md
- RRA_The Resilient Grid_ A Ransomware Readiness Framework for the Energy Sector.md
- RRA_The Resilient Factory_ A Ransomware Readiness Framework for the Manufacturing Sector.md
- RRA_Energy IT-OT Ransomware Readiness in Energy and Manufacturing Framework using 62443.md
- RRA_Converged Defense_ A Framework for IT_OT Ransomware Readiness in Energy and Manufacturing.md

#### M&A Cybersecurity Due Diligence (6 files)
- M&A Cybersecurity Due Diligence_.md
- M&A Cybersecurity Due Diligence Manufacturing.md
- M&A_Cybersecurity in Industrial.md
- M&A_Cybersecurity in Industrial M&A.md
- M&A_Cybersecurity in Energy Framework.md
- A Framework for Cyber-Informed M&A in the Manufacturing and Agri-Food Sectors.md

#### Energy Sector Security (5 files)
- Energy Cybersecurity Threats, 30 Days_.md
- Energy M&A Cybersecurity Due Diligence_.md
- The Grid's Precarious Pulse_ Frequency Instability and the Looming Threat of Cascading Failure_2024_April_j.mckenney.md
- Death Wobble - The Grid's Precarious Pulse Frequency Instability-j.mckenney.md
- Grid Vulnerability_ j.mckenney from chicago analysis_updated_2-25_April.md

#### Manufacturing Security (4 files)
- Manufacturing Cybersecurity_ Recent Incidents Analysis_.md
- Manufacturing Cybersecurity Exploit Trends_.md
- OTCE_SOTI_2025_8_ MANU_ MA_Navigating Legacy Technology Risks and Valuation Pitfalls.md
- Sector Cold Storage Facilities.pdf

#### Supply Chain & Other (8+ files)
- Supply Chain Digital Vulnerabilities Analysis_.md
- Ingram Micro Breach Investigation.md
- Identity-Centric Security_ A New Paradigm.md
- Evolving Ransomware-as-a-Service Ecosystem_.md
- ICS Cyber Threats and Geopolitics.md (2 versions)
- Perplexity=IEC62443 Compliance with Infrastructure Projects.md
- And more...

#### Playbooks & Guides (2 files)
- Playbook_The Operator's Playbook_ A Lifecycle Approach to IACS Cybersecurity with IEC 62443.md
- Playbook_The Manufacturers Guide_A Approach to IACS Cybersecurity with IEC 62443.md

#### Articles & Compendium (2 files)
- 40_Articles_MD_Compendium.md
- 40_Articles_MD_Plan.md

#### Business Documents (8+ files - DOCX format)
- 1_OXOT_Why Use_.docx
- 3_OXOT_Service_Portfolio.docx
- 4_Why_OXOT.docx
- OXOT_applied.docx
- OXOT_VADR_Approach_Introduction.docx
- OXOT_Friesland_Overview_2025-3-Aug.docx
- OXOT_Styleguide.md.docx
- And more...

#### PDFs (4 files)
- EAB-014 NCC Group.pdf
- EAB-016 NCC Group.pdf
- EAB-026 Fox-IT.pdf
- June 2025 - Cyber Threat Intelligence Report-Freemium.pdf
- Mergers & Acquisitions (M&A) Cyber Due Diligence_V5.pdf
- SmartGrid Cybersecurity Concerns 2024-4-JTM.pptx
- And more...

### Content Assets
- README.md - Index/guide
- Datacenter Tier 3 Typical ZCR.csv - Data file

**Total Content Size:** ~29,888 lines across all markdown files

---

## CSS SYSTEM

### Component-Level Styles
All major components have individual CSS files:
- `components/*.css` - Component-specific styles
- `pages/*.css` - Page-specific styles

### Global Style System
```
src/styles/
├── base.css                    # Foundation/reset
├── typography.css             # Font definitions
├── animations.css            # Keyframe animations
├── background-animations.css # Background effects
└── nexbank.css              # Color palette & variables
```

### Global Imports
`src/global.css` aggregates all styles:
- Imports all component and style files
- Defines OXOT brand color overrides
- Sets layout utilities

### Color System (from global.css)
```css
--color-oxot-primary: #154372  /* NexBank blue */
--color-oxot-accent: #c10230   /* NexBank red */
--color-oxot-teal: #00FFD1     /* OXOT accent (optional) */
```

---

## RESEARCH & DOCUMENTATION

### Research Directory Structure
```
research/
├── backgrounds/             # Background animation research
├── comparison/              # Performance comparisons
├── menu-analysis/           # Menu system analysis
├── nexbank/                 # Original NexBank research
└── nexbank-complete/        # Comprehensive NexBank recreation analysis
    ├── analysis/            # DOM and structure analysis
    ├── css-analysis/        # Computed styles
    ├── screenshots/         # Visual captures
    └── IMPLEMENTATION_PROGRESS.md
```

### Documentation Files (37 files in docs/)
- **Implementation Reports:** `IMPLEMENTATION_SUMMARY.md`, `IMPLEMENTATION_STATUS.md`
- **Research Files:** `RESEARCH-THREEJS-LIBRARIES.md`, `RESEARCH-GRAPH-LIBRARIES.md`
- **Background Analysis:** `BACKGROUND-OPTIONS-ANALYSIS.md`, `BACKGROUND-OPTIONS-EXECUTIVE-SUMMARY.md`
- **NexBank Analysis:** 8+ NexBank-specific analysis files
- **Animation Documentation:** `gsap-implementation-complete.md`, `nexbank-animation-diagram.md`
- **UI/UX Analysis:** `carousel-libraries-research.md`, `animation-approach-recommendation.md`

---

## UTILITY SCRIPTS

### Location
`/home/user/OXOT_Website/oxot-website/scripts/`

### Available Scripts
1. `verify-integration.js` - Verify integration
2. `test-background-performance.js` - Performance testing
3. `test-three-background.js` - Three.js background tests
4. `test-animations.js` - GSAP animation tests
5. `test-menu.js` - Menu system tests
6. `visual-comparison.js` - Visual comparison tool
7. `screenshot.js` - Screenshot capture
8. `quick-screenshot.js` - Quick screenshots
9. `capture-oxot.js` - Capture OXOT pages
10. `capture-nexbank.js` - Capture NexBank pages
11. `compare-sites.js` - Site comparison
12. `check-console.js` - Console error checking

---

## GIT HISTORY

### Recent Commits (latest first)
```
3328e22 - Add comprehensive menu system with NexBank-inspired features and background animations
6f2eef8 - feat: Complete NexBank-style website with carousel and navigation
0bb6173 - Reorganize project structure - move all content to dedicated directory
ce77eff - Add files via upload
2918074 - Add files via upload
55576bf - Add files via upload
40ab89d - Merge pull request #1 from Planet9V/feat/create-oxot-website
9d6de33 - feat: Create initial OXOT website
0c00398 - Add files via upload
7800510 - Initial commit
```

### Current Branch
`claude/rebuild-cybersecurity-site-014agQ2GtfmyZHTwXewxUWrG`

### Status
Clean working directory (no uncommitted changes)

---

## CRITICAL ISSUES & TASKS

### 1. PRIORITY: Missing Route for Background Test
- **Issue:** BackgroundTestPage.jsx exists but is not in App.jsx routing
- **Fix Required:** Add to App.jsx Routes:
  ```jsx
  <Route path="/r3f-background-test" element={<BackgroundTestPage />} />
  ```
- **Component Ready:** Yes - BackgroundComparison.jsx fully implemented

### 2. PRIORITY: Menu Data Mismatch
- **Issue:** menuData.js contains NexBank banking services (institutional, commercial, mortgage)
- **Should Be:** OXOT cybersecurity services (solutions, services, industries)
- **Impact:** Navigation system won't display OXOT services correctly
- **Action:** Restructure menuData.js to match OXOT services

### 3. Content Integration
- **Status:** 89 content files exist but are not integrated into UI
- **Recommendation:** Create content browser/search feature or feed content into relevant pages

### 4. AEON Cyber Digital Twin
- **Status:** Not found as branded product
- **Action:** Should be prominently featured as key solution
- **Related:** "Digital Twin for Operational Resilience" solution exists in SolutionsPage

### 5. Blind Spot Concept
- **Status:** Only exists as reference in threat intelligence articles
- **Not:** A dedicated product or service
- **Found In:** SOTI_2025_8_ENERGY_DER security articles

---

## DEPLOYMENT CONFIGURATION

### Build Tool
- **Framework:** Vite 7.2.2
- **Config File:** `vite.config.js`
- **Build Command:** `npm run build`
- **Dev Command:** `npm run dev`
- **Server:** Runs on port 5173

### Docker Support
- **Dockerfile:** Present for containerization
- **Docker Compose:** `docker-compose.yml` available
- **Configured for:** Development and deployment

---

## ASSET MANAGEMENT

### Public Assets
```
public/assets/
├── fonts/                   # Custom font files
└── images/                  # Brand images
```

### App Assets
```
src/assets/
└── react.svg               # Vite placeholder
```

### Manifest
- `ASSETS_MANIFEST.md` - Documentation of all assets
- `README.md` - Asset usage guide

---

## SUMMARY OF KEY LOCATIONS

| Item | Location |
|------|----------|
| Main App | `/oxot-website/src/App.jsx` |
| Pages | `/oxot-website/src/pages/*.jsx` (5 files) |
| Components | `/oxot-website/src/components/*.jsx` (17+ files) |
| Backgrounds | `/oxot-website/src/components/backgrounds/*.jsx` (4 files) |
| Animations | `/oxot-website/src/animations/*.js` (8 files) |
| Styles | `/oxot-website/src/styles/*.css` (5 files) + component CSS |
| Content | `/oxot-website/content/*.md/*.pdf/*.docx` (89 files) |
| Config | `/oxot-website/vite.config.js`, `package.json` |
| Docs | `/oxot-website/docs/*.md` (37 files) |
| Research | `/oxot-website/research/` (multiple subdirectories) |
| Tests | `/oxot-website/scripts/` (12 utility scripts) |

---

## NEXT STEPS FOR SITE REBUILD

1. **Add Missing Route:** Add `/background-test` route to App.jsx
2. **Fix Menu Data:** Update `menuData.js` with OXOT services instead of banking
3. **Update Navigation:** Restructure navigation to show OXOT (Solutions, Services, Industries)
4. **Feature Blind Spot:** Position as a key threat intelligence/research area
5. **Promote AEON Digital Twin:** Make the "Digital Twin for Operational Resilience" more prominent with AEON branding
6. **Content Integration:** Create content display system for the 89 research/education files
7. **Test Three.js Background:** Verify the recommended ThreeJSBackground is being used
8. **Accessibility Review:** Ensure animation system respects reduced motion preferences

---

**Document Generated:** November 16, 2025
**Exploration Status:** COMPLETE
**Codebase Health:** STABLE with noted configuration issues
