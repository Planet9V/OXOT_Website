# OXOT Menu System - Quick Reference Guide

## Three Menu Systems At A Glance

### 1. Upper Right Menu (Hamburger)
```
Location: /src/components/Navigation.jsx
Position: Top-right corner (fixed)
Trigger: Click hamburger icon
Action: Navigate to different pages
Style: Full-screen overlay
State: Boolean (open/closed)
```

### 2. Bottom Menu (Tabs)
```
Location: /src/components/BottomTabNavigation.jsx
Position: Bottom-center (absolute on hero)
Trigger: Click INSTITUTIONAL | COMMERCIAL | MORTGAGE
Action: Open 3-slide menu sequence
Style: 3 tab buttons with underline
State: String (institutional/commercial/mortgage)
```

### 3. Menu Overlay (3-Slide Sequence)
```
Location: /src/components/MenuSlideshow.jsx
Position: Full-screen overlay
Trigger: Bottom menu tab click
Action: Auto-advance through slides
Sequence: Slide 1 (2s) → Slide 2 (3s) → Slide 3 (manual)
Control: Up/Down buttons + Pagination dots
```

---

## File Locations

### Upper Right Menu
```
/src/components/Navigation.jsx
/src/components/Navigation.css
```

### Bottom Menu
```
/src/components/BottomTabNavigation.jsx
/src/components/BottomTabNavigation.css
```

### Menu System (3-Slide)
```
/src/components/MenuOverlay.jsx
/src/components/MenuSlideshow.jsx
/src/components/MenuSlide.jsx
/src/components/MenuSlideshow.css
/src/data/menuData.js
```

### Integration Points
```
/src/components/HeroCarousel.jsx (imports BottomTabNavigation & MenuOverlay)
/src/pages/HomePage.jsx (uses HeroCarousel)
/src/App.jsx (imports Navigation)
```

---

## The Bottom Menu → 3-Slide Sequence

### How It Works
1. User clicks "INSTITUTIONAL" tab in BottomTabNavigation
2. handleTabChange('institutional') fires
3. Sets: currentMenuSection = 'institutional', isMenuOpen = true
4. MenuOverlay component renders with menuData['institutional']
5. MenuSlideshow starts auto-advance sequence:
   - Slide 1: Title for 2 seconds
   - Slide 2: Description for 3 seconds
   - Slide 3: Services (manual control)
6. User can navigate with Up/Down buttons or dots
7. Click close or press Escape to exit

### Key Code (HeroCarousel.jsx)
```jsx
const handleTabChange = (tabId) => {
  setActiveTab(tabId);
  setCurrentMenuSection(tabId);    // ← Which menu section
  setIsMenuOpen(true);              // ← Open the overlay
};

// Conditional render of MenuOverlay
{isMenuOpen && currentMenuSection && (
  <MenuOverlay
    sectionId={currentMenuSection}
    isOpen={isMenuOpen}
    onClose={handleMenuClose}
  />
)}
```

---

## Auto-Advance Timing

**Slide 1 → Slide 2: 2000ms (2 seconds)**
```javascript
if (currentSlide === 1) {
  setTimeout(() => { goToSlide(2); }, 2000);
}
```

**Slide 2 → Slide 3: 3000ms (3 seconds)**
```javascript
else if (currentSlide === 2) {
  setTimeout(() => { goToSlide(3); }, 3000);
}
```

**Slide 3: No auto-advance (manual control only)**

---

## Menu Data Structure

Located in: `/src/data/menuData.js`

```javascript
menuData = {
  institutional: {
    title: "INSTITUTIONAL BANKING",
    description: "...",
    services: [5 items]
  },
  commercial: {
    title: "COMMERCIAL BANKING",
    description: "...",
    services: [6 items]
  },
  mortgage: {
    title: "MORTGAGE SERVICES",
    description: "...",
    services: [6 items]
  }
}
```

---

## The 3-Slide Slides

**Slide 1: TitleSlide**
- Component: MenuSlide.jsx (TitleSlide export)
- Content: Just the title (e.g., "INSTITUTIONAL BANKING")
- Duration: 2 seconds (then auto-advance)

**Slide 2: ContentSlide**
- Component: MenuSlide.jsx (ContentSlide export)
- Content: Description text
- Duration: 3 seconds (then auto-advance)

**Slide 3: ServicesSlide**
- Component: MenuSlide.jsx (ServicesSlide export)
- Content: All services as cards/list
- Duration: Indefinite (no auto-advance)

