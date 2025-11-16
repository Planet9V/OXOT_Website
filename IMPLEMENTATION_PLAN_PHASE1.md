# OXOT Website Implementation - Phase 1 (REVISED)

**Updated:** November 16, 2025
**Based on:** Existing content discovery + simulation integration requirements

---

## Immediate Priorities (Week 1-2)

### 1. Navigation Fix (Day 1) - ICE 9.33
**Current Issue:** Banking menu (Institutional, Commercial, Mortgage)
**Fix:** Replace with OXOT services (Solutions, Services, Articles, Blind Spots, Simulations)

**New Navigation Structure:**
```
- Solutions
  ├── Breach Disclosure Mitigation
  ├── Digital Twin (CyberOperative)
  ├── Cyber Defender Program
  └── SOC-as-a-Service

- Services
  ├── IEC 62443 Compliance
  ├── TS 50701 Railway Security
  ├── Data Center Security (Tier III/IV)
  ├── Cyber Assurance & Testing
  ├── Crisis Management
  └── Supply Chain Assurance

- Industries (16 Sectors)
  ├── Energy & Utilities
  ├── Transportation (Railway focus)
  ├── Manufacturing
  ├── Water & Wastewater
  ├── Chemical
  ├── Healthcare
  ├── Financial Services
  ├── Defense Industrial Base
  ├── Communications
  ├── Food & Agriculture
  ├── Government Facilities
  ├── Dams
  ├── Emergency Services
  ├── Critical Manufacturing
  ├── Commercial Facilities
  └── Information Technology

- Knowledge Hub
  ├── Articles (40 planned + existing)
  ├── Blind Spots (8 existing + more)
  └── Research & Whitepapers

- Interactive
  ├── Simulations
  ├── SL-T Calculator
  ├── Zone Architect
  └── Risk Assessments

- About / Contact
```

---

### 2. Article Library UI (Days 2-4) - ICE 8.67

**Design Inspiration:** "Library of books" aesthetic

**Features:**
- **Grid Layout:** Card-based with article covers
- **Filters:**
  - Sector (Energy, Railway, Manufacturing, etc.)
  - Standard (IEC 62443, TS 50701, NERC CIP, etc.)
  - Topic (Risk Assessment, SL-T, Supply Chain, etc.)
  - Type (Technical Guide, Case Study, Blind Spot)
  - Reading Time (< 5 min, 5-10 min, 10-20 min, > 20 min)
- **Search:** Full-text search across titles, abstracts, content
- **Sort Options:**
  - Most Recent
  - Most Popular
  - Reading Time
  - Alphabetical
- **Visual Elements:**
  - Auto-generated article covers (gradient + icon + title)
  - Reading progress indicators
  - "New" badges for recent additions
  - Tags/chips for quick identification

**Data Structure:**
```javascript
// articleMetadata.js
export const articles = [
  {
    slug: "iec-62443-sl-t-blind-spot",
    title: "SL-T Requirements: The Security Level Blind Spot in Product Procurement",
    category: "Blind Spot",
    sector: ["Railway", "Manufacturing", "Energy"],
    standards: ["IEC 62443", "TS 50701"],
    readingTime: 12,
    publishDate: "2025-11-10",
    author: "OXOT Research Team",
    tags: ["SL-T", "Supply Chain", "Procurement", "Risk"],
    abstract: "Deep dive into how SL-T mismatches create supply chain vulnerabilities...",
    coverImage: "/images/articles/sl-t-blindspot.jpg", // or auto-generated
    featured: true,
    filePath: "content/supply-chain-sl-t-risks.md"
  },
  // ... more articles
];
```

**Components to Build:**
- `ArticleLibrary.jsx` - Main library page
- `ArticleCard.jsx` - Individual article card
- `ArticleFilters.jsx` - Filter sidebar/bar
- `ArticleSearch.jsx` - Search component
- `ArticlePage.jsx` - Individual article view with markdown rendering
- `RelatedArticles.jsx` - Recommendation engine

**Route:**
```jsx
<Route path="/articles" element={<ArticleLibrary />} />
<Route path="/articles/:slug" element={<ArticlePage />} />
```

---

### 3. Blind Spot Section (Days 4-5) - ICE 8.5

**Dedicated Section for Risk/Vulnerability Content**

