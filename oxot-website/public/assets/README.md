# Assets Directory

Downloaded from: **https://www.nexbank.com**
Date: **2025-11-12**

## Quick Reference

### ✅ Available Assets (14 files, 864KB)

**Fonts** (8 files, 224KB) - `/assets/fonts/`
- Suisse Intl font family in WOFF2 and WOFF formats
- Weights: Thin (100), Light (300), Regular (400), Medium (500)

**Images** (6 files, 640KB) - `/assets/images/`
- Hero image: `intro.jpg` (613KB, 2880x1800px)
- Logo: `ehl_logo.png` (358 bytes)
- Favicons: Multiple sizes for all platforms

### ❌ Not Available (7 files)

**Videos** - `/assets/video/` (empty)
- Background videos are protected/not publicly accessible
- Need alternative solution (see documentation)

## Documentation

📄 **Complete Details**: See `/docs/nexbank-assets-download-summary.md`
📋 **Asset Manifest**: See `ASSETS_MANIFEST.md` in this directory

## Quick Integration

### Fonts
```css
@import url('/assets/fonts/suisseintl.css');
body { font-family: 'suisseintl', sans-serif; }
```

### Images
```html
<img src="/assets/images/intro.jpg" alt="Hero" />
<img src="/assets/images/ehl_logo.png" alt="EHL" />
```

### Favicons
```html
<link rel="icon" sizes="32x32" href="/assets/images/favicon-32x32.png" />
<link rel="icon" sizes="16x16" href="/assets/images/favicon-16x16.png" />
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
```

## Next Steps

1. ⚠️ **Font License**: Verify Suisse Intl licensing for production
2. 🎥 **Video Alternative**: Implement CSS animations or create placeholder videos
3. ✅ **Integration**: Add fonts and images to components
4. 📝 **Testing**: Verify all assets load correctly in development

---

**Status**: Fonts and images complete, videos require alternative solution
