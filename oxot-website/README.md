# OXOT.nl Professional Website

Professional informational website for OXOT - a leading OT/ICS cybersecurity services organization specializing in critical infrastructure protection.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/react-18.3+-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/vite-6+-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-proprietary-red)

## Overview

OXOT.nl showcases comprehensive cybersecurity solutions for critical infrastructure across Energy, Manufacturing, Water Management, and Transportation sectors. The website features a modern, dark-themed design inspired by pwnk.digital, with vibrant cyan accents and smooth, engaging animations.

### Key Features

- ✨ Modern, dark-themed responsive design
- 🎬 Hero section with background video and animations
- 📊 Interactive visualizations for key services
- 🎯 Clear service and solution presentations
- 🏭 Industry-specific content sections
- ⚡ Fast performance and smooth transitions
- ♿ WCAG AA accessibility compliance
- 📱 Mobile-first responsive layout

## Technology Stack

- **Framework**: React 18.3+ with Vite 6+
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **Styling**: CSS Modules with CSS Variables
- **Build Tool**: Vite (Fast HMR, optimized builds)

## Project Structure

```
oxot-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── DigitalTwinVisualization.jsx
│   │   └── AIPenTestVisualization.jsx
│   ├── pages/          # Page components
│   │   ├── HomePage.jsx
│   │   ├── SolutionsPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── IndustriesPage.jsx
│   │   └── services/   # Service detail pages
│   ├── App.jsx         # Root component
│   ├── main.jsx        # Entry point
│   └── global.css      # Design system
├── content/            # Content files (95 documents)
└── docs/               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Planet9V/OXOT_Website.git
cd OXOT_Website-1/oxot-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:5173)
npm run dev
```

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Design System

### Color Palette

- **Primary Background**: `#0D0D0D` (Near-black)
- **Secondary Background**: `#1A1A1A` (Dark accent)
- **Accent Color**: `#00FFD1` (Vibrant cyan)
- **Text Color**: `#FFFFFF` (White)
- **Hover Accent**: `#aaffec` (Light cyan)

### Typography

- **Body**: System font stack (San Francisco, Segoe UI, Roboto)
- **Headings**: Monospace (SF Mono, Menlo, Monaco, Consolas)

### Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `1024px - 1440px`
- Large Desktop: `> 1440px`

## Pages and Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section, mission, solutions preview |
| `/solutions` | Solutions | 4 comprehensive solution offerings |
| `/services` | Services | 7 core service categories |
| `/industries` | Industries | Energy, Manufacturing, Water, Transportation |

## Key Components

### Navbar
Fixed navigation bar with active route highlighting and smooth transitions.

### Hero Section
Background video with overlay text and smooth animations.

### DigitalTwinVisualization
Interactive Framer Motion visualization of connected operational systems.

### AIPenTestVisualization
Animated security assessment and penetration testing interface.

### Solution Cards
Scroll-triggered fade-in animations using Intersection Observer.

## Performance Targets

- **Page Load**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Performance**: > 90
- **Accessibility**: WCAG AA compliant
- **Mobile Score**: > 95

## Browser Support

- Chrome 90+ (last 2 versions)
- Firefox 88+ (last 2 versions)
- Safari 14+ (last 2 versions)
- Edge 90+ (last 2 versions)
- Mobile Safari iOS 13+
- Chrome Mobile Android 8+

## Documentation

Comprehensive project documentation is available in the `/docs` directory:

- **[PROJECT_CONSTITUTION.md](../docs/PROJECT_CONSTITUTION.md)** - Project vision, values, and governance
- **[PRD.md](../docs/PRD.md)** - Product requirements and feature specifications
- **[TECHNICAL_SPEC.md](../docs/TECHNICAL_SPEC.md)** - Architecture, implementation details, and technical standards

## Deployment

### Build Output

```bash
npm run build
```

Generates optimized production build in `dist/` directory.

### Hosting

Suitable for any static hosting service:
- **Netlify**: Auto-deploy from Git with `netlify.toml`
- **Vercel**: Zero-config deployment
- **AWS S3 + CloudFront**: Scalable CDN hosting
- **GitHub Pages**: Simple static hosting

### Environment Configuration

Ensure all routes redirect to `index.html` for SPA routing.

**Netlify Example:**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Vercel Example:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Content Management

Content files (markdown, PDFs, documents) are stored in `/content` directory:
- Service descriptions and technical documentation
- Industry-specific content and case studies
- Reference materials and whitepapers

## Contributing

This is a proprietary project for OXOT.nl.

### Development Workflow

1. Create feature branch from `main`
2. Make changes with clear, descriptive commits
3. Test thoroughly (cross-browser, responsive, accessibility)
4. Submit pull request for review
5. Merge after approval

### Code Standards

- Follow existing code style and structure
- Use semantic HTML and accessible markup
- Maintain consistent component patterns
- Comment complex logic
- Keep components focused and reusable

## Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Video Not Loading

- Verify video URL and CORS headers
- Ensure video file size < 10MB
- Check browser console for errors

### Animation Issues

- Verify Framer Motion is installed
- Check Intersection Observer browser support
- Review browser console for React errors

## License

Proprietary - Copyright © 2025 OXOT. All rights reserved.

## Contact

For questions or support regarding this project:
- **Website**: [OXOT.nl](https://oxot.nl)
- **Repository**: [GitHub](https://github.com/Planet9V/OXOT_Website)

---

**Built with ⚡ by the OXOT Development Team**

*Cybernetic Serenity, Delivered.*
