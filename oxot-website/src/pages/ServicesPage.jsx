import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesPage.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesPage - Comprehensive OXOT Service Portfolio
 *
 * Complete catalog of OXOT's cybersecurity services including:
 * - 7 Core Service Categories
 * - 4 Integrated Solutions
 * - 3 Specialized Frameworks
 * - Industry-Specific Services
 *
 * Expanded from 1900 words to 4500+ words with deep service descriptions
 */
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
            OXOT provides the full spectrum of OT/ICS cybersecurity services. We cover everything from initial assessment through continuous monitoring and incident response. Our services are designed for critical infrastructure operators who demand uncompromising security and operational continuity.
          </p>
          <p className="services-hero__subtitle">
            We deliver solutions that protect critical assets while maintaining operational reliability and safety. Our team brings deep expertise in IEC 62443 standards, industrial protocols, and operational technologies.
          </p>
          <div className="services-hero__stats">
            <div className="hero-stat">
              <div className="hero-stat__value">7+</div>
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
            <div className="hero-stat">
              <div className="hero-stat__value">4</div>
              <div className="hero-stat__label">Critical Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="services-overview">
        <div className="services-overview__container">
          <h2 className="services-overview__title">Comprehensive Service Portfolio</h2>
          <p className="services-overview__description">
            Our portfolio addresses every aspect of critical infrastructure cybersecurity. We provide proactive assessment, testing, crisis management, workforce development, and AI-powered threat intelligence. Each service is delivered by experts with deep operational technology experience. We're committed to minimizing disruption while maximizing security outcomes.
          </p>

          <div className="services-grid-compact">
            <div className="service-quick-card" onClick={() => setActiveService('assurance')}>
              <div className="service-quick-card__number">01</div>
              <h4>Cyber Assurance & Testing</h4>
              <p>Risk assessments, penetration testing, IEC 62443 compliance validation</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('crisis')}>
              <div className="service-quick-card__number">02</div>
              <h4>Crisis Management</h4>
              <p>24/7 incident response, crisis exercises, forensics, breach disclosure</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('engineering')}>
              <div className="service-quick-card__number">03</div>
              <h4>Cyber Engineering</h4>
              <p>Security architecture, IAM, digital twin integration, network segmentation</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('training')}>
              <div className="service-quick-card__number">04</div>
              <h4>Training & Awareness</h4>
              <p>Cyber Defender certification, hands-on programs, IEC 62443 training</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('ai-testing')}>
              <div className="service-quick-card__number">05</div>
              <h4>Adversarial AI Testing</h4>
              <p>AI-powered threat hunting, sector intelligence, operational impact assessment</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('ai-solutions')}>
              <div className="service-quick-card__number">06</div>
              <h4>AI Solutions</h4>
              <p>Process optimization, predictive analytics, ML-driven threat detection</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
            <div className="service-quick-card" onClick={() => setActiveService('supply-chain')}>
              <div className="service-quick-card__number">07</div>
              <h4>Supply Chain Assurance</h4>
              <p>Vendor risk, secure access, SBOM requirements, continuous monitoring</p>
              <span className="service-quick-card__arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Cyber Assurance, Testing & Validation - EXPANDED */}
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
              <h4>Executive Summary</h4>
              <p>
                OXOT provides comprehensive security assessments for critical infrastructure operators. Our approach goes beyond traditional IT security testing. We recognize the unique constraints of operational technology environments. System availability, safety integrity, and operational continuity are paramount.
              </p>
              <p>
                We employ a risk-based methodology aligned with <strong>IEC 62443 standards</strong>. Our testing enhances security without compromising operational reliability. All assessments are designed specifically for environments where downtime isn't an option.
              </p>

              <h4>Why Traditional IT Testing Falls Short in OT</h4>
              <p>
                Our team brings deep expertise in industrial control systems. We understand SCADA systems, distributed control systems (DCS), programmable logic controllers (PLCs), and safety instrumented systems (SIS). We're experts in industrial protocols including Modbus, DNP3, IEC 61850, EtherNet/IP, and PROFINET.
              </p>
              <p>
                This operational knowledge combines with advanced penetration testing techniques. We identify vulnerabilities that traditional IT assessments routinely miss. We understand the critical difference between a corporate network vulnerability and one in a system controlling power generation, water treatment, or manufacturing.
              </p>
              <p>
                We tailor our testing methodology, tools, and reporting to your operational reality.
              </p>
            </div>

            <div className="service-capabilities-section">
              <h3>Core Capabilities</h3>
              <div className="capabilities-three-column">
                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🎯</div>
                  <h4>Risk & Threat Assessments</h4>
                  <p>
                    We conduct comprehensive risk assessments following <strong>IEC 62443-3-2</strong> methodology. This includes threat modeling, asset criticality analysis, and security level target (SL-T) determination.
                  </p>
                  <p>
                    Our assessments provide actionable intelligence. You can prioritize security investments and remediation efforts based on actual operational risk. We assess real threat actor capabilities targeting your sector.
                  </p>
                  <ul>
                    <li><strong>Zone-Conduit-Role (ZCR) architecture analysis</strong> - security zone definition and boundary protection</li>
                    <li>Asset inventory, classification, and criticality scoring using operational impact criteria</li>
                    <li>Threat actor profiling (APTs, ransomware groups, insiders) and capability assessment</li>
                    <li><strong>Security level gap analysis</strong> (SL-T vs SL-C vs SL-A) with remediation roadmap</li>
                    <li>Compliance mapping (NERC CIP, NIS2, TSA Pipeline/Rail directives, ISA standards)</li>
                    <li>Global, sector-specific, peer group, and facility-level threat landscape analysis</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🛡️</div>
                  <h4>Defense Validation (Red Team)</h4>
                  <p>
                    We provide adversarial testing designed specifically for OT/ICS environments. Our tests simulate real-world attack scenarios. We emulate nation-state actors like Sandworm and Volt Typhoon. We also simulate cybercriminals running ransomware operations and insider threats.
                  </p>
                  <p>
                    Our Red Team exercises validate your existing security controls. We identify gaps in detection and response capabilities. All testing is conducted without disrupting critical operations.
                  </p>
                  <ul>
                    <li><strong>Purple team exercises</strong> - collaborative red/blue team operations for enhanced learning</li>
                    <li>OT-specific attack scenario simulation (PLC manipulation, HMI compromise, SCADA takeover)</li>
                    <li>Supply chain compromise testing (vendor remote access exploitation, third-party pivoting)</li>
                    <li>Insider threat scenario validation (malicious operator, negligent engineer, compromised credentials)</li>
                    <li>Detection capability assessment and SIEM/IDS tuning recommendations</li>
                    <li>Scenario-based exercises against Energy, Manufacturing, Water, Transportation threat models</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🔍</div>
                  <h4>Penetration Testing for ICS/OT</h4>
                  <p>
                    We conduct safe, controlled penetration testing of industrial control systems. Our methodologies are specifically designed to avoid operational disruption. We employ a phased approach starting with passive reconnaissance.
                  </p>
                  <p>
                    We advance to active testing only after establishing safety controls. We obtain stakeholder approval first. OT/ICS subject matter experts are present during all testing windows.
                  </p>
                  <ul>
                    <li>Non-intrusive passive network assessment (traffic capture, protocol analysis, asset discovery)</li>
                    <li>Protocol fuzzing and manipulation testing (Modbus, DNP3, IEC 61850, OPC UA, BACnet)</li>
                    <li>HMI and engineering workstation assessment (credential harvesting, privilege escalation)</li>
                    <li>PLC, RTU, and IED vulnerability testing with configuration analysis</li>
                    <li>Wireless and radio frequency analysis (900 MHz SCADA radios, industrial WiFi)</li>
                    <li>Safety Instrumented System (SIS) boundary protection validation</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">✓</div>
                  <h4>Vulnerability Assessments</h4>
                  <p>
                    We provide comprehensive vulnerability identification and prioritization. We use automated scanning tools adapted for OT environments. We also conduct manual analysis by experienced engineers.
                  </p>
                  <p>
                    We go beyond simple CVE identification. We understand the operational context, exploitability, and cascading impact. Every finding is analyzed within your specific infrastructure and operational processes.
                  </p>
                  <ul>
                    <li>Authenticated and unauthenticated scanning using OT-safe tools (Nessus Industrial, Tenable.ot)</li>
                    <li>Configuration baseline review against CIS benchmarks and vendor hardening guides</li>
                    <li>Patch management assessment and compensating controls evaluation for legacy systems</li>
                    <li>Legacy system vulnerability analysis (Windows XP/7, unsupported OS, EOL PLCs)</li>
                    <li>Known Exploited Vulnerabilities (KEV) prioritization using CISA catalog</li>
                    <li>Operational risk scoring combining CVSS with asset criticality and exploitability</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">⚔️</div>
                  <h4>Gold Team Techniques</h4>
                  <p>
                    We conduct advanced adversary emulation. Our Gold Team replicates the tactics, techniques, and procedures (TTPs) of known threat actors. We focus on sophisticated, persistent adversaries targeting critical infrastructure.
                  </p>
                  <p>
                    Gold Team exercises provide deep insights into organizational resilience. We test defenses against nation-state actors documented in <strong>MITRE ATT&CK for ICS</strong>. You see exactly how your defenses perform against real-world adversaries.
                  </p>
                  <ul>
                    <li><strong>APT emulation</strong> - Sandworm, Volt Typhoon, Lazarus Group, APT33, Dragonfly/Energetic Bear</li>
                    <li>Living-off-the-land (LotL) techniques using legitimate tools (PsExec, PowerShell, RDP, WMI)</li>
                    <li>Supply chain compromise scenarios (watering hole, software update poisoning, hardware implants)</li>
                    <li>Ransomware deployment simulation (Conti, BlackCat, LockBit playbooks for OT targeting)</li>
                    <li>Long-term persistence testing (dormant implants, covert channels, C2 infrastructure)</li>
                    <li>Cyber-kinetic attack chains (manipulation → physical impact → cascading failure)</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">📋</div>
                  <h4>IEC 62443 Compliance Testing</h4>
                  <p>
                    We conduct formal compliance assessments against IEC 62443 requirements. Our assessments provide evidence-based validation of security controls and processes. We support ISASecure certification efforts.
                  </p>
                  <p>
                    We provide clear, actionable roadmaps. We identify gaps between current state (SL-C) and desired security level targets (SL-T). You get a prioritized plan to achieve compliance.
                  </p>
                  <ul>
                    <li><strong>IEC 62443-2-1 (CSMS)</strong> program assessment - all 25 artifacts and management activities</li>
                    <li><strong>IEC 62443-3-3</strong> system security requirements validation across 7 Foundational Requirements</li>
                    <li><strong>IEC 62443-4-2</strong> component security testing and certification support</li>
                    <li>Security level achievement (SL-A) verification with evidence collection</li>
                    <li>Artifact and documentation review for ISASecure SDLA, CSA, SSA certification</li>
                    <li>Gap analysis and remediation planning with cost-benefit analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-methodology">
              <h3>Our Phased Methodology</h3>
              <p className="methodology-intro">
                OXOT's testing methodology prioritizes operational safety throughout every phase. We collaborate closely with stakeholders. Our approach maximizes security insight while minimizing operational risk. Safety comes first, always.
              </p>
              <div className="methodology-timeline">
                <div className="methodology-step">
                  <div className="methodology-step__number">1</div>
                  <div className="methodology-step__content">
                    <h4>Planning & Scoping</h4>
                    <p>
                      We collaboratively define testing scope, safety constraints, and success criteria. We establish communication protocols. This includes Rules of Engagement (RoE) development, stakeholder identification, and emergency stop procedures.
                    </p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">2</div>
                  <div className="methodology-step__content">
                    <h4>Passive Reconnaissance</h4>
                    <p>
                      We conduct non-intrusive information gathering. We analyze network traffic, discover assets, and establish baselines. Passive monitoring techniques pose zero risk to operations.
                    </p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">3</div>
                  <div className="methodology-step__content">
                    <h4>Active Assessment</h4>
                    <p>
                      We conduct controlled testing with continuous safety monitoring. We maintain real-time stakeholder communication. Our phased approach allows immediate halt if any operational concerns arise.
                    </p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">4</div>
                  <div className="methodology-step__content">
                    <h4>Analysis & Reporting</h4>
                    <p>
                      We provide comprehensive findings with operational context. Reports include business impact assessment. We deliver prioritized remediation recommendations aligned with your risk tolerance and operational constraints.
                    </p>
                  </div>
                </div>
                <div className="methodology-step">
                  <div className="methodology-step__number">5</div>
                  <div className="methodology-step__content">
                    <h4>Validation & Support</h4>
                    <p>
                      We conduct remediation validation testing. We verify compensating controls. We support ongoing security posture improvement through continuous assessment cycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Crisis Management & Incident Response - EXPANDED */}
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
              <h4>Executive Summary</h4>
              <p>
                When a cybersecurity incident impacts critical infrastructure, every second counts. OXOT provides rapid, expert support specifically designed for operational technology environments. Traditional IT incident response approaches can be insufficient or even dangerous in OT.
              </p>
              <p>
                Our team combines deep OT/ICS technical expertise with crisis management experience. We bring legal compliance knowledge and operational safety understanding. Response activities prioritize operational continuity and public safety. We effectively contain and remediate security threats.
              </p>

              <h4>Why OT Incidents Are Different</h4>
              <p>
                A cybersecurity incident in critical infrastructure differs fundamentally from a corporate IT breach. The potential consequences are severe. We're talking cascading failures in power grids. We're preventing safety system malfunctions in manufacturing plants.
              </p>
              <p>
                Our response approach balances cybersecurity objectives with operational imperatives. Our methodology is developed through real-world engagements across Energy, Manufacturing, Water, and Transportation sectors. We support organizations through their most challenging moments. We protect attorney-client privilege and minimize disclosure obligations.
              </p>
            </div>

            <div className="service-capabilities-section">
              <h3>Comprehensive Crisis Support</h3>
              <div className="capabilities-three-column">
                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">📞</div>
                  <h4>24/7 Emergency Hotline</h4>
                  <p>
                    You get immediate access to senior incident response engineers. Our team has deep OT/ICS expertise. Our emergency response team can be onsite or remotely engaged within <strong>2 hours</strong> of initial contact.
                  </p>
                  <p>
                    We provide critical support during the crucial early stages. Early decisions have the greatest impact on outcomes. You get senior expertise immediately.
                  </p>
                  <ul>
                    <li>&lt; 2 hours average initial response time</li>
                    <li>Dedicated senior responder assignment (no tier 1/2 escalation delays)</li>
                    <li>On-site deployment capability within 4-8 hours anywhere in North America</li>
                    <li>Remote access establishment within minutes for immediate triage</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🔬</div>
                  <h4>OT/ICS Forensic Analysis</h4>
                  <p>
                    We conduct deep technical investigation of security incidents. Our forensic techniques are adapted for industrial control systems. We preserve evidence suitable for legal proceedings.
                  </p>
                  <p>
                    We determine attack vectors, lateral movement paths, and operational impact. We identify root causes. All work maintains operational continuity and safety system integrity.
                  </p>
                  <ul>
                    <li>ICS protocol analysis (Modbus, DNP3, IEC 61850) for attack reconstruction</li>
                    <li>PLC memory and ladder logic forensics to identify unauthorized modifications</li>
                    <li>Network traffic reconstruction and timeline analysis</li>
                    <li>Malware reverse engineering and indicator of compromise (IOC) extraction</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🎭</div>
                  <h4>Interactive Crisis Exercises</h4>
                  <p>
                    We design tabletop exercises and full-scale simulations. These test organizational readiness for cyber incidents impacting OT environments. Our exercises incorporate realistic attack scenarios.
                  </p>
                  <p>
                    Scenarios include ransomware, supply chain compromise, targeted APT campaigns, and insider threats. All exercises are tailored to your sector and operational profile.
                  </p>
                  <ul>
                    <li>Ransomware tabletop exercises (Energy, Manufacturing, Water sector scenarios)</li>
                    <li>Crisis communication and stakeholder management simulation</li>
                    <li>Breach disclosure decision-making workshops</li>
                    <li>Post-exercise after-action reports with improvement roadmap</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">⚖️</div>
                  <h4>Legal Retainers & Breach Disclosure</h4>
                  <p>
                    Our <strong>True Diligence™ Framework</strong> provides attorney-client privilege protection. Incident response activities and findings are protected from disclosure obligations. Our legal partnership model extends privilege across security infrastructure.
                  </p>
                  <p>
                    This enables frank assessment without creating additional liability exposure. You can investigate thoroughly while protecting the organization.
                  </p>
                  <ul>
                    <li>Attorney-client privilege establishment for IR activities</li>
                    <li>Regulatory reporting guidance (CISA, SEC, state breach notification)</li>
                    <li>Breach disclosure mitigation strategies</li>
                    <li>Executive liability protection protocols</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">🛠️</div>
                  <h4>Cyber Defender & First Responder Tools</h4>
                  <p>
                    We deploy proprietary and open-source incident response tools. All tools are optimized for OT environments. Our Cyber Defender toolkit provides operators with hands-on capabilities.
                  </p>
                  <p>
                    Operators can conduct initial triage, collect evidence, and take containment actions. Tools work while awaiting expert support.
                  </p>
                  <ul>
                    <li>Cyber Defender certification program training</li>
                    <li>First responder playbooks for common OT incident types</li>
                    <li>IR toolkits optimized for air-gapped/offline environments</li>
                    <li>Evidence collection and chain-of-custody procedures</li>
                  </ul>
                </div>

                <div className="capability-detail-card">
                  <div className="capability-detail-card__icon">📊</div>
                  <h4>Post-Incident Analysis & Recovery</h4>
                  <p>
                    We provide comprehensive post-incident analysis. We identify root causes, improvement opportunities, and strategic remediation priorities. Our recovery support ensures restored systems incorporate hardening measures.
                  </p>
                  <p>
                    We prevent recurrence while maintaining operational requirements. You get stronger, not just recovered.
                  </p>
                  <ul>
                    <li>Root cause analysis and attack chain reconstruction</li>
                    <li>Lessons learned workshops with cross-functional teams</li>
                    <li>Security architecture improvement recommendations</li>
                    <li>Monitoring and detection enhancement roadmap</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-highlight-box">
              <h3>Incident Response Track Record</h3>
              <div className="stats-grid-four">
                <div className="stat-box">
                  <div className="stat-box__value">&lt; 2 hrs</div>
                  <div className="stat-box__label">Average Initial Response Time</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__value">70%</div>
                  <div className="stat-box__label">Manufacturing Ransomware Targeting Rate</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__value">$0</div>
                  <div className="stat-box__label">Ransoms Paid by OXOT Clients (2020-Present)</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__value">24/7/365</div>
                  <div className="stat-box__label">Emergency Hotline Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Services 3-7 - EXPANDED */}
      <section className="services-expanded-section">
        <div className="services-expanded__container">

          {/* Service 3: Cyber Engineering */}
          <div className="service-expanded-card" ref={(el) => (serviceRefs.current[2] = el)}>
            <div className="service-expanded-card__header">
              <span className="service-expanded-card__number">SERVICE 03</span>
              <h3>Cyber Engineering & Integration</h3>
              <p className="service-expanded-card__tagline">
                Security Architecture Design and Implementation for Critical Infrastructure
              </p>
            </div>
            <div className="service-expanded-card__content">
              <h4>Executive Summary</h4>
              <p>
                OXOT's Cyber Engineering services lead and support delivery of security projects. We handle everything from initial design through operational deployment. Our strategic technology partnerships enable us to architect infrastructure patterns that work.
              </p>
              <p>
                We balance reliability, availability, maintainability, safety, and security. These are the five pillars of resilient critical infrastructure. Our deep OT/ICS expertise ensures solutions that actually work in operational environments.
              </p>
              <div className="service-expanded-capabilities">
                <div className="capability-expanded">
                  <h4>Secure Facility Design & Roadmap</h4>
                  <p>
                    We design greenfield and brownfield facility security architecture. We use IEC 62443 Zone-Conduit-Role methodology. This includes network segmentation, industrial DMZ, security zone definition, and defense-in-depth layering.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Identity & Access Management (IAM)</h4>
                  <p>
                    We deploy OT-optimized IAM solutions. This includes role-based access control (RBAC), privileged access management (PAM), and multi-factor authentication (MFA). We provide identity governance for converged IT/OT environments.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Secure Remote Access Solutions</h4>
                  <p>
                    We implement vendor and third-party secure remote access. Solutions use jump boxes, bastion hosts, virtual desktop infrastructure (VDI), and zero trust network access (ZTNA) principles. All solutions are tailored for OT constraints.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Digital Twin Modeling & Integration</h4>
                  <p>
                    We integrate OXOT's AEON Cyber Digital Twin platform. You get unified OT/IT visibility, operational resilience tracking, and real-time security insights. Includes production optimization and risk modeling capabilities.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Data Diode & Unidirectional Gateway Solutions</h4>
                  <p>
                    We deploy read-only remote telemetry using hardware-enforced unidirectional data flows. This provides high-security zone protection. Ideal for safety systems and SIL-rated environments requiring absolute isolation.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Asset, Vulnerability & Threat Management</h4>
                  <p>
                    We deploy converged IT/OT platforms. You get asset inventory, vulnerability management, and threat intelligence in one place. This provides unified visibility and risk prioritization across hybrid infrastructures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Training & Awareness */}
          <div className="service-expanded-card" ref={(el) => (serviceRefs.current[3] = el)}>
            <div className="service-expanded-card__header">
              <span className="service-expanded-card__number">SERVICE 04</span>
              <h3>Cyber Technology Training & Awareness</h3>
              <p className="service-expanded-card__tagline">
                Workforce Development for Operational Technology Cyber Defense
              </p>
            </div>
            <div className="service-expanded-card__content">
              <h4>Executive Summary</h4>
              <p>
                Cybersecurity is ultimately a people problem. OXOT's training programs provide engineers, operators, and leadership with critical knowledge and skills. Participants learn to recognize, respond to, and prevent OT-specific cyber threats.
              </p>
              <p>
                Our hands-on, scenario-based approach ensures knowledge transfer that sticks. We create organizational resilience beyond technology controls. People become your strongest defense layer.
              </p>
              <div className="service-expanded-capabilities">
                <div className="capability-expanded">
                  <h4>Cyber Defender First Responder Certification</h4>
                  <p>
                    Our flagship certification program prepares operators for initial incident triage. Participants learn evidence collection and containment actions in OT environments. Hands-on labs use realistic ICS attack scenarios.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>IEC 62443 Implementation Training</h4>
                  <p>
                    We provide comprehensive training on IEC 62443 standards implementation. This covers everything from CSMS development to security level assessment. Includes workshops on risk assessment, zone/conduit architecture, and compliance artifact creation.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Security Awareness for OT Environments</h4>
                  <p>
                    We deliver customized security awareness programs. Training addresses OT-specific threats including USB-borne malware, vendor social engineering, remote access abuse, and insider threats. This goes beyond generic IT awareness to operational reality.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Hands-On Technical Training</h4>
                  <p>
                    We provide practical, lab-based training. Topics include OT security tools, techniques, and procedures. Training covers network monitoring, protocol analysis, vulnerability assessment, and incident response. All labs use safe environments.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Customized Program Development</h4>
                  <p>
                    We develop tailored training programs. These address organization-specific needs, technologies, and operational environments. Programs range from executive briefings to deep-dive technical workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5: Adversarial AI Testing */}
          <div className="service-expanded-card" ref={(el) => (serviceRefs.current[4] = el)}>
            <div className="service-expanded-card__header">
              <span className="service-expanded-card__number">SERVICE 05</span>
              <h3>Adversarial AI-Based Cyber Defense Testing</h3>
              <p className="service-expanded-card__tagline">
                AI-Powered Threat Intelligence and Operational Impact Assessment
              </p>
            </div>
            <div className="service-expanded-card__content">
              <h4>Executive Summary</h4>
              <p>
                OXOT deploys advanced AI and machine learning techniques for threat intelligence. We monitor threat landscapes, predict adversary behavior, and assess operational impact. Our adversarial AI testing goes beyond traditional threat intelligence.
              </p>
              <p>
                We provide sector-specific, operationally-relevant insights. This enables proactive defense. You see threats coming before they arrive.
              </p>
              <div className="service-expanded-capabilities">
                <div className="capability-expanded">
                  <h4>Sector-Specific Threat Briefings</h4>
                  <p>
                    We provide regular intelligence briefings. These are tailored to Energy, Manufacturing, Water, and Transportation sectors. Briefings cover emerging APT campaigns, ransomware trends, ICS-specific vulnerabilities, and geopolitical threats.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>AI-Powered Predictive Threat Hunting</h4>
                  <p>
                    Our machine learning models analyze threat actor behavior. We study attack patterns and targeting preferences. This predicts future campaigns and provides early warning for at-risk organizations.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Operational Impact Assessment</h4>
                  <p>
                    We analyze how cyber threats translate to operational and safety impacts. This is specific to your facility types. We model cascading failures, production disruption, and physical consequences of cyber-kinetic attacks.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Continuous Threat Landscape Monitoring</h4>
                  <p>
                    We conduct 24/7 monitoring of threat sources. This includes dark web forums, closed-source intelligence, OSINT, and industry ISACs. We track emerging threats relevant to your operational profile and threat model.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 6: AI Solutions */}
          <div className="service-expanded-card" ref={(el) => (serviceRefs.current[5] = el)}>
            <div className="service-expanded-card__header">
              <span className="service-expanded-card__number">SERVICE 06</span>
              <h3>Artificial Intelligence Solutions</h3>
              <p className="service-expanded-card__tagline">
                AI & Machine Learning for Cybersecurity and Operational Optimization
              </p>
            </div>
            <div className="service-expanded-card__content">
              <h4>Executive Summary</h4>
              <p>
                OXOT applies cutting-edge AI and machine learning to operational technology challenges. We address everything from predictive threat detection to process optimization. Our AI solutions enhance both security posture and operational efficiency.
              </p>
              <p>
                We demonstrate that cybersecurity investments can deliver measurable operational value. Security becomes a business enabler, not just a cost center.
              </p>
              <div className="service-expanded-capabilities">
                <div className="capability-expanded">
                  <h4>Process Optimization & Automation</h4>
                  <p>
                    Our machine learning models optimize production processes. We improve energy consumption and resource allocation. All solutions maintain security boundaries and operational constraints.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Predictive Analytics for Security & Operations</h4>
                  <p>
                    We deploy predictive models for equipment failure, security incidents, and operational anomalies. This enables proactive maintenance and threat mitigation. You address issues before they impact operations.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Machine Learning Threat Detection</h4>
                  <p>
                    We provide behavioral analytics and anomaly detection. ML models are trained on OT-specific protocols and operational patterns. These detect threats that signature-based tools miss.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Generative Adversarial Networks (GANs)</h4>
                  <p>
                    We use advanced AI techniques for security testing. This includes synthetic data generation and adversary behavior modeling. GANs enable realistic threat simulation without operational risk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 7: Supply Chain Assurance */}
          <div className="service-expanded-card" ref={(el) => (serviceRefs.current[6] = el)}>
            <div className="service-expanded-card__header">
              <span className="service-expanded-card__number">SERVICE 07</span>
              <h3>Supply Chain Assurance</h3>
              <p className="service-expanded-card__tagline">
                Third-Party Risk Management and Supply Chain Security
              </p>
            </div>
            <div className="service-expanded-card__content">
              <h4>Key Business Impact</h4>
              <p>
                Supply chain compromises represent 45% of energy sector breaches. This threat is growing across all critical infrastructure. OXOT's Supply Chain Assurance services provide comprehensive vendor risk management.
              </p>
              <p>
                We deliver secure third-party access and continuous supply chain threat monitoring. This addresses a persistent attack vector that traditional security tools miss.
              </p>
              <div className="service-expanded-capabilities">
                <div className="capability-expanded">
                  <h4>Tiered Vendor Risk Assessment</h4>
                  <p>
                    We provide structured vendor risk assessment using a tiered approach. This is based on access level, data sensitivity, and criticality. Includes IEC 62443-2-4 service provider assessments and ISASecure questionnaires.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Secure Remote Access for Vendors</h4>
                  <p>
                    We implement secure vendor remote access solutions. These include jump boxes, session monitoring, time-limited credentials, and activity logging. We balance vendor support needs with security requirements.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Software Bill of Materials (SBOM) Requirements</h4>
                  <p>
                    We integrate SBOM into procurement processes. This provides transparency into software components, dependencies, and vulnerabilities. SBOMs enable rapid response to supply chain vulnerabilities like Log4j.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Continuous Supply Chain Threat Monitoring</h4>
                  <p>
                    We conduct ongoing monitoring of vendor security posture. This includes breach disclosures and supply chain threat intelligence. We provide early warning of vendor compromises that could impact your environment.
                  </p>
                </div>
                <div className="capability-expanded">
                  <h4>Contract Security Requirements</h4>
                  <p>
                    We develop security requirements, SLAs, and contractual protections for vendor agreements. This includes incident notification requirements, liability clauses, and audit rights.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SPECIALIZED FRAMEWORKS SECTION */}
      <section className="frameworks-section">
        <div className="frameworks-section__container">
          <div className="frameworks-section__header">
            <h2>Specialized Service Frameworks</h2>
            <p>
              OXOT has developed proprietary frameworks addressing specific critical infrastructure challenges. These frameworks represent years of research and real-world engagements. We continuously refine them based on emerging threats and lessons learned.
            </p>
          </div>

          <div className="frameworks-grid">
            {/* Framework 1: Ransomware Readiness */}
            <div className="framework-card">
              <div className="framework-card__badge">PROPRIETARY FRAMEWORK</div>
              <h3>Ransomware Readiness Assessment (RRA)</h3>
              <div className="framework-card__sectors">
                <span>Energy</span>
                <span>Manufacturing</span>
                <span>Water</span>
              </div>
              <p>
                Our comprehensive IT/OT ransomware readiness framework combines IEC 62443, CISA CSET RRA tool, and mediated diagnostic workshops. We offer sector-specific variants including <strong>The Resilient Grid</strong> (Energy) and <strong>The Resilient Factory</strong> (Manufacturing).
              </p>
              <div className="framework-card__components">
                <h4>Framework Components:</h4>
                <ul>
                  <li>Mediated diagnostic workshops (IT/OT cultural alignment)</li>
                  <li>CISA CSET Ransomware Readiness Assessment baseline</li>
                  <li>IEC 62443-3-2 Initial Risk Assessment (IRA) and Detailed Risk Assessment (DRA)</li>
                  <li>STRIDE threat modeling workshops</li>
                  <li>Ransomware tabletop exercises (TTX) with after-action reports</li>
                  <li>Prioritized remediation roadmap aligned with operational constraints</li>
                </ul>
              </div>
              <div className="framework-card__deliverables">
                <strong>Deliverables:</strong> Risk assessment reports, TTX after-action reports, CSMS integration procedures, executive briefing materials
              </div>
            </div>

            {/* Framework 2: IEC 62443 Lifecycle */}
            <div className="framework-card">
              <div className="framework-card__badge">STANDARDS-BASED FRAMEWORK</div>
              <h3>IEC 62443 Lifecycle Implementation</h3>
              <div className="framework-card__sectors">
                <span>All Sectors</span>
              </div>
              <p>
                We provide a complete lifecycle approach to IACS cybersecurity with IEC 62443. This covers everything from secure acquisition through end-of-life decommissioning. Our approach is based on the <strong>Operator's Playbook</strong> methodology. We address all lifecycle phases.
              </p>
              <div className="framework-card__components">
                <h4>Five Lifecycle Phases:</h4>
                <ul>
                  <li><strong>Phase 1 - Secure Acquisition:</strong> Cybersecurity Requirements Specification (CRS), vendor evaluation using ISASecure</li>
                  <li><strong>Phase 2 - Secure Design:</strong> Risk assessment (IRA/DRA), zone/conduit definition, threat modeling</li>
                  <li><strong>Phase 3 - Secure Deployment:</strong> CFAT/CSAT testing, integrator management, acceptance testing</li>
                  <li><strong>Phase 4 - Secure Operations:</strong> CSMS implementation (25 artifacts), patch management, incident response</li>
                  <li><strong>Phase 5 - Sustainment:</strong> Vulnerability management, PSIRT engagement, EOL decommissioning</li>
                </ul>
              </div>
              <div className="framework-card__deliverables">
                <strong>Artifact Support:</strong> All 112 artifacts across IEC 62443-2-1, -3-2, -3-3, -4-1, -4-2
              </div>
            </div>

            {/* Framework 3: M&A Due Diligence */}
            <div className="framework-card">
              <div className="framework-card__badge">M&A FRAMEWORK</div>
              <h3>M&A Cybersecurity Due Diligence</h3>
              <div className="framework-card__sectors">
                <span>Manufacturing</span>
                <span>Agri-Food</span>
              </div>
              <p>
                Our cyber-informed M&A framework addresses inherited IT/OT risks in industrial acquisitions. We provide financial risk quantification, valuation adjustments, and post-acquisition integration planning. This addresses the "off-balance-sheet liabilities" of legacy systems.
              </p>
              <div className="framework-card__components">
                <h4>Framework Services:</h4>
                <ul>
                  <li>Pre-acquisition technical and operational due diligence</li>
                  <li>OT/ICS legacy system assessment (Windows XP/7, EOL PLCs, technical debt)</li>
                  <li>IT/OT convergence risk analysis</li>
                  <li>Ransomware readiness tabletop (pre-deal diagnostic)</li>
                  <li>Risk quantification using NIST CSF and FAIR methodology (Annual Loss Expectancy)</li>
                  <li>Post-acquisition integration planning (federated governance, network isolation, Zero Trust)</li>
                </ul>
              </div>
              <div className="framework-card__deliverables">
                <strong>Deliverables:</strong> Due diligence reports, valuation adjustment recommendations, escrow reserve calculations, warranty clause recommendations, 100-day integration roadmap
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OXOT Services - ENHANCED */}
      <section className="services-why-oxot">
        <div className="services-why-oxot__container">
          <h2>Why Choose OXOT for Critical Infrastructure Cybersecurity</h2>
          <p className="why-oxot-intro">
            OXOT's service portfolio is distinguished by deep operational technology expertise. We bring proven methodologies and an unwavering commitment to operational continuity. We understand that cybersecurity in critical infrastructure is not just about preventing breaches.
          </p>
          <p className="why-oxot-intro">
            It's about maintaining the availability, safety, and reliability that society depends upon.
          </p>
          <div className="why-oxot-grid">
            <div className="why-oxot-card">
              <div className="why-oxot-card__icon">🎯</div>
              <h4>OT/ICS Domain Expertise</h4>
              <p>
                Our team brings decades of combined experience in industrial control systems. We work with SCADA, DCS, PLC, SIS, and industrial protocol environments. We speak the language of operators. We understand operational constraints. We recognize that "security" means different things in IT versus OT contexts.
              </p>
            </div>
            <div className="why-oxot-card">
              <div className="why-oxot-card__icon">📋</div>
              <h4>IEC 62443 Standards Authority</h4>
              <p>
                OXOT is recognized as a leader in IEC 62443 implementation. We have comprehensive expertise across all parts of the standard. This ranges from CSMS development (2-1) to system security (3-3) to component certification (4-2). We don't just consult on standards. We live them.
              </p>
            </div>
            <div className="why-oxot-card">
              <div className="why-oxot-card__icon">✓</div>
              <h4>Proven, Battle-Tested Methodologies</h4>
              <p>
                Our approaches have been refined through hundreds of engagements. We've worked across Energy, Manufacturing, Water, and Transportation sectors. We know what works in real operational environments. We've implemented it successfully time and time again.
              </p>
            </div>
            <div className="why-oxot-card">
              <div className="why-oxot-card__icon">⏰</div>
              <h4>24/7/365 Availability</h4>
              <p>
                Critical infrastructure never sleeps, and neither do we. Our incident response team is available around the clock. We provide &lt;2 hour response times. We support you through security events that demand immediate expert engagement.
              </p>
            </div>
            <div className="why-oxot-card">
              <div className="why-oxot-card__icon">⚖️</div>
              <h4>Attorney-Client Privilege Protection</h4>
              <p>
                Our True Diligence™ Framework extends attorney-client privilege across security operations. We protect organizations from disclosure obligations. This enables thorough investigation and remediation. You get security without creating liability.
              </p>
            </div>
            <div className="why-oxot-card">
              <div className="why-oxot-card__icon">🔬</div>
              <h4>Proprietary Research & Innovation</h4>
              <p>
                From Jim McKenney's grid frequency stability research to our ransomware readiness frameworks, OXOT invests in original research. We advance the state of the art in OT cybersecurity. Our clients benefit from cutting-edge insights unavailable elsewhere.
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
            Our services can be engaged individually or combined into a comprehensive security program. We tailor everything to your specific operational environment, risk profile, and regulatory requirements.
          </p>
          <p>
            Whether you need a one-time assessment, crisis response support, or a long-term strategic partnership, OXOT has the expertise. We're committed to supporting your critical infrastructure protection objectives.
          </p>
          <div className="services-final-cta__buttons">
            <Link to="/solutions" className="services-final-cta__button services-final-cta__button--primary">
              Explore Our Solutions →
            </Link>
            <Link to="/industries" className="services-final-cta__button services-final-cta__button--secondary">
              View Industry Expertise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
