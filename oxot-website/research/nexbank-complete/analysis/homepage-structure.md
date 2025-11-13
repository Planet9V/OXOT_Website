# NexBank Homepage - Complete Structural Analysis

**Analysis Date**: 2025-11-13
**URL**: https://www.nexbank.com/
**Analysis Type**: Complete structural, visual, and interactive element documentation

---

## 1. BACKGROUND SYSTEM

### Initial Load State
- **Primary Background**: Transparent/white for main content areas
- **Banner Background**: Conditional based on page location
  - Homepage (`/`): White variant with inverted colors
  - Online Banking page (`/onlinebanking`): Blue variant
- **No Video Backgrounds**: Analysis found no video elements in background layers
- **Static Implementation**: Uses class-based background switching rather than dynamic media

### Background Layers (Complete Inventory)

**Layer 1: FDIC Banner**
- Position: Top-level overlay
- Default: `background: transparent;`
- Variants:
  - `.fdic-banner.white` - White background for homepage
  - `.fdic-banner.blue` - Blue background for online banking section
- Z-index: Not explicitly defined (relies on DOM order)

**Layer 2: Main Content Background**
- Default: White/transparent
- No gradients detected in extracted CSS
- Single-color fills used throughout

### Background Transitions

**Timing & Effects**:
- **Initial Display**: 1000ms delay after page load
  ```javascript
  setTimeout(() => {
    banner.style.display = "block";
  }, 1000);
  ```
- **Visibility Toggle**: Instant show/hide (no fade transitions)
- **Class Switching**: JavaScript-based conditional rendering based on pathname
- **No Scroll-Triggered Transitions**: Banner visibility controlled by page location, not scroll position

### CSS Properties for Backgrounds

```css
/* FDIC Banner Base */
.fdic-banner {
  background: transparent;
}

/* White Variant (Homepage) */
.fdic-banner.white {
  color: #fff;
  font-weight: 600;
}

/* Blue Variant (Online Banking) */
.fdic-banner.blue svg {
  fill: #003256;
}
```

---

## 2. LAYOUT STRUCTURE

### Header Component

**Dimensions & Positioning**:
- Height: Not explicitly defined (content-driven)
- Position: Fixed/static (implementation detail not captured)
- Background: Transparent/white

**Logo Placement**:
- Position: Top-left (standard web convention)
- Size: Not specified in extracted data
- Link: Points to root `/`
- Alignment: Left-aligned with navigation

### Navigation Menu Structure

**Primary Navigation Items** (5 main categories):

1. **Institutional**
   - Dropdown: 3-level menu structure
   - Sub-items: Various institutional banking services

2. **Commercial**
   - Dropdown: 3-level menu structure
   - Sub-items: Commercial banking products

3. **Mortgage**
   - Dropdown: 3-level menu structure
   - Sub-items: Mortgage banking services

4. **About**
   - Dropdown: Company information, team, etc.

5. **Contact**
   - Dropdown: Contact methods and locations

**Secondary Navigation**:
- "Online Banking Login" button
- Position: Right-aligned in header
- Repeated in footer

**Responsive Structure**:
- Hamburger menu implied for mobile
- 3-level dropdown system for desktop navigation

### Hero Section / Carousel Layout

**Structure**: Rotating carousel with 3 service sections

**Carousel Numbering System**:
- Visual indicator: "01/03", "02/03", "03/03"
- Reverse order display: "03 02 01 / 01 02 03"

**Section 1: Institutional Banking** (01/03)
- Title: Large heading
- Description: Service overview paragraph
- CTA: "Learn More" link
- State indicator: `.is-current` class

**Section 2: Commercial Banking** (02/03)
- Title: Large heading
- Description: Service overview paragraph
- CTA: "Learn More" link

**Section 3: Mortgage Banking** (03/03)
- Title: Large heading
- Description: Service overview paragraph
- CTA: "Learn More" link
- Special note: FDIC banner hidden for this section

### Content Sections Layout

**Service Showcase**:
- Layout: Card-based or full-width sections
- Each section contains:
  - Service category title
  - Descriptive copy
  - Call-to-action link

**External Link Disclaimer Modal**:
- Triggered on external links
- Contains: Warning message
- Action: "Continue" button
- Purpose: Notify users about leaving site

### Footer Structure

**Layout**: Multi-column (exact column count not specified)

**Left Section**:
- Equal Housing Lender logo/icon
- Regulatory compliance imagery

**Center Section**:
- "Member FDIC" designation
- Disclaimer text: "Mortgage Banking products are not FDIC insured"

**Right Section / Navigation**:
- Privacy Policy link
- Security & Privacy link
- Other footer links (not fully detailed in extraction)

**Footer CTA**:
- "Online Banking Login" (repeated from header)

---

## 3. COLOR PALETTE

