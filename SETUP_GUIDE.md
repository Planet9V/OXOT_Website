# OXOT Website - Complete Setup Guide

## Overview

This is the complete OXOT.nl website featuring:
- **AEON Cyber Digital Twin** - Flagship simulation platform
- **Agent Red** - Autonomous offensive security testing
- **Agent Blue** - AI-powered defensive operations
- **Industry Simulations** - 16 CISA critical infrastructure sector simulations
- **Knowledge Hub** - 7 comprehensive articles on OT/ICS cybersecurity
- **Platform Features** - Professional landing sections

## Quick Start

### Prerequisites

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher
- **Git**: Latest version

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/Planet9V/OXOT_Website.git
cd OXOT_Website

# 2. Navigate to the React application
cd oxot-website

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser
# Navigate to http://localhost:5173
```

## Project Structure

```
OXOT_Website/
├── oxot-website/                 # Main React application
│   ├── src/
│   │   ├── components/           # Reusable React components
│   │   │   ├── Navigation.jsx    # Main navigation bar
│   │   │   └── ArticleCard.jsx   # Article display card
│   │   │
│   │   ├── pages/                # Page components
│   │   │   ├── HomePage.jsx      # Landing page with Platform Features
│   │   │   ├── AEONCyberTwinPage.jsx     # AEON flagship page
│   │   │   ├── AgentRedPage.jsx          # Agent Red page (RED accents only)
│   │   │   ├── ArticlesPage.jsx          # Articles hub
│   │   │   ├── ArticleDetailPage.jsx     # Individual article view
│   │   │   ├── SimulationHub.jsx         # 16 sector simulations hub
│   │   │   ├── SimulationDetail.jsx      # Individual simulation
│   │   │   └── IndustriesPage.jsx        # Industries overview
│   │   │
│   │   ├── data/                 # Content data files
│   │   │   ├── articlesData.js   # 7 comprehensive articles ⭐ NEW
│   │   │   └── simulationsData.js # 16 CISA sector simulations
│   │   │
│   │   ├── App.jsx               # Main app component with routing
│   │   └── main.jsx              # Application entry point
│   │
│   ├── public/                   # Static assets
│   ├── package.json              # Dependencies and scripts
│   └── vite.config.js            # Vite configuration
│
├── SETUP_GUIDE.md               # This file
├── ARTICLES_DOCUMENTATION.md    # Article system documentation ⭐ NEW
└── DEPLOYMENT_GUIDE.md          # Deployment instructions ⭐ NEW
```

## Available Scripts

### Development
```bash
npm run dev          # Start development server (http://localhost:5173)
```

### Production Build
```bash
npm run build        # Create production build in dist/
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

## Key Features

### 1. AEON Cyber Digital Twin
- **Location**: `/aeon-cyber-twin`
- **File**: `src/pages/AEONCyberTwinPage.jsx`
- **Features**:
  - Interactive visualization
  - Real-time autonomous framework execution
  - Professional animations and gradients
  - Technical deep-dive sections

