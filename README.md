# OXOT.nl - OT/ICS Cybersecurity Platform

> **Professional website for OXOT - Operational Technology and Industrial Control Systems cybersecurity solutions**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

## 🎯 Overview

OXOT.nl is a comprehensive platform showcasing cutting-edge OT/ICS cybersecurity solutions for critical infrastructure protection. The website features interactive simulations, AI-powered security agents, and professional knowledge resources.

### ✨ Key Features

- 🤖 **AEON Cyber Digital Twin** - Advanced simulation platform for autonomous framework execution
- 🔴 **Agent Red** - Autonomous offensive security testing (red team automation)
- 🔵 **Agent Blue** - AI-powered defensive operations & autonomous SOC
- 📚 **Knowledge Hub** - 7 comprehensive articles on OT/ICS cybersecurity
- 🏭 **Industry Simulations** - 16 CISA critical infrastructure sector simulations
- 🎨 **Professional Design** - Banking blue aesthetic with subtle animations

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Planet9V/OXOT_Website.git
cd OXOT_Website/oxot-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Features](#features)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 📁 Project Structure

```
OXOT_Website/
├── oxot-website/                  # React application
│   ├── src/
│   │   ├── components/            # Reusable components
│   │   ├── pages/                 # Page components
│   │   ├── data/                  # Content data
│   │   │   ├── articlesData.js    # 7 articles ⭐
│   │   │   └── simulationsData.js # 16 simulations
│   │   └── App.jsx                # Main app
│   ├── public/                    # Static assets
│   └── package.json
├── SETUP_GUIDE.md                 # Complete setup guide
├── ARTICLES_DOCUMENTATION.md      # Articles system docs
├── DEPLOYMENT_GUIDE.md            # Deployment instructions
└── README.md                      # This file
```

## 📖 Documentation

| Document | Description |
|----------|-------------|
| **[SETUP_GUIDE.md](SETUP_GUIDE.md)** | Complete installation and configuration guide |
| **[ARTICLES_DOCUMENTATION.md](ARTICLES_DOCUMENTATION.md)** | Article system structure and writing guidelines |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Production deployment instructions |

## 🌟 Features

### AEON Cyber Digital Twin
**Path**: `/aeon-cyber-twin`

Advanced simulation platform featuring:
- Real-time autonomous framework execution
- Interactive visualizations
- Professional animations
- Technical deep-dive sections

### Agent Red
**Path**: `/agent-red`

Autonomous offensive security testing:
- **Only page with RED color scheme**
- Advanced capability cards
- Interactive animations
- Comprehensive feature breakdown

### Agent Blue (NEW)
**Path**: `/articles/agent-blue-defensive-operations`

AI-powered defensive operations:
- 850+ lines of comprehensive content
- Academic writing with AP citations
- Real-world performance metrics
- Implementation strategies

### Articles System
**Path**: `/articles`

7 professional articles covering:
1. IEC 62443-2-1 CSMS Implementation
2. IEC 62443-3-2 Risk Assessment
3. IEC 62443 Security Levels (SL-T, SL-C, SL-A)
4. Ransomware Readiness for Manufacturing
5. IACS Security in Energy Sector
6. Agent Blue: AI-Powered Defensive Operations ⭐
7. SBOM Imperative for OT Supply Chain ⭐

### Simulations Hub
**Path**: `/simulations`

16 CISA critical infrastructure sector simulations:
- Chemical
- Commercial Facilities
- Communications
- Critical Manufacturing
- Dams
- Defense Industrial Base
- Emergency Services
- Energy
- Financial Services
- Food & Agriculture
- Government Facilities
- Healthcare
- Information Technology
- Nuclear
- Transportation
- Water/Wastewater

## 💻 Development

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Create production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

### Design System

**Color Palette**:
- Primary: `#154372` (Banking Blue) - Used throughout site
- Exception: Agent Red page uses red (`#dc2626`)

**Typography**:
- Font Family: 'Inter', sans-serif
- Headings: Bold/Semibold
- Body: Regular 16px

**Animation Guidelines**:
- Subtle, professional animations only
- 0.3s ease transitions
- Gentle hover effects
- No excessive or distracting animations

### Code Style

- React functional components with hooks
- CSS modules for styling
- Semantic HTML5
- Accessible markup (ARIA labels where needed)
- Mobile-first responsive design

## 🚢 Deployment

The application can be deployed to:
- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ AWS S3 + CloudFront
- ✅ DigitalOcean App Platform
- ✅ Self-hosted (Nginx/Apache)

See **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** for detailed instructions.

### Quick Deploy to Vercel

```bash
npm install -g vercel
cd oxot-website
vercel
```

## 📊 Performance

Target Lighthouse Scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

Optimizations:
- Code splitting
- Lazy loading
- Optimized images
- Minimal bundle size
- Cache-friendly assets

## 🔒 Security

- HTTPS enforced
- Security headers configured
- No sensitive data in client-side code
- Regular dependency updates
- Security audits via `npm audit`

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 14+, Chrome Android latest

## 📈 Current Status

**Branch**: `claude/merged-to-main-01Rfip3G2vKiW1cYpTbd6kmR`

**Latest Features**:
- ✅ 7 comprehensive articles with academic citations
- ✅ Agent Blue and SBOM articles (850+ and 750+ lines)
- ✅ Complete documentation suite
- ✅ Ready for production deployment

**Statistics**:
- 25 files changed
- 13,825+ lines added
- 7 articles
- 16 simulations
- 5+ major pages

## 🤝 Contributing

This is a proprietary project. For internal contributions:

1. Create feature branch from main
2. Follow existing code style
3. Test thoroughly
4. Submit pull request
5. Await review

### Adding New Articles

See **[ARTICLES_DOCUMENTATION.md](ARTICLES_DOCUMENTATION.md)** for:
- Article structure
- Writing guidelines
- Citation format
- Quality checklist

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Navigation.jsx`
4. Follow design system
5. Test responsive design

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**:
```bash
lsof -ti:5173 | xargs kill -9
npm run dev -- --port 3000
```

**Dependencies Issues**:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build Failures**:
```bash
npm run lint        # Check for errors
rm -rf dist/        # Clear build cache
npm run build       # Rebuild
```

See **[SETUP_GUIDE.md](SETUP_GUIDE.md)** for more solutions.

## 📝 License

Proprietary - OXOT.nl © 2025. All rights reserved.

This is proprietary software. Unauthorized copying, modification, distribution, or use is strictly prohibited.

## 📧 Contact

For questions or support:
- Website: [oxot.nl](https://oxot.nl)
- Email: contact@oxot.nl

## 🙏 Acknowledgments

Built with:
- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Routing
- Modern web standards

---

## 📚 Additional Resources

- **Setup Guide**: Complete installation instructions
- **Articles Documentation**: Content management guide
- **Deployment Guide**: Production deployment steps
- **API Documentation**: (Coming soon)
- **Component Library**: (Coming soon)

---

**Version**: 1.0.0
**Last Updated**: January 2025
**Maintained By**: OXOT Development Team
**Branch**: claude/merged-to-main-01Rfip3G2vKiW1cYpTbd6kmR
