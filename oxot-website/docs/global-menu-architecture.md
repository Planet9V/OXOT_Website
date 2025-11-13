# Global Menu System Architecture

**File:** /home/jim/OXOT_Website-1/oxot-website/docs/global-menu-architecture.md
**Created:** 2025-11-13
**Version:** 1.0.0
**Author:** System Architecture Designer
**Purpose:** Reusable menu system architecture for ALL sections (Institutional, Commercial, Mortgage)
**Status:** ACTIVE

---

## Executive Summary

This document defines a global, reusable menu system where ALL sections (Institutional Banking, Commercial Banking, Mortgage Services) share the same three-slide pattern, components, data structures, and CSS classes. The architecture prioritizes:

- **DRY Principle**: Single source of truth for menu logic
- **Reusability**: Same components used across all sections
- **Consistency**: Uniform user experience across menu types
- **Maintainability**: Changes in one place affect all menus
- **Scalability**: Easy to add new menu sections

---

## System Architecture Overview

### 1. Component Hierarchy

```
<MenuSystem>
├── <MenuOverlay>                    [Container: Full-screen overlay]
│   ├── <MenuSlideshow>              [Orchestrator: Manages slides & transitions]
│   │   ├── <MenuSlide type="title"> [Slide 1: Title + Animated Background]
│   │   │   ├── <AnimatedBackground />
│   │   │   ├── <CategoryTitle />
│   │   │   └── <SlideIndicator current={1} />
│   │   │
│   │   ├── <MenuSlide type="content"> [Slide 2: Description + Geometric]
│   │   │   ├── <GeometricBackground />
│   │   │   ├── <ServiceDescription />
│   │   │   └── <SlideIndicator current={2} />
│   │   │
│   │   └── <MenuSlide type="services"> [Slide 3: Services List + Scrolling]
│   │       ├── <ServicesList scrollable={true} />
│   │       ├── <ServiceItem /> × N
│   │       └── <SlideIndicator current={3} />
│   │
│   └── <NavigationControls>
│       ├── <CircularButton direction="up" />
│       ├── <CircularButton direction="down" />
│       └── <Pagination current={1} total={3} />
```

### 2. Data Structure Schema

```typescript
// Global Menu Data Structure
interface MenuSection {
  id: string;                    // "institutional", "commercial", "mortgage"
  title: string;                 // "Institutional Banking"
  description: string;           // Long-form description
  backgroundType: "animated" | "geometric"; // Background style for slides 1-2
  services: ServiceItem[];       // Array of service items
  metadata: {
    createdAt: string;
    updatedAt: string;
    version: string;
  };
}

interface ServiceItem {
  id: string;                    // "01", "02", "03", etc.
  name: string;                  // "Conforming Loans"
  description: string;           // Service description
  features?: string[];           // Optional bullet points
  cta?: CallToAction;           // Optional call-to-action
}

interface CallToAction {
  label: string;                 // "Learn More"
  url: string;                   // "/services/conforming"
  type: "primary" | "secondary"; // CTA styling
}

// Example Data Structure
const menuData: Record<string, MenuSection> = {
  institutional: {
    id: "institutional",
    title: "Institutional Banking",
    description: "Comprehensive financial solutions designed for large organizations...",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Conforming Loans",
        description: "Traditional mortgage products meeting GSE guidelines",
        features: [
          "Fixed and adjustable rates",
          "Competitive pricing",
          "Fast approval process"
        ],
        cta: {
          label: "Learn More",
          url: "/services/conforming",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Government Loans",
        description: "FHA, VA, and USDA loan programs",
        features: [
          "Low down payment options",
          "Flexible credit requirements",
          "Specialized programs"
        ]
      }
      // ... more services
    ],
    metadata: {
      createdAt: "2025-11-13",
      updatedAt: "2025-11-13",
      version: "1.0.0"
    }
  },
  commercial: {
    id: "commercial",
    title: "Commercial Banking",
    description: "Business banking solutions tailored for commercial enterprises...",
    backgroundType: "geometric",
    services: [
      {
        id: "01",
        name: "Commercial Real Estate",
        description: "Financing for office buildings, retail, and industrial properties"
      },
      {
        id: "02",
        name: "Business Lines of Credit",
        description: "Flexible credit solutions for operational needs"
      }
      // ... more services
    ],
    metadata: {
      createdAt: "2025-11-13",
      updatedAt: "2025-11-13",
      version: "1.0.0"
    }
  },
  mortgage: {
    id: "mortgage",
    title: "Mortgage Services",
    description: "Residential mortgage solutions for homebuyers and refinancing...",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Purchase Loans",
        description: "Financing for first-time and repeat homebuyers"
      },
      {
        id: "02",
        name: "Refinancing",
        description: "Rate and term refinancing options"
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

---

## CSS Class Naming Convention

### Global Menu Classes

```css
/* =====================================
   CONTAINER & OVERLAY
   ===================================== */