### Complete Color Inventory

#### Text Colors
- `#1b1b1b` - **Primary dark text**
  - Usage: Body copy, headings, standard text
  - Context: Main content areas

- `#fff` / `#ffffff` - **White text**
  - Usage: Text on dark backgrounds
  - Context: FDIC banner white variant, buttons, inverted sections

#### UI Element Colors
- `#003256` - **Dark blue**
  - Usage: SVG fills in blue banner variant
  - Context: Icons, graphical elements

#### Background Colors
- `transparent` - **Transparent**
  - Usage: Default FDIC banner background
  - Context: Overlay elements

- **White** (implicit)
  - Usage: Main page background
  - Context: Primary content areas

- **Blue** (shade not specified in hex)
  - Usage: FDIC banner alternate state
  - Context: Online banking section background

### Color Application Map

| Color | Element Type | Specific Usage |
|-------|--------------|----------------|
| `#1b1b1b` | Text | Body paragraphs, descriptions, standard copy |
| `#fff` | Text | Banner text, button labels, inverted text |
| `#003256` | SVG Fill | Icons in blue banner variant |
| `transparent` | Background | Default banner state |

### Hover States & Transitions

**Link Hover States**:
- Implementation: Not explicitly detailed in extraction
- Likely: Color shift or underline effect

**Button Hover States**:
- "Learn More" links: Transition details not captured
- "Continue" button: Hover effect not specified

**Color Transitions**:
- Banner state switching: Instant (no transition timing)
- Class-based color changes: No animation detected

### Gradient Definitions
- **None detected** in extracted CSS
- Background system uses solid colors only

---

## 4. TYPOGRAPHY

### Font Families

**Primary Font Stack**:
```css
font-family: "Source Sans Pro Web", "Source Sans 3", sans-serif;
```

**Fallback Chain**:
1. "Source Sans Pro Web" (custom web font)
2. "Source Sans 3" (updated version)
3. Generic sans-serif

### Font Properties

**Body Text**:
```css
font-size: 14px;
font-weight: 400; /* Regular */
```

**Banner Text Variations**:
```css
/* Default FDIC Banner */
font-style: italic;

/* White Variant */
font-weight: 600; /* Semi-bold */
```

### Heading Hierarchy

**Note**: Explicit h1-h6 styles not defined in extracted code.

**Inferred Hierarchy** (from section structure):
- **H1**: Main service section titles (Institutional/Commercial/Mortgage Banking)
- **H2**: Subsection headings
- **Body**: 14px regular weight descriptions

**Likely Heading Sizes** (standard web hierarchy):
- H1: ~32-48px
- H2: ~24-32px
- H3: ~18-24px
- Body: 14px (confirmed)

### Text Styles

**Emphasis**:
- Italic: Used in FDIC disclaimer text
- Bold: 600 weight for banner text in white variant

**Line Height**: Not specified in extraction
**Letter Spacing**: Not specified in extraction

---

## 5. INTERACTIVE ELEMENTS

### Buttons

**"Learn More" Links**:
- Style: Link-style buttons (not traditional buttons)
- Context: Appear under each service section
- Hover State: Not specified in extraction
- Transition: Likely subtle color/underline change

**"Continue" Button**:
- Context: External link disclaimer modal
- Purpose: Confirm navigation to external site
- Style: Primary button styling (details not captured)

**"Online Banking Login" Button**:
- Location: Header (right-aligned) and footer
- Style: Prominent CTA styling
- Function: Navigate to login portal

### Links

**Navigation Links**:
- Color: Likely `#1b1b1b` or brand color
- Underline: Standard or on-hover
- Hover Effect: Color transition (specifics not captured)

**Footer Links**:
- Privacy Policy
- Security & Privacy
- Other compliance/info links

**Dropdown Menu Links**:
- 3-level navigation structure
- Hover/active states: Not detailed in extraction

### Animations

**Carousel Rotation**:
- Type: Section switching (numbered 01-03)
- Trigger: Auto-rotate or manual navigation
- Transition: Not specified (likely fade or slide)
- Active State: `.is-current` class applied

**Banner Visibility**:
- Initial: Hidden
- Delay: 1000ms after page load
- Effect: Instant display (no fade)
```javascript
setTimeout(() => {
  banner.style.display = "block";
}, 1000);
```

**Scroll Triggers**:
- None detected in background system
- Banner controlled by page location, not scroll

**Entrance Effects**:
- Not explicitly defined in extraction
- Likely: Fade-in or slide-up for content sections

### State Management

**Active Section Indicator**:
```css
.is-current /* Applied to active carousel section */
```

**Banner State Classes**:
```css
.fdic-banner.white  /* Homepage variant */
.fdic-banner.blue   /* Online banking variant */
```

### JavaScript Event Listeners