**Existing Blind Spot Articles (8 found):**
1. Energy Cybersecurity Threats (30 Days)
2. Grid Vulnerability Analysis
3. Identity-Centric Security Paradigm
4. M&A Cybersecurity in Industrial Sectors
5. Manufacturing Cybersecurity Exploit Trends
6. Advanced Cyber Threats to Modern Energy (DER focus)
7. (2 more in content directory)

**Blind Spot Page Features:**
- **Risk Heatmap:** Interactive visualization of blind spots by sector
- **Urgency Indicators:** High/Medium/Low risk badges
- **Impact Metrics:** Potential cost of ignoring each blind spot
- **Solution Pathways:** Links to OXOT services that address each blind spot
- **Case Studies:** Real-world incidents that exploited these blind spots

**Visual Design:**
- Dark theme with red/orange accent (danger/warning aesthetic)
- Animated risk charts
- "What You're Missing" tagline
- Before/After scenarios

**Route:**
```jsx
<Route path="/blindspots" element={<BlindSpotLibrary />} />
<Route path="/blindspots/:slug" element={<BlindSpotArticle />} />
```

---

### 4. Simulation Integration Framework (Days 5-7)

**Hydroelectric Facility Simulation (Your Existing One)**

**Integration Approach:**

**Option A: iframe Embed** (if hosted on GitHub Pages)
```jsx
// SimulationPage.jsx
function HydroSimulation() {
  return (
    <div className="simulation-wrapper">
      <div className="simulation-header">
        <h1>Hydroelectric Facility - Interactive Simulation</h1>
        <p>Explore operational controls and cybersecurity implications</p>
      </div>

      <iframe
        src="https://[YOUR-GITHUB-USERNAME].github.io/hydro-sim"
        className="simulation-frame"
        title="Hydroelectric Facility Simulation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />

      <div className="simulation-info">
        <h3>Learning Objectives</h3>
        <ul>
          <li>Understand ICS component interactions</li>
          <li>Identify attack surfaces in SCADA systems</li>
          <li>Practice incident response scenarios</li>
        </ul>
      </div>
    </div>
  );
}
```

**Option B: Direct Integration** (copy files into project)
```bash
# Structure
oxot-website/
├── public/
│   └── simulations/
│       ├── hydroelectric/
│       │   ├── index.html
│       │   ├── simulation.js
│       │   ├── styles.css
│       │   └── assets/
│       └── [future-simulations]/
```

**Simulation Hub Page** (`/simulations`)
- Grid of available simulations
- Difficulty levels (Beginner, Intermediate, Advanced)
- Sector tags
- Completion tracking (if user accounts added later)

**Future Simulations:**
1. Hydroelectric Facility (existing - you'll provide URL)
2. Railway Signaling System (TS 50701 demo)
3. Power Grid SCADA (IEC 62443 zones)
4. Water Treatment Plant (SL-T demonstration)
5. Manufacturing Assembly Line (zone/conduit architecture)
6. Data Center Operations (Tier III security)

**Routes:**
```jsx
<Route path="/simulations" element={<SimulationHub />} />
<Route path="/simulations/hydroelectric" element={<HydroSimulation />} />
<Route path="/simulations/:simulationId" element={<SimulationPage />} />
```

---

### 5. Markdown Rendering System (Days 3-5)

**Parse and render 89 existing content files**

**Tech Stack:**
```bash
npm install react-markdown remark-gfm rehype-highlight gray-matter
npm install mermaid  # for diagrams
npm install react-syntax-highlighter  # code blocks
```

**Markdown Features to Support:**
- GitHub Flavored Markdown (GFM)
- Syntax highlighting for code
- Mermaid diagrams
- Tables
- Footnotes/citations (APA format)
- Math equations (if needed)
- Custom callout boxes (Info, Warning, Danger, Success)

**Article Renderer:**
```jsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function ArticlePage({ slug }) {
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    // Load markdown file
    fetch(`/content/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        const { data, content } = matter(text); // Parse frontmatter
        setMetadata(data);
        setContent(content);
      });
  }, [slug]);

  return (
    <article className="article-page">
      <header>
        <h1>{metadata.title}</h1>
        <div className="meta">
          <span>{metadata.author}</span>
          <span>{metadata.readingTime} min read</span>
          <span>{metadata.publishDate}</span>
        </div>
        <p className="abstract">{metadata.abstract}</p>
      </header>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>

      <footer>
        <RelatedArticles current={slug} />
        <SocialShare url={window.location.href} />
      </footer>
    </article>
  );
}
```

---

## GitHub Simulation Integration - Action Items

**Please provide:**

1. **GitHub Repository URL** for hydroelectric simulation
   - Example: `https://github.com/username/hydro-simulation`