.menu-overlay {
  /* Full-screen menu container */
  /* Used by: MenuOverlay component */
}

.menu-overlay--open {
  /* Modifier: Menu visible state */
}

.menu-overlay--closing {
  /* Modifier: Menu closing animation */
}

/* =====================================
   SLIDESHOW CONTAINER
   ===================================== */

.menu-slideshow {
  /* Carousel/slideshow container */
  /* Used by: MenuSlideshow component */
}

.menu-slideshow__track {
  /* Inner track for slides */
}

.menu-slideshow__controls {
  /* Navigation controls container */
}

/* =====================================
   SLIDE TYPES (BEM Methodology)
   ===================================== */

.menu-slide {
  /* Base slide class - applied to all slides */
  /* Used by: MenuSlide component */
}

.menu-slide--title {
  /* Modifier: Slide 1 (Title + Animated Background) */
}

.menu-slide--content {
  /* Modifier: Slide 2 (Description + Geometric) */
}

.menu-slide--services {
  /* Modifier: Slide 3 (Services List + Scrollable) */
}

/* Slide States */
.menu-slide--active {
  /* Current visible slide */
}

.menu-slide--prev {
  /* Previously viewed slide */
}

.menu-slide--next {
  /* Next slide to be shown */
}

/* =====================================
   BACKGROUND PATTERNS
   ===================================== */

.animated-background {
  /* Slide 1: Animated diagonal stripes */
  /* Used by: AnimatedBackground component */
}

.animated-background__stripe {
  /* Individual animated stripe */
}

.geometric-background {
  /* Slide 2: Static geometric patterns */
  /* Used by: GeometricBackground component */
}

.geometric-background__shape {
  /* Individual geometric shape */
}

.geometric-background__shape--circle {
  /* Modifier: Circle shape */
}

.geometric-background__shape--triangle {
  /* Modifier: Triangle shape */
}

.geometric-background__shape--line {
  /* Modifier: Line shape */
}

/* =====================================
   CONTENT ELEMENTS
   ===================================== */

.menu-slide__title {
  /* Large category title (Slide 1) */
  /* Typography: 56px, font-weight 300 */
}

.menu-slide__description {
  /* Service description text (Slide 2) */
  /* Typography: 18px, line-height 1.6 */
}

.menu-slide__services {
  /* Services list container (Slide 3) */
}

.menu-slide__services--scrollable {
  /* Modifier: Enables vertical scrolling */
}

/* =====================================
   SERVICE ITEMS
   ===================================== */

.service-item {
  /* Individual service entry */
  /* Used by: ServiceItem component */
}

.service-item__number {
  /* Service number label (01, 02, etc.) */
  /* Typography: 16px, color: #999999 (dark) / #666666 (light) */
}

.service-item__name {
  /* Service name/title */
  /* Typography: 20px, font-weight 600 */
}

.service-item__description {
  /* Service description text */
  /* Typography: 16px, line-height 1.5 */
}

.service-item__features {
  /* Features list container */
}

.service-item__feature {
  /* Individual feature bullet */
}

.service-item__cta {
  /* Call-to-action button */
}

/* Service Item States */
.service-item--active {
  /* Currently selected/focused service */
}

