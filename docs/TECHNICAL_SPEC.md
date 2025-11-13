# Technical Specification
## OXOT.nl Professional Website

**Version:** 1.0
**Last Updated:** November 12, 2025
**Status:** Active Development

---

## Technology Stack

### Core Framework
- **React 18.3+**: UI library for component-based architecture
- **Vite 6+**: Build tool and development server
  - Fast HMR (Hot Module Replacement)
  - Optimized production builds
  - Modern ESM-based development

### Routing
- **React Router DOM v6+**: Client-side routing
  - Declarative route configuration
  - Nested routes support
  - Code splitting by route

### Animation Libraries
- **Framer Motion**: Advanced animations and interactions
  - Interactive visualizations
  - Scroll-triggered animations
  - Page transitions
  - Gesture handling

### Styling
- **CSS Modules / Standard CSS**: Component-scoped styling
  - Global design system variables
  - Consistent theming
  - No CSS-in-JS overhead

### Development Tools
- **ESLint**: Code quality and consistency
- **Vite Config**: Build optimization
- **Git**: Version control

---

## Project Structure

```
oxot-website/
├── public/
│   ├── vite.svg                    # Favicon and assets
│   └── [static assets]              # Images, videos, etc.
├── src/
│   ├── assets/                      # Images, icons, media
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── DigitalTwinVisualization.jsx
│   │   ├── DigitalTwinVisualization.css
│   │   ├── AIPenTestVisualization.jsx
│   │   └── AIPenTestVisualization.css
│   ├── pages/                       # Page components
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── SolutionsPage.jsx
│   │   ├── SolutionsPage.css
│   │   ├── ServicesPage.jsx
│   │   ├── ServicesPage.css
│   │   ├── IndustriesPage.jsx
│   │   ├── IndustriesPage.css
│   │   └── services/                # Service detail pages
│   │       ├── ServiceSubPage.css
│   │       ├── DigitalTwinPage.jsx
│   │       ├── AIPenTestingPage.jsx
│   │       ├── IEC62443Page.jsx
│   │       ├── ExpressBriefsPage.jsx
│   │       ├── PredictiveIntelligencePage.jsx
│   │       ├── SbomGbAnalysisPage.jsx
│   │       └── StrategicRoadmapPage.jsx
│   ├── App.jsx                      # Root application component
│   ├── main.jsx                     # Application entry point
│   └── global.css                   # Global styles and design system
├── content/                          # Content files (docs, PDFs, markdown)
│   └── [95 content files]
├── index.html                        # HTML template
├── package.json                      # Dependencies and scripts
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint rules
└── .gitignore                        # Git ignore patterns
```

---

## Architecture

### Component Hierarchy

```
App (Router)
├── Navbar (persistent)
└── Routes
    ├── HomePage
    │   ├── Hero Section (video background)
    │   ├── Mission Section
    │   └── Solutions Preview (4 cards with animations)
    ├── SolutionsPage
    │   └── Solution Blocks (4 detailed solutions)
    ├── ServicesPage
    │   ├── Service List
    │   └── Service Sub-Pages
    │       ├── DigitalTwinPage (with visualization)
    │       ├── AIPenTestingPage (with visualization)
    │       └── [Other service pages]
    └── IndustriesPage
        └── Industry Sections (Energy, Manufacturing, Water, Transportation)
```

### Data Flow
- **Static Content**: All content is static/hardcoded (no API calls)
- **No State Management**: Simple component-level state where needed
- **Route-Based**: Navigation handled by React Router
- **Props Flow**: Parent to child component communication

---

## Design System Implementation

### CSS Variables (global.css)

```css
:root {
  /* Colors */
  --primary-color: #0D0D0D;      /* Background */
  --secondary-color: #1A1A1A;    /* Accents */
  --accent-color: #00FFD1;       /* Cyan highlight */
  --text-color: #FFFFFF;         /* White text */
  --accent-hover: #aaffec;       /* Hover state */

  /* Typography */
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont,
                            "Segoe UI", Roboto, "Helvetica Neue",
                            Arial, sans-serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
                           "Liberation Mono", "Courier New", monospace;

  /* Spacing */
  --spacing-xs: 10px;
  --spacing-sm: 20px;
  --spacing-md: 40px;
  --spacing-lg: 60px;
  --spacing-xl: 80px;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.6s ease;
}
```

