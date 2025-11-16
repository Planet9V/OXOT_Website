# 🚀 Getting Started with OXOT Website

> **Your complete guide to running the OXOT.nl website in 5 minutes**

## ⚡ Super Quick Start

```bash
# 1. Clone and enter directory
git clone https://github.com/Planet9V/OXOT_Website.git
cd OXOT_Website/oxot-website

# 2. Install and run
npm install
npm run dev

# 3. Open browser
# Navigate to http://localhost:5173
```

**That's it!** 🎉 Your OXOT website is now running locally.

---

## 📚 What You Have

### Current Branch
**`claude/merged-to-main-01Rfip3G2vKiW1cYpTbd6kmR`**

This branch contains:
- ✅ Complete React application
- ✅ 7 professional articles (850+ and 750+ lines for newest)
- ✅ 16 CISA sector simulations
- ✅ AEON, Agent Red, and all major pages
- ✅ Full documentation suite

### Documentation Files

| File | What It Covers | When to Use |
|------|----------------|-------------|
| **[README.md](README.md)** | Project overview, quick reference | Start here for overview |
| **[SETUP_GUIDE.md](SETUP_GUIDE.md)** | Complete setup instructions | Setting up development |
| **[ARTICLES_DOCUMENTATION.md](ARTICLES_DOCUMENTATION.md)** | Article system guide | Adding/editing articles |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Deploy to production | Going live |
| **[CHANGELOG.md](CHANGELOG.md)** | Version history | See what changed |
| **THIS FILE** | Quick start guide | Getting started NOW |

---

## 🎯 What Can You Do Now?

### 1. View the Website Locally

```bash
cd oxot-website
npm run dev
```

**Visit these pages**:
- Home: http://localhost:5173/
- AEON: http://localhost:5173/aeon-cyber-twin
- Agent Red: http://localhost:5173/agent-red
- Articles: http://localhost:5173/articles
- Agent Blue Article: http://localhost:5173/articles/agent-blue-defensive-operations
- SBOM Article: http://localhost:5173/articles/sbom-imperative-ot-supply-chain
- Simulations: http://localhost:5173/simulations

### 2. Build for Production

```bash
npm run build
npm run preview
```

Creates optimized production build in `dist/` folder.

### 3. Deploy to Vercel (Easiest)

```bash
npm install -g vercel
cd oxot-website
vercel
```

Follow prompts. Site will be live in ~2 minutes.

---

## 📂 Key Files to Know

### Content Files (What You'll Edit Most)

```
oxot-website/src/data/
├── articlesData.js      ← Add/edit articles here
└── simulationsData.js   ← Add/edit simulations here
```

### Page Files

```
oxot-website/src/pages/
├── HomePage.jsx              ← Landing page
├── AEONCyberTwinPage.jsx    ← AEON page
├── AgentRedPage.jsx         ← Agent Red (ONLY red page)
├── ArticlesPage.jsx         ← Articles hub
├── ArticleDetailPage.jsx    ← Individual article view
├── SimulationHub.jsx        ← Simulations hub
└── SimulationDetail.jsx     ← Individual simulation
```

### Config Files

```
oxot-website/
├── vite.config.js           ← Build configuration
├── package.json             ← Dependencies and scripts
└── .env.production          ← Production env vars (create if needed)
```

---

## 🎨 Design System Quick Reference

### Colors

**Primary (Use Everywhere)**:
```css
--color-brand-blue: #154372   /* Banking blue */
```

**Exception**:
```css
/* ONLY in AgentRedPage.jsx */
--color-agent-red: #dc2626    /* Red accent */
```

### Typography

```css
font-family: 'Inter', sans-serif;

/* Sizes */
H1: 3rem (48px)
H2: 2.25rem (36px)
H3: 1.875rem (30px)
Body: 1rem (16px)
```

### Animations

```css
/* Standard hover */
transition: all 0.3s ease;
transform: translateY(-5px);
```

---

## ✍️ Adding a New Article

### Quick Method

1. **Edit file**:
   ```bash
   # Open in your editor
   oxot-website/src/data/articlesData.js
   ```

2. **Add at end of array** (before `];`):
   ```javascript
   {
     id: 'my-new-article',
     title: 'My Amazing Article Title',
     category: 'Platform Deep-Dive',
     abstract: 'Brief 1-2 sentence summary.',
     audience: 'Target audience description',
     keywords: ['keyword1', 'keyword2', 'keyword3'],
     readTime: '10 min read',
     date: '2025-01-XX',
     content: `# My Amazing Article Title

     ## Introduction
     Content goes here...

     ## Main Section
     More content...

     ## Conclusion
     Summary...

     ---

     ## References
     Author, A. (2025). "Title." *Source*.
     `
   }
   ```

3. **Save and view**:
   ```bash
   # Should auto-reload
   # Visit: http://localhost:5173/articles/my-new-article
   ```

**For detailed guidelines**, see [ARTICLES_DOCUMENTATION.md](ARTICLES_DOCUMENTATION.md).

---

## 🚢 Deploying to Production

### Option 1: Vercel (Recommended - 2 minutes)

```bash
npm install -g vercel
cd oxot-website
vercel
```

### Option 2: Netlify (5 minutes)

1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import from Git"
4. Select repository
5. Build settings:
   - Base directory: `oxot-website`
   - Build command: `npm run build`
   - Publish directory: `oxot-website/dist`
