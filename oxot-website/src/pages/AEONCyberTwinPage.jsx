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
              <h3 className="force-card__title">Agent Red - Autonomous Offensive Operations</h3>
              <p className="force-card__subtitle">AI Agents with Full Framework Autonomy</p>
              <ul className="force-card__features">
                <li>Autonomous Metasploit, BloodHound, Responder execution</li>
                <li>Agent-to-Agent (A2A) protocol for coordinated attacks</li>
                <li>Deploy and operate on compromised systems</li>
                <li>Real-time intelligence from AEON knowledge base</li>
                <li>OSINT-driven obscure attack path discovery</li>
                <li>Threat actor persona emulation with authentic TTPs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="aeon-capabilities">
        <div className="aeon-container">
          <h2 className="section-title">Fully Operational Advanced Capabilities</h2>
          <p className="section-subtitle">
            Agent Red autonomously executes offensive frameworks with 20+ hop graph intelligence - production-ready today
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
                <div className="capability-card__icon">🤖</div>
                <h3>Agent Red - Autonomous Framework Execution</h3>
              </div>
              <p>
                Fully operational AI agents autonomously execute Metasploit, BloodHound, Responder, and other frameworks
                in coordinated attacks. Agents communicate via A2A protocol, deploy onto compromised systems, and query
                AEON's knowledge base for latest attack paths, exploits, and TTPs.
              </p>
              <ul className="capability-list">
                <li>Autonomous Metasploit & BloodHound operations</li>
                <li>Responder, Mimikatz, Empire framework control</li>
                <li>Agent-to-Agent (A2A) coordination protocol</li>
                <li>Deploy and persist on compromised systems</li>
                <li>Live AEON intelligence integration</li>
                <li>Multi-agent swarm tactics</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">🔍</div>
                <h3>OSINT & Obscure Path Discovery</h3>
              </div>
              <p>
                Integrated OSINT engine identifies specific equipment, personnel, technologies, and suppliers to
                discover obscure attack paths into facilities. Maps vendor relationships, supply chains, contractor
                access, and third-party dependencies for comprehensive red team exercises.
              </p>
              <ul className="capability-list">
                <li>Equipment & technology fingerprinting</li>
                <li>Personnel & organizational mapping</li>
                <li>Supplier & vendor relationship analysis</li>
                <li>Contractor and third-party access paths</li>
                <li>Physical facility reconnaissance correlation</li>
                <li>Social engineering vector identification</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-card__header">
                <div className="capability-card__icon">🛠️</div>
                <h3>Live Attack Intelligence Knowledge Base</h3>
              </div>
              <p>
                Agent Red queries AEON's continuously updated knowledge base for the latest attack paths, techniques,
                vulnerabilities, exploits, and TTPs. Real-time intelligence ensures agents deploy current threats
                relevant to your specific infrastructure and threat landscape.
              </p>
              <ul className="capability-list">
                <li>Latest CVEs with active exploits</li>
                <li>Current threat actor TTPs & campaigns</li>
                <li>Sector-specific attack techniques</li>
                <li>Zero-day and N-day exploit intelligence</li>
                <li>Tool and framework updates</li>
                <li>Adaptive attack strategy recommendations</li>
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
                <li>CVE/Vulnerability Database (Live Updates)</li>
                <li>Exploit Intelligence (PoC & Active Exploits)</li>
                <li>MITRE ATT&CK Framework Integration</li>
                <li>Threat Actor Profiles & Current TTPs</li>
                <li>OSINT Engine (Equipment, People, Suppliers)</li>
                <li>Attack Path & Technique Database</li>
                <li>Sector-Specific Architecture Models</li>
              </ul>
            </div>

            <div className="layer-card">
              <h3>Execution Layer - Agent Red</h3>
              <ul>
                <li>Autonomous AI Agents (Fully Operational)</li>
                <li>Agent-to-Agent (A2A) Coordination Protocol</li>
                <li>Metasploit, BloodHound, Responder Autonomy</li>
                <li>Deploy & Persist on Compromised Systems</li>
                <li>Custom Exploit Generator</li>
                <li>Multi-Environment Support (IT/OT)</li>
                <li>Live Intelligence Query from Knowledge Base</li>
                <li>Goal-Oriented Red Team Framework</li>
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
                OSINT engine identifies specific SCADA equipment vendors, contractor access points, and third-party
                maintenance systems. Agent Red autonomously executes Metasploit against identified paths while
                coordinating with multiple AI agents via A2A protocol to emulate APT campaigns.
              </p>
            </div>

            <div className="use-case-card">
              <h3>Manufacturing</h3>
              <p>
                Discover obscure attack paths through PLC suppliers, integrator remote access, and vendor VPN
                connections via OSINT. Agent Red deploys BloodHound and Responder on IT systems, then pivots
                to industrial floor using latest exploits from AEON knowledge base.
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