.service-item--highlighted {
  /* Hover/focus highlight state */
}

/* =====================================
   NAVIGATION CONTROLS
   ===================================== */

.circ-button {
  /* Circular navigation button base */
  /* Size: 48px × 48px */
}

.circ-button--up {
  /* Modifier: Up/Previous button */
}

.circ-button--down {
  /* Modifier: Down/Next button */
}

.circ-button__border {
  /* Button border decoration */
}

.circ-button__icon {
  /* Button icon (arrow, chevron) */
}

/* Button States */
.circ-button:hover {
  /* Hover state */
}

.circ-button:disabled {
  /* Disabled state (first/last slide) */
}

/* =====================================
   PAGINATION
   ===================================== */

.menu-pagination {
  /* Pagination indicator container */
}

.menu-pagination__dot {
  /* Individual pagination dot */
}

.menu-pagination__dot--active {
  /* Current slide indicator */
}

.menu-pagination__text {
  /* Text-based pagination (1/3) */
  /* Typography: 16px */
}

/* =====================================
   TRANSITIONS & ANIMATIONS
   ===================================== */

.slide-enter {
  /* Slide entering animation start state */
}

.slide-enter-active {
  /* Slide entering animation end state */
}

.slide-exit {
  /* Slide exiting animation start state */
}

.slide-exit-active {
  /* Slide exiting animation end state */
}

/* =====================================
   RESPONSIVE MODIFIERS
   ===================================== */

.menu-slide--mobile {
  /* Mobile-specific layout adjustments */
}

.menu-slide--tablet {
  /* Tablet-specific layout adjustments */
}

.menu-slide--desktop {
  /* Desktop-specific layout adjustments */
}

/* =====================================
   THEME MODIFIERS
   ===================================== */

.menu-slide--dark {
  /* Dark theme (Slides 1 & 2) */
  /* Background: #1a1a1a */
  /* Text: #ffffff */
}

.menu-slide--light {
  /* Light theme (Slide 3) */
  /* Background: #f8f8f8 */
  /* Text: #2a2a2a */
}
```

---

## Transition State Machine

### Slide Transition States

```
┌─────────────────────────────────────────────────────────────┐
│                    MENU SLIDESHOW STATE MACHINE              │
└─────────────────────────────────────────────────────────────┘

States:
  • IDLE         - No menu open
  • OPENING      - Menu opening animation
  • SLIDE_1      - Title slide visible
  • TRANSITIONING_1_2 - Slide 1 → Slide 2
  • SLIDE_2      - Content slide visible
  • TRANSITIONING_2_3 - Slide 2 → Slide 3
  • SLIDE_3      - Services slide visible
  • TRANSITIONING_3_2 - Slide 3 → Slide 2 (backward)
  • TRANSITIONING_2_1 - Slide 2 → Slide 1 (backward)
  • CLOSING      - Menu closing animation