6. Deploy!

### Option 3: Self-Hosted (Advanced)

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for:
- AWS S3 + CloudFront
- DigitalOcean
- Custom VPS with Nginx

---

## 🔧 Common Tasks

### Update Dependencies

```bash
npm update
npm audit fix
```

### Check for Issues

```bash
npm run lint
```

### Clear and Rebuild

```bash
rm -rf node_modules package-lock.json dist/
npm install
npm run build
```

### Change Port

```bash
npm run dev -- --port 3000
```

---

## ❓ Troubleshooting

### Blank Page
1. Check browser console for errors
2. Verify all routes in App.jsx
3. Clear browser cache

### Port Conflict
```bash
lsof -ti:5173 | xargs kill -9
npm run dev
```

### Build Fails
```bash
npm run lint      # Check for errors
rm -rf dist/      # Clear cache
npm run build     # Rebuild
```

**More solutions**: [SETUP_GUIDE.md](SETUP_GUIDE.md#troubleshooting)

---

## 🎓 Learning Path

### Absolute Beginner
1. ✅ Run `npm run dev` (you're here!)
2. 📖 Read [README.md](README.md) - 5 min
3. 🔍 Browse the code in `src/pages/`
4. 🎨 Try changing colors in CSS files
5. ✍️ Add a test article

### Ready to Deploy
1. 📖 Read [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - 10 min
2. 🏗️ Run `npm run build`
3. 🚀 Deploy to Vercel
4. 🎉 Share your live site!

### Adding Content
1. 📖 Read [ARTICLES_DOCUMENTATION.md](ARTICLES_DOCUMENTATION.md) - 15 min
2. ✍️ Write new article following structure
3. 📝 Add to articlesData.js
4. ✅ Test locally
5. 🚀 Deploy

### Advanced Development
1. 📖 Read [SETUP_GUIDE.md](SETUP_GUIDE.md) - 20 min
2. 🏗️ Understand project structure
3. 🎨 Master design system
4. 🔧 Add new pages/features
5. 📊 Optimize performance

---

## 📊 What's Included

### Pages (5 Major + 3 Article Pages)
- ✅ HomePage with Platform Features
- ✅ AEON Cyber Digital Twin
- ✅ Agent Red (offensive testing)
- ✅ Simulations Hub (16 sectors)
- ✅ Industries Overview
- ✅ Articles Hub
- ✅ Article Detail View
- ✅ Simulation Detail View

### Articles (7 Total)
1. ✅ IEC 62443-2-1 CSMS Implementation
2. ✅ IEC 62443-3-2 Risk Assessment
3. ✅ IEC 62443 Security Levels
4. ✅ Ransomware Readiness for Manufacturing
5. ✅ IACS Security in Energy
6. ✅ **Agent Blue** - 850+ lines, AI defensive ops ⭐
7. ✅ **SBOM Imperative** - 750+ lines, supply chain security ⭐

### Simulations (16 CISA Sectors)
- ✅ All 16 critical infrastructure sectors
- ✅ Interactive cards with descriptions
- ✅ Detail pages for each sector

### Documentation (5 Files)
- ✅ README.md
- ✅ SETUP_GUIDE.md
- ✅ ARTICLES_DOCUMENTATION.md
- ✅ DEPLOYMENT_GUIDE.md
- ✅ CHANGELOG.md

---

## ✅ Quality Checklist

Your codebase includes:
- ✅ Professional design (banking blue aesthetic)
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Academic-quality articles with citations
- ✅ Optimized build process
- ✅ Security best practices
- ✅ SEO-friendly structure
- ✅ Accessible markup
- ✅ Complete documentation

---

## 🎯 Next Steps

### Right Now (5 minutes)
1. ✅ You ran `npm run dev`
2. ✅ Browse all pages locally
3. ✅ Read this document
4. ⏭️ **Next**: Read [README.md](README.md)

### Today (30 minutes)
1. ✅ Understand project structure
2. ✅ Review all 7 articles
3. ✅ Test all features
4. ⏭️ **Next**: Plan your deployment

### This Week
1. ✅ Customize content
2. ✅ Add your own articles
3. ✅ Deploy to production
4. ⏭️ **Next**: Share with team!

---

## 💡 Pro Tips

1. **Use Hot Reload**: Vite auto-reloads when you save files
2. **Test Mobile**: Resize browser to test responsive design
3. **Check Console**: Browser dev tools show errors
4. **Read Comments**: Code has helpful inline comments
5. **Start Small**: Modify existing content before adding new

---

## 📞 Need Help?

1. **Check docs first**:
   - [README.md](README.md) - Overview
   - [SETUP_GUIDE.md](SETUP_GUIDE.md) - Setup issues
   - [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deploy issues

2. **Check code**:
   - Look at existing components as examples
   - Read inline comments

3. **Common issues**:
   - Port conflict: Kill process on 5173
   - Blank page: Check browser console
   - Build fails: Run `npm run lint`

---

## 🎉 You're Ready!

You now have:
- ✅ Working local development environment
- ✅ Complete understanding of project structure
- ✅ Knowledge of where to add content
- ✅ Deployment options ready
- ✅ Full documentation at your fingertips

**Happy coding! 🚀**

---

**Version**: 1.0.0
**Branch**: claude/merged-to-main-01Rfip3G2vKiW1cYpTbd6kmR
**Last Updated**: January 2025