### 2. Agent Red
- **Location**: `/agent-red`
- **File**: `src/pages/AgentRedPage.jsx`
- **Features**:
  - **ONLY page with RED color scheme** (all others use banking blue #154372)
  - Autonomous offensive security testing
  - Advanced animations and rollovers
  - Interactive capability cards

### 3. Agent Blue (NEW - Article)
- **Location**: `/articles/agent-blue-defensive-operations`
- **File**: `src/data/articlesData.js`
- **Features**:
  - Comprehensive 850+ line article
  - AI-powered defensive operations
  - Academic writing with AP citations
  - Real-world performance metrics

### 4. Articles System (NEW)
- **Location**: `/articles`
- **Files**:
  - `src/pages/ArticlesPage.jsx` (hub)
  - `src/pages/ArticleDetailPage.jsx` (individual)
  - `src/data/articlesData.js` (content)
- **Content**: 7 professional articles (see ARTICLES_DOCUMENTATION.md)

### 5. Simulations Hub
- **Location**: `/simulations`
- **Files**:
  - `src/pages/SimulationHub.jsx` (hub)
  - `src/pages/SimulationDetail.jsx` (individual)
  - `src/data/simulationsData.js` (16 CISA sectors)
- **Features**: Interactive sector simulations

### 6. Platform Features (HomePage)
- **Location**: `/`
- **File**: `src/pages/HomePage.jsx`
- **Features**:
  - Spectacular animated feature cards
  - Banking blue aesthetic (#154372)
  - Professional hover effects

## Design System

### Color Palette

**Primary Banking Blue**: `#154372`
- Used throughout entire site
- Gradients, accents, buttons, links
- **Exception**: Agent Red page uses red accents

**Additional Colors**:
```css
--color-brand-blue: #154372;        /* Primary brand color */
--color-dark-blue: #0a1f35;         /* Darker blue for depth */
--color-light-blue: #2563a8;        /* Lighter blue for highlights */
--color-accent-gold: #d4af37;       /* Gold accents (optional) */
--color-white: #ffffff;
--color-background: #f8fafc;
--color-text: #1e293b;
```

**Agent Red Exceptions**:
```css
/* ONLY in AgentRedPage.jsx and AgentRedPage.css */
--color-agent-red: #dc2626;         /* Primary red */
--color-agent-red-dark: #991b1b;    /* Dark red */
--color-agent-red-light: #f87171;   /* Light red */
```

### Typography

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Headings**:
- H1: 3rem (48px) - Bold
- H2: 2.25rem (36px) - Semibold
- H3: 1.875rem (30px) - Semibold
- H4: 1.5rem (24px) - Medium

**Body**: 1rem (16px) - Regular

### Animation Guidelines

- **Subtle, professional animations**
- Hover effects: 0.3s ease transitions
- Page loads: Fade-in animations
- Cards: Gentle lift on hover (translateY(-5px))
- No excessive or distracting animations

## Content Guidelines

### Articles

All articles follow this structure:
```javascript
{
  id: 'unique-kebab-case-id',
  title: 'Professional Title',
  category: 'Category Name',
  abstract: '1-2 sentence summary',
  audience: 'Target audience',
  keywords: ['keyword1', 'keyword2'],
  readTime: 'XX min read',
  date: 'YYYY-MM-DD',
  content: `# Markdown content with proper headers

  ## Academic writing
  - AP-style citations
  - References section at end
  `
}
```

See `ARTICLES_DOCUMENTATION.md` for detailed guidelines.

## Development Tips

### Adding New Articles

1. Edit `src/data/articlesData.js`
2. Add new article object to array
3. Follow existing structure and style
4. Include proper citations
5. Test display in ArticlesPage

### Adding New Pages

1. Create component in `src/pages/`
2. Create corresponding CSS file
3. Add route in `src/App.jsx`:
```javascript
<Route path="/your-page" element={<YourPage />} />
```
4. Add navigation link in `src/components/Navigation.jsx`

### Styling Best Practices

1. **Use banking blue** (#154372) for all pages except Agent Red
2. Maintain consistent spacing (1rem, 2rem, 3rem)
3. Responsive design: Mobile-first approach
4. Test on multiple screen sizes
5. Subtle animations only

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Failures
```bash
# Check for syntax errors
npm run lint

# Clear build cache
rm -rf dist/
npm run build
```

## Environment Variables

Currently no environment variables required. All configuration is in `vite.config.js`.

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 14+, Chrome Android latest

## Performance

- Target Lighthouse scores: 90+ in all categories
- Code splitting enabled (React lazy loading)
- Optimized images and assets
- Minimal bundle size

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA

## Next Steps

1. **Review Content**: Check all articles and pages
2. **Test Thoroughly**: All routes and features
3. **Deploy**: See `DEPLOYMENT_GUIDE.md`
4. **Monitor**: Set up analytics if needed

## Support & Contact

For issues or questions:
- Check existing documentation
- Review code comments
- Contact development team

## License

Proprietary - OXOT.nl © 2025

---

**Version**: 1.0.0
**Last Updated**: January 2025
**Branch**: claude/merged-to-main-01Rfip3G2vKiW1cYpTbd6kmR