Transitions:
  IDLE → OPENING
    Trigger: User clicks menu category (Institutional, Commercial, Mortgage)
    Action:
      - Set menuData to selected category
      - Add .menu-overlay--open class
      - Trigger white shape animation (1200ms)
      - Set currentSlide = 1
    Duration: 800ms

  OPENING → SLIDE_1
    Trigger: Opening animation complete
    Action:
      - Show title slide with animated background
      - Fade in category title
      - Enable navigation controls
    Duration: 600ms fade-in

  SLIDE_1 → TRANSITIONING_1_2
    Trigger: User clicks down arrow OR swipes up
    Action:
      - Fade out title slide (400ms)
      - Start white shape transition (1200ms)
      - Prepare content slide
    Duration: 400ms fade-out

  TRANSITIONING_1_2 → SLIDE_2
    Trigger: Fade-out complete
    Action:
      - Show content slide with geometric background
      - Fade in description text (600ms)
      - Update pagination (1 → 2)
    Duration: 600ms fade-in

  SLIDE_2 → TRANSITIONING_2_3
    Trigger: User clicks down arrow OR swipes up
    Action:
      - Fade out content slide (400ms)
      - Start white shape transition (1200ms)
      - Prepare services slide
    Duration: 400ms fade-out

  TRANSITIONING_2_3 → SLIDE_3
    Trigger: Fade-out complete
    Action:
      - Show services slide (light background)
      - Cascade in service items (50ms delay each)
      - Enable vertical scrolling
      - Update pagination (2 → 3)
      - Disable down arrow (last slide)
    Duration: 600ms fade-in + cascade

  SLIDE_3 → TRANSITIONING_3_2 (Backward)
    Trigger: User clicks up arrow OR swipes down
    Action:
      - Fade out services slide (400ms)
      - Start reverse white shape transition
      - Prepare content slide
    Duration: 400ms fade-out

  TRANSITIONING_3_2 → SLIDE_2 (Backward)
    Trigger: Fade-out complete
    Action:
      - Show content slide with geometric background
      - Fade in description text (600ms)
      - Update pagination (3 → 2)
      - Enable down arrow
    Duration: 600ms fade-in

  SLIDE_2 → TRANSITIONING_2_1 (Backward)
    Trigger: User clicks up arrow OR swipes down
    Action:
      - Fade out content slide (400ms)
      - Start reverse white shape transition
      - Prepare title slide
    Duration: 400ms fade-out

  TRANSITIONING_2_1 → SLIDE_1 (Backward)
    Trigger: Fade-out complete
    Action:
      - Show title slide with animated background
      - Fade in category title (600ms)
      - Update pagination (2 → 1)
      - Disable up arrow (first slide)
    Duration: 600ms fade-in

  ANY_SLIDE → CLOSING
    Trigger: User clicks close button OR clicks outside menu
    Action:
      - Fade out current slide (400ms)
      - Reverse white shape animation (800ms)
      - Remove .menu-overlay--open class
    Duration: 600ms total

  CLOSING → IDLE
    Trigger: Close animation complete
    Action:
      - Reset currentSlide = 1
      - Clear menuData
      - Remove menu overlay from DOM
    Duration: Instant

Animation Timings:
  • Menu Open: 800ms
  • Slide Fade-Out: 400ms
  • Slide Fade-In: 600ms
  • White Shape: 1200ms
  • Cascade Delay: 50ms per item
  • Menu Close: 600ms

Easing Functions:
  • Menu Open/Close: cubic-bezier(0.4, 0.0, 0.2, 1)
  • Slide Transitions: cubic-bezier(0.25, 0.1, 0.25, 1)
  • White Shape: cubic-bezier(0.4, 0.0, 0.2, 1)
  • Cascade: cubic-bezier(0.76, 0, 0.04, 1)
```

---

## Reusability Patterns

### 1. Component Composition Pattern

```jsx
// ✅ CORRECT: Reusable MenuSlideshow component
<MenuSlideshow data={institutionalData}>
  <MenuSlide type="title" />
  <MenuSlide type="content" />
  <MenuSlide type="services" />
</MenuSlideshow>

<MenuSlideshow data={commercialData}>
  <MenuSlide type="title" />
  <MenuSlide type="content" />
  <MenuSlide type="services" />
</MenuSlideshow>

<MenuSlideshow data={mortgageData}>
  <MenuSlide type="title" />
  <MenuSlide type="content" />
  <MenuSlide type="services" />
</MenuSlideshow>

