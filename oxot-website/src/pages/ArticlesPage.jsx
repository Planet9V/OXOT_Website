import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArticlesPage.css';

/**
 * ArticlesPage - Academic Research & Thought Leadership
 *
 * Comprehensive collection of 1000+ word academic-style articles
 * demonstrating OXOT's deep expertise in OT/ICS cybersecurity
 */
const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    // Grid Stability & Energy Infrastructure
    {
      id: 'death-wobble',
      category: 'Grid Stability',
      title: 'The Death Wobble: Grid Frequency Instability in the Renewable Energy Transition',
      author: 'Jim McKenney',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Technical analysis of how declining grid inertia from inverter-based resources creates dangerous Rate of Change of Frequency (RoCoF) threatening cascading failures.',
      tags: ['Grid Stability', 'RoCoF', 'IBR', 'Energy'],
      featured: true,
    },
    {
      id: 'black-start',
      category: 'Grid Stability',
      title: 'Black Start in a Renewable World: The Hidden Vulnerability of Grid Recovery',
      author: 'OXOT Research Team',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Examination of the critical gap in black start capability as fossil fuel plants retire, creating existential recovery risks for modern grids.',
      tags: ['Black Start', 'Grid Recovery', 'Renewable Energy'],
    },
    {
      id: 'der-siege',
      category: 'Energy',
      title: 'Distributed Energy Resources Under Siege: Cybersecurity at the Grid Edge',
      author: 'OXOT Research Team',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Deep dive into the exponential attack surface created by DERs, smart meters, and grid-connected IoT with protocol vulnerability analysis.',
      tags: ['DER', 'Smart Grid', 'IoT Security'],
    },
    {
      id: 'cyber-kinetic',
      category: 'Threat Intelligence',
      title: 'The Cyber-Kinetic Kill Chain: When Attacks Cause Physical Damage',
      author: 'OXOT Research Team',
      date: '2024',
      readTime: '13 min',
      excerpt: 'Analysis of Ukraine power grid attacks as the blueprint for modern cyber-physical warfare, examining Industroyer/CRASHOVERRIDE malware.',
      tags: ['Cyber-Kinetic', 'APT', 'Physical Impact'],
    },
    {
      id: 'interconnection-economics',
      category: 'Risk Management',
      title: 'Interconnection Economics: The Hidden Costs of Grid Cybersecurity Failures',
      author: 'OXOT Research Team',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Financial modeling of the true costs of grid cyber incidents, including 70% indirect losses from business interruption and cascading failures.',
      tags: ['Financial Risk', 'ALE', 'Grid Economics'],
    },
    {
      id: 'data-center-shock',
      category: 'Grid Stability',
      title: 'Data Center Load Shock: The Emerging Threat from Voltage-Sensitive Megaloads',
      author: 'OXOT Research Team',
      date: '2024',
      readTime: '9 min',
      excerpt: 'Analysis of July 2024 incident where 1,500 MW of data center load disconnected simultaneously, causing frequency/voltage instability.',
      tags: ['Data Centers', 'Load Loss', 'Frequency Stability'],
    },

    // IEC 62443 & Standards
    {
      id: 'iec-62443-requirements',
      category: 'IEC 62443',
      title: 'The 82 Requirements That Matter: Complete Technical Guide to IEC 62443 Security Levels',
      author: 'OXOT Standards Team',
      date: '2024',
      readTime: '15 min',
      excerpt: 'Comprehensive breakdown of all 82 security requirements across 7 Foundational Requirements with practical implementation guidance.',
      tags: ['IEC 62443', 'Security Levels', 'Standards'],
      featured: true,
    },
    {
      id: 'zones-conduits',
      category: 'IEC 62443',
      title: 'Zones and Conduits: Network Segmentation as the First Line of OT Defense',
      author: 'OXOT Engineering Team',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Practical guide to implementing IEC 62443 zones and conduits architecture for defense-in-depth with sector-specific examples.',
      tags: ['Network Segmentation', 'ZCR', 'Defense-in-Depth'],
    },
    {
      id: 'operators-playbook',
      category: 'IEC 62443',
      title: 'From SL-T to SL-A: The Operator\'s Lifecycle Approach to IACS Cybersecurity',
      author: 'OXOT Standards Team',
      date: '2024',
      readTime: '14 min',
      excerpt: 'End-to-end playbook for operators implementing IEC 62443 from acquisition through decommissioning.',
      tags: ['IACS Lifecycle', 'Operator Guidance', 'CSMS'],
    },
    {
      id: 'safety-security',
      category: 'IEC 62443',
      title: 'Bridging Safety and Security: Integrated Risk Assessment for SIS and SCADA',
      author: 'OXOT Engineering Team',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Methodology for unified safety/security risk assessment combining IEC 61508/61511 with IEC 62443.',
      tags: ['Safety Systems', 'SIS', 'Integrated Risk'],
    },
    {
      id: 'legacy-controls',
      category: 'IEC 62443',
      title: 'Compensating Controls for the Unpatchable: Securing Legacy OT Systems',
      author: 'OXOT Engineering Team',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Strategic approach to protecting legacy PLCs, DCS, and SCADA systems using zones/conduits and virtual patching.',
      tags: ['Legacy Systems', 'Compensating Controls', 'Technical Debt'],
    },

    // Ransomware & Incident Response
    {
      id: 'resilient-grid',
      category: 'Ransomware',
      title: 'The Resilient Grid: A Ransomware Readiness Framework for the Energy Sector',
      author: 'OXOT Crisis Management Team',
      date: '2024',
      readTime: '13 min',
      excerpt: 'Comprehensive methodology combining IEC 62443, CISA CSET RRA, and mediated workshops for converged IT/OT ransomware defenses.',
      tags: ['Ransomware', 'Energy Sector', 'CSET RRA'],
      featured: true,
    },
    {
      id: 'resilient-factory',
      category: 'Ransomware',
      title: 'The Resilient Factory: Manufacturing-Specific Ransomware Defense',
      author: 'OXOT Crisis Management Team',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Tailored ransomware readiness framework addressing manufacturing\'s unique challenges and production continuity requirements.',
      tags: ['Ransomware', 'Manufacturing', 'Production Resilience'],
    },
    {
      id: 'scattered-spider',
      category: 'Threat Intelligence',
      title: 'Living Off the Land: How Scattered Spider Weaponizes Your Own Tools',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Deep technical analysis of Scattered Spider\'s tactics: help desk social engineering, RMM tool abuse, MFA fatigue.',
      tags: ['Scattered Spider', 'LotL', 'Social Engineering'],
    },
    {
      id: 'raas-economy',
      category: 'Threat Intelligence',
      title: 'The RaaS Economy: Why Takedowns Fail and What Actually Works',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Economic analysis of the Ransomware-as-a-Service business model and lessons from successful disruptions.',
      tags: ['RaaS', 'Ransomware Economy', 'Law Enforcement'],
    },
    {
      id: 'ot-incident-response',
      category: 'Incident Response',
      title: 'Time to Safe Operations: OT-Specific Incident Response Playbooks',
      author: 'OXOT Crisis Management Team',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Framework for building OT incident response plans that prioritize safety and availability over forensics.',
      tags: ['Incident Response', 'OT Safety', 'IR Playbooks'],
    },

    // M&A & Risk Quantification
    {
      id: 'ma-due-diligence',
      category: 'M&A',
      title: 'The Cyber-Physical Balance Sheet: OT Due Diligence in Industrial M&A',
      author: 'OXOT M&A Advisory',
      date: '2024',
      readTime: '14 min',
      excerpt: 'Comprehensive framework for conducting OT cybersecurity due diligence during manufacturing/energy acquisitions.',
      tags: ['M&A', 'Due Diligence', 'OT Risk'],
    },
    {
      id: 'quantifying-invisible',
      category: 'M&A',
      title: 'Quantifying the Invisible: Financial Modeling of OT Cyber Risk',
      author: 'OXOT M&A Advisory',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Methodology for calculating Annual Loss Expectancy (ALE) and remediation costs for OT vulnerabilities.',
      tags: ['Risk Quantification', 'ALE', 'FAIR Framework'],
    },
    {
      id: 'legacy-liability',
      category: 'M&A',
      title: 'The Ticking Time Bomb: Legacy Systems as Off-Balance-Sheet Liabilities',
      author: 'OXOT M&A Advisory',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Analysis of how unpatchable legacy OT systems represent hidden financial liabilities in industrial acquisitions.',
      tags: ['Legacy Systems', 'Technical Debt', 'Financial Risk'],
    },
    {
      id: 'federated-security',
      category: 'M&A',
      title: 'Federated OT Security: Post-Merger Integration Without Operational Chaos',
      author: 'OXOT M&A Advisory',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Strategic roadmap for integrating acquired OT environments without production disruption.',
      tags: ['Post-Merger Integration', 'Federated Governance', 'Zero Trust'],
    },

    // Threat Intelligence & Adversaries
    {
      id: 'sandworm-evolution',
      category: 'Threat Intelligence',
      title: 'Sandworm\'s Evolution: From BlackEnergy to Living Off the Land',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '13 min',
      excerpt: 'Chronological analysis of Russian APT Sandworm\'s tactical evolution from 2015 to modern LOTL techniques.',
      tags: ['Sandworm', 'APT', 'Russia'],
    },
    {
      id: 'lazarus-pivot',
      category: 'Threat Intelligence',
      title: 'The Lazarus Pivot: From Financial Crime to Energy Sector Espionage',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Analysis of North Korean Lazarus Group\'s expansion from cryptocurrency theft to targeting energy providers.',
      tags: ['Lazarus', 'North Korea', 'Energy Targeting'],
    },
    {
      id: 'supply-chain-attack',
      category: 'Threat Intelligence',
      title: 'Supply Chain as Attack Vector: The 45% Problem in Energy Cybersecurity',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Deep dive into why 45% of energy sector breaches originate with third-party vendors with C-SCRM framework.',
      tags: ['Supply Chain', 'Vendor Risk', 'C-SCRM'],
    },
    {
      id: 'kev-analysis',
      category: 'Threat Intelligence',
      title: 'Known Exploited Vulnerabilities: The Systemic Risk Hiding in Plain Sight',
      author: 'OXOT Vulnerability Management',
      date: '2024',
      readTime: '9 min',
      excerpt: 'Analysis showing 380+ actively exploited CVEs across major U.S. energy companies with patch prioritization framework.',
      tags: ['KEV', 'Vulnerability Management', 'CISA'],
    },

    // Identity & Access
    {
      id: 'login-breach',
      category: 'Identity Security',
      title: 'The Login Breach: Why Identity Became the New Perimeter',
      author: 'OXOT Identity Security Team',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Strategic analysis of economic forces driving adversaries from zero-day exploits to identity attacks.',
      tags: ['Identity Security', 'Zero Trust', 'MFA'],
    },
    {
      id: 'zero-trust-ot',
      category: 'Identity Security',
      title: 'Beyond the Perimeter: Building Identity-Centric Zero Trust for OT',
      author: 'OXOT Engineering Team',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Practical implementation guide for Zero Trust principles in OT environments addressing unique constraints.',
      tags: ['Zero Trust', 'OT Security', 'ZTNA'],
    },
    {
      id: 'oauth-weapon',
      category: 'Identity Security',
      title: 'Weaponizing OAuth: The ShinyHunters Campaign Against Salesforce Customers',
      author: 'OXOT Threat Intelligence',
      date: '2024',
      readTime: '10 min',
      excerpt: 'Technical deconstruction of the illicit consent grant attack compromising Google, Adidas, and others.',
      tags: ['OAuth', 'SaaS Security', 'ShinyHunters'],
    },

    // Cross-Cutting
    {
      id: 'it-ot-divide',
      category: 'Organizational',
      title: 'The IT/OT Cultural Divide: Root Cause of Most Industrial Cyber Failures',
      author: 'OXOT Leadership',
      date: '2024',
      readTime: '11 min',
      excerpt: 'Sociological analysis of the IT/OT cultural conflict and strategies for building converged security programs.',
      tags: ['IT/OT Convergence', 'Cultural Alignment', 'Governance'],
    },
    {
      id: 'cyber-insurance',
      category: 'Risk Management',
      title: 'Cyber Insurance Gaps in Industrial Environments: What Your Policy Won\'t Cover',
      author: 'OXOT Risk Advisory',
      date: '2024',
      readTime: '9 min',
      excerpt: 'Analysis of coverage limitations in standard cyber insurance for OT incidents including physical damage exclusions.',
      tags: ['Cyber Insurance', 'Coverage Gaps', 'OT Risk'],
    },
    {
      id: 'maturity-curve',
      category: 'Organizational',
      title: 'From Compliance to Resilience: The Maturity Curve for OT Cybersecurity Programs',
      author: 'OXOT Leadership',
      date: '2024',
      readTime: '12 min',
      excerpt: 'Strategic roadmap for evolving from reactive compliance to proactive resilience using IEC 62443-2-1 CSMS.',
      tags: ['Security Maturity', 'CSMS', 'Continuous Improvement'],
    },
  ];

  const categories = ['all', 'Grid Stability', 'IEC 62443', 'Ransomware', 'Threat Intelligence', 'M&A', 'Identity Security', 'Risk Management'];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="articles-page">
      {/* Hero Section */}
      <section className="articles-hero">
        <div className="articles-hero__container">
          <div className="articles-hero__badge">THOUGHT LEADERSHIP</div>
          <h1 className="articles-hero__title">
            Research & Analysis from OXOT Experts
          </h1>
          <p className="articles-hero__subtitle">
            In-depth academic-style articles demonstrating OXOT's deep expertise in OT/ICS cybersecurity,
            from grid stability analysis to ransomware resilience frameworks. Each article represents
            original research, real-world insights, and actionable intelligence for critical infrastructure
            operators and security professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="articles-filter">
        <div className="articles-filter__container">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-button ${selectedCategory === cat ? 'category-button--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="articles-featured">
        <div className="articles-featured__container">
          <h2>Featured Research</h2>
          <div className="featured-grid">
            {articles.filter(a => a.featured).map(article => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="featured-article-card"
              >
                <div className="featured-article-card__badge">FEATURED</div>
                <div className="featured-article-card__category">{article.category}</div>
                <h3 className="featured-article-card__title">{article.title}</h3>
                <div className="featured-article-card__meta">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <p className="featured-article-card__excerpt">{article.excerpt}</p>
                <div className="featured-article-card__tags">
                  {article.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="articles-grid-section">
        <div className="articles-grid__container">
          <h2>
            {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
            <span className="article-count">({filteredArticles.length})</span>
          </h2>
          <div className="articles-grid">
            {filteredArticles.map(article => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="article-card"
              >
                <div className="article-card__category">{article.category}</div>
                <h3 className="article-card__title">{article.title}</h3>
                <div className="article-card__meta">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <p className="article-card__excerpt">{article.excerpt}</p>
                <div className="article-card__tags">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="article-card__cta">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="articles-cta">
        <div className="articles-cta__container">
          <h2>Stay Informed on Critical Infrastructure Cybersecurity</h2>
          <p>
            OXOT's research articles represent original analysis and practical insights from the front
            lines of OT/ICS cybersecurity. Our team continually publishes new research addressing emerging
            threats, evolving standards, and strategic challenges facing critical infrastructure operators.
          </p>
          <div className="articles-cta__buttons">
            <Link to="/solutions" className="articles-cta__button articles-cta__button--primary">
              Explore Our Solutions
            </Link>
            <Link to="/services" className="articles-cta__button articles-cta__button--secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
