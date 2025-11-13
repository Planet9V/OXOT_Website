# Quick Start Guide - Testing Your New Features

## 🚀 Your OXOT Website Now Has:

### 1. Three.js Animated Background
- **What it is**: Floating geometric shapes with smooth animations
- **Where**: Hero section background
- **Performance**: 60 FPS, GPU-accelerated

### 2. 3-Slide Menu System (NexBank Style)
- **What it is**: Click any bottom tab (INSTITUTIONAL | COMMERCIAL | MORTGAGE) to see:
  - **Slide 1**: Title screen (auto-advances after 2s)
  - **Slide 2**: Description (auto-advances after 3s)
  - **Slide 3**: Scrollable services list
- **Navigation**: Arrow buttons, ↑/↓ keys, or let it auto-play

---

## 📍 How to Test

### Step 1: Access the Site
```bash
# Site should be running at:
http://localhost:5173
```

### Step 2: Test Three.js Background
1. **Look at the hero section** - you should see floating geometric shapes
2. **Move your mouse** - subtle parallax effect
3. **Check performance** - should be smooth (60 FPS)

### Step 3: Test Menu System
1. **Click "INSTITUTIONAL"** bottom tab
2. **Watch the sequence**:
   - Slide 1: "INSTITUTIONAL BANKING" title appears
   - (waits 2 seconds)
   - Slide 2: Description slides in
   - (waits 3 seconds)
   - Slide 3: Services list appears (scrollable)
3. **Try navigation**:
   - Click arrow buttons (bottom-left)
   - Use keyboard: ↑ (prev) ↓ (next) ESC (close)
4. **Test other tabs**: Click "COMMERCIAL" and "MORTGAGE"

---

## 🔍 What to Look For

✅ **Three.js Background**:
- Geometric shapes (cubes, spheres, torus, etc.)
- Smooth rotation animations
- Dark background (#0f0f0f)
- No lag or stuttering

✅ **Menu Overlay**:
- Full-screen black overlay
- Smooth fade transitions
- Auto-advance timing (2s → 3s)
- Services list scrolling (Slide 3)

✅ **All Existing Features Still Work**:
- Carousel navigation (< > buttons)
- Pagination (01 / 03)
- Vertical "Online Banking Login" text
- All bottom tabs clickable

---

## 📊 Performance Expectations

| Feature | Expected Result |
|---------|-----------------|
| Page Load | < 2 seconds |
| Three.js FPS | 60 FPS (desktop), 30-45 FPS (mobile) |
| Menu Open | < 800ms smooth fade |
| Slide Transitions | < 1s (400ms fade-out + 600ms fade-in) |
| Scrolling (Slide 3) | Smooth, no lag |

---

## 🐛 If Something's Wrong

### Three.js Background Not Showing:
- Open browser console (F12)
- Look for WebGL errors
- Try refreshing the page (Ctrl+R)

### Menu Not Opening:
- Check browser console for errors
- Verify bottom tabs are clickable
- Try clicking different tabs

### Poor Performance:
- Check if hardware acceleration is enabled in browser
- Try reducing browser window size
- Check CPU/GPU usage

---

## 📸 Capture Screenshots

To document the implementation:

```bash
# From the project root:
node scripts/screenshot.js
```

Screenshots saved to: `/scripts/website-screenshot.png`

---

## 🎉 Success Criteria

You'll know it's working when:
- ✅ Background has animated geometric shapes
- ✅ Clicking tabs opens full-screen menu overlay
- ✅ 3-slide sequence plays automatically
- ✅ You can navigate with arrows or keyboard
- ✅ Services list scrolls smoothly
- ✅ Everything looks professional and polished

---

**Ready to test!** 🚀

Navigate to: http://localhost:5173
