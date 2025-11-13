# NexBank Typography & Animation Analysis

**Analysis Date**: 2025-11-13
**Target URL**: https://www.nexbank.com/
**Analysis Method**: WebFetch, CSS extraction, JavaScript inspection

---

## 1. TYPOGRAPHY SYSTEM

### Primary Font Family
**Font**: `suisseintl` (custom font)
**Fallbacks**: `Helvetica, Arial, sans-serif`
**Secondary**: `Source Sans 3` (Google Fonts, italic only)

### Font Weights
- **100** (thin) - Used for section titles
- **300** (light) - Used for large display headings
- **400** (regular) - Navigation, body text
- **500** (medium) - Navigation items hover states
- **600** (semibold) - Source Sans 3 italic variant

### Google Fonts Integration
```css
@font-face {
  font-family: 'Source Sans 3';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesans3/v19/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqLlO9C4.ttf) format('truetype');
}

@font-face {
  font-family: 'Source Sans 3';
  font-style: italic;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/sourcesans3/v19/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqGdJ9C4.ttf) format('truetype');
}
```

### Heading Hierarchy

#### Mobile Typography (< 600px)
- **Large Display**: `11vw` (viewport-based scaling)
- **Section Titles**: `12.89vw`
- **Navigation Items**: `24px`

#### Tablet Typography (≥ 600px)
- **Large Display**: `5vw`
- **Section Titles**: `40px - 52px`
- **Navigation Items**: `20px`

#### Desktop Typography (≥ 1440px)
- **Hero/Display**: `75px`, weight 300 (light)
- **Section Titles**: `52px`, weight 100 (thin)
- **Subsection Titles**: `40px`, weight 100

### Body Text Sizes
**Base Body**: `15px`

**Utility Sizes**:
- `8px`, `10px`, `12px`, `13px`, `14px` (small text, labels)
- `16px`, `18px`, `20px` (medium text)
- `24px`, `30px` (emphasized text)
- `40px`, `52px`, `62px`, `87px` (large display)

**Viewport-Relative**:
- `3.65vw`, `5vw`, `9vw`, `11vw`, `12.89vw` (responsive scaling)

### Letter Spacing

**Uppercase Text**: `0.1em` to `0.6em`

**Key Elements**:
- `.nav-toggle__close-label`: `0.6em` (wide letter spacing)
- Body text: Minimal to `0.01em`
- Form buttons: `0.1em - 0.3em`

### Line Heights

**Body Copy**: `2em` (generous spacing)

**Headings**: `1em` to `1.4em` (tight for impact)

**Navigation**: `2.63em` to `2.92em` (extra spacing)

**Text Blocks**: `1.6em` to `2em` (readable spacing)

### Text Transform
**Uppercase Applied**:
- Buttons (`.square-button`, `.form__submit`)
- Navigation toggle labels
- Form controls
- CTAs and emphasized elements

---

## 2. ANIMATION SYSTEM

### Animation Library
**Primary**: **GSAP (GreenSock Animation Platform)**
- Core library detected in JavaScript
- TimelineMax/TimelineLite for sequenced animations
- TweenMax for individual tweens
- Easing utilities (CustomEase, Power easing)

### Core Easing Functions

**Custom Cubic Bezier Values**:
- `cubic-bezier(.43, .195, .02, 1)` - Quick decelerate (primary)
- `cubic-bezier(.77, 0, .175, 1)` - Strong ease-out (bounce-like)
- `cubic-bezier(.165, .84, .44, 1)` - Elastic in/out
- `cubic-bezier(.895, .03, .685, .22)` - Sharp decelerate
- `cubic-bezier(.376, -.034, .454, .528)` - Custom "inOut" ease

**GSAP Named Easing**:
- `Power1.easeOut`
- `Power2.easeInOut`
- `Cubic.easeInOut`
- `Cubic.easeOut`

### Transition Durations

**Standard Transitions**: `0.3s` (color, opacity, transform)

**Range**: `0.3s` to `1.6s`

**Typical Durations**:
- Quick hover effects: `0.3s - 0.5s`
- Medium transitions: `0.6s - 0.8s`
- Entrance animations: `1s - 1.3s`
- Complex sequences: `1.5s - 1.7s`

### Transform Operations

**Translate**:
- `translateX()`, `translateY()`, `translate()`
- Used for sliding elements in/out
- Common values: `-100%`, `0`, `100%`, `80px`, `-50px`