### Typography Scale
- **h1**: 48px-64px, monospace, accent color
- **h2**: 36px-48px, monospace, accent color
- **h3**: 28px-36px, monospace, accent color
- **h4**: 24px-28px, monospace, accent color
- **body**: 16px-18px, sans-serif, white
- **small**: 14px, sans-serif, white

### Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

---

## Key Features Implementation

### 1. Hero Section with Video Background

**Component**: `HomePage.jsx`
**Styling**: `HomePage.css`

```jsx
<div className="hero-section">
  <video autoPlay loop muted className="hero-video">
    <source src="[video-url]" type="video/mp4" />
  </video>
  <div className="hero-content">
    <h1>OXOT</h1>
    <p>Cybernetic Serenity, Delivered.</p>
  </div>
</div>
```

**Key CSS:**
- Absolute positioned video filling container
- Gradient overlay for text readability
- Centered content with flexbox
- Responsive font sizing

### 2. Scroll-Triggered Animations

**Implementation**: Intersection Observer API

```jsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  cardsRef.current.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => {
    // Cleanup
    cardsRef.current.forEach((card) => {
      if (card) observer.unobserve(card);
    });
  };
}, []);
```

**CSS Animation:**
```css
.solution-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.solution-card.fade-in {
  opacity: 1;
  transform: translateY(0);
}
```

### 3. Interactive Visualizations

**Digital Twin Visualization** (`DigitalTwinVisualization.jsx`)
- Framer Motion animated network diagram
- Connected nodes representing systems
- Pulsing animations for data flow
- Responsive canvas sizing
- Clean, professional aesthetic

**AI Penetration Testing Visualization** (`AIPenTestVisualization.jsx`)
- Animated security scanning interface
- Progressive attack surface visualization
- Visual feedback for testing phases
- Smooth transitions and effects

**Key Libraries:**
```javascript
import { motion } from 'framer-motion';

// Example usage
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  {/* Animated content */}
</motion.div>
```

### 4. Navigation System

**Component**: `Navbar.jsx`
**Features**:
- Fixed position on scroll
- Active route highlighting
- Smooth transitions
- Responsive layout
- Accessible keyboard navigation

**Implementation**:
```jsx
import { NavLink } from 'react-router-dom';

<nav className="navbar">
  <NavLink to="/" className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'
  }>
    Home
  </NavLink>
  {/* Other nav links */}
</nav>
```

---

## Performance Optimization

### Code Splitting
- **Route-based splitting**: Each page loads only when needed
- **Dynamic imports**: Heavy components loaded on demand
- **Lazy loading**: Images and videos loaded progressively

```javascript
// Route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
```

### Asset Optimization
- **Images**: Compressed, modern formats (WebP with fallbacks)
- **Videos**: Optimized bitrate, lazy loading
- **Fonts**: Subset loading, WOFF2 format
- **CSS**: Minified and tree-shaken in production

### Build Optimization (vite.config.js)
```javascript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion']
        }
      }
    },
    minify: 'terser',
    sourcemap: false // Production builds
  }
});
```

### Runtime Performance
- **Virtual scrolling**: For long lists (if implemented)
- **Debounced events**: Scroll and resize handlers
- **Intersection Observer**: Efficient scroll animations
- **requestAnimationFrame**: Smooth animations

---

## Accessibility Implementation

### Semantic HTML
```jsx
<main>
  <section aria-labelledby="mission-heading">
    <h2 id="mission-heading">Our Mission</h2>
    {/* Content */}
  </section>
</main>
```

### ARIA Attributes
- `aria-label`: Descriptive labels for interactive elements
- `aria-labelledby`: Section headings
- `aria-hidden`: Decorative elements
- `role`: Semantic roles where needed

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip navigation links

### Color Contrast
- Text/Background ratios > 4.5:1 (WCAG AA)
- Accent color meets contrast requirements
- Focus indicators have sufficient contrast

### Screen Reader Support
- Alt text for all images
- Descriptive link text
- Proper heading hierarchy
- Form labels (if implemented)

---

## Browser Support

### Target Browsers
- **Chrome**: 90+ (last 2 major versions)
- **Firefox**: 88+ (last 2 major versions)
- **Safari**: 14+ (last 2 major versions)
- **Edge**: 90+ (last 2 major versions)
- **Mobile Safari**: iOS 13+
- **Chrome Mobile**: Android 8+

