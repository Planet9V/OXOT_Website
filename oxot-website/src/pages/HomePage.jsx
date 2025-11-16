import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCarousel from '../components/HeroCarousel';
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const servicesRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate service cards on scroll
    servicesRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  const carouselSlides = [
    {
      id: 1,
      category: 'OT/ICS Security',
      title: 'Tailored solutions to protect your critical infrastructure',
      description: 'Comprehensive OT/ICS cybersecurity services designed for industrial operations',
      cta: 'Explore Solutions',
      backgroundVideo: 'https://static.videezy.com/system/resources/previews/000/037/383/original/Cyber-security-digital-and-AI-00357.mp4',
    },
    {
      id: 2,
      category: 'Operational Technology',
      title: 'Supporting critical infrastructure with customized security solutions',
      description: 'Expert protection for SCADA, DCS, and industrial control systems',
      cta: 'Learn More',
      backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    },
    {
      id: 3,
      category: 'Cyber Resilience',
      title: 'Scale and expertise to defend against emerging threats',
      description: 'Advanced threat detection and incident response for operational networks',
      cta: 'Get Protected',
      backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    },
  ];

  const services = [
    {
      title: 'OT/ICS Security Assessment',
      description: 'Comprehensive evaluation of your industrial control systems against IEC 62443 standards and industry best practices.',
      icon: '🛡️',
    },
    {
      title: 'Threat Intelligence & Monitoring',
      description: 'Real-time monitoring and threat intelligence for operational technology environments with 24/7 SOC support.',
      icon: '🔍',
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for OT/ICS cybersecurity incidents with minimal operational disruption.',
      icon: '⚡',
    },
    {
      title: 'Security Architecture Design',
      description: 'Design and implementation of secure OT/ICS architectures following defense-in-depth principles.',
      icon: '🏗️',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <HeroCarousel slides={carouselSlides} />

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="trust-banner__content">
          <span className="trust-banner__icon">✓</span>
          <span className="trust-banner__text">
            IEC 62443 Certified - Trusted by Critical Infrastructure Operators Worldwide
          </span>
        </div>
      </section>

      {/* NEW: NOW/NEXT/NEVER Framework Introduction Section */}
      <section className="framework-intro-section">
        <div className="framework-intro__container">
          <div className="framework-intro__header">
            <span className="framework-intro__eyebrow">The OXOT Approach</span>
            <h2 className="framework-intro__title">Stop Wasting OpEx on Cybersecurity. Start Optimizing.</h2>
            <p className="framework-intro__subtitle">
              We align your critical infrastructure security to the rhythm of your business operations—eliminating emergency budgets by working within your planned maintenance cycles and CapEx schedules.
            </p>
          </div>

          <div className="framework-pillars">
            <div className="framework-pillar framework-pillar--now">
              <div className="framework-pillar__badge">NOW</div>
              <h3 className="framework-pillar__title">Immediate Action Required</h3>
              <p className="framework-pillar__description">
                Exploitable vulnerabilities on internet-facing OT systems, safety system risks, and regulatory compliance gaps that demand immediate attention before next quarter.
              </p>
              <div className="framework-pillar__budget">
                <span className="framework-pillar__budget-label">Budget Source:</span>
                <span className="framework-pillar__budget-value">Emergency OpEx or immediate CapEx reallocation</span>
              </div>
            </div>

            <div className="framework-pillar framework-pillar--next">
              <div className="framework-pillar__badge">NEXT</div>
              <h3 className="framework-pillar__title">Scheduled Maintenance Integration</h3>
              <p className="framework-pillar__description">
                Vulnerabilities in segmented systems, upgrades requiring downtime, and legacy system replacements that align with your planned 2026 equipment refit—at a fraction of emergency costs.
              </p>
              <div className="framework-pillar__budget">
                <span className="framework-pillar__budget-label">Budget Source:</span>
                <span className="framework-pillar__budget-value">Planned maintenance cycles, existing CapEx schedules</span>
              </div>
              <div className="framework-pillar__highlight">
                <strong>Key Value:</strong> Eliminates "emergency cybersecurity line items"—costs fold into existing operational budgets
              </div>
            </div>

            <div className="framework-pillar framework-pillar--never">
              <div className="framework-pillar__badge">NEVER</div>
              <h3 className="framework-pillar__title">Accept Risk, Optimize Resources</h3>
              <p className="framework-pillar__description">
                Low-impact vulnerabilities, systems scheduled for decommissioning, and theoretical attacks with no credible threat actor—freeing your OpEx for what truly matters.
              </p>
              <div className="framework-pillar__budget">
                <span className="framework-pillar__budget-label">Budget Impact:</span>
                <span className="framework-pillar__budget-value">$0 - Resources reallocated to NOW and NEXT priorities</span>
              </div>
            </div>
          </div>

          <div className="framework-intro__cta">
            <p className="framework-intro__cta-text">
              Built by plant engineers who understand LEAN principles, IEC 62443 lifecycles, and the reality of 20-year equipment refresh cycles.
            </p>
            <button className="framework-intro__cta-button">Learn How NOW/NEXT/NEVER Works →</button>
          </div>
        </div>
      </section>

      {/* NEW: AEON AI Platform Showcase Section */}
      <section className="aeon-showcase-section">
        <div className="aeon-showcase__container">
          <div className="aeon-showcase__content">
            <div className="aeon-showcase__text">
              <span className="aeon-showcase__eyebrow">AEON AI Platform</span>
              <h2 className="aeon-showcase__title">Your Facility's Digital Twin for Predictive Cyber Intelligence</h2>
              <p className="aeon-showcase__description">
                AEON creates a comprehensive 20+ hop knowledge graph of YOUR specific facility—every PLC, RTU, VPN device, and SCADA system mapped against all sector-specific threats, vulnerabilities, and attack paths.
              </p>

              <div className="aeon-features">
                <div className="aeon-feature">
                  <div className="aeon-feature__icon">🔗</div>
                  <div className="aeon-feature__content">
                    <h4 className="aeon-feature__title">Multi-Dimensional Cyber-Physical Graph</h4>
                    <p className="aeon-feature__description">
                      Integrates equipment inventory, design specifications, operational procedures, architecture documentation, supplier relationships, and complete threat intelligence (MITRE ATT&CK, CVE, CWE, CAPEC, EMB3D) into a unified semantic model.
                    </p>
                  </div>
                </div>

                <div className="aeon-feature">
                  <div className="aeon-feature__icon">🧠</div>
                  <div className="aeon-feature__content">
                    <h4 className="aeon-feature__title">Custom-Trained Sector LLM</h4>
                    <p className="aeon-feature__description">
                      Trained on complete sector-specific operational data: Energy (generation, transmission, DER, smart grid), Manufacturing (process control, automation, quality systems), Water (treatment, distribution, SCADA), Transportation (rail signaling, aviation systems, maritime control).
                    </p>
                  </div>
                </div>

                <div className="aeon-feature">
                  <div className="aeon-feature__icon">🎯</div>
                  <div className="aeon-feature__content">
                    <h4 className="aeon-feature__title">Real-Time Threat Correlation</h4>
                    <p className="aeon-feature__description">
                      Continuous ingestion of threat intelligence feeds, dark web monitoring, annual threat reports, vulnerability disclosures, and exploitability data from Vulncheck—correlated against your specific equipment and SBOM analysis.
                    </p>
                  </div>
                </div>

                <div className="aeon-feature">
                  <div className="aeon-feature__icon">🔮</div>
                  <div className="aeon-feature__content">
                    <h4 className="aeon-feature__title">Predictive "What If" Simulations</h4>
                    <p className="aeon-feature__description">
                      Run unlimited attack traversal scenarios: "If we defer patching this specific PLC until the 2027 maintenance window, what's our exposure?" AEON simulates full attack campaigns, validates exploit paths, and quantifies operational impact.
                    </p>
                  </div>
                </div>

                <div className="aeon-feature">
                  <div className="aeon-feature__icon">📊</div>
                  <div className="aeon-feature__content">
                    <h4 className="aeon-feature__title">Pinpoint Prioritization</h4>
                    <p className="aeon-feature__description">
                      Eliminates the "10,000 vulnerabilities, where do we start?" paralysis. AEON provides equipment-specific recommendations: "This PLC in Building 3, Zone 2A is NOW priority due to internet-facing exposure + active exploit campaigns targeting this firmware version."
                    </p>
                  </div>
                </div>

                <div className="aeon-feature">
                  <div className="aeon-feature__icon">💼</div>
                  <div className="aeon-feature__content">
                    <h4 className="aeon-feature__title">Executive Decision Intelligence</h4>
                    <p className="aeon-feature__description">
                      Answers the big questions your board is asking: Which vulnerabilities are actually exploitable by credible threat actors? What's our financial exposure if we defer this upgrade? How do we justify this security investment to the CFO?
                    </p>
                  </div>
                </div>
              </div>

              <button className="aeon-showcase__cta">Explore AEON Platform →</button>
            </div>

            <div className="aeon-showcase__visual">
              <div className="aeon-visual-placeholder">
                {/* This will be replaced with actual AEON visualization component */}
                <div className="aeon-visual-placeholder__content">
                  <div className="aeon-visual-placeholder__title">AEON Digital Twin</div>
                  <div className="aeon-visual-placeholder__subtitle">20+ Hop Knowledge Graph</div>
                  <div className="aeon-visual-placeholder__nodes">
                    <div className="aeon-node">Equipment</div>
                    <div className="aeon-node">Vulnerabilities</div>
                    <div className="aeon-node">Threats</div>
                    <div className="aeon-node">Attack Paths</div>
                    <div className="aeon-node">Mitigations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" ref={sectionRef}>
        <div className="services-section__container">
          <div className="services-section__header">
            <h2 className="services-section__title">Our Solutions for Critical Infrastructure</h2>
            <p className="services-section__subtitle">
              Comprehensive OT/ICS cybersecurity services tailored to your operational needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                ref={(el) => (servicesRef.current[index] = el)}
              >
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <button className="service-card__cta">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section - ENHANCED with OpEx Optimization */}
      <section className="value-section">
        <div className="value-section__container">
          <div className="value-section__content">
            <h2 className="value-section__title">Cybernetic Serenity, Delivered.</h2>
            <p className="value-section__text">
              At OXOT, we provide our clients with the most advanced OT/ICS cybersecurity services,
              ensuring the integrity, confidentiality, and availability of their most critical assets.
              We are committed to delivering innovative solutions that are tailored to the unique needs
              of each client, enabling them to operate with confidence in an increasingly complex threat landscape.
            </p>

            <div className="value-section__opex-message">
              <h3 className="value-section__opex-title">Optimizing Security Spend Through Operational Intelligence</h3>
              <p className="value-section__opex-text">
                We understand that cybersecurity isn't just a technical challenge—it's a budget optimization problem.
                Your COO has allocated CapEx budgets years in advance for planned equipment refreshes. Your plant manager
                has sacred maintenance windows that can't be disrupted without revenue impact. Your CFO needs data-driven
                justification for security investments that speak to business outcomes, not just vulnerability counts.
              </p>
              <p className="value-section__opex-text">
                OXOT transforms cybersecurity from a reactive cost center into a strategic operational advantage. By aligning
                security remediation with your natural business cycles—maintenance windows, planned equipment refreshes,
                scheduled downtime—we eliminate emergency budget requests and fold security investments into existing operational
                plans. The result: lower total cost of ownership, reduced operational disruption, and quantifiable risk reduction
                that your board can understand.
              </p>
            </div>
            <div className="value-section__stats">
              <div className="value-stat">
                <div className="value-stat__number">500+</div>
                <div className="value-stat__label">Protected Systems</div>
              </div>
              <div className="value-stat">
                <div className="value-stat__number">99.9%</div>
                <div className="value-stat__label">Uptime Guaranteed</div>
              </div>
              <div className="value-stat">
                <div className="value-stat__number">24/7</div>
                <div className="value-stat__label">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-section__container">
          <h2 className="industries-section__title">Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Energy & Utilities</h3>
              <p>Power generation, transmission, and distribution systems</p>
            </div>
            <div className="industry-card">
              <h3>Manufacturing</h3>
              <p>Industrial automation and process control systems</p>
            </div>
            <div className="industry-card">
              <h3>Transportation</h3>
              <p>Railway, maritime, and aviation control systems</p>
            </div>
            <div className="industry-card">
              <h3>Water & Wastewater</h3>
              <p>Water treatment and distribution infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: LEAN/5S Cybersecurity Methodology Section */}
      <section className="lean-methodology-section">
        <div className="lean-methodology__container">
          <div className="lean-methodology__header">
            <span className="lean-methodology__eyebrow">Our Philosophy</span>
            <h2 className="lean-methodology__title">Cybersecurity Kaizen: LEAN Principles Applied to OT Security</h2>
            <p className="lean-methodology__subtitle">
              We don't just protect critical infrastructure—we optimize it. With backgrounds in plant engineering and
              operational excellence, OXOT brings LEAN and 5S methodology to cybersecurity, eliminating waste and
              building efficiency into every security decision.
            </p>
          </div>

          <div className="lean-principles">
            <div className="lean-principle">
              <div className="lean-principle__number">1</div>
              <h3 className="lean-principle__title">Eliminate Waste (Muda)</h3>
              <p className="lean-principle__description">
                <strong>In Cybersecurity:</strong> Stop spending OpEx on "NEVER" priorities. Not every vulnerability
                deserves remediation. Through AEON's risk modeling, we identify and eliminate wasteful security spending
                on theoretical threats with no credible attack path, freeing budget for actual risks.
              </p>
              <div className="lean-principle__example">
                <strong>Example:</strong> A legacy PLC scheduled for decommissioning in 6 months has 47 "critical" CVEs.
                Traditional consultants demand immediate remediation ($150K emergency budget). OXOT classifies it NEVER—
                accept risk for 6 months, reallocate that $150K to NOW priorities with actual operational impact.
              </div>
            </div>

            <div className="lean-principle">
              <div className="lean-principle__number">2</div>
              <h3 className="lean-principle__title">Value Stream Mapping</h3>
              <p className="lean-principle__description">
                <strong>In Cybersecurity:</strong> Map cyber risk to actual production value streams. Which vulnerabilities,
                if exploited, would disrupt your highest-revenue operations? AEON's digital twin models your facility's
                operational workflows, allowing us to prioritize based on business impact, not CVSS scores.
              </p>
              <div className="lean-principle__example">
                <strong>Example:</strong> Two vulnerabilities, both CVSS 9.8 "Critical." One affects a redundant backup
                system. One affects the SCADA system controlling your primary production line generating $2M/day revenue.
                OXOT prioritizes based on value stream impact, not severity scores.
              </div>
            </div>

            <div className="lean-principle">
              <div className="lean-principle__number">3</div>
              <h3 className="lean-principle__title">Continuous Improvement (Kaizen)</h3>
              <p className="lean-principle__description">
                <strong>In Cybersecurity:</strong> Security isn't a one-time audit—it's continuous operational evolution.
                AEON runs perpetual simulations, constantly refining risk models as new threats emerge, equipment is added,
                and operational procedures change. Small, incremental improvements compound into resilient security posture.
              </p>
              <div className="lean-principle__example">
                <strong>Example:</strong> Rather than annual penetration tests that generate 500-page reports and overwhelming
                backlogs, OXOT provides continuous adversarial modeling—weekly micro-assessments of changing attack surfaces,
                allowing for agile, incremental hardening aligned with operational tempo.
              </div>
            </div>

            <div className="lean-principle">
              <div className="lean-principle__number">4</del>
              <h3 className="lean-principle__title">Respect for People (Working Within Constraints)</h3>
              <p className="lean-principle__description">
                <strong>In Cybersecurity:</strong> Security teams don't operate in isolation—they serve production operations.
                We respect the reality that OT engineers can't "just patch" a 20-year-old PLC without risking million-dollar
                downtime. Our NOW/NEXT/NEVER framework works WITH operational constraints, not against them.
              </p>
              <div className="lean-principle__example">
                <strong>Example:</strong> A critical firmware upgrade requires 12-hour plant shutdown. Traditional consultants:
                "This is critical, do it now." OXOT: "This is NEXT—schedule it during your already-planned summer maintenance
                shutdown in July. Until then, we'll implement these three compensating controls (network segmentation, enhanced
                monitoring, access restrictions) that maintain security without production impact."
              </div>
            </div>

            <div className="lean-principle">
              <div className="lean-principle__number">5</div>
              <h3 className="lean-principle__title">Just-in-Time (Aligned to Business Rhythm)</h3>
              <p className="lean-principle__description">
                <strong>In Cybersecurity:</strong> Security investments should arrive exactly when needed—not too early
                (wasting capital), not too late (accepting unnecessary risk). By synchronizing remediation with planned
                maintenance cycles and CapEx schedules, we optimize timing for cost efficiency and operational impact.
              </p>
              <div className="lean-principle__example">
                <strong>Example:</strong> Your facility has a $5M equipment refresh planned for Q3 2026, replacing legacy
                PLCs. An assessment in Q1 2025 identifies vulnerabilities in that equipment. OXOT classifies these as NEXT—
                no need to patch systems that will be replaced in 18 months. Budget remains allocated to the planned upgrade,
                no emergency security line item required.
              </div>
            </div>

            <div className="lean-principle">
              <div className="lean-principle__number">6</div>
              <h3 className="lean-principle__title">5S: Organize, Standardize, Sustain</h3>
              <p className="lean-principle__description">
                <strong>In Cybersecurity:</strong> Apply 5S discipline to security operations: Sort (eliminate unnecessary
                tools), Set in Order (standardized IEC 62443 framework), Shine (continuous asset inventory hygiene),
                Standardize (repeatable processes), Sustain (long-term CSMS governance).
              </p>
              <div className="lean-principle__example">
                <strong>Example:</strong> Many organizations accumulate 15+ disparate security tools over the years,
                creating tool sprawl and alert fatigue. OXOT's 5S approach: Sort (eliminate redundant tools), Set in Order
                (consolidate to integrated platform), Shine (clean up asset database), Standardize (IEC 62443 controls),
                Sustain (governance through CSMS). Result: 40% reduction in security tooling costs, 70% reduction in false positives.
              </div>
            </div>
          </div>

          <div className="lean-methodology__cta">
            <p className="lean-methodology__cta-text">
              This is why OXOT's approach feels different. We're not IT security consultants applying generic frameworks
              to industrial environments. We're plant engineers and operational excellence practitioners who understand
              that every minute of unplanned downtime has a cost, every CapEx dollar has a 3-year approval cycle, and
              every security decision must balance risk against operational reality.
            </p>
            <button className="lean-methodology__cta-button">See LEAN Security in Action →</button>
          </div>
        </div>
      </section>

      {/* NEW: Why OXOT Differentiation Section */}
      <section className="why-oxot-section">
        <div className="why-oxot__container">
          <div className="why-oxot__header">
            <h2 className="why-oxot__title">Why OXOT is Different</h2>
            <p className="why-oxot__subtitle">
              We're not another cybersecurity vendor selling commodity SOC services. We're strategic advisors with
              unique capabilities that fundamentally change how critical infrastructure operators approach security.
            </p>
          </div>

          <div className="why-oxot-grid">
            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">🏭 Plant Engineering DNA</h3>
              <p className="why-oxot-item__description">
                Founded and staffed by engineers with operational backgrounds in critical infrastructure. We've managed
                facilities, planned maintenance shutdowns, and defended CapEx budgets to boards. We speak your language
                because we've lived your challenges.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">🤖 AEON AI: The Only Facility-Specific Digital Twin</h3>
              <p className="why-oxot-item__description">
                Generic vulnerability scanners tell you "10,000 vulnerabilities exist." AEON tells you "3 vulnerabilities
                in YOUR facility are exploitable by credible threat actors targeting YOUR sector." This specificity is
                the difference between paralyzing noise and actionable intelligence.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">📊 Financial Risk Quantification, Not Vulnerability Counts</h3>
              <p className="why-oxot-item__description">
                Your CFO doesn't care about CVSS scores. They care about Annual Loss Expectancy, ROI on security investments,
                and TCO models. We translate cyber risk into financial language using FAIR methodology, making security a
                board-level business discussion, not a technical report.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">⚖️ M&A Due Diligence Expertise</h3>
              <p className="why-oxot-item__description">
                Acquiring an industrial facility? We quantify the hidden cyber-physical liabilities on the balance sheet.
                That 25-year-old PLC might be $0 book value, but it represents millions in latent security debt. We provide
                data-driven valuation adjustments and remediation roadmaps aligned to post-merger integration timelines.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">🎯 NOW/NEXT/NEVER: The Prioritization Framework That Actually Works</h3>
              <p className="why-oxot-item__description">
                Every other consultant delivers a 500-page report with everything marked "Critical" and no clear path forward.
                OXOT provides a three-bucket prioritization aligned to your operational calendar and budget reality. This
                framework alone saves clients 30-50% in annual security OpEx through waste elimination.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">📋 IEC 62443 Lifecycle Implementation, Not Just Compliance</h3>
              <p className="why-oxot-item__description">
                Most vendors treat IEC 62443 as a checklist for compliance. We use it as a strategic lifecycle management
                framework—from secure procurement specifications that transfer risk to suppliers, through design and deployment,
                to long-term operational governance. This reduces TCO by addressing security at acquisition (cheapest) rather
                than remediation (most expensive).
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">🔄 Operational Rhythm Alignment</h3>
              <p className="why-oxot-item__description">
                We synchronize security to your business cycles. Your annual maintenance shutdown? That's when we schedule
                NEXT priorities. Your 5-year equipment refresh? That's when legacy system vulnerabilities get addressed through
                planned replacement, not emergency patches. Security becomes part of operational tempo, not disruptive to it.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">🎓 Cyber Engineering + Program Management, Not Just Monitoring</h3>
              <p className="why-oxot-item__description">
                24/7 SOC monitoring is table stakes—everyone offers it. OXOT provides strategic program design: facility due
                diligence, secure architecture design, vendor risk management, workforce training, crisis management exercises,
                and executive decision support. We're building your long-term security capability, not just watching alerts.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">🔴🔵 AI-Powered Red & Blue Team Exercises</h3>
              <p className="why-oxot-item__description">
                AEON enables continuous adversarial testing through simulated attack campaigns. Rather than annual penetration
                tests, we run hundreds of "What If" scenarios monthly: What if this vendor VPN is compromised? What if this
                firmware vulnerability is exploited? Continuous testing finds gaps before real attackers do.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">🌐 Cross-Sector Threat Intelligence</h3>
              <p className="why-oxot-item__description">
                AEON's training corpus includes ALL critical infrastructure sectors. An attack campaign against manufacturing
                in Germany informs our threat models for energy clients in North America. We see attack patterns across the
                entire industrial ecosystem, providing early warning of emerging tactics before they reach your sector.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">📦 SBOM Analysis & Supply Chain Risk</h3>
              <p className="why-oxot-item__description">
                Software Bill of Materials (SBOM) analysis correlated with live vulnerability intelligence. When a critical
                library vulnerability is disclosed (like Log4Shell), AEON instantly identifies every piece of equipment in
                your facility affected, prioritizes based on exploitability and exposure, and generates targeted remediation
                plans—all within hours, not weeks.
              </p>
            </div>

            <div className="why-oxot-item">
              <h3 className="why-oxot-item__title">💡 Optimize and Build, Never Just Add</h3>
              <p className="why-oxot-item__description">
                Our LEAN philosophy means we don't sell you unnecessary tools or services. Before adding a new security control,
                we ask: Can we optimize what you have? Can we eliminate something redundant? Can we build this capability
                internally rather than rent it forever? This advisor mindset, not vendor mindset, is why clients trust us
                with strategic decisions.
              </p>
            </div>
          </div>

          <div className="why-oxot__final-message">
            <h3 className="why-oxot__final-title">The OXOT Promise</h3>
            <p className="why-oxot__final-text">
              We're not trying to sell you the most expensive security program. We're trying to help you build the most
              *effective* security program within your operational and financial constraints. That means sometimes telling
              you what NOT to buy, what risks to accept, and what investments to defer. This honesty is rare in cybersecurity
              consulting—but it's the foundation of trusted, long-term partnerships with operators who have real accountability
              for uptime, safety, and budget performance.
            </p>
            <p className="why-oxot__final-text">
              <strong>We succeed when you operate with confidence, optimize your security spend, and sleep better knowing
              that your critical infrastructure is protected by advisors who understand both the cyber threats and the
              operational realities of running a facility 24/7/365.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