**Scale**:
- `scale()`, `scaleX()`, `scaleY()`
- Range: `0` (hidden) to `1.8` (emphasized)
- Hover effects: `0.93` (slight shrink on buttons)

**Rotate**:
- Range: `-110deg` to `90deg`
- Used for navigation items: `15deg - 30deg` entrance angles

**GPU Acceleration**:
- `translateZ(0)` applied for smooth animations
- `will-change` property for scroll elements
- `backface-visibility: hidden` on scroll content

---

## 3. SCROLL-BASED ANIMATIONS

### Scroll Detection Classes
- `.js-scroll-root` - Scroll container wrapper
- `.js-scroll-container` - Container with height constraint
- `.js-scroll-content` - Animated content layer

### Smooth Scroll Implementation
**Custom JavaScript Scroll Engine**:
- **Inertial scrolling** with easing
- **Spring constant**: `y = 0.08` (8% interpolation per frame)
- **Minimum delta**: `0.001` (sleep threshold)
- **Direction tracking**: Upward/downward scroll detection

### Scroll Progress Indicators
- `.about__scrollbar__progress` uses `scaleY` transform
- Scales from `0` to `1` based on scroll position

### Parallax Effects
**Implementation**: Custom scroll items with differential speeds
- Observed in `.js-scroll-content` elements
- Frame-by-frame transform updates based on scroll position

---

## 4. ELEMENT ENTRANCE ANIMATIONS

### Navigation Menu Animation
**Staggered Entrance** (GSAP Timeline):
```
Background fade: 1s, opacity 0 → 1
Inner background slide: 1.5s, yPercent -100% → 0%
Logo slide: 1.3s, yPercent -100% → 0%, delay 0.8s
Menu items (staggered): 1.2s, y 80px → 0, rotation 30deg → 0deg, delay 0.1s per item
Login elements: 0.8s, opacity 0 → 1
```

**Stagger Delay**: `0.1s` between each navigation item

### Exit Animations
**Navigation Close**:
```
Background fade: 1s, opacity 1 → 0, delay 0.3s
Inner background slide: 1.6s, yPercent 0% → -100%, delay 0.1s
Logo slide: 0.6s, yPercent 0% → -100%
Menu items (staggered): 0.8s, y 0 → 40px, rotation 0deg → 15deg, negative stagger -0.05s
```

### Loading Animation
**Progress Digits**:
- Digit flip animation: `1.7s` duration
- Stagger offset: `0.1s` between digits
- Cycle pattern: `yPercent` values [0, 0, 0, -100, -100, 100]
- Final fade out: `0.8s` opacity transition

---

## 5. HOVER STATE ANIMATIONS

### Logo Hover
```css
.logo__inner:hover .colored {
  transition: opacity 0.8s cubic-bezier(.43, .195, .02, 1);
  opacity: 1;
}
```
- Triggers rotation and opacity shifts on inner elements
- Multi-element coordinated animation

### Button Hover
**Circular Buttons**:
```css
.circ-button:hover .circ-button__border {
  transform: scale(0.93);
  transition: transform 0.5s cubic-bezier(.165, .84, .44, 1);
}
```

**Underlined CTAs**:
```css
.underlined-cta {
  transform: scaleX(0);
  transition: transform 0.6s cubic-bezier(.77, 0, .175, 1);
}

.underlined-cta:hover {
  transform: scaleX(1);
}
```

### Navigation Item Hover
**Multi-Element Coordination**:
- Label opacity: `0.5 → 1`, duration `0.6s`
- Arrow scale: `scaleX(0) → scaleX(1)`, duration `0.6s`
- Arrow opacity: `0 → 1`, delay `0.1s`
- Blur effect on non-hovered items: `0.4s` transition

**Staggered Anchor Delays**:
```
nth-child(1): 0.1s
nth-child(2): 0.185s
nth-child(3): 0.27s
nth-child(4): 0.355s
```

---

## 6. MOTION DESIGN PATTERNS

### Mask Animations
- **Gradient masks** with opacity transitions
- **Linear gradients** for fade effects on overflow content
- Applied to text elements for reveal effects

### Rotational Dynamics
- Navigation items enter with `30deg` rotation, settle to `0deg`
- Exit animations use `15deg` rotation for subtle motion
- Logo elements rotate on hover interaction

