# OXOT Website - Quick Reference Guide

## Critical Points for Rebuild

### 1. ADD MISSING ROUTE (CRITICAL)
**File:** `/home/user/OXOT_Website/oxot-website/src/App.jsx`

Add this route to the `<Routes>` section:
```jsx
<Route path="/r3f-background-test" element={<BackgroundTestPage />} />
```

### 2. BACKGROUND TEST PAGE IS COMPLETE
- Location: `/home/user/OXOT_Website/oxot-website/src/pages/BackgroundTestPage.jsx`
- Has 3 background implementations ready to test:
  - Video Background (1.53 MB, 30 FPS) - NOT recommended
  - Three.js WebGL (15 KB, 60 FPS) - **RECOMMENDED**
  - Lottie Vector (5-50 KB, 60 FPS) - Alternative
- Access at: `http://localhost:5173/background-test` (once route added)

### 3. ALL PAGES ARE OXOT-FOCUSED (Not NexBank!)
- **HomePage:** OT/ICS security, industries, services
- **SolutionsPage:** 4 OXOT solutions including Digital Twin
- **ServicesPage:** 7 OXOT service categories
- **IndustriesPage:** 4 industry focuses
- **BackgroundTestPage:** Background animation testing

### 4. CONTENT ASSETS - 89 FILES AVAILABLE
Location: `/home/user/OXOT_Website/oxot-website/content/`

Categories:
- IEC 62443 Standards (9 files)
- Industrial Control Systems IACS (10 files)  
- Threat Intelligence Reports (15+ files)
- Ransomware Readiness (5 files)
- M&A Cybersecurity (6 files)
- Energy Security (5 files)
- Manufacturing Security (4 files)
- Playbooks & Guides (2 files)
- Business Documents (DOCX/PDF)

### 5. BLIND SPOT
- **Status:** Not a product - only exists in threat intelligence articles
- **Found In:** SOTI_2025_8_ENERGY_DER article
- **Action:** Consider positioning as research/intelligence area

### 6. AEON DIGITAL TWIN
- **Status:** Not branded as "AEON" in codebase
- **Current Name:** "Digital Twin for Operational Resilience" (SolutionsPage)
- **Action:** Add AEON branding/terminology to solutions

### 7. r3f STATUS
- **React Three Fiber:** Mentioned in docs, not actively implemented
- **What's Used Instead:** Direct Three.js (recommended approach)
- **Location:** `ThreeJSBackground.jsx` in `src/components/backgrounds/`

## File Locations - Quick Lookup

| Component | Location |
|-----------|----------|
| Main Routing | `src/App.jsx` |
| Home Page | `src/pages/HomePage.jsx` |
| Solutions | `src/pages/SolutionsPage.jsx` |
| Services | `src/pages/ServicesPage.jsx` |
| Industries | `src/pages/IndustriesPage.jsx` |
| Background Test | `src/pages/BackgroundTestPage.jsx` |
| Background Components | `src/components/backgrounds/` |
| Animation System | `src/animations/` (GSAP) |
| Menu Data | `src/data/menuData.js` |
| Global Styles | `src/global.css` |
| Content Files | `content/` (89 files) |
| Documentation | `docs/` (37 files) |
| Package Config | `package.json` |
| Vite Config | `vite.config.js` |

## Quick Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Run verification
npm run verify

# Test backgrounds
node scripts/test-background-performance.js

# Test animations
node scripts/test-animations.js
```

## Key Dependencies

- React 19.2.0
- Vite 7.2.2
- Three.js 0.181.1
- GSAP 3.13.0
- React Router 7.9.5
- Swiper 12.0.3
- Lottie 5.13.0

## Issues to Fix Before Rebuild

1. **Add BackgroundTestPage Route** - Component ready, needs route
2. **Update Menu Data** - Currently NexBank, needs OXOT services  
3. **Integrate Content** - 89 files exist but not displayed
4. **Verify Three.js Background** - Ensure recommended implementation is active
5. **Add AEON Branding** - Digital Twin needs AEON terminology
6. **Position Blind Spot** - Add as threat intelligence/research

## Documentation Available

- Full Technical Spec: `/docs/TECHNICAL_SPEC.md`
- Product Requirements: `/docs/PRD.md`
- Implementation Reports: `/docs/IMPLEMENTATION_SUMMARY.md`
- Background Analysis: `/docs/BACKGROUND-OPTIONS-ANALYSIS.md`
- Animation Docs: `/src/animations/README.md`
- Background Components: `/src/components/backgrounds/README.md`

## Git Status

- **Branch:** claude/rebuild-cybersecurity-site-014agQ2GtfmyZHTwXewxUWrG
- **Status:** Clean (no uncommitted changes)
- **Latest Commit:** Add comprehensive menu system...

---

**Quick Reference Generated:** November 16, 2025
