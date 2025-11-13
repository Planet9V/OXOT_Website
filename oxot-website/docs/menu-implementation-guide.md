# Menu System Implementation Guide

**File:** /docs/menu-implementation-guide.md
**Created:** 2025-11-13
**Version:** 1.0.0
**Author:** Implementation Team
**Purpose:** Complete guide for implementing and using the 3-slide menu system
**Status:** ACTIVE

---

## Overview

The 3-slide menu system is a reusable, data-driven component architecture that works across all sections (Institutional, Commercial, Mortgage). It provides a consistent user experience with smooth transitions, auto-advance features, and responsive design.

## File Structure

```
src/
├── components/
│   ├── MenuSlideshow.jsx       # Main slideshow orchestrator
│   ├── MenuSlide.jsx          # Individual slide components
│   ├── MenuOverlay.jsx        # Full-screen overlay wrapper
│   └── MenuSlideshow.css      # Global menu styles (BEM)
├── data/
│   └── menuData.js            # Centralized menu data
└── examples/
    └── MenuSystemExample.jsx  # Reference implementation
```

## Quick Start

### 1. Basic Implementation

```jsx
import React, { useState } from 'react';
import MenuOverlay from './components/MenuOverlay';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const openMenu = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Navigation buttons */}
      <button onClick={() => openMenu('institutional')}>
        Institutional Banking
      </button>
      <button onClick={() => openMenu('commercial')}>
        Commercial Banking
      </button>
      <button onClick={() => openMenu('mortgage')}>
        Mortgage Services
      </button>

      {/* Menu overlay */}
      <MenuOverlay
        sectionId={currentSection}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </div>
  );
}
```

### 2. Menu Data Structure

All menu content is centralized in `/src/data/menuData.js`:

```javascript
export const menuData = {
  institutional: {
    id: "institutional",
    title: "INSTITUTIONAL BANKING",
    description: "Comprehensive financial solutions...",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Conforming Loans",
        description: "Traditional mortgage products...",
        features: ["Fixed rates", "Fast approval"],
        cta: {
          label: "Learn More",
          url: "/services/conforming",
          type: "primary"
        }
      }
      // ... more services
    ]
  }
  // ... commercial, mortgage sections
};
```

## Component Architecture

### MenuOverlay
- **Purpose:** Full-screen container with open/close animations
- **Responsibilities:**
  - Load menu data for selected section
  - Handle opening/closing animations (800ms)
  - Prevent body scroll when open
  - ESC key handling

### MenuSlideshow
- **Purpose:** Orchestrates 3-slide experience
- **Responsibilities:**
  - Manage slide transitions (400ms fade-out + 600ms fade-in)
  - Auto-advance timing (Slide 1→2: 2s, Slide 2→3: 3s)
  - Manual navigation (arrow buttons, keyboard)
  - Pagination state

### MenuSlide
- **Purpose:** Base slide component with type variants
- **Variants:**
  - `TitleSlide` - Centered title with animated background
  - `ContentSlide` - Description text with geometric patterns
  - `ServicesSlide` - Scrollable services list

## Features

### Auto-Advance Timing
- **Slide 1 → 2:** 2 seconds (title → description)
- **Slide 2 → 3:** 3 seconds (description → services)
- **Slide 3:** No auto-advance (manual navigation only)

### Manual Navigation
- **Arrow Buttons:** Circular buttons on right side
- **Keyboard:** ↑/↓ arrows, ESC to close
- **Pagination Dots:** Click to jump to specific slide
- **Click Outside:** Close menu by clicking backdrop

### Transitions
- **Fade-Out:** 400ms cubic-bezier(0.25, 0.1, 0.25, 1)
- **Fade-In:** 600ms cubic-bezier(0.25, 0.1, 0.25, 1)
- **Cascade:** Service items animate in with 50ms stagger

### Responsive Design
- **Desktop:** Full padding (80px), large fonts
- **Tablet:** Medium padding (40px), adjusted fonts
- **Mobile:** Small padding (24px), compact layout

## CSS Class Reference

### BEM Naming Convention

```css
/* Container */
.menu-overlay
.menu-overlay--open
.menu-overlay--closing

/* Slideshow */
.menu-slideshow
.menu-slideshow__controls
.menu-slideshow__close

/* Slides */
.menu-slide
.menu-slide--title          /* Slide 1 */
.menu-slide--content        /* Slide 2 */
.menu-slide--services       /* Slide 3 */
.menu-slide--active
.menu-slide--dark           /* Slides 1 & 2 */
.menu-slide--light          /* Slide 3 */

/* Backgrounds */
.animated-background        /* Diagonal stripes */
.animated-background__stripe
.geometric-background       /* Static shapes */
.geometric-background__shape
.geometric-background__shape--circle
.geometric-background__shape--triangle
.geometric-background__shape--line

/* Service Items */
.service-item
.service-item__number
.service-item__name
.service-item__description
.service-item__features
.service-item__feature
.service-item__cta
.service-item__cta--primary
.service-item__cta--secondary

/* Navigation */
.circ-button
.circ-button--up
.circ-button--down
.circ-button__icon

/* Pagination */
.menu-pagination
.menu-pagination__text
.menu-pagination__dots
.menu-pagination__dot
.menu-pagination__dot--active
```