### Polyfills and Fallbacks
- **Intersection Observer**: Native support in all target browsers
- **CSS Grid/Flexbox**: Native support
- **ES6+ Features**: Transpiled by Vite
- **Video Fallback**: Static image if video fails

---

## Testing Strategy

### Manual Testing
- **Cross-browser**: Test on all target browsers
- **Responsive**: Test on mobile, tablet, desktop
- **Accessibility**: Manual WCAG audit
- **Performance**: Lighthouse audits

### Automated Testing (Future)
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright or Cypress
- **Visual Regression**: Percy or Chromatic
- **Accessibility**: axe-core automated scans

### Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Animations trigger appropriately
- [ ] Responsive layouts on all breakpoints
- [ ] Images and videos load correctly
- [ ] Links navigate to correct pages
- [ ] Accessibility audit passes
- [ ] Performance metrics meet targets

---

## Deployment

### Build Process
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Build Output
```
dist/
├── index.html           # Entry point
├── assets/
│   ├── index-[hash].js  # Main bundle
│   ├── index-[hash].css # Styles
│   ├── [page]-[hash].js # Code-split chunks
│   └── [images/videos]  # Optimized assets
└── vite.svg             # Static assets
```

### Hosting Requirements
- **Static Hosting**: Any CDN or static host (Netlify, Vercel, AWS S3 + CloudFront)
- **HTTPS**: Required for security and performance features
- **Compression**: Gzip/Brotli enabled
- **Caching**: Aggressive caching for static assets
- **Fallback**: SPA routing (all routes → index.html)

### Deployment Configuration

**Netlify**: `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Vercel**: `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Environment Variables

### Development
```env
VITE_APP_TITLE=OXOT.nl
VITE_API_URL=http://localhost:3000 # If backend needed
```

### Production
```env
VITE_APP_TITLE=OXOT.nl
VITE_API_URL=https://api.oxot.nl # If backend needed
```

**Usage in Code:**
```javascript
const appTitle = import.meta.env.VITE_APP_TITLE;
```

---

## Security Considerations

### Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;
               video-src 'self' https:;">
```

### HTTPS Enforcement
- All production deployments use HTTPS
- Redirect HTTP to HTTPS
- HSTS headers enabled

### Dependency Security
- Regular `npm audit` checks
- Automated dependency updates
- No known vulnerabilities in production

---

## Monitoring and Analytics

### Performance Monitoring
- **Lighthouse CI**: Automated performance audits
- **Web Vitals**: Core Web Vitals tracking
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

### Error Tracking (Future)
- **Sentry**: Runtime error tracking
- **Console Logging**: Structured logging for debugging

### Analytics (Future)
- **Google Analytics 4**: User behavior tracking
- **Privacy-focused**: Respect user privacy
- **Cookie consent**: GDPR compliance

---

## Maintenance and Updates

### Regular Maintenance
- **Dependencies**: Update monthly
- **Security patches**: Apply immediately
- **Content updates**: As provided by OXOT
- **Performance audits**: Quarterly

### Version Control
- **Main branch**: Production-ready code
- **Feature branches**: Development and testing
- **Pull requests**: Code review process
- **Semantic versioning**: For releases

### Documentation Updates
- Keep technical spec current
- Document new features and changes
- Update README for setup instructions
- Maintain changelog

---

## Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Video Not Loading**
- Check video URL and format
- Verify CORS headers if external
- Ensure video is optimized (<10MB)

**Animations Not Working**
- Verify Framer Motion installation
- Check Intersection Observer support
- Inspect browser console for errors

**Routing Issues**
- Ensure server redirects all routes to index.html
- Check React Router configuration
- Verify NavLink active states

---

## Future Technical Enhancements

### Phase 2
- **CMS Integration**: Headless CMS for content management
- **Form Handling**: Contact forms with validation
- **SEO Optimization**: Dynamic meta tags, sitemap
- **Analytics**: User behavior tracking

### Phase 3
- **Backend API**: User authentication and portals
- **Database**: Content and user data storage
- **Advanced Features**: Search, filtering, personalization
- **PWA**: Progressive Web App capabilities

---

**Document Version:** 1.0
**Last Updated:** November 12, 2025
**Maintained By:** Development Team
**Status:** ACTIVE