2. **Is it already hosted?**
   - GitHub Pages URL: `https://username.github.io/hydro-simulation`
   - Or needs hosting setup?

3. **Technology used:**
   - Pure HTML/CSS/JS?
   - React?
   - D3.js/Three.js?
   - Any frameworks?

4. **Interactivity requirements:**
   - Do dials save state?
   - Multi-user? (probably not)
   - Data export needed?

5. **Any authentication/access control?**
   - Public access?
   - Gated (email capture)?

---

## Implementation Sequence

### **Week 1**
- ✅ Day 1: Fix navigation (banking → OXOT)
- ✅ Day 2-3: Build article library UI (filters, search, grid)
- ✅ Day 4: Build blind spot section
- ✅ Day 5: Set up markdown rendering system

### **Week 2**
- ✅ Day 6-7: Integrate hydroelectric simulation (pending your GitHub URL)
- ✅ Day 8: Create simulation hub page
- ✅ Day 9: Parse all 89 content files, generate metadata
- ✅ Day 10: Deploy and test

### **Week 3-4**
- Deep research on IEC 62443 (zones, conduits, SL-T, FRs)
- Deep research on TS 50701 (railway-specific)
- Write 5-part supply chain risk series
- Build interactive tools (SL calculator, zone architect)
- Add AI agent

---

## Visual Design System for New Pages

### Article/Blind Spot Library
**Inspiration:** Apple Books, Medium, Notion databases
- Clean grid with generous whitespace
- Card hover effects (lift + shadow)
- Tag chips with color coding by category
- Skeleton loading states
- Empty states ("No articles match your filters")

### Simulation Pages
**Inspiration:** Interactive educational platforms (Brilliant.org, Khan Academy)
- Full-screen simulation area
- Collapsible instruction panel
- Progress/completion indicators
- "Try it yourself" CTAs
- Related content sidebar

### Color Coding
- **IEC 62443:** Blue (#154372)
- **TS 50701:** Red (#c10230)
- **Blind Spots:** Orange/Red (#ff6b35)
- **Simulations:** Teal (#00FFD1)
- **General Articles:** Gray-Blue

---

## Data Structure Setup

### Article Frontmatter Standard
```yaml
---
title: "SL-T Requirements: The Security Level Blind Spot"
slug: "sl-t-requirements-blind-spot"
category: "Blind Spot"
sectors:
  - Railway
  - Manufacturing
  - Energy
standards:
  - IEC 62443
  - TS 50701
tags:
  - SL-T
  - Supply Chain
  - Procurement
publishDate: 2025-11-10
author: OXOT Research Team
readingTime: 12
featured: true
seoDescription: "Explore how SL-T mismatches in railway supply chains create operational risks..."
relatedArticles:
  - "supply-chain-handover-risks"
  - "iec-62443-implementation-guide"
---

# Article Content Here...
```

---

## Success Metrics

### User Engagement
- **Articles Page:** 3+ min avg session time
- **Blind Spots:** 60%+ click-through to services
- **Simulations:** 5+ min avg interaction time
- **Search Usage:** 20%+ of visitors use filters/search

### Content Performance
- **Top 5 Articles:** Track most viewed
- **Conversion Rate:** Article → Consultation request
- **Social Shares:** Track LinkedIn/Twitter shares
- **Backlinks:** Industry sites linking to articles

### Technical Performance
- **Page Load:** < 2 sec (even with markdown rendering)
- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)
- **Mobile Responsive:** Perfect on all screen sizes

---

## Next: Give Me the Simulation URL!

**Once you provide the hydroelectric simulation GitHub URL, I'll:**
1. Analyze its structure
2. Choose best integration method
3. Build the simulation page
4. Create the simulation hub
5. Add it to navigation

**Also, confirm:**
- Do you want iframe embed or full integration?
- Any other simulation URLs ready?
- Should simulations be publicly accessible or gated?

---

**Let's start implementing! Ready to proceed with Phase 1?**