// ❌ WRONG: Separate components for each section
<InstitutionalMenu />
<CommercialMenu />
<MortgageMenu />
```

### 2. Data-Driven Rendering Pattern

```jsx
// ✅ CORRECT: Single component, different data
const MenuSystem = ({ sectionId }) => {
  const data = menuData[sectionId]; // "institutional", "commercial", "mortgage"

  return (
    <MenuSlideshow data={data}>
      <MenuSlide type="title">
        <AnimatedBackground type={data.backgroundType} />
        <CategoryTitle>{data.title}</CategoryTitle>
      </MenuSlide>

      <MenuSlide type="content">
        <GeometricBackground />
        <ServiceDescription>{data.description}</ServiceDescription>
      </MenuSlide>

      <MenuSlide type="services">
        <ServicesList>
          {data.services.map(service => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </ServicesList>
      </MenuSlide>
    </MenuSlideshow>
  );
};

// Usage:
<MenuSystem sectionId="institutional" />
<MenuSystem sectionId="commercial" />
<MenuSystem sectionId="mortgage" />
```

### 3. CSS Class Application Pattern

```jsx
// ✅ CORRECT: Dynamic class application
const MenuSlide = ({ type, theme = "dark", active = false }) => {
  const classNames = [
    "menu-slide",
    `menu-slide--${type}`,
    `menu-slide--${theme}`,
    active && "menu-slide--active"
  ].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
};

// ❌ WRONG: Hardcoded classes for each section
<div className="institutional-slide-title">
<div className="commercial-slide-title">
<div className="mortgage-slide-title">
```

### 4. Animation Reuse Pattern

```jsx
// ✅ CORRECT: Shared animation logic
const useSlideTransition = (direction) => {
  const fadeOut = () => {
    // Shared fade-out animation (400ms)
    gsap.to(".menu-slide--active", {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const fadeIn = () => {
    // Shared fade-in animation (600ms)
    gsap.to(".menu-slide--active", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.in"
    });
  };

  return { fadeOut, fadeIn };
};

// Used by all sections
const InstitutionalMenu = () => {
  const { fadeOut, fadeIn } = useSlideTransition();
  // ... use animations
};

const CommercialMenu = () => {
  const { fadeOut, fadeIn } = useSlideTransition();
  // ... use animations
};
```

### 5. Background Pattern Reuse

```jsx
// ✅ CORRECT: Polymorphic background component
const SlideBackground = ({ type }) => {
  switch(type) {
    case "animated":
      return <AnimatedBackground />;
    case "geometric":
      return <GeometricBackground />;
    default:
      return null;
  }
};

// Used in MenuSlide component
<MenuSlide type="title">
  <SlideBackground type={data.backgroundType} />
  {/* Other content */}
</MenuSlide>

// ❌ WRONG: Different background components for each section
<InstitutionalBackground />
<CommercialBackground />
<MortgageBackground />
```

---

## Implementation Guidelines

### Component Development Order

1. **Phase 1: Base Components**
   - `MenuOverlay` - Full-screen container
   - `MenuSlideshow` - Slideshow orchestrator
   - `MenuSlide` - Base slide component
   - `NavigationControls` - Arrow buttons + pagination

2. **Phase 2: Background Components**
   - `AnimatedBackground` - Diagonal stripes animation
   - `GeometricBackground` - Static geometric patterns

3. **Phase 3: Content Components**
   - `CategoryTitle` - Large title text
   - `ServiceDescription` - Description text
   - `ServicesList` - Scrollable services container
   - `ServiceItem` - Individual service entry

4. **Phase 4: Integration**
   - Connect components to data structure
   - Implement state machine logic
   - Add transition animations
   - Test with all three sections

### CSS Development Order

1. **Phase 1: Layout Classes**
   - `.menu-overlay` and modifiers
   - `.menu-slideshow` structure
   - `.menu-slide` base and modifiers

2. **Phase 2: Background Classes**
   - `.animated-background` and stripes
   - `.geometric-background` and shapes

3. **Phase 3: Content Classes**
   - `.menu-slide__title`
   - `.menu-slide__description`
   - `.service-item` and children

4. **Phase 4: Interactive Classes**
   - `.circ-button` and states
   - `.menu-pagination` and indicators
   - Transition classes (`.slide-enter`, etc.)

### Testing Strategy

1. **Visual Consistency Test**
   - Load Institutional section → verify all 3 slides
   - Load Commercial section → verify all 3 slides
   - Load Mortgage section → verify all 3 slides
   - Compare: All sections should look identical except for content

2. **Transition Consistency Test**
   - Test slide 1→2→3 transitions for all sections
   - Verify timing: 400ms fade-out + 1200ms shape + 600ms fade-in
   - Test backward navigation: 3→2→1
   - Verify cascade animation on slide 3

3. **Data Binding Test**
   - Modify `institutionalData.title` → verify reflected in slide 1
   - Add service to `commercialData.services` → verify in slide 3
   - Change `mortgageData.description` → verify in slide 2

4. **CSS Class Test**
   - Inspect slide 1: Should have `.menu-slide .menu-slide--title .menu-slide--dark`
   - Inspect slide 2: Should have `.menu-slide .menu-slide--content .menu-slide--dark`
   - Inspect slide 3: Should have `.menu-slide .menu-slide--services .menu-slide--light`

---

## Architecture Decision Records (ADRs)

### ADR-001: Three-Slide Pattern

**Decision**: All menu sections use exactly three slides.

**Rationale**:
- Consistency: Users learn the pattern once, applies everywhere
- Cognitive Load: Three slides is optimal for information hierarchy
- Animation: Fixed count enables predictable transition timing
- Maintainability: Single slideshow component serves all sections

**Alternatives Considered**:
- Variable slide count per section (rejected: complexity, inconsistency)
- Single-page scrolling menu (rejected: lacks visual hierarchy)

**Consequences**:
- ✅ Uniform user experience across all sections
- ✅ Simplified state management (3 states always)
- ⚠️ Content must fit three-slide structure (may require editing)

---

### ADR-002: Data-Driven Component Architecture

**Decision**: Use single component set with data props, not separate components per section.

**Rationale**:
- DRY: Changes to menu logic apply to all sections automatically
- Scalability: Adding new sections requires only data, not new components
- Testing: Test one component set thoroughly vs. testing N component sets
- Bundle Size: One component set vs. N duplicated component sets

**Alternatives Considered**:
- Separate components per section (rejected: maintenance burden)
- Template inheritance (rejected: React doesn't support traditional inheritance)

**Consequences**:
- ✅ Easy to add new sections (just add data)
- ✅ Bug fixes apply to all sections
- ⚠️ Component must handle all edge cases generically

---

### ADR-003: BEM Naming Convention

**Decision**: Use Block-Element-Modifier (BEM) methodology for CSS classes.

**Rationale**:
- Predictability: Clear naming pattern for all classes
- Specificity: Avoids CSS specificity wars
- Readability: Class names self-document structure
- Reusability: Modifiers enable variation without duplication

**Alternatives Considered**:
- Utility-first (Tailwind) - rejected: Prefer semantic class names
- CSS Modules - rejected: Global consistency more important
- Styled Components - rejected: Prefer separation of concerns

**Consequences**:
- ✅ Clear, predictable class names
- ✅ Easy to override for customization
- ⚠️ Class names can become verbose

---

### ADR-004: State Machine for Transitions

**Decision**: Implement explicit state machine for slide transitions.

**Rationale**:
- Predictability: All transitions follow documented paths
- Debugging: Easy to identify current state and valid transitions
- Animation: Precise timing control for complex animations
- Error Prevention: Invalid transitions blocked at architecture level

**Alternatives Considered**:
- Imperative transition logic (rejected: hard to reason about)
- CSS-only transitions (rejected: insufficient control)

**Consequences**:
- ✅ Reliable, predictable transitions
- ✅ Easy to add transition logging/debugging
- ⚠️ Initial setup complexity

---

## Performance Considerations

### Optimization Strategies

1. **Lazy Load Backgrounds**
   ```jsx
   // Only load animated background when menu opens
   const AnimatedBackground = React.lazy(() =>
     import('./AnimatedBackground')
   );
   ```

2. **Memoize Service Items**
   ```jsx
   const ServiceItem = React.memo(({ id, name, description }) => {
     // Component implementation
   });
   ```

3. **Virtualize Long Service Lists**
   ```jsx
   // If service list > 20 items, use react-window
   import { FixedSizeList } from 'react-window';
   ```

4. **Preload Next Slide**
   ```jsx
   // Preload slide N+1 while showing slide N
   const preloadNextSlide = (currentIndex) => {
     if (currentIndex < 3) {
       // Prepare next slide content
     }
   };
   ```

5. **GPU Acceleration**
   ```css
   .menu-slide {
     transform: translateZ(0); /* Force GPU layer */
     will-change: transform, opacity;
   }
   ```

### Performance Targets

- **Menu Open**: < 800ms (measured from click to first slide visible)
- **Slide Transition**: < 1400ms (400ms fade-out + 1200ms shape + 600ms fade-in)
- **Cascade Animation**: 50ms × N items (e.g., 500ms for 10 items)
- **Menu Close**: < 600ms
- **60fps**: All animations maintain 60fps (16.67ms per frame)

---

## Accessibility Requirements

### Keyboard Navigation

```
TAB         - Focus next interactive element
SHIFT+TAB   - Focus previous interactive element
ENTER       - Activate focused element (button, link)
SPACE       - Activate focused element
ARROW DOWN  - Next slide (when slideshow focused)
ARROW UP    - Previous slide (when slideshow focused)
ESC         - Close menu
```

### ARIA Attributes

```jsx
<div
  className="menu-overlay"
  role="dialog"
  aria-modal="true"
  aria-labelledby="menu-title"
>
  <div
    className="menu-slideshow"
    role="region"
    aria-label="Services menu"
    aria-live="polite"
  >
    <div
      className="menu-slide menu-slide--active"
      role="tabpanel"
      aria-labelledby="slide-1-title"
      tabIndex="0"
    >
      {/* Slide content */}
    </div>
  </div>

  <button
    className="circ-button circ-button--up"
    aria-label="Previous slide"
    aria-controls="menu-slideshow"
    disabled={currentSlide === 1}
  >
    <span className="sr-only">Go to previous slide</span>
  </button>
</div>
```

### Screen Reader Support

- Announce slide transitions: "Now showing slide 2 of 3: Description"
- Announce menu open: "Menu opened: Institutional Banking"
- Announce menu close: "Menu closed"
- Provide skip links: "Skip to services list"

---

## Security Considerations

### XSS Prevention

```jsx
// ✅ CORRECT: Sanitize user-provided content
import DOMPurify from 'dompurify';

const ServiceDescription = ({ description }) => {
  const sanitized = DOMPurify.sanitize(description);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
};

// ❌ WRONG: Direct HTML injection
<div dangerouslySetInnerHTML={{ __html: description }} />
```

### Content Security Policy

```http
Content-Security-Policy:
  default-src 'self';
  style-src 'self' 'unsafe-inline';
  script-src 'self';
  img-src 'self' data: https:;
```

---

## Future Extensibility

### Adding New Menu Sections

1. Add data to `menuData` object:
   ```typescript
   const menuData = {
     // ... existing sections
     wealth: {
       id: "wealth",
       title: "Wealth Management",
       description: "...",
       backgroundType: "animated",
       services: [...]
     }
   };
   ```

2. Add navigation link:
   ```jsx
   <button onClick={() => openMenu("wealth")}>
     Wealth Management
   </button>
   ```

3. Done! No component changes needed.

### Adding New Slide Types

If future requirements demand a 4th slide type:

1. Update `MenuSlide` component to support new type:
   ```jsx
   <MenuSlide type="pricing" />
   ```

2. Add CSS classes:
   ```css
   .menu-slide--pricing { /* styles */ }
   ```

3. Update state machine to include new transition states

4. Update all `menuData` objects to include new slide content

---

## Version History

- **v1.0.0** (2025-11-13): Initial architecture design
  - Three-slide pattern established
  - Component hierarchy defined
  - Data structure schema created
  - CSS class naming convention documented
  - Transition state machine designed
  - Reusability patterns defined

---

## References & Sources

- **NexBank Reference**: Original menu system analyzed for patterns
- **BEM Methodology**: http://getbem.com/
- **React Composition**: https://reactjs.org/docs/composition-vs-inheritance.html
- **State Machine Pattern**: https://en.wikipedia.org/wiki/Finite-state_machine
- **GSAP Animation**: https://greensock.com/gsap/
- **Accessibility (WCAG 2.1)**: https://www.w3.org/WAI/WCAG21/quickref/

---

**END OF DOCUMENT**
