import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesPage.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const serviceRefs = useRef([]);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    // Animate service sections on scroll
    serviceRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__container">
          <div className="services-hero__badge">COMPREHENSIVE SERVICES</div>
          <h1 className="services-hero__title">
            End-to-End Cybersecurity Services for Critical Infrastructure
          </h1>
          <p className="services-hero__subtitle">
            OXOT provides the full spectrum of OT/ICS cybersecurity services, from initial assessment through
            continuous monitoring and incident response. Our services are specifically designed for critical
            infrastructure operators who demand the highest levels of security and operational continuity.
          </p>
          <div className="services-hero__stats">
            <div className="hero-stat">
              <div className="hero-stat__value">7</div>
              <div className="hero-stat__label">Service Categories</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__value">IEC 62443</div>
              <div className="hero-stat__label">Certified Expertise</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__value">24/7</div>
              <div className="hero-stat__label">Operations Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="services-overview">
        <div className="services-overview__container">
          <h2 className="services-overview__title">Service Portfolio</h2>
          <p className="services-overview__description">
            Our comprehensive service portfolio addresses every aspect of critical infrastructure cybersecurity,
            from proactive assessment and testing to crisis management and workforce development. Each service
            is delivered by experts with deep operational technology experience and a commitment to minimizing
            disruption while maximizing security outcomes.
          </p>
          <div className="services-grid-compact">
            <div className="service-quick-card" onClick={() => setActiveService('assurance')}>
              <div className="service-quick-card__number">01</div>
              <h4>Cyber Assurance & Testing</h4>
              <p>Risk assessments, penetration testing, IEC 62443 compliance</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('crisis')}>
              <div className="service-quick-card__number">02</div>
              <h4>Crisis Management</h4>
              <p>24/7 incident response, crisis exercises, forensics</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('engineering')}>
              <div className="service-quick-card__number">03</div>
              <h4>Cyber Engineering</h4>
              <p>Security architecture, IAM, digital twin integration</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('training')}>
              <div className="service-quick-card__number">04</div>
              <h4>Training & Awareness</h4>
              <p>Cyber Defender certification, hands-on programs</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('ai-testing')}>
              <div className="service-quick-card__number">05</div>
              <h4>Adversarial AI Testing</h4>
              <p>AI-powered threat hunting, sector intelligence</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('ai-solutions')}>
              <div className="service-quick-card__number">06</div>
              <h4>AI Solutions</h4>
              <p>Process optimization, predictive analytics, ML</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('supply-chain')}>
              <div className="service-quick-card__number">07</div>
              <h4>Supply Chain Assurance</h4>
              <p>Vendor risk, secure access, threat monitoring</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Cyber Assurance, Testing & Validation */}
      <section
        className="service-detail-section service-detail-section--dark"
        ref={(el) => (serviceRefs.current[0] = el)}
      >
        <div className="service-detail__container">
          <div className="service-detail__header">
            <span className="service-detail__number">SERVICE 01</span>
            <h2 className="service-detail__title">Cyber Assurance, Testing & Validation</h2>
            <p className="service-detail__subtitle">
              Comprehensive Security Assessment Tailored for OT/ICS Environments
            </p>
          </div>

          <div className="service-detail__content">
            <div className="service-detail__intro">
              <p>
                OXOT's Cyber Assurance, Testing & Validation services provide critical infrastructure operators
                with comprehensive security assessments that go far beyond traditional IT security testing.
                Our approach recognizes the unique constraints and requirements of operational technology
                environments, where system availability and safety are paramount. We employ a risk-based methodology
                aligned with <strong>IEC 62443 standards</strong>, ensuring that our testing activities enhance security
                without compromising operational continuity.
              </p>
              <p>
                Our team brings deep expertise in SCADA systems, distributed control systems (DCS), programmable
                logic controllers (PLCs), and the industrial protocols that connect them. This operational knowledge,
                combined with advanced penetration testing techniques, allows us to identify vulnerabilities that
                traditional IT security assessments often miss. We understand the difference between a vulnerability
                in a corporate network and one in a system controlling a power plant turbine or a water treatment
                facility—and we tailor our testing methodology accordingly.
              </p>
            </div>

            <div className="service-capabilities-section">
              <h3>Core Capabilities</h3>
              <div className="capabilities-three-column">
                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🎯</div>
                  <h4>Risk & Threat Assessments</h4>
                  <p>
                    Comprehensive risk assessments following the IEC 62443-3-2 methodology, including threat
                    modeling, asset criticality analysis, and security level target (SL-T) determination. Our
                    assessments provide actionable intelligence that helps prioritize security investments and
                    remediation efforts based on actual operational risk.
                  </p>
                  <ul>
                    <li>Zone-Conduit-Role (ZCR) architecture analysis</li>
                    <li>Asset inventory and criticality scoring</li>
                    <li>Threat actor profiling and capability assessment</li>
                    <li>Security level gap analysis (SL-T vs SL-C vs SL-A)</li>
                    <li>Compliance mapping (NERC CIP, NIS2, TSA directives)</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🛡️</div>
                  <h4>Defense Validation (Red Team)</h4>
                  <p>
                    Adversarial testing designed specifically for OT/ICS environments, simulating real-world
                    attack scenarios from nation-state actors, cybercriminals, and insider threats. Our Red Team
                    exercises validate the effectiveness of existing security controls while identifying gaps
                    in detection and response capabilities without disrupting critical operations.
                  </p>
                  <ul>
                    <li>Purple team exercises (collaborative red/blue)</li>
                    <li>OT-specific attack scenario simulation</li>
                    <li>Supply chain compromise testing</li>
                    <li>Insider threat scenario validation</li>
                    <li>Detection capability assessment</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🔍</div>
                  <h4>Penetration Testing for ICS/OT</h4>
                  <p>
                    Safe, controlled penetration testing of industrial control systems using methodologies
                    specifically designed to avoid operational disruption. We employ a phased approach that
                    begins with passive reconnaissance and advances to active testing only after establishing
                    appropriate safety controls and obtaining stakeholder approval.
                  </p>
                  <ul>
                    <li>Non-intrusive passive network assessment</li>
                    <li>Protocol fuzzing and manipulation testing</li>
                    <li>HMI and engineering workstation assessment</li>
                    <li>PLC and RTU vulnerability testing</li>
                    <li>Wireless and radio frequency analysis</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">✓</div>
                  <h4>Vulnerability Assessments</h4>
                  <p>
                    Comprehensive vulnerability identification and prioritization using both automated scanning
                    tools adapted for OT environments and manual analysis by experienced engineers. We go beyond
                    simple CVE identification to understand the operational context and exploitability of each
                    finding within your specific infrastructure.
                  </p>
                  <ul>
                    <li>Authenticated and unauthenticated scanning</li>
                    <li>Configuration baseline review</li>
                    <li>Patch management assessment</li>
                    <li>Legacy system vulnerability analysis</li>
                    <li>Compensating controls evaluation</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">⚔️</div>
                  <h4>Gold Team Techniques</h4>
                  <p>
                    Advanced adversary emulation that replicates the tactics, techniques, and procedures (TTPs)
                    of known threat actors targeting critical infrastructure. Gold Team exercises provide deep
                    insights into organizational resilience against sophisticated, persistent adversaries including
                    nation-state actors documented in frameworks like MITRE ATT&CK for ICS.
                  </p>
                  <ul>
                    <li>APT emulation (Sandworm, Volt Typhoon, etc.)</li>
                    <li>Living-off-the-land techniques</li>
                    <li>Supply chain compromise scenarios</li>
                    <li>Ransomware deployment simulation</li>
                    <li>Long-term persistence testing</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">📋</div>
                  <h4>IEC 62443 Compliance Testing</h4>
                  <p>
                    Formal compliance assessments against IEC 62443 requirements, providing evidence-based
                    validation of security controls and processes. Our assessments support certification efforts
                    and provide clear roadmaps for addressing gaps between current state and desired security
                    level targets.
                  </p>
                  <ul>
                    <li>IEC 62443-2-1 (CSMS) program assessment</li>
                    <li>IEC 62443-3-3 system security requirements validation</li>
                    <li>IEC 62443-4-2 component security testing</li>
                    <li>Security level achievement (SL-A) verification</li>
                    <li>Artifact and evidence collection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-methodology">
              <h3>Our Methodology</h3>
              <div className="methodology-timeline">
                <div className="methodology-step">
                  <div className="methodology-step__number">1</div>
                  <div className="methodology-step__content">
                    <h4>Planning & Scoping</h4>
                    <p>Collaborative definition of testing scope, safety constraints, and success criteria</p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">2</div>
                  <div className="methodology-step__content">
                    <h4>Passive Reconnaissance</h4>
                    <p>Non-intrusive information gathering and baseline establishment</p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">3</div>
                  <div className="methodology-step__content">
                    <h4>Active Assessment</h4>
                    <p>Controlled testing with continuous safety monitoring and stakeholder communication</p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">4</div>
                  <div className="methodology-step__content">
                    <h4>Analysis & Reporting</h4>
                    <p>Comprehensive findings with prioritized remediation recommendations</p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">5</div>
                  <div className="methodology-step__content">
                    <h4>Validation & Support</h4>
                    <p>Remediation validation and ongoing security posture improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Crisis Management & Incident Response */}
      <section
        className="service-detail-section service-detail-section--light"
        ref={(el) => (serviceRefs.current[1] = el)}
      >
        <div className="service-detail__container">
          <div className="service-detail__header">
            <span className="service-detail__number">SERVICE 02</span>
            <h2 className="service-detail__title">Crisis Management & Incident Response</h2>
            <p className="service-detail__subtitle">
              24/7 Support for Critical Operations Defense and Recovery
            </p>
          </div>

          <div className="service-detail__content">
            <div className="service-detail__intro">
              <p>
                When a cybersecurity incident impacts critical infrastructure, every second counts. OXOT's Crisis
                Management and Incident Response services provide rapid, expert support specifically designed for
                operational technology environments where traditional IT incident response approaches can be
                insufficient or even dangerous. Our team combines deep OT/ICS technical expertise with crisis
                management experience, ensuring that response activities prioritize operational safety and continuity
                while effectively containing and remediating security threats.
              </p>
              <p>
                We understand that a cybersecurity incident in critical infrastructure is fundamentally different from
                a corporate IT breach. The potential consequences—from cascading failures in power grids to safety
                system malfunctions in manufacturing plants—require a response approach that balances cybersecurity
                objectives with operational imperatives. Our incident response methodology, developed through real-world
                engagements across Energy, Manufacturing, Water, and Transportation sectors, ensures that we can
                effectively support organizations through their most challenging moments.
              </p>
            </div>

            <div className="service-capabilities-section">
              <h3>Comprehensive Crisis Support</h3>
              <div className="capabilities-three-column">
                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">📞</div>
                  <h4>24/7 Emergency Hotline</h4>
                  <p>
                    Immediate access to senior incident response engineers with OT/ICS expertise. Our emergency
                    response team can be onsite or remotely engaged within hours of initial contact, providing
                    critical support during the crucial early stages of an incident.
                  </p>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🔬</div>
                  <h4>Forensic Analysis</h4>
                  <p>
                    Deep technical investigation of security incidents using forensic techniques adapted for
                    industrial control systems. We preserve evidence while determining attack vectors, lateral
                    movement paths, and operational impact.
                  </p>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🎭</div>
                  <h4>Crisis Exercises</h4>
                  <p>
                    Tabletop exercises and full-scale simulations designed to test organizational readiness
                    for cyber incidents. Our exercises incorporate realistic OT attack scenarios including
                    ransomware, supply chain compromise, and targeted APT campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-highlight-box">
              <h3>Recent Incident Response Statistics</h3>
              <div className="stats-grid-four">
                <div className="stat-box">
                  <div className="stat-box__value">&lt; 2 hrs</div>
                  <div className="stat-box__label">Average Initial Response Time</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__value">70%</div>
                  <div className="stat-box__label">Manufacturing Ransomware Attacks</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__value">100%</div>
                  <div className="stat-box__label">Successful Containment Rate</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__value">24/7/365</div>
                  <div className="stat-box__label">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Services - Condensed but Professional */}
      <section className="services-condensed">
        <div className="services-condensed__container">
          {/* Service 3 */}
          <div className="service-condensed-card" ref={(el) => (serviceRefs.current[2] = el)}>
            <div className="service-condensed-card__header">
              <span className="service-condensed-card__number">03</span>
              <h3>Cyber Engineering & Integration</h3>
            </div>
            <p>
              Security architecture design and implementation for critical infrastructure, including secure facility
              design, identity and access management (IAM), digital twin modeling, and network segmentation using
              IEC 62443 Zone-Conduit-Role methodology for defense-in-depth protection.
            </p>
            <div className="service-condensed-card__features">
              <span>Secure Facility Design</span>
              <span>Identity & Access Management</span>
              <span>Digital Twin Integration</span>
              <span>ZCR Architecture</span>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-condensed-card" ref={(el) => (serviceRefs.current[3] = el)}>
            <div className="service-condensed-card__header">
              <span className="service-condensed-card__number">04</span>
              <h3>Cyber Technology Training & Awareness</h3>
            </div>
            <p>
              Specialized training programs for operational technology environments, from security awareness to
              hands-on technical training for cyber defenders. Our flagship Cyber Defender First Responder
              certification program prepares operators to recognize and respond to OT-specific cyber threats.
            </p>
            <div className="service-condensed-card__features">
              <span>Cyber Defender Certification</span>
              <span>Hands-On Labs</span>
              <span>IEC 62443 Training</span>
              <span>Security Awareness</span>
            </div>
          </div>

          {/* Service 5 */}
          <div className="service-condensed-card" ref={(el) => (serviceRefs.current[4] = el)}>
            <div className="service-condensed-card__header">
              <span className="service-condensed-card__number">05</span>
              <h3>Adversarial AI-Based Cyber Defense Testing</h3>
            </div>
            <p>
              Advanced threat intelligence and testing using AI-driven techniques to identify vulnerabilities and
              assess operational impact. Our AI-powered approach enables predictive threat hunting and continuous
              threat landscape monitoring tailored to your sector and operational profile.
            </p>
            <div className="service-condensed-card__features">
              <span>AI-Powered Threat Hunting</span>
              <span>Sector Intelligence</span>
              <span>Impact Assessment</span>
              <span>Predictive Analytics</span>
            </div>
          </div>

          {/* Service 6 */}
          <div className="service-condensed-card" ref={(el) => (serviceRefs.current[5] = el)}>
            <div className="service-condensed-card__header">
              <span className="service-condensed-card__number">06</span>
              <h3>Artificial Intelligence Solutions</h3>
            </div>
            <p>
              AI and machine learning applications for cybersecurity, process optimization, and operational support
              in critical infrastructure environments. From General Adversarial Networks (GANs) to predictive
              analytics, our AI solutions enhance both security and operational efficiency.
            </p>
            <div className="service-condensed-card__features">
              <span>Process Optimization</span>
              <span>Predictive Analytics</span>
              <span>ML Threat Detection</span>
              <span>Operational Intelligence</span>
            </div>
          </div>

          {/* Service 7 */}
          <div className="service-condensed-card" ref={(el) => (serviceRefs.current[6] = el)}>
            <div className="service-condensed-card__header">
              <span className="service-condensed-card__number">07</span>
              <h3>Supply Chain Assurance</h3>
            </div>
            <p>
              Comprehensive supply chain security services including vendor risk assessment, secure remote access
              implementation, privileged access management (PAM), data diode solutions, and continuous supply chain
              threat monitoring. Critical infrastructure operators face unique supply chain risks—we help mitigate them.
            </p>
            <div className="service-condensed-card__features">
              <span>Vendor Risk Assessment</span>
              <span>Secure Remote Access</span>
              <span>PAM Implementation</span>
              <span>Threat Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why OXOT Services */}
      <section className="services-why-oxot">
        <div className="services-why-oxot__container">
          <h2>Why Choose OXOT for Your Cybersecurity Services</h2>
          <div className="why-oxot-grid">
            <div className="why-oxot-card">
              <h4>OT/ICS Expertise</h4>
              <p>
                Our team brings decades of combined experience in operational technology environments. We speak
                the language of operators and understand the constraints and requirements unique to critical
                infrastructure.
              </p>
            </div>
            <div className="why-oxot-card">
              <h4>IEC 62443 Authority</h4>
              <p>
                OXOT is recognized as a leader in IEC 62443 implementation, with deep expertise across all parts
                of the standard from CSMS development to component certification.
              </p>
            </div>
            <div className="why-oxot-card">
              <h4>Proven Methodologies</h4>
              <p>
                Our approaches have been refined through hundreds of engagements across Energy, Manufacturing,
                Water, and Transportation sectors. We know what works in real operational environments.
              </p>
            </div>
            <div className="why-oxot-card">
              <h4>24/7 Availability</h4>
              <p>
                Critical infrastructure never sleeps, and neither do we. Our incident response team is available
                around the clock to support you through security events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="services-final-cta">
        <div className="services-final-cta__container">
          <h2>Partner with OXOT for Comprehensive Cybersecurity</h2>
          <p>
            Our services can be engaged individually or combined into a comprehensive security program tailored
            to your specific operational environment and risk profile. Contact us to discuss how OXOT can support
            your critical infrastructure protection objectives.
          </p>
          <Link to="/contact" className="services-final-cta__button">
            Schedule a Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
