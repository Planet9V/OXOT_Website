import React from 'react';
import { Link } from 'react-router-dom';
import './AEONCyberTwinPage.css';

const AEONCyberTwinPage = () => {
  return (
    <div className="aeon-page">
      {/* Hero Section */}
      <div className="aeon-hero">
        <div className="aeon-hero__content">
          <div className="aeon-hero__badge">Powered by Advanced AI & Neural Networks</div>
          <h1 className="aeon-hero__title">
            AEON
            <span className="aeon-hero__subtitle">Cyber Digital Twin</span>
          </h1>
          <p className="aeon-hero__tagline">
            The AI-Powered Intelligence Platform Designed for the Fulfillment of Psychohistory and Cyber
          </p>
          <p className="aeon-hero__description">
            Predictive, semantic, and prioritized prevention from attacks (Blue Team) combined with autonomous adversarial testing of those same defenses (Red Team) - all powered by one unified intelligence platform.
          </p>
          <div className="aeon-hero__ctas">
            <Link to="/contact" className="btn-primary-large">Request Demo</Link>
            <Link to="/simulations" className="btn-secondary-large">Experience Simulations</Link>
          </div>
        </div>
      </div>

      {/* Dual Force Section */}
      <div className="aeon-dual-force">
        <div className="aeon-container">
          <h2 className="section-title">One Platform. Two Forces.</h2>
          <p className="section-subtitle">
            AEON powers both defensive and offensive cybersecurity operations through unified intelligence
          </p>

          <div className="dual-force-grid">
            <div className="force-card force-card--blue">
              <div className="force-card__icon">🛡️</div>
              <h3 className="force-card__title">Blue Team Defense</h3>
              <p className="force-card__subtitle">Predictive Prevention & Prioritization</p>
              <ul className="force-card__features">
                <li>Semantic threat analysis and prediction</li>
                <li>Automated vulnerability prioritization</li>
                <li>Real-time attack surface monitoring</li>
                <li>Predictive defense recommendations</li>
                <li>Continuous compliance validation</li>
                <li>Intelligent alert correlation</li>
              </ul>
            </div>

            <div className="force-card force-card--red">
              <div className="force-card__icon">⚔️</div>
              <h3 className="force-card__title">Red Team Offense</h3>
              <p className="force-card__subtitle">Autonomous Adversarial Emulation</p>
              <ul className="force-card__features">
                <li>AI-driven penetration testing</li>
                <li>Threat actor persona emulation</li>
                <li>Goal-oriented autonomous agents</li>
                <li>Custom exploit generation</li>
                <li>Full-stack attack chains (IT & OT)</li>
                <li>Continuous security validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="aeon-capabilities">
        <div className="aeon-container">
          <h2 className="section-title">Unparalleled Intelligence Depth</h2>
          <p className="section-subtitle">
            20+ hop graph traversal - far exceeding any competitive platform
          </p>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">📊</div>
                <h3>Deep Graph Intelligence</h3>
              </div>
              <p>
                Advanced neural networks perform 20+ hop traversal through interconnected data, linking SBOM components
                to vulnerabilities, exploits, MITRE TTPs, and threat actors with unprecedented depth.
              </p>
              <div className="capability-card__stats">
                <div className="stat">
                  <span className="stat__number">20+</span>
                  <span className="stat__label">Hop Traversal</span>
                </div>
                <div className="stat">
                  <span className="stat__number">∞</span>
                  <span className="stat__label">Relationship Mapping</span>
                </div>
              </div>
            </div>

            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">🔗</div>
                <h3>SBOM to Exploit Chains</h3>
              </div>
              <p>
                From software bill of materials on the industrial floor to active exploits in the wild,
                AEON maps complete attack paths through your infrastructure using AI-powered graph analytics.
              </p>
              <ul className="capability-list">
                <li>Automated SBOM ingestion</li>
                <li>Component vulnerability mapping</li>
                <li>Exploit availability correlation</li>
                <li>Attack path visualization</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">🎯</div>
                <h3>MITRE ATT&CK Integration</h3>
              </div>
              <p>
                Comprehensive MITRE framework integration maps adversary tactics, techniques, and procedures
                against your specific infrastructure, enabling proactive defense and realistic red team exercises.
              </p>
              <ul className="capability-list">
                <li>TTP to asset mapping</li>
                <li>Sector-specific technique analysis</li>
                <li>Defense gap identification</li>
                <li>Coverage validation</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">👤</div>
                <h3>Threat Actor Profiles</h3>
              </div>
              <p>
                Emulate specific threat actors targeting your sector - from APT groups to ransomware operators -
                with AI agents that replicate their methods, tools, and decision-making patterns.
              </p>
              <ul className="capability-list">
                <li>APT28, APT29, Lazarus Group, etc.</li>
                <li>Sector-specific targeting</li>
                <li>TTP emulation</li>
                <li>Campaign simulation</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">🧠</div>
                <h3>Advanced Reasoning Engine</h3>
              </div>
              <p>
                Neural networks and advanced reasoning algorithms enable the platform to understand context,
                predict adversary behavior, and generate custom attack scenarios unique to your environment.
              </p>
              <ul className="capability-list">
                <li>Contextual threat analysis</li>
                <li>Behavioral prediction</li>
                <li>Scenario generation</li>
                <li>Adaptive learning</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">🛠️</div>
                <h3>Full Kali Toolkit Integration</h3>
              </div>
              <p>
                Complete integration with Kali Linux's penetration testing toolkit, enhanced with AI orchestration
                for autonomous tool selection, execution, and result analysis.
              </p>
              <ul className="capability-list">
                <li>Automated tool selection</li>
                <li>Context-aware execution</li>
                <li>Multi-agent coordination</li>
                <li>Custom exploit development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Psychohistory Section */}
      <div className="aeon-psychohistory">
        <div className="aeon-container">
          <div className="psychohistory-content">
            <div className="psychohistory-text">
              <h2>Cyber Psychohistory</h2>
              <p className="psychohistory-tagline">
                Predicting the future of cyber threats through mathematical precision and AI-powered analytics
              </p>
              <p>
                Inspired by Isaac Asimov's concept of psychohistory - the mathematical prediction of mass behavior -
                AEON applies advanced statistical modeling, machine learning, and graph analytics to predict threat actor
                behavior, attack trends, and vulnerability exploitation patterns across critical infrastructure sectors.
              </p>
              <ul className="psychohistory-features">
                <li>
                  <strong>Predictive Threat Modeling</strong>
                  <span>Forecast attack vectors before they materialize</span>
                </li>
                <li>
                  <strong>Sector-Wide Pattern Analysis</strong>
                  <span>Identify trends across entire critical infrastructure sectors</span>
                </li>
                <li>
                  <strong>Probabilistic Risk Scoring</strong>
                  <span>Quantify likelihood and impact of future attacks</span>
                </li>
                <li>
                  <strong>Temporal Attack Prediction</strong>
                  <span>Anticipate when and where attacks will occur</span>
                </li>
              </ul>
            </div>
            <div className="psychohistory-visual">
              <div className="graph-visualization">
                <div className="graph-node">SBOM</div>
                <div className="graph-node">CVE</div>
                <div className="graph-node">Exploit</div>
                <div className="graph-node">MITRE</div>
                <div className="graph-node">Threat Actor</div>
                <div className="graph-connections"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="aeon-architecture">
        <div className="aeon-container">
          <h2 className="section-title">Architectural Excellence</h2>
          <p className="section-subtitle">
            Enterprise-grade platform built for critical infrastructure
          </p>

          <div className="architecture-layers">
            <div className="layer-card">
              <h3>Intelligence Layer</h3>
              <ul>
                <li>Neural Network Reasoning Engine</li>
                <li>Multi-Agent AI Orchestration</li>
                <li>Graph Database (20+ hop traversal)</li>
                <li>Semantic Analysis Engine</li>
                <li>Predictive Analytics Platform</li>
              </ul>
            </div>

            <div className="layer-card">
              <h3>Knowledge Base</h3>
              <ul>
                <li>SBOM Repository & Parser</li>
                <li>CVE/Vulnerability Database</li>
                <li>Exploit Intelligence (PoC & Active)</li>
                <li>MITRE ATT&CK Framework</li>
                <li>Threat Actor Profiles & TTPs</li>
                <li>Sector-Specific Architecture Models</li>
              </ul>
            </div>

            <div className="layer-card">
              <h3>Execution Layer</h3>
              <ul>
                <li>Autonomous AI Agents</li>
                <li>Kali Linux Toolkit Integration</li>
                <li>Custom Exploit Generator</li>
                <li>Multi-Environment Support (IT/OT)</li>
                <li>Goal-Oriented Testing Framework</li>
              </ul>
            </div>

            <div className="layer-card">
              <h3>Operational Layer</h3>
              <ul>
                <li>Real-Time Asset Monitoring</li>
                <li>Continuous Threat Correlation</li>
                <li>Automated Prioritization</li>
                <li>Compliance Validation</li>
                <li>Executive Dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="aeon-use-cases">
        <div className="aeon-container">
          <h2 className="section-title">Real-World Applications</h2>

          <div className="use-case-grid">
            <div className="use-case-card">
              <h3>Energy Sector</h3>
              <p>
                Map SCADA component vulnerabilities to known threat actor campaigns targeting power generation and
                distribution systems. AI agents emulate APT groups to validate defenses.
              </p>
            </div>

            <div className="use-case-card">
              <h3>Manufacturing</h3>
              <p>
                Predict ransomware attack vectors through production line systems. Test incident response procedures
                with AI-driven scenario generation unique to your facility.
              </p>
            </div>

            <div className="use-case-card">
              <h3>Water & Wastewater</h3>
              <p>
                Identify chemical dosing system vulnerabilities before adversaries do. Validate safety instrumented
                system (SIS) protections against targeted attacks.
              </p>
            </div>

            <div className="use-case-card">
              <h3>Transportation</h3>
              <p>
                Test positive train control (PTC) system resilience against nation-state adversaries. Predict
                attack paths through integrated ticketing and signaling systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="aeon-cta">
        <div className="aeon-container">
          <h2>Experience AEON Cyber Digital Twin</h2>
          <p>
            See how our AI-powered platform transforms cybersecurity for critical infrastructure
          </p>
          <div className="aeon-cta__buttons">
            <Link to="/contact" className="btn-primary-large">Schedule Demo</Link>
            <Link to="/simulations/hydroelectric-dam" className="btn-secondary-large">Try Live Simulation</Link>
            <Link to="/articles" className="btn-tertiary">Read Technical Articles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AEONCyberTwinPage;
