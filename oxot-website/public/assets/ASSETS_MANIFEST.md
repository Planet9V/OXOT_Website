# Nexbank Assets Manifest

**Downloaded**: 2025-11-12
**Source**: https://www.nexbank.com
**Total Files**: 20 assets

## Videos (7 files) ⚠️ NOT AVAILABLE
Located in: `/public/assets/video/`

| File | Status | Purpose |
|------|--------|---------|
| abstract-pattern-1.mp4 | ❌ Protected | Background animation pattern 1 |
| abstract-pattern-2.mp4 | ❌ Protected | Background animation pattern 2 |
| abstract-pattern-3.mp4 | ❌ Protected | Background animation pattern 3 |
| abstract-pattern-4.mp4 | ❌ Protected | Background animation pattern 4 |
| abstract-pattern-5.mp4 | ❌ Protected | Background animation pattern 5 |
| hero-background.mp4 | ❌ Protected | Hero section background video |
| nexweb-background.mp4 | ❌ Protected | NexWeb section background video |

**⚠️ CRITICAL**: Video files are not publicly accessible from nexbank.com (returns HTML error pages, not actual MP4 files).
**Action Required**:
- Create placeholder videos or
- Use alternative background animations (CSS/Canvas) or
- Contact nexbank.com for video access or
- Generate similar abstract pattern videos

## Fonts (8 files)
Located in: `/public/assets/fonts/`

| File | Size | Format | Weight | Style |
|------|------|--------|--------|-------|
| suisseintl-thin.woff2 | 24K | WOFF2 | 100 | normal |
| suisseintl-thin.woff | 30K | WOFF | 100 | normal |
| suisseintl-light.woff2 | 24K | WOFF2 | 300 | normal |
| suisseintl-light.woff | 30K | WOFF | 300 | normal |
| suisseintl-regular.woff2 | 23K | WOFF2 | 400 | normal |
| suisseintl-regular.woff | 30K | WOFF | 400 | normal |
| suisseintl-medium.woff2 | 24K | WOFF2 | 500 | normal |
| suisseintl-medium.woff | 31K | WOFF | 500 | normal |

**Font Family**: Suisse Intl
**Weights Available**: Thin (100), Light (300), Regular (400), Medium (500)

## Images (5 files)
Located in: `/public/assets/images/`

| File | Size | Purpose |
|------|------|---------|
| intro.jpg | 613K | Introduction/hero section image |
| ehl_logo.png | 358 bytes | EHL partner logo |
| apple-touch-icon.png | 4.4K | iOS touch icon |
| favicon-32x32.png | 1.8K | 32x32 favicon |
| favicon-16x16.png | 1.2K | 16x16 favicon |
| safari-pinned-tab.svg | 1.9K | Safari pinned tab icon |

## CSS Font Declaration
```css
@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-regular.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-regular.woff) format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-light.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-light.woff) format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-medium.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-medium.woff) format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: suisseintl;
  src: url(/assets/fonts/suisseintl-thin.woff2) format("woff2"),
       url(/assets/fonts/suisseintl-thin.woff) format("woff");
  font-weight: 100;
  font-style: normal;
}
```

## Usage in Code

### Video Usage
Videos are used in:
- Hero section: `hero-background.mp4`
- NexWeb section: `nexweb-background.mp4`
- Animation overlays: `abstract-pattern-[1-5].mp4`

### Font Usage
Primary font: Suisse Intl
- Body text: Regular (400)
- Headings: Medium (500)
- Light elements: Light (300)
- Minimal text: Thin (100)

### Image Usage
- Main hero: `intro.jpg`
- Partner logos: `ehl_logo.png`
- Icons/Favicons: Various favicon files

## Directory Structure
```
/public/assets/
├── video/
│   ├── abstract-pattern-1.mp4
│   ├── abstract-pattern-2.mp4
│   ├── abstract-pattern-3.mp4
│   ├── abstract-pattern-4.mp4
│   ├── abstract-pattern-5.mp4
│   ├── hero-background.mp4
│   └── nexweb-background.mp4
├── fonts/
│   ├── suisseintl-thin.woff2
│   ├── suisseintl-thin.woff
│   ├── suisseintl-light.woff2
│   ├── suisseintl-light.woff
│   ├── suisseintl-regular.woff2
│   ├── suisseintl-regular.woff
│   ├── suisseintl-medium.woff2
│   └── suisseintl-medium.woff
└── images/
    ├── intro.jpg
    ├── ehl_logo.png
    ├── apple-touch-icon.png
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    └── safari-pinned-tab.svg
```

## Notes
1. **Video Quality**: Current videos are 30K each (compressed). Consider requesting higher quality versions for production.
2. **Font License**: Suisse Intl is a commercial font. Verify licensing for production use or consider alternatives like Inter, Satoshi, or General Sans.
3. **Optimization**: Consider using modern formats (WebP for images, more aggressive video compression).
4. **Additional Assets**: May need to check for additional icons, graphics, or illustrations used throughout the site.

## Next Steps
- [ ] Verify all assets load correctly in development
- [ ] Check font licensing requirements
- [ ] Consider higher quality video sources
- [ ] Optimize images for web (WebP conversion)
- [ ] Add any missing icons or graphics