## Adding New Sections

### Step 1: Add Data

Edit `/src/data/menuData.js`:

```javascript
export const menuData = {
  // ... existing sections
  wealth: {
    id: "wealth",
    title: "WEALTH MANAGEMENT",
    description: "Personalized wealth management...",
    backgroundType: "geometric",
    services: [
      {
        id: "01",
        name: "Portfolio Management",
        description: "Customized investment strategies...",
        features: ["Asset allocation", "Tax optimization"]
      }
      // ... more services
    ],
    metadata: {
      createdAt: "2025-11-13",
      updatedAt: "2025-11-13",
      version: "1.0.0"
    }
  }
};
```

### Step 2: Add Trigger Button

```jsx
<button onClick={() => openMenu('wealth')}>
  Wealth Management
</button>
```

**That's it!** No component changes needed - the system is fully data-driven.

## Customization

### Change Auto-Advance Timing

Edit `/src/components/MenuSlideshow.jsx`:

```javascript
// Slide 1 → 2
if (currentSlide === 1) {
  autoAdvanceTimerRef.current = setTimeout(() => {
    goToSlide(2);
  }, 3000); // Change from 2000ms to 3000ms
}
```

### Modify Transition Duration

Edit `/src/components/MenuSlideshow.css`:

```css
.menu-slide {
  transition: opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  /* Change from 0.6s to 0.8s */
}
```

### Change Background Style

Edit menu data:

```javascript
backgroundType: "geometric"  // or "animated"
```

The component automatically uses the correct background based on this setting.

## Accessibility

### Keyboard Support
- **TAB:** Navigate between interactive elements
- **ENTER/SPACE:** Activate focused element
- **↑/↓ ARROWS:** Navigate slides
- **ESC:** Close menu

### ARIA Attributes
```jsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="menu-title"
  aria-live="polite"
>
```

### Screen Reader Support
- Announces slide transitions
- Labels all interactive elements
- Provides skip navigation

## Performance Optimization

### Implemented Optimizations
1. **CSS Transform:** GPU-accelerated animations
2. **Will-Change:** Hints for browser optimization
3. **Lazy State Updates:** Prevents unnecessary re-renders
4. **Event Cleanup:** Removes listeners on unmount
5. **Memoization Ready:** Components structured for React.memo

### Performance Targets
- Menu open: < 800ms
- Slide transition: < 1400ms (fade + shape animation)
- 60fps: All animations maintain smooth framerate

## Troubleshooting

### Menu Not Opening
**Issue:** Click button, nothing happens
**Solution:** Check state management:
```jsx
console.log('isMenuOpen:', isMenuOpen);
console.log('currentSection:', currentSection);
```

### Transitions Not Smooth
**Issue:** Janky animations
**Solution:** Enable GPU acceleration:
```css
.menu-slide {
  transform: translateZ(0);
  will-change: transform, opacity;
}
```

### Auto-Advance Not Working
**Issue:** Slides don't auto-advance
**Solution:** Check timer cleanup:
```javascript
// Ensure timer is cleared properly
useEffect(() => {
  return () => clearAutoAdvance();
}, []);
```

### Services Not Scrolling
**Issue:** Services list cuts off
**Solution:** Verify scrollable class:
```jsx
<div className="menu-slide__services menu-slide__services--scrollable">
```

## Testing Checklist

- [ ] All three sections (Institutional, Commercial, Mortgage) work
- [ ] Auto-advance timing: Slide 1→2 (2s), Slide 2→3 (3s)
- [ ] Manual navigation: Up/down arrows functional
- [ ] Keyboard navigation: ↑/↓ arrows, ESC key
- [ ] Click outside closes menu
- [ ] Pagination dots update correctly
- [ ] Service items cascade animation
- [ ] Scrolling works on slide 3
- [ ] Responsive design on mobile
- [ ] Smooth transitions (no flashing)

## Version History

- **v1.0.0** (2025-11-13): Initial implementation
  - 3-slide menu system
  - Auto-advance functionality
  - Responsive design
  - Accessibility features
  - Complete documentation

## References

- Global Menu Architecture: `/docs/global-menu-architecture.md`
- Example Implementation: `/src/examples/MenuSystemExample.jsx`
- Component Source: `/src/components/MenuSlideshow.jsx`
- Data Structure: `/src/data/menuData.js`

---

**END OF GUIDE**