### Y-Axis Motion Language
- Elements enter from **above viewport** (`yPercent: -100%`)
- Exit animations push elements **upward** (`yPercent: -100%`)
- Consistent directional language throughout site

### Opacity Layering
- **Fade-in range**: `0` to `1` over `0.5s - 1s`
- **Hover states**: `0.5` (inactive) to `1` (active)
- **Blur states**: `0.5` opacity for non-focused elements

---

## 7. PERFORMANCE OPTIMIZATIONS

### Hardware Acceleration
```css
.js-scroll-content {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
```

### Requestanimationframe Loop
- Custom animation frame ticker
- Sleep/wake mechanism when no active animations
- Minimum delta threshold to prevent unnecessary renders

### Intersection Observer
- Used for video autoplay triggers
- `rootMargin: 500px` for preloading
- Lazy loading of video sources via `data-src`

---

## 8. FONT LOADING STRATEGY

**Loading Method**: Standard browser loading (no FOUT/FOIT prevention detected)

**Google Fonts**: Loaded via CSS `@font-face` with direct TrueType URLs

**Custom Font**: `suisseintl` loaded via main CSS bundle

**No visible**:
- Font subsetting
- Font display strategies (swap, fallback, optional)
- WOFF2 optimization (uses TTF format)

---

## 9. RESPONSIVE ANIMATION BEHAVIOR

### Mobile Simplifications
- Navigation animations disabled on mobile (`app.isMobile` check)
- No hover state animations on touch devices
- Simplified entrance/exit transitions

### Breakpoints
**Small**: `600px` - Typography shifts, navigation font size changes
**Large**: `1440px` - Maximum display text size caps

### Viewport-Based Scaling
- Fluid typography using `vw` units below `1440px`
- Fixed sizes above `1440px` for stability
- Maintains proportional scaling on all devices

---

## 10. KEY ANIMATION SEQUENCES

### Page Load Sequence
1. **Loading Screen** (0-2s): Progress counter animation with digit flips
2. **Content Reveal** (2-3s): Main content fades in, loading screen fades out
3. **Scroll Activation** (3s+): Smooth scroll engine activates

### Navigation Toggle Sequence
**Open Animation** (2.5s total):
1. Background fade in: `1s`
2. Inner background slide: `1.5s` (overlaps at `0s`)
3. Logo entrance: `1.3s` (starts at `0.8s`)
4. Menu items stagger: `1.2s` per item (starts at `1s`)
5. Login fade: `0.8s` (starts at `1s`)

**Close Animation** (1.9s total):
1. Background fade out: `1s` (starts at `0.3s`)
2. Inner background exit: `1.6s` (starts at `0.1s`)
3. Logo exit: `0.6s` (immediate)
4. Menu items stagger: `0.8s` per item (immediate, negative stagger)

### Scroll Interaction
1. User scrolls → Event captured
2. Target scroll position calculated
3. Current position interpolated toward target at 8% per frame
4. Transform applied: `translate3d(0, -${position}px, 0)`
5. Animation continues until delta < 0.001

---

## SUMMARY

**Typography Philosophy**:
- Fluid, viewport-responsive scaling on mobile/tablet
- Fixed, impactful sizing on desktop
- Extreme weight range (100-600) for hierarchy
- Generous spacing for readability

**Animation Philosophy**:
- GSAP-powered complex sequences
- Custom smooth scroll with spring physics
- Coordinated multi-element animations
- Performance-optimized with GPU acceleration
- Sophisticated easing for premium feel
- Staggered entrances for visual interest

**Performance**:
- Hardware-accelerated transforms
- Intersection observers for lazy loading
- Frame-based animation ticker with sleep states
- Minimal repaints through transform-only animations

**Responsive Strategy**:
- Mobile-first with progressive enhancement
- Hover interactions disabled on touch devices
- Fluid typography below 1440px breakpoint
- Animation complexity scales with device capability

---

**Analysis Complete**
**Total Easing Functions Identified**: 8 custom cubic-bezier + 3 GSAP named
**Animation Library**: GSAP (GreenSock) v3.x
**Scroll Engine**: Custom JavaScript with spring interpolation
**Font Weights**: 5 (100, 300, 400, 500, 600)
**Primary Animation Duration Range**: 0.3s - 1.7s
