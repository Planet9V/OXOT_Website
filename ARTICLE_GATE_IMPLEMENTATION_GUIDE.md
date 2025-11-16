# ArticleGate Implementation Guide
## Step-by-Step Integration for ArticlesPage.jsx

**Target:** Implement lead capture gating system for OXOT ArticlesPage
**Complexity:** Medium (requires React routing, state management, form handling)
**Estimated Time:** 4-6 hours for full implementation

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [Step 1: Create Article Detail Pages](#step-1-create-article-detail-pages)
4. [Step 2: Update ArticlesPage.jsx](#step-2-update-articlespagejsx)
5. [Step 3: Configure Routing](#step-3-configure-routing)
6. [Step 4: Implement Analytics Tracking](#step-4-implement-analytics-tracking)
7. [Step 5: CRM Integration](#step-5-crm-integration)
8. [Step 6: Testing Checklist](#step-6-testing-checklist)
9. [Advanced Features](#advanced-features)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     ArticlesPage.jsx                        │
│  • Lists all 30 articles                                    │
│  • Category filtering                                       │
│  • Links to individual article detail pages                │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Click article
                   ↓
┌─────────────────────────────────────────────────────────────┐
│              ArticleDetailPage.jsx (NEW)                    │
│  • Renders article content                                 │
│  • Integrates ArticleGate component                        │
│  • Passes gating configuration                             │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Contains
                   ↓
┌─────────────────────────────────────────────────────────────┐
│                 ArticleGate.jsx                             │
│  • Preview content (first 200-300 words)                   │
│  • Lead capture form                                        │
│  • Full content reveal after submission                    │
│  • Thank you state                                          │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
oxot-website/
├── src/
│   ├── components/
│   │   ├── ArticleGate.jsx          ✅ CREATED
│   │   └── ArticleGate.css          ✅ CREATED
│   ├── pages/
│   │   ├── ArticlesPage.jsx         📝 UPDATE (add routing)
│   │   ├── ArticlesPage.css         ✅ EXISTS
│   │   └── ArticleDetailPage.jsx    🆕 CREATE
│   ├── content/                     ✅ EXISTS (markdown files)
│   └── App.js                       📝 UPDATE (add routes)
└── public/
    └── articles/                    🆕 CREATE (optional: for static HTML)
```

---

## Step 1: Create Article Detail Pages

### Option A: Dynamic Article Rendering (Recommended)

Create `/home/user/OXOT_Website/oxot-website/src/pages/ArticleDetailPage.jsx`:

```jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleGate from '../components/ArticleGate';
import './ArticleDetailPage.css';

/**
 * ArticleDetailPage - Individual article view with gating
 *
 * Renders article content with appropriate gating strategy:
 * - Hard gate: Premium content (full form required)
 * - Soft gate: Mid-tier content (simplified form)
 * - Ungated: SEO/awareness content (no gate)
 */

const ArticleDetailPage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // Article catalog with gating configuration
  const articlesCatalog = {
    // HARD GATED ARTICLES (Tier 1A & 1B)
    'death-wobble': {
      id: 'death-wobble',
      category: 'Grid Stability',
      title: 'The Death Wobble: Grid Frequency Instability in the Renewable Energy Transition',
      author: 'Jim McKenney',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Technical analysis of how declining grid inertia from inverter-based resources creates dangerous Rate of Change of Frequency (RoCoF) threatening cascading failures.',
      tags: ['Grid Stability', 'RoCoF', 'IBR', 'Energy'],
      featured: true,
      gateType: 'hard',
      contentPath: '/content/Death Wobble - The Grid\'s Precarious Pulse Frequency Instability-j.mckenney.md'
    },
    'iec-62443-requirements': {
      id: 'iec-62443-requirements',
      category: 'IEC 62443',
      title: 'The 82 Requirements That Matter: Complete Technical Guide to IEC 62443 Security Levels',
      author: 'OXOT Standards Team',
      date: '2024',
      readTime: '15 min',
      excerpt: 'Comprehensive breakdown of all 82 security requirements across 7 Foundational Requirements with practical implementation guidance.',
      tags: ['IEC 62443', 'Security Levels', 'Standards'],
      featured: true,
      gateType: 'hard',
      contentPath: '/content/IEC-62443_Complete-Technical-Reference.md'
    },
    'resilient-grid': {
      id: 'resilient-grid',
      category: 'Ransomware',
      title: 'The Resilient Grid: A Ransomware Readiness Framework for the Energy Sector',
      author: 'OXOT Crisis Management Team',
      date: '2024',
      readTime: '13 min',
      excerpt: 'Comprehensive methodology combining IEC 62443, CISA CSET RRA, and mediated workshops for converged IT/OT ransomware defenses.',
      tags: ['Ransomware', 'Energy Sector', 'CSET RRA'],
      featured: true,
      gateType: 'hard',
      contentPath: '/content/RRA_The Resilient Grid_ A Ransomware Readiness Framework for the Energy Sector.md'
    },
    'ma-due-diligence': {
      id: 'ma-due-diligence',
      category: 'M&A',
      title: 'The Cyber-Physical Balance Sheet: OT Due Diligence in Industrial M&A',
      author: 'OXOT M&A Advisory',
      date: '2024',
      readTime: '14 min',
      excerpt: 'Comprehensive framework for conducting OT cybersecurity due diligence during manufacturing/energy acquisitions.',
      tags: ['M&A', 'Due Diligence', 'OT Risk'],
      gateType: 'hard',
      contentPath: '/content/M&A_Cybersecurity in Industrial M&A.md'
    },
    'quantifying-invisible': {
      id: 'quantifying-invisible',
      category: 'M&A',
      title: 'Quantifying the Invisible: Financial Modeling of OT Cyber Risk',
      author: 'OXOT M&A Advisory',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Methodology for calculating Annual Loss Expectancy (ALE) and remediation costs for OT vulnerabilities.',
      tags: ['Risk Quantification', 'ALE', 'FAIR Framework'],
      gateType: 'hard',
      contentPath: '/content/M&A Cybersecurity Due Diligence_.md'
    },
    'operators-playbook': {
      id: 'operators-playbook',
      category: 'IEC 62443',
      title: 'From SL-T to SL-A: The Operator\'s Lifecycle Approach to IACS Cybersecurity',
      author: 'OXOT Standards Team',
      date: '2024',
      readTime: '14 min',
      excerpt: 'End-to-end playbook for operators implementing IEC 62443 from acquisition through decommissioning.',
      tags: ['IACS Lifecycle', 'Operator Guidance', 'CSMS'],
      gateType: 'hard',
      contentPath: '/content/Playbook_The Operator\'s Playbook_ A Lifecycle Approach to IACS Cybersecurity with IEC 62443.md'
    },
    'safety-security': {
      id: 'safety-security',
      category: 'IEC 62443',
      title: 'Bridging Safety and Security: Integrated Risk Assessment for SIS and SCADA',
      author: 'OXOT Engineering Team',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Methodology for unified safety/security risk assessment combining IEC 61508/61511 with IEC 62443.',
      tags: ['Safety Systems', 'SIS', 'Integrated Risk'],
      gateType: 'hard',
      contentPath: '/content/IEC-62443_Complete-Guide.md'
    },
    'ot-incident-response': {
      id: 'ot-incident-response',
      category: 'Incident Response',
      title: 'Time to Safe Operations: OT-Specific Incident Response Playbooks',
      author: 'OXOT Crisis Management Team',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Framework for building OT incident response plans that prioritize safety and availability over forensics.',
      tags: ['Incident Response', 'OT Safety', 'IR Playbooks'],
      gateType: 'hard',
      contentPath: '/content/RRA_Ransomware Readiness Framework for Industry.md'
    },
    'federated-security': {
      id: 'federated-security',
      category: 'M&A',
      title: 'Federated OT Security: Post-Merger Integration Without Operational Chaos',
      author: 'OXOT M&A Advisory',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Strategic roadmap for integrating acquired OT environments without production disruption.',
      tags: ['Post-Merger Integration', 'Federated Governance', 'Zero Trust'],
      gateType: 'hard',
      contentPath: '/content/M&A_Cybersecurity in Energy Framework.md'
    },
    'maturity-curve': {
      id: 'maturity-curve',
      category: 'Organizational',
      title: 'From Compliance to Resilience: The Maturity Curve for OT Cybersecurity Programs',
      author: 'OXOT Leadership',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Strategic roadmap for evolving from reactive compliance to proactive resilience using IEC 62443-2-1 CSMS.',
      tags: ['Security Maturity', 'CSMS', 'Continuous Improvement'],
      gateType: 'hard',
      contentPath: '/content/IEC-62443_Template-CSMS.md'
    },

    // SOFT GATED ARTICLES (Tier 2A & 2B)
    'scattered-spider': {
      id: 'scattered-spider',
      category: 'Threat Intelligence',
      title: 'Living Off the Land: How Scattered Spider Weaponizes Your Own Tools',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Deep technical analysis of Scattered Spider\'s tactics: help desk social engineering, RMM tool abuse, MFA fatigue.',
      tags: ['Scattered Spider', 'LotL', 'Social Engineering'],
      gateType: 'soft',
      contentPath: null // Placeholder - create content
    },
    'raas-economy': {
      id: 'raas-economy',
      category: 'Threat Intelligence',
      title: 'The RaaS Economy: Why Takedowns Fail and What Actually Works',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Economic analysis of the Ransomware-as-a-Service business model and lessons from successful disruptions.',
      tags: ['RaaS', 'Ransomware Economy', 'Law Enforcement'],
      gateType: 'soft',
      contentPath: '/content/Evolving Ransomware-as-a-Service Ecosystem_.md'
    },
    'sandworm-evolution': {
      id: 'sandworm-evolution',
      category: 'Threat Intelligence',
      title: 'Sandworm\'s Evolution: From BlackEnergy to Living Off the Land',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '13 min',
      excerpt: 'Chronological analysis of Russian APT Sandworm\'s tactical evolution from 2015 to modern LOTL techniques.',
      tags: ['Sandworm', 'APT', 'Russia'],
      gateType: 'soft',
      contentPath: '/content/ICS Cyber Threats and Geopolitics.md'
    },
    'resilient-factory': {
      id: 'resilient-factory',
      category: 'Ransomware',
      title: 'The Resilient Factory: Manufacturing-Specific Ransomware Defense',
      author: 'OXOT Crisis Management Team',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Tailored ransomware readiness framework addressing manufacturing\'s unique challenges and production continuity requirements.',
      tags: ['Ransomware', 'Manufacturing', 'Production Resilience'],
      gateType: 'soft',
      contentPath: '/content/RRA_The Resilient Factory_ A Ransomware Readiness Framework for the Manufacturing Sector.md'
    },

    // UNGATED ARTICLES (Tier 3A & 3B)
    'black-start': {
      id: 'black-start',
      category: 'Grid Stability',
      title: 'Black Start in a Renewable World: The Hidden Vulnerability of Grid Recovery',
      author: 'OXOT Research Team',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Examination of the critical gap in black start capability as fossil fuel plants retire, creating existential recovery risks for modern grids.',
      tags: ['Black Start', 'Grid Recovery', 'Renewable Energy'],
      gateType: 'ungated',
      contentPath: null // Placeholder
    },
    'zones-conduits': {
      id: 'zones-conduits',
      category: 'IEC 62443',
      title: 'Zones and Conduits: Network Segmentation as the First Line of OT Defense',
      author: 'OXOT Engineering Team',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Practical guide to implementing IEC 62443 zones and conduits architecture for defense-in-depth with sector-specific examples.',
      tags: ['Network Segmentation', 'ZCR', 'Defense-in-Depth'],
      gateType: 'ungated',
      contentPath: '/content/IEC-62443-ZCR-Visualization-Guide.md'
    }
    // Add remaining articles...
  };

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);

      // Find article in catalog
      const articleData = articlesCatalog[articleId];

      if (!articleData) {
        // Article not found - redirect to articles page
        navigate('/articles');
        return;
      }

      // Load markdown content if path exists
      if (articleData.contentPath) {
        try {
          const response = await fetch(articleData.contentPath);
          const markdownText = await response.text();

          // For now, we'll set raw markdown
          // In production, use a markdown parser like react-markdown
          articleData.fullContent = markdownText;

          // Extract preview (first 300 words)
          const words = markdownText.split(/\s+/);
          const previewWords = words.slice(0, 300);
          articleData.previewContent = previewWords.join(' ') + '...';
        } catch (error) {
          console.error('Error loading article content:', error);
          articleData.previewContent = articleData.excerpt;
          articleData.fullContent = 'Content loading error. Please contact support.';
        }
      } else {
        // No content path - use placeholder
        articleData.previewContent = articleData.excerpt;
        articleData.fullContent = 'Full article content coming soon. This article is currently being prepared for publication.';
      }

      setArticle(articleData);
      setLoading(false);
    };

    loadArticle();
  }, [articleId, navigate]);

  // Lead capture handler
  const handleLeadCapture = async (leadData) => {
    console.log('Lead captured:', leadData);

    // TODO: Implement CRM integration
    // Example: Send to HubSpot, Salesforce, or custom backend

    try {
      // Example API call
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error('Lead submission failed');
      }

      // Track in analytics
      if (window.gtag) {
        window.gtag('event', 'lead_capture_success', {
          article_id: leadData.articleId,
          lead_score: calculateLeadScore(leadData)
        });
      }

      return { success: true };
    } catch (error) {
      console.error('Lead capture error:', error);

      // Still allow content unlock even if CRM fails
      // Log error for manual follow-up
      return { success: true, error: error.message };
    }
  };

  // Simple lead scoring function
  const calculateLeadScore = (leadData) => {
    let score = 0;

    // Role scoring
    const roleScores = {
      'CISO': 25,
      'CIO': 25,
      'VP_Engineering': 20,
      'Director_Security': 15,
      'OT_Security': 10,
      'IT_Security': 10,
      'Compliance': 12,
      'Consultant': 5
    };
    score += roleScores[leadData.role] || 0;

    // Company size scoring
    const sizeScores = {
      '5000+': 25,
      '1001-5000': 20,
      '201-1000': 15,
      '51-200': 10,
      '1-50': 5
    };
    score += sizeScores[leadData.companySize] || 0;

    // Challenge scoring (high-value challenges)
    const challengeScores = {
      'IEC62443_Compliance': 15,
      'Ransomware_Defense': 15,
      'IT_OT_Convergence': 12,
      'M&A_Due_Diligence': 10,
      'Incident_Response': 10
    };
    score += challengeScores[leadData.challenge] || 5;

    // Article category scoring
    const categoryScores = {
      'M&A': 10,
      'IEC 62443': 10,
      'Ransomware': 8,
      'Threat Intelligence': 5
    };
    score += categoryScores[leadData.articleCategory] || 0;

    return score;
  };

  if (loading) {
    return (
      <div className="article-detail-page">
        <div className="article-loading">
          <div className="loading-spinner"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-detail-page">
        <div className="article-not-found">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <a href="/articles" className="back-link">← Back to Articles</a>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      {/* Article Header */}
      <div className="article-header">
        <div className="article-header__container">
          <a href="/articles" className="article-header__back">← All Articles</a>

          <div className="article-header__category">{article.category}</div>

          <h1 className="article-header__title">{article.title}</h1>

          <div className="article-header__meta">
            <span className="article-header__author">{article.author}</span>
            <span className="article-header__separator">•</span>
            <span className="article-header__date">{article.date}</span>
            <span className="article-header__separator">•</span>
            <span className="article-header__read-time">{article.readTime} read</span>
          </div>

          <div className="article-header__tags">
            {article.tags.map(tag => (
              <span key={tag} className="article-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content with Gating */}
      <div className="article-content">
        <div className="article-content__container">
          {article.gateType === 'ungated' ? (
            // Ungated: Show full content immediately
            <div className="article-full-content">
              <div dangerouslySetInnerHTML={{ __html: article.fullContent }} />

              {/* Soft CTA for ungated content */}
              <div className="article-ungated-cta">
                <h3>Explore More OXOT Research</h3>
                <p>This article is part of our comprehensive OT cybersecurity research library.</p>
                <div className="ungated-cta-buttons">
                  <a href="/articles" className="ungated-cta-button">View All Articles</a>
                  <a href="/solutions" className="ungated-cta-button ungated-cta-button--secondary">Our Solutions</a>
                </div>
              </div>
            </div>
          ) : (
            // Gated: Use ArticleGate component
            <ArticleGate
              articleId={article.id}
              articleTitle={article.title}
              articleCategory={article.category}
              previewContent={
                <div className="article-preview-content">
                  <div dangerouslySetInnerHTML={{ __html: article.previewContent }} />
                </div>
              }
              fullContent={
                <div className="article-full-content">
                  <div dangerouslySetInnerHTML={{ __html: article.fullContent }} />
                </div>
              }
              gateType={article.gateType}
              onLeadCapture={handleLeadCapture}
            />
          )}
        </div>
      </div>

      {/* Related Articles */}
      <div className="article-related">
        <div className="article-related__container">
          <h3>Related Articles</h3>
          <div className="related-articles-grid">
            {/* TODO: Implement related articles logic based on tags/category */}
            <p>Related articles coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
```

---

## Step 2: Update ArticlesPage.jsx

Modify the existing ArticlesPage.jsx to link to individual article detail pages:

```jsx
// Find this section in ArticlesPage.jsx (around line 380-400)

// BEFORE (current):
<Link
  key={article.id}
  to={`/articles/${article.id}`}  // ← This route needs to work
  className="featured-article-card"
>

// No changes needed in ArticlesPage.jsx!
// The Link components already point to /articles/:articleId
// We just need to add the route in App.js
```

---

## Step 3: Configure Routing

Update `/home/user/OXOT_Website/oxot-website/src/App.js` to add article detail route:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';  // ← ADD THIS
// ... other imports

function App() {
  return (
    <Router>
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />

        {/* Articles routes */}
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:articleId" element={<ArticleDetailPage />} />  {/* ← ADD THIS */}

        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;
```

---

## Step 4: Implement Analytics Tracking

### Option A: Google Analytics 4 (gtag.js)

Add to `/public/index.html` (if not already present):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Option B: Google Tag Manager

Create `/src/utils/analytics.js`:

```javascript
/**
 * Analytics Tracking Utilities
 */

export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
  }

  console.log('[Analytics]', eventName, eventParams);
};

export const trackPageView = (pagePath, pageTitle) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
};

export const trackFormStart = (formName, articleId) => {
  trackEvent('form_start', {
    form_name: formName,
    article_id: articleId
  });
};

export const trackFormSubmit = (formName, articleId, leadScore) => {
  trackEvent('lead_capture', {
    form_name: formName,
    article_id: articleId,
    lead_score: leadScore,
    value: leadScore // For conversion value tracking
  });
};

export const trackContentUnlock = (articleId, gateType) => {
  trackEvent('content_unlock', {
    article_id: articleId,
    gate_type: gateType
  });
};
```

Then use in ArticleGate.jsx:

```jsx
import { trackFormStart, trackFormSubmit, trackContentUnlock } from '../utils/analytics';

// In ArticleGate component:

// When form is focused
const handleFormStart = () => {
  trackFormStart('article_gate', articleId);
};

// On form submission
const handleSubmit = async (e) => {
  // ... validation ...

  const leadScore = calculateLeadScore(formData, articleData);
  trackFormSubmit('article_gate', articleId, leadScore);

  // ... rest of submission logic ...

  trackContentUnlock(articleId, gateType);
};
```

---

## Step 5: CRM Integration

### Option A: HubSpot Forms API

Create `/src/services/hubspot.js`:

```javascript
/**
 * HubSpot API Integration
 */

const HUBSPOT_PORTAL_ID = 'YOUR_PORTAL_ID';
const HUBSPOT_FORM_GUID = 'YOUR_FORM_GUID';

export const submitToHubSpot = async (formData, articleData) => {
  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

  const payload = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'email',
        value: formData.email
      },
      {
        objectTypeId: '0-1',
        name: 'company',
        value: formData.company
      },
      {
        objectTypeId: '0-1',
        name: 'jobtitle',
        value: formData.role
      },
      {
        objectTypeId: '0-1',
        name: 'company_size',
        value: formData.companySize
      },
      {
        objectTypeId: '0-1',
        name: 'ot_security_challenge',
        value: formData.challenge
      },
      {
        objectTypeId: '0-1',
        name: 'article_downloaded',
        value: articleData.title
      },
      {
        objectTypeId: '0-1',
        name: 'article_category',
        value: articleData.category
      }
    ],
    context: {
      pageUri: window.location.href,
      pageName: articleData.title
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('HubSpot submission error:', error);
    throw error;
  }
};
```

### Option B: Custom Backend API

Create `/src/services/leads.js`:

```javascript
/**
 * Custom Lead API Integration
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.oxot.com';

export const submitLead = async (leadData) => {
  const endpoint = `${API_BASE_URL}/v1/leads`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      body: JSON.stringify({
        email: leadData.email,
        company: leadData.company,
        role: leadData.role,
        company_size: leadData.companySize,
        challenge: leadData.challenge,
        article_id: leadData.articleId,
        article_title: leadData.articleTitle,
        article_category: leadData.articleCategory,
        source: 'article_gate',
        timestamp: leadData.timestamp,
        lead_score: leadData.leadScore || 0,
        metadata: {
          user_agent: navigator.userAgent,
          referrer: document.referrer,
          page_url: window.location.href
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Lead submission error:', error);

    // Fallback: Store in localStorage for manual recovery
    const storedLeads = JSON.parse(localStorage.getItem('failed_leads') || '[]');
    storedLeads.push({ ...leadData, failed_at: new Date().toISOString() });
    localStorage.setItem('failed_leads', JSON.stringify(storedLeads));

    throw error;
  }
};
```

---

## Step 6: Testing Checklist

### Pre-Launch Testing

- [ ] **Form Validation Testing**
  - [ ] Test email validation (valid format, business email required)
  - [ ] Test required field validation (email, company, role, company size)
  - [ ] Test error message display
  - [ ] Test error clearing on re-entry

- [ ] **Submission Flow Testing**
  - [ ] Test form submission with valid data
  - [ ] Test loading state during submission
  - [ ] Test thank you state display
  - [ ] Test content unlock after submission
  - [ ] Test scroll to unlocked content

- [ ] **Analytics Testing**
  - [ ] Verify form_start event fires when form is focused
  - [ ] Verify lead_capture event fires on submission
  - [ ] Verify content_unlock event fires after unlock
  - [ ] Check event parameters are correct

- [ ] **CRM Integration Testing**
  - [ ] Test HubSpot/Salesforce submission
  - [ ] Verify lead appears in CRM with correct fields
  - [ ] Test error handling if CRM fails
  - [ ] Verify content still unlocks even if CRM fails

- [ ] **Routing Testing**
  - [ ] Test direct URL access to /articles/:articleId
  - [ ] Test 404 handling for invalid article IDs
  - [ ] Test back navigation from article to articles list
  - [ ] Test browser forward/back buttons

- [ ] **SEO Testing**
  - [ ] Verify preview content is visible without JavaScript
  - [ ] Check meta tags are correct for each article
  - [ ] Test social sharing preview (Open Graph tags)
  - [ ] Verify schema.org markup is valid

- [ ] **Mobile Responsive Testing**
  - [ ] Test form on mobile (iOS Safari, Android Chrome)
  - [ ] Test form field focus and keyboard behavior
  - [ ] Test trust signals layout on mobile
  - [ ] Test thank you state on mobile

- [ ] **Cross-Browser Testing**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)

- [ ] **Accessibility Testing**
  - [ ] Tab navigation through form
  - [ ] Screen reader compatibility
  - [ ] Focus states visible
  - [ ] Error messages announced

---

## Advanced Features

### Feature 1: Progressive Profiling (Returning Visitors)

```jsx
// In ArticleGate.jsx

const [isReturningVisitor, setIsReturningVisitor] = useState(false);
const [knownEmail, setKnownEmail] = useState('');

useEffect(() => {
  // Check localStorage for returning visitor
  const previousSubmission = localStorage.getItem('oxot_lead_email');
  if (previousSubmission) {
    setIsReturningVisitor(true);
    setKnownEmail(previousSubmission);

    // Pre-fill email field
    setFormData(prev => ({
      ...prev,
      email: previousSubmission
    }));
  }
}, []);

// After successful submission
const handleSubmit = async (e) => {
  // ... submission logic ...

  // Store email for progressive profiling
  localStorage.setItem('oxot_lead_email', formData.email);
  localStorage.setItem('oxot_lead_timestamp', new Date().toISOString());
};
```

### Feature 2: Exit-Intent Popup (Reduce Abandonment)

```jsx
// In ArticleDetailPage.jsx

import { useState, useEffect } from 'react';

const ArticleDetailPage = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    let exitIntentShown = false;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !exitIntentShown) {
        // User moving mouse toward browser chrome (likely to close tab)
        setShowExitIntent(true);
        exitIntentShown = true;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div>
      {/* ... existing content ... */}

      {showExitIntent && (
        <div className="exit-intent-popup">
          <div className="exit-intent-content">
            <h3>Before you go...</h3>
            <p>Get instant access to this article + 3 related resources by entering your email:</p>
            <input type="email" placeholder="your.email@company.com" />
            <button>Get Instant Access</button>
            <button onClick={() => setShowExitIntent(false)}>No thanks</button>
          </div>
        </div>
      )}
    </div>
  );
};
```

### Feature 3: Social Sharing (Viral Growth)

```jsx
// Add to ArticleDetailPage.jsx header

<div className="article-share">
  <button onClick={() => shareOn('linkedin')}>
    Share on LinkedIn
  </button>
  <button onClick={() => shareOn('twitter')}>
    Share on Twitter
  </button>
  <button onClick={() => copyLink()}>
    Copy Link
  </button>
</div>

const shareOn = (platform) => {
  const url = window.location.href;
  const title = article.title;

  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  };

  window.open(shareUrls[platform], '_blank', 'width=600,height=400');

  // Track share event
  trackEvent('article_share', {
    article_id: article.id,
    platform: platform
  });
};
```

---

## Deployment Checklist

- [ ] Set environment variables (API keys, CRM credentials)
- [ ] Configure CORS for API endpoints
- [ ] Set up email delivery service (SendGrid, Mailgun)
- [ ] Create privacy policy page
- [ ] Set up SSL certificate
- [ ] Configure CDN for content files
- [ ] Set up monitoring/error tracking (Sentry)
- [ ] Create automated email nurture sequences
- [ ] Train sales team on lead routing
- [ ] Set up CRM workflows (auto-assignment, scoring)

---

## Support & Troubleshooting

**Issue: Form not submitting**
- Check browser console for errors
- Verify API endpoint is reachable
- Check CORS configuration
- Verify CRM credentials are correct

**Issue: Analytics not tracking**
- Verify gtag.js is loaded
- Check GA Measurement ID is correct
- Use GA DebugView to see real-time events
- Check for ad blockers

**Issue: Content not loading**
- Verify markdown file paths are correct
- Check fetch() permissions (CORS)
- Ensure content files are deployed
- Check browser console for 404 errors

---

**Document End**

For additional implementation support:
- Technical: [Engineering team contact]
- Analytics: [Marketing ops contact]
- CRM: [Sales ops contact]
