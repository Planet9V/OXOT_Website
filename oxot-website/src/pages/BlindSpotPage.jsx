import React from 'react';
import { Link } from 'react-router-dom';
import './BlindSpotPage.css';

/**
 * BlindSpotPage - Overlooked Vulnerabilities & Hidden Risks
 *
 * Collection of 700+ word articles highlighting blind spots in
 * critical infrastructure cybersecurity - what executives don't know they don't know
 */
const BlindSpotPage = () => {
  const blindSpots = [
    {
      id: 'indirect-loss-multiplier',
      title: 'The $300 Billion Indirect Loss Multiplier',
      subtitle: 'Why You\'re Underestimating OT Breach Costs by 3-4x',
      severity: 'critical',
      excerpt: 'Organizations obsess over ransom payments ($1M-$60M) while ignoring that indirect losses—precautionary shutdowns, supply chain cascades, contractual penalties—account for 70% of total costs.',
      impact: 'Financial catastrophe from "acceptable" risks',
      tags: ['Financial Risk', 'Indirect Losses', 'Manufacturing'],
    },
    {
      id: 'it-ot-convergence',
      title: 'The IT/OT Convergence Death Spiral',
      subtitle: 'When Industry 4.0 Becomes a Security Nightmare',
      severity: 'critical',
      excerpt: '40% of industrial organizations now have PLCs insecurely connected to the public internet. The mythical "air gap" is dead, but security architectures haven\'t adapted.',
      impact: 'IT-level ransomware causing physical production shutdowns',
      tags: ['IT/OT Convergence', 'Industry 4.0', 'Ransomware'],
    },
    {
      id: 'credential-harvest',
      title: 'The Credential Harvest Economy: "Log In, Don\'t Break In"',
      subtitle: 'How $10 Credentials Bypass Your Billion-Dollar Security Stack',
      severity: 'high',
      excerpt: '800% YoY increase in credentials harvested by infostealer malware. Attackers no longer "hack in"—they buy valid credentials for $10-$500 and log in legitimately.',
      impact: 'Colonial Pipeline-style shutdowns from single VPN accounts',
      tags: ['Credentials', 'Infostealer', 'Dark Web'],
    },
    {
      id: 'third-party-trust',
      title: 'The Third-Party Trust Bomb: Single Point of National Failure',
      subtitle: 'When Your Vendor\'s Breach Empties Grocery Shelves',
      severity: 'critical',
      excerpt: 'UNFI cyberattack: one wholesaler\'s IT compromise → empty shelves across 30,000+ retail locations. Your security is only as strong as your weakest supplier.',
      impact: 'Nationwide disruption from vendor you don\'t control',
      tags: ['Supply Chain', 'Third-Party Risk', 'UNFI'],
    },
    {
      id: 'grid-death-wobble',
      title: 'The Grid\'s "Death Wobble": Frequency Instability from Renewables',
      subtitle: 'Why Replacing Coal with Solar is Breaking Grid Physics',
      severity: 'critical',
      excerpt: 'Declining system inertia increases RoCoF to >1 Hz/s—levels that trigger protection relay misoperations and cascading blackouts. Policy ignores grid stability fundamentals.',
      impact: 'Cascading blackouts from normal disturbances',
      tags: ['Grid Stability', 'RoCoF', 'Renewables'],
    },
    {
      id: 'legacy-balance-sheet',
      title: 'The Legacy System Balance Sheet Lie',
      subtitle: '$0 Book Value = Millions in Hidden Cyber Liability',
      severity: 'high',
      excerpt: '50% of industrial OT runs on Windows XP/7. Financial statements show $0 value; reality shows permanent unfixable vulnerability. M&A acquirers inherit "ticking time bombs."',
      impact: 'Off-balance-sheet liabilities disguised as fully depreciated assets',
      tags: ['Legacy Systems', 'M&A', 'Technical Debt'],
    },
    {
      id: 'oauth-consent',
      title: 'The OAuth Consent Weapon: When Trust Becomes Betrayal',
      subtitle: 'How "Legitimate Microsoft Login" Becomes Data Exfiltration',
      severity: 'high',
      excerpt: 'ShinyHunters impersonated Salesforce apps, tricking users into granting malicious apps persistent API access. Attack happens on real microsoft.com domains—no phishing indicators.',
      impact: 'MFA-exempt API access from single consent click',
      tags: ['OAuth', 'SaaS Security', 'ShinyHunters'],
    },
    {
      id: 'help-desk-gap',
      title: 'The Help Desk Social Engineering Gap: Your Front Door is Unlocked',
      subtitle: 'When "Being Helpful" Becomes a $100M Vulnerability',
      severity: 'critical',
      excerpt: 'Scattered Spider compromised MGM via phone call to help desk. No technical exploit—just convincing an undertrained agent to reset password and re-enroll MFA. Cost: $100M.',
      impact: 'Complete account takeover from convincing phone call',
      tags: ['Social Engineering', 'Scattered Spider', 'MGM'],
    },
    {
      id: 'mfa-fatigue',
      title: 'The MFA Fatigue Bypass: When Security Becomes Annoyance',
      subtitle: 'How 50 Push Notifications Defeat Your "Unbypassable" MFA',
      severity: 'medium',
      excerpt: 'Attackers spam MFA push notifications until users approve out of frustration. At 2 AM with 50 prompts flooding your phone, many will click "approve" to make it stop.',
      impact: 'MFA declared "victory" while attackers routinely bypass it',
      tags: ['MFA', 'Push Bombing', 'User Psychology'],
    },
    {
      id: 'metadata-intelligence',
      title: 'The Metadata Intelligence Goldmine: What You Don\'t Say Reveals Everything',
      subtitle: 'How "Non-Classified" Communication Patterns Become Strategic Intel',
      severity: 'high',
      excerpt: 'TeleMessage breach exposed metadata from 60+ U.S. agencies. While messages were "non-classified," metadata revealed who talked to whom, when, how often—a counterintelligence goldmine.',
      impact: 'National security compromised by "just metadata"',
      tags: ['Metadata', 'Intelligence', 'TeleMessage'],
    },
    {
      id: 'supply-chain-gps',
      title: 'The Supply Chain GPS Spoofing Weaponization',
      subtitle: 'When Real Disruption Becomes the Perfect Phishing Lure',
      severity: 'medium',
      excerpt: 'Geopolitical chaos (Houthi Red Sea attacks, tariffs) creates perfect social engineering context. An email about "shipping delay" is now perfectly believable pretext for malware.',
      impact: 'Legitimate crises weaponized for high-success-rate phishing',
      tags: ['Supply Chain', 'Social Engineering', 'Geopolitics'],
    },
    {
      id: 'ma-integration',
      title: 'The M&A Integration Vulnerability Window: When Chaos Becomes Opportunity',
      subtitle: 'How Post-Merger "Move Fast" Kills Security',
      severity: 'high',
      excerpt: 'Post-merger integration = peak vulnerability: distracted security teams, policies in flux, employee morale low. Threat actors specifically target M&A activity for this reason.',
      impact: 'Inherited dormant APT implants activated during integration chaos',
      tags: ['M&A', 'Post-Merger Integration', 'APT'],
    },
    {
      id: 'data-center-load',
      title: 'The Data Center Load Loss Blindside: Reverse Disruption',
      subtitle: 'When 1,500 MW Suddenly Disappearing Breaks Protection Systems',
      severity: 'high',
      excerpt: 'Grid operators plan for generation loss. July 2024: 1,500 MW of data center load disconnected → frequency/voltage ROSE. Protection systems designed for opposite scenario.',
      impact: 'Voltage spikes and frequency overshoots from mass shutdowns',
      tags: ['Data Centers', 'Grid Stability', 'Load Loss'],
    },
    {
      id: 'black-start-gap',
      title: 'The Black Start Capability Gap: Can\'t Turn the Lights Back On',
      subtitle: 'When Wind/Solar Replace the Only Plants That Can Restart the Grid',
      severity: 'critical',
      excerpt: 'After total collapse, Black Start capability is required. Wind/solar can\'t provide it. As fossil plants retire, the ability to restore the grid after catastrophic failure disappears.',
      impact: '5-7 day (or longer) restoration timelines from total blackout',
      tags: ['Black Start', 'Grid Recovery', 'Renewables'],
    },
    {
      id: 'lotl-invisibility',
      title: 'The Living Off the Land (LotL) Invisibility Cloak',
      subtitle: 'When Legitimate Admin Tools Become Undetectable Weapons',
      severity: 'high',
      excerpt: 'Attackers use PsExec, PowerShell, RDP—legitimate tools. An RDP session from IT admin looks identical to attacker lateral movement. Traditional AV/EDR miss LotL entirely.',
      impact: 'Most devastating attacks invisible to signature-based detection',
      tags: ['LotL', 'Legitimate Tools', 'Detection Evasion'],
    },
  ];

  return (
    <div className="blindspot-page">
      {/* Hero Section */}
      <section className="blindspot-hero">
        <div className="blindspot-hero__container">
          <div className="blindspot-hero__badge">CRITICAL BLIND SPOTS</div>
          <h1 className="blindspot-hero__title">
            What You Don't Know You Don't Know
          </h1>
          <p className="blindspot-hero__subtitle">
            Overlooked vulnerabilities, emerging threats, and underestimated risks in critical infrastructure
            cybersecurity. These are the blind spots that keep CISOs awake at night—once they discover them.
            OXOT's Blind Spot series reveals the hidden dangers that traditional security frameworks miss.
          </p>
          <div className="blindspot-hero__warning">
            <div className="warning-icon">⚠️</div>
            <div className="warning-text">
              <strong>Executive Warning:</strong> These blind spots represent systemic risks that are
              interconnected and compounding. What appears as individual vulnerabilities are actually
              components of a larger crisis waiting to materialize.
            </div>
          </div>
        </div>
      </section>

      {/* Severity Legend */}
      <section className="severity-legend">
        <div className="severity-legend__container">
          <h3>Severity Levels:</h3>
          <div className="severity-badges">
            <div className="severity-badge severity-badge--critical">
              <span className="badge-icon">🔴</span>
              <span>Critical - Immediate Executive Attention Required</span>
            </div>
            <div className="severity-badge severity-badge--high">
              <span className="badge-icon">🟠</span>
              <span>High - Strategic Risk with Significant Impact</span>
            </div>
            <div className="severity-badge severity-badge--medium">
              <span className="badge-icon">🟡</span>
              <span>Medium - Emerging Threat Requiring Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blind Spots Grid */}
      <section className="blindspots-grid-section">
        <div className="blindspots-grid__container">
          <h2>15 Critical Blind Spots in Critical Infrastructure Cybersecurity</h2>
          <div className="blindspots-grid">
            {blindSpots.map((blindspot, index) => (
              <Link
                key={blindspot.id}
                to={`/blindspot/${blindspot.id}`}
                className={`blindspot-card blindspot-card--${blindspot.severity}`}
              >
                <div className="blindspot-card__header">
                  <div className="blindspot-card__number">{String(index + 1).padStart(2, '0')}</div>
                  <div className={`blindspot-card__severity severity--${blindspot.severity}`}>
                    {blindspot.severity === 'critical' && '🔴'}
                    {blindspot.severity === 'high' && '🟠'}
                    {blindspot.severity === 'medium' && '🟡'}
                    <span>{blindspot.severity.toUpperCase()}</span>
                  </div>
                </div>
                <h3 className="blindspot-card__title">{blindspot.title}</h3>
                <p className="blindspot-card__subtitle">{blindspot.subtitle}</p>
                <p className="blindspot-card__excerpt">{blindspot.excerpt}</p>
                <div className="blindspot-card__impact">
                  <div className="impact-label">Potential Impact:</div>
                  <div className="impact-text">{blindspot.impact}</div>
                </div>
                <div className="blindspot-card__tags">
                  {blindspot.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="blindspot-card__cta">
                  Read Full Analysis →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interconnected Risks Section */}
      <section className="interconnected-risks">
        <div className="interconnected-risks__container">
          <h2>The Compounding Effect: How Blind Spots Amplify Each Other</h2>
          <p>
            These blind spots are not isolated vulnerabilities—they're interconnected and mutually reinforcing.
            For example: <strong>Legacy systems (#6)</strong> make <strong>IT/OT convergence (#2)</strong> more
            dangerous, while <strong>credential harvesting (#3)</strong> enables <strong>Living Off the Land (#15)</strong> attacks
            that cause <strong>indirect losses (#1)</strong> during <strong>M&A integration windows (#12)</strong>,
            all while the <strong>grid (#5, #14)</strong> becomes more fragile.
          </p>
          <div className="risk-chain-diagram">
            <div className="risk-chain">
              <div className="risk-node">Legacy Systems</div>
              <div className="risk-arrow">→</div>
              <div className="risk-node">IT/OT Convergence</div>
              <div className="risk-arrow">→</div>
              <div className="risk-node">Credential Theft</div>
              <div className="risk-arrow">→</div>
              <div className="risk-node">LotL Attacks</div>
              <div className="risk-arrow">→</div>
              <div className="risk-node">$300B Indirect Losses</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blindspot-cta">
        <div className="blindspot-cta__container">
          <h2>Turn Blind Spots Into Strategic Advantages</h2>
          <p>
            Awareness is the first step. OXOT's comprehensive services address these blind spots head-on,
            transforming hidden vulnerabilities into managed risks. Our expertise spans technical controls,
            organizational processes, and strategic frameworks—providing the holistic approach required to
            address systemic challenges.
          </p>
          <div className="blindspot-cta__buttons">
            <Link to="/services" className="blindspot-cta__button blindspot-cta__button--primary">
              Explore Our Services
            </Link>
            <Link to="/solutions" className="blindspot-cta__button blindspot-cta__button--secondary">
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlindSpotPage;