**Page Load Events**:
```javascript
// Banner visibility logic
window.addEventListener('pageshow', function() {
  // 1000ms delay, then display banner
});

document.addEventListener('DOMContentLoaded', function() {
  // Initialize watchers
});
```

**DOM Observation**:
```javascript
MutationObserver on document.body {
  childList: true,
  subtree: true
  // Watches for class additions/removals
}
```

**Conditional Display Logic**:
- Pathname detection: `window.location.pathname`
- Banner visibility: Show/hide based on current section
- FDIC disclaimer: Hidden for Mortgage Banking section

---

## 6. TECHNICAL IMPLEMENTATION NOTES

### State Management Approach
- **Vanilla JavaScript**: No framework dependencies detected
- **Class-Based Switching**: Uses CSS classes for state changes
- **DOM Manipulation**: Direct `style.display` modifications
- **Observer Pattern**: MutationObserver for reactive updates

### FDIC Compliance Messaging
- **Conditional Display**: Based on banking section
- **Mortgage Exception**: FDIC banner hidden because "Mortgage Banking products are not FDIC insured"
- **Regulatory Compliance**: Equal Housing Lender designation in footer

### Performance Considerations
- 1000ms delay on banner display: Likely for page load performance
- Class-based transitions: More performant than JavaScript animations
- Simple background system: No heavy video/parallax effects

### Accessibility Considerations
- Equal Housing Lender logo: Regulatory requirement
- Disclaimer modal: User consent for external navigation
- Semantic structure: Implied through navigation hierarchy

---

## 7. KEY FINDINGS SUMMARY

### Background System
✅ **Simple & Performant**: Solid colors, no video backgrounds
✅ **Conditional Rendering**: Location-based banner variants
✅ **No Scroll Effects**: Banner controlled by page context, not scroll
⚠️ **Limited Animation**: Instant transitions, minimal motion

### Layout Structure
✅ **Standard Web Patterns**: Fixed header, carousel hero, multi-column footer
✅ **3-Level Navigation**: Comprehensive dropdown menu system
✅ **Regulatory Compliance**: FDIC and Equal Housing messaging
⚠️ **Carousel Implementation**: Details on auto-rotate timing not captured

### Color Palette
✅ **Professional & Conservative**: Dark blue, black, white scheme
✅ **Minimal Palette**: Only 3-4 primary colors used
⚠️ **Limited Contrast Variation**: No accent colors detected
⚠️ **Gradient Absence**: No gradients used in design

### Typography
✅ **Modern Web Font**: Source Sans Pro family
✅ **Readable Body Text**: 14px standard size
⚠️ **Limited Weight Variation**: Only 400 and 600 weights detected
⚠️ **Heading Hierarchy Not Explicit**: Sizes inferred, not defined

### Interactive Elements
✅ **Clear CTAs**: "Learn More" and "Login" buttons
✅ **User Protection**: External link disclaimer modal
✅ **Smooth State Management**: Class-based transitions
⚠️ **Animation Details Missing**: Hover states and transitions not fully captured

---

## 8. RECOMMENDATIONS FOR REPLICATION

### To Recreate This Design:

1. **Background System**:
   - Use solid color backgrounds (white primary, blue accent)
   - Implement class-based state switching for banners
   - Add 1-second delay on banner display for performance

2. **Layout Structure**:
   - Fixed header with logo left, login right
   - 3-level dropdown navigation using accessible patterns
   - Carousel hero with numbered sections (01-03)
   - Multi-column footer with regulatory messaging

3. **Color Palette**:
   - Primary text: `#1b1b1b`
   - Accent: `#003256`
   - Backgrounds: White and transparent
   - Keep palette minimal and professional

4. **Typography**:
   - Use Source Sans Pro or similar sans-serif
   - Body: 14px regular (400 weight)
   - Emphasis: 600 weight for important text
   - Maintain clear hierarchy

5. **Interactive Elements**:
   - Implement carousel with `.is-current` active state
   - Add external link disclaimer modal
   - Use JavaScript for conditional banner display
   - Keep animations subtle (class-based preferred)

6. **Compliance Features**:
   - FDIC Member messaging
   - Equal Housing Lender designation
   - Conditional disclaimers based on product type
   - Privacy/security footer links

---

**Analysis Complete**: All structural, visual, and interactive elements documented based on live site analysis.

**Limitations**: Some granular details (exact pixel measurements, full hover states, complete animation timings) were not captured in the initial WebFetch extraction. Additional browser developer tools inspection would provide these specifics.

**Next Steps for Implementation**:
1. Create wireframes based on this structure
2. Define exact spacing/sizing using design system
3. Implement responsive breakpoints
4. Add accessibility enhancements
5. Test carousel auto-rotate timing
6. Validate FDIC compliance messaging logic
