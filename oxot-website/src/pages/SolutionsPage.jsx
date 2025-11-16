import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SolutionsPage.css';

gsap.registerPlugin(ScrollTrigger);

const SolutionsPage = () => {
  const solutionRefs = useRef([]);

  useEffect(() => {
    // Animate solution sections on scroll
    solutionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="solutions-page">
      {/* Page Header */}
      <div className="page-header page-header--solutions">
        <div className="page-header__container">
          <h1 className="page-header__title">Advanced Solutions for Critical Infrastructure</h1>
          <p className="page-header__subtitle">
            Comprehensive cybersecurity solutions designed for the most demanding operational environments
          </p>
        </div>
      </div>

      {/* AEON Cyber Digital Twin - FEATURED SOLUTION */}
      <section
        className="solution-section solution-section--featured"
        ref={(el) => (solutionRefs.current[0] = el)}
      >
        <div className="solution-section__container">
          <div className="solution-header solution-header--aeon">
            <div className="solution-badge solution-badge--featured">CORNERSTONE SOLUTION</div>
            <h2 className="solution-title">AEON Cyber Digital Twin</h2>
            <p className="solution-subtitle">
              Bridging Operations and Security Through Advanced Visualization
            </p>
          </div>

          <div className="solution-intro">
            <p className="solution-intro__text">
              The AEON Cyber Digital Twin represents a paradigm shift in critical infrastructure protection.
              By creating a unified, real-time digital representation of your OT/IT environment, AEON enables
              unprecedented visibility into operational resilience, threat landscapes, and system health.
              Featuring <strong>Jim McKenney's groundbreaking grid stability analysis</strong>, AEON addresses
              the most pressing challenges facing modern critical infrastructure operators.
            </p>
          </div>

          {/* Jim McKenney Grid Analysis Feature */}
          <div className="solution-feature-highlight">
            <div className="feature-highlight__content">
              <div className="feature-highlight__badge">THOUGHT LEADERSHIP</div>
              <h3 className="feature-highlight__title">
                Grid Stability Analysis: Understanding "Death Wobble"
              </h3>
              <p className="feature-highlight__author">By Jim McKenney</p>
              <blockquote className="feature-highlight__quote">
                "We are witnessing a decline in the system's inherent physical stability, a consequence of
                replacing traditional power plants with new, inverter-based technologies. This isn't merely
                an engineering footnote; it's a critical management challenge with profound implications for
                national security, economic continuity, and public safety."
              </blockquote>
              <p className="feature-highlight__description">
                AEON's grid stability module incorporates Jim McKenney's research on frequency instability,
                Rate of Change of Frequency (RoCoF), and the challenges of renewable integration. By monitoring
                grid frequency dynamics in real-time, AEON helps operators detect and respond to the dangerous
                "wobble" that threatens cascading failures across critical infrastructure.
              </p>
              <div className="feature-highlight__metrics">
                <div className="metric">
                  <div className="metric__value">60 Hz</div>
                  <div className="metric__label">Target Grid Frequency</div>
                </div>
                <div className="metric">
                  <div className="metric__value">&gt;1 Hz/s</div>
                  <div className="metric__label">Critical RoCoF Threshold</div>
                </div>
                <div className="metric">
                  <div className="metric__value">Real-Time</div>
                  <div className="metric__label">Frequency Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          {/* AEON Core Capabilities */}
          <div className="solution-capabilities">
            <h3 className="solution-capabilities__title">Core Capabilities</h3>
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="capability-card__icon">📊</div>
                <h4 className="capability-card__title">Unified OT/IT Visibility</h4>
                <p className="capability-card__description">
                  Real-time digital representation of your entire critical infrastructure environment,
                  bridging the gap between operational technology and information technology systems.
                </p>
                <ul className="capability-card__features">
                  <li>Asset inventory and relationship mapping</li>
                  <li>Network topology visualization</li>
                  <li>System dependency analysis</li>
                  <li>Change detection and alerting</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🔬</div>
                <h4 className="capability-card__title">Grid Stability Analysis</h4>
                <p className="capability-card__description">
                  Advanced monitoring and analysis of grid frequency dynamics, incorporating Jim McKenney's
                  research on inverter-based resource integration and cascading failure prevention.
                </p>
                <ul className="capability-card__features">
                  <li>Real-time frequency monitoring (60 Hz baseline)</li>
                  <li>Rate of Change of Frequency (RoCoF) detection</li>
                  <li>Inertia degradation tracking</li>
                  <li>Protection system misoperation alerts</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🎯</div>
                <h4 className="capability-card__title">Predictive Threat Intelligence</h4>
                <p className="capability-card__description">
                  AI-powered threat hunting and predictive analytics that understand operational context,
                  enabling proactive defense against both cyber and operational threats.
                </p>
                <ul className="capability-card__features">
                  <li>Behavioral anomaly detection</li>
                  <li>Threat correlation with operational impact</li>
                  <li>Predictive failure analysis</li>
                  <li>Attack surface mapping</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">⚡</div>
                <h4 className="capability-card__title">Operational Resilience Tracking</h4>
                <p className="capability-card__description">
                  Continuous assessment of system resilience, identifying vulnerabilities before they
                  can be exploited and ensuring operational continuity under all conditions.
                </p>
                <ul className="capability-card__features">
                  <li>Resilience scoring and trending</li>
                  <li>Failure mode analysis</li>
                  <li>Recovery time estimation</li>
                  <li>Redundancy verification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="solution-applications">
            <h3 className="solution-applications__title">Industry Applications</h3>
            <div className="applications-grid">
              <div className="application-card">
                <h4>Energy Sector</h4>
                <p>
                  Grid stability monitoring, DER integration security, smart meter orchestration,
                  and renewable energy system protection.
                </p>
              </div>
              <div className="application-card">
                <h4>Manufacturing</h4>
                <p>
                  Production line monitoring, ICS security, supply chain visibility, and quality
                  control system protection.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="solution-cta">
            <p className="solution-cta__text">
              Discover how AEON Cyber Digital Twin can transform your critical infrastructure protection
            </p>
            <Link to="/contact" className="solution-cta__button">
              Schedule a Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Breach Disclosure Mitigation */}
      <section className="solution-section" ref={(el) => (solutionRefs.current[1] = el)}>
        <div className="solution-section__container">
          <div className="solution-header">
            <h2 className="solution-title">Breach Disclosure Mitigation</h2>
            <p className="solution-subtitle">
              Transforming Incident Response Through Legal-Grade Privacy
            </p>
          </div>

          <div className="solution-intro">
            <p className="solution-intro__text">
              OXOT's Breach Disclosure Mitigation solution redefines how organizations handle security incidents,
              creating a protected environment where incident response becomes a strategic advantage rather than
              a liability risk. Through our proprietary <strong>True Diligence™ Framework</strong>, we provide
              attorney-client privilege protection for security operations, enabling transparent investigation
              without the fear of disclosure obligations.
            </p>
          </div>

          <div className="solution-capabilities">
            <h3 className="solution-capabilities__title">The True Diligence™ Advantage</h3>
            <div className="capabilities-grid capabilities-grid--two-column">
              <div className="capability-card">
                <div className="capability-card__icon">🛡️</div>
                <h4 className="capability-card__title">Protected Security Telemetry</h4>
                <p className="capability-card__description">
                  All security telemetry, investigation findings, and incident response activities are
                  protected under attorney-client privilege, shielding sensitive information from
                  disclosure requirements.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🤖</div>
                <h4 className="capability-card__title">AI-Powered Disclosure Risk Analysis</h4>
                <p className="capability-card__description">
                  Advanced AI algorithms analyze potential disclosure obligations, regulatory requirements,
                  and contractual commitments to provide real-time guidance on communication strategies.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">👔</div>
                <h4 className="capability-card__title">Executive Liability Protection</h4>
                <p className="capability-card__description">
                  Comprehensive framework that protects C-suite executives and board members from personal
                  liability related to security incidents and breach disclosures.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🎭</div>
                <h4 className="capability-card__title">Crisis Management Orchestration</h4>
                <p className="capability-card__description">
                  Coordinated response across legal, technical, communications, and executive teams,
                  ensuring consistent messaging and strategic decision-making throughout the incident lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Defender Program */}
      <section className="solution-section" ref={(el) => (solutionRefs.current[2] = el)}>
        <div className="solution-section__container">
          <div className="solution-header">
            <h2 className="solution-title">Cyber Defender Program</h2>
            <p className="solution-subtitle">
              Comprehensive Cybersecurity for Electric Cooperatives and Critical Infrastructure
            </p>
          </div>

          <div className="solution-intro">
            <p className="solution-intro__text">
              The Cyber Defender Program is specifically designed for <strong>Electric Cooperatives</strong>
              and critical infrastructure operators facing the unique challenges of protecting smart grids,
              distributed energy resources (DER), and operational technology environments. This comprehensive
              program combines advanced technology, expert services, and workforce development to create a
              robust security posture.
            </p>
          </div>

          <div className="solution-capabilities">
            <h3 className="solution-capabilities__title">Program Components</h3>
            <div className="capabilities-grid capabilities-grid--three-column">
              <div className="capability-card">
                <div className="capability-card__icon">⚡</div>
                <h4 className="capability-card__title">Smart Grid & DER Protection</h4>
                <p className="capability-card__description">
                  Specialized security for smart meters, microgrids, renewable integration points,
                  and distributed energy resource management systems.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🔍</div>
                <h4 className="capability-card__title">24/7 SOC Monitoring</h4>
                <p className="capability-card__description">
                  Dedicated security operations center with OT/ICS expertise providing continuous
                  monitoring, threat detection, and incident response.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">📚</div>
                <h4 className="capability-card__title">Workforce Development</h4>
                <p className="capability-card__description">
                  Comprehensive training programs including Cyber Defender First Responder certification,
                  hands-on exercises, and continuous learning opportunities.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">📋</div>
                <h4 className="capability-card__title">NERC CIP Compliance</h4>
                <p className="capability-card__description">
                  Expert guidance and support for NERC CIP compliance, including assessment, remediation,
                  and ongoing compliance monitoring.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🔌</div>
                <h4 className="capability-card__title">OT/ICS Security Expertise</h4>
                <p className="capability-card__description">
                  Deep expertise in SCADA, DCS, PLC, and other industrial control systems commonly used
                  in power distribution and generation environments.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🌐</div>
                <h4 className="capability-card__title">Network Segmentation</h4>
                <p className="capability-card__description">
                  IEC 62443-compliant network architecture design and implementation using Zone-Conduit-Role
                  (ZCR) methodology for defense-in-depth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidential SOC-as-a-Service */}
      <section className="solution-section" ref={(el) => (solutionRefs.current[3] = el)}>
        <div className="solution-section__container">
          <div className="solution-header">
            <h2 className="solution-title">Confidential SOC-as-a-Service</h2>
            <p className="solution-subtitle">
              Privacy-First Security Operations with Attorney-Client Privilege
            </p>
          </div>

          <div className="solution-intro">
            <p className="solution-intro__text">
              OXOT's Confidential SOC-as-a-Service revolutionizes security operations by combining
              enterprise-grade protection with unprecedented privacy guarantees. Operated under
              <strong> attorney-client privilege</strong>, our SOC provides complete confidentiality
              while delivering the advanced threat detection, incident response, and compliance support
              that critical infrastructure operators require.
            </p>
          </div>

          <div className="solution-capabilities">
            <h3 className="solution-capabilities__title">Service Features</h3>
            <div className="capabilities-grid capabilities-grid--two-column">
              <div className="capability-card">
                <div className="capability-card__icon">🔒</div>
                <h4 className="capability-card__title">Legal Privacy Protection</h4>
                <p className="capability-card__description">
                  All security operations, investigations, and findings are protected under attorney-client
                  privilege, ensuring complete confidentiality and preventing forced disclosure.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🤖</div>
                <h4 className="capability-card__title">AI-Driven Threat Intelligence</h4>
                <p className="capability-card__description">
                  Advanced machine learning and AI algorithms analyze threat patterns, predict attack vectors,
                  and provide actionable intelligence tailored to your operational environment.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">⏱️</div>
                <h4 className="capability-card__title">24/7 Monitoring & Response</h4>
                <p className="capability-card__description">
                  Round-the-clock security operations with immediate incident response capabilities,
                  staffed by experts in both IT and OT/ICS environments.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🎯</div>
                <h4 className="capability-card__title">Predictive Threat Hunting</h4>
                <p className="capability-card__description">
                  Proactive threat hunting using behavioral analytics, threat intelligence, and operational
                  context to identify and neutralize threats before they impact operations.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">📈</div>
                <h4 className="capability-card__title">Scalable Deployment</h4>
                <p className="capability-card__description">
                  Flexible deployment options that scale with your organization, from single-site operations
                  to multi-region critical infrastructure networks.
                </p>
              </div>

              <div className="capability-card">
                <div className="capability-card__icon">🔄</div>
                <h4 className="capability-card__title">Infrastructure Integration</h4>
                <p className="capability-card__description">
                  Seamless integration with existing security tools, SIEM platforms, and operational
                  technology systems without disrupting critical operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Comparison */}
      <section className="solutions-comparison">
        <div className="solutions-comparison__container">
          <h2 className="solutions-comparison__title">Choosing the Right Solution</h2>
          <p className="solutions-comparison__subtitle">
            All solutions can be deployed individually or combined for comprehensive protection
          </p>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Best For Visibility</h4>
              <p>AEON Cyber Digital Twin</p>
              <span className="comparison-arrow">→</span>
            </div>
            <div className="comparison-card">
              <h4>Best For Privacy</h4>
              <p>Breach Disclosure Mitigation & Confidential SOC</p>
              <span className="comparison-arrow">→</span>
            </div>
            <div className="comparison-card">
              <h4>Best For Cooperatives</h4>
              <p>Cyber Defender Program</p>
              <span className="comparison-arrow">→</span>
            </div>
            <div className="comparison-card">
              <h4>Comprehensive Solution</h4>
              <p>All Four Solutions Integrated</p>
              <span className="comparison-arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="solutions-final-cta">
        <div className="solutions-final-cta__container">
          <h2>Transform Your Critical Infrastructure Protection</h2>
          <p>
            Schedule a consultation to discuss how OXOT's solutions can address your specific
            operational and security challenges.
          </p>
          <Link to="/contact" className="solutions-final-cta__button">
            Contact OXOT →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