---

## Current Behavior Summary

### Upper Right Menu (Navigation.jsx)
- Opens full-screen overlay
- Shows 5 main navigation items
- Each item links to a page
- Does NOT use 3-slide system
- Completely independent

### Bottom Menu (BottomTabNavigation.jsx)
- Shows 3 tabs for service categories
- Each tab triggers the 3-slide menu
- Only appears on home page
- Actively uses MenuSlideshow system

### They Don't Talk To Each Other
**Important**: The upper right menu and bottom menu are NOT connected. They are completely separate implementations. The 3-slide sequence is ONLY accessible via the bottom menu tabs on the home page.

---

## To Make Upper Right Menu Use 3-Slides

You would need to:

1. Move MenuOverlay/MenuSlideshow out of HeroCarousel
   - Make them globally available
   - Use React Context or pass via App.jsx

2. Modify Navigation.jsx
   - Detect when service items are clicked
   - Call a function to open MenuOverlay instead of navigate
   - Pass the section ID (institutional/commercial/mortgage)

3. Example modification:
```jsx
// In Navigation.jsx, instead of:
<Link to={item.href}>{item.label}</Link>

// You'd do:
const handleServiceClick = (sectionId) => {
  // Trigger MenuOverlay with section
};

<button onClick={() => handleServiceClick('institutional')}>
  {item.label}
</button>
```

---

## Key Files To Know

| File | Purpose | Key Export |
|------|---------|-----------|
| Navigation.jsx | Upper right menu | Component |
| BottomTabNavigation.jsx | Bottom tabs | Component |
| MenuSlideshow.jsx | 3-slide orchestrator | Component (THE SEQUENCE) |
| MenuOverlay.jsx | Menu container | Wrapper component |
| MenuSlide.jsx | Individual slides | TitleSlide, ContentSlide, ServicesSlide |
| menuData.js | Menu content | menuData object + getMenuData() function |
| HeroCarousel.jsx | Integration point | Connects bottom menu to overlay |

---

## Testing The Systems

### Bottom Menu (Working)
1. Go to home page
2. See "INSTITUTIONAL | COMMERCIAL | MORTGAGE" tabs at bottom
3. Click any tab
4. Full-screen menu opens
5. Auto-advances through slides
6. Check timing: 2s pause, then 3s pause, then manual

### Upper Right Menu
1. See hamburger icon in top-right
2. Click to open
3. See 5 navigation items
4. Click any item to navigate to page
5. Menu closes

### They're Independent
- Clicking upper menu does NOT open 3-slide sequence
- Clicking bottom menu does NOT affect upper menu
- Both work, but separately

---

## Common Questions

**Q: How do I change the auto-advance timing?**
A: Edit MenuSlideshow.jsx lines 40-51 (startAutoAdvance function)

**Q: How do I add more services to a section?**
A: Edit menuData.js and add to the services array

**Q: How do I make upper right menu trigger the 3-slide menu?**
A: See "To Make Upper Right Menu Use 3-Slides" section above

**Q: Where does the menu content come from?**
A: All from menuData.js - it's a single source of truth

**Q: Can I disable auto-advance?**
A: Yes, modify startAutoAdvance() to not call setTimeout

---

## Component Props

### BottomTabNavigation
```jsx
<BottomTabNavigation 
  activeTab={string}        // Which tab is active
  onTabChange={function}    // Called when tab clicked
/>
```

### MenuOverlay
```jsx
<MenuOverlay 
  sectionId={string}        // 'institutional' | 'commercial' | 'mortgage'
  isOpen={boolean}          // Whether overlay is visible
  onClose={function}        // Called to close menu
/>
```

### MenuSlideshow
```jsx
<MenuSlideshow 
  data={object}             // menuData[sectionId]
  onClose={function}        // Called to close
  isOpen={boolean}          // Whether menu is visible
/>
```

---

## Animation Details

### Navigation Toggle (upper right)
- Easing: cubic-bezier(0.165, 0.84, 0.44, 1)
- Duration: 0.3s - 1s transitions
- Style: Icon fade + label slide

### Bottom Tabs
- Easing: cubic-bezier(0.165, 0.84, 0.44, 1) (SAME!)
- Duration: 0.3s
- Style: Underline scaleX animation

### Menu Slides
- Fade transition: 400ms
- Duration: 2s/3s/manual between slides
- Keyboard: Arrow keys to navigate

---

Generated: 2025-11-13
Status: Complete and Verified
