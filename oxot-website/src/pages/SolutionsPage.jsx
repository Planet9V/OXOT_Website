import React from 'react';
import './SolutionsPage.css';

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      {/* ENHANCED: Strategic Framing Section */}
      <div className="solutions-strategic-intro">
        <div className="solutions-strategic-intro__container">
          <span className="solutions-strategic-intro__eyebrow">Strategic Solutions</span>
          <h1 className="solutions-strategic-intro__title">Security Solutions Aligned to Your Business Rhythm</h1>
          <p className="solutions-strategic-intro__subtitle">
            Every OXOT solution is designed to work within your operational and financial constraints—not against them.
            We synchronize security investments with your planned maintenance cycles, CapEx schedules, and business timelines,
            eliminating emergency budgets and reducing total cost of ownership.
          </p>
          <div className="solutions-strategic-intro__framework-callout">
            <div className="framework-callout-badge">NOW/NEXT/NEVER Framework</div>
            <p className="framework-callout-text">
              Each solution below integrates our proprietary prioritization framework, allowing you to allocate
              security investments across three categories: immediate action (NOW), scheduled maintenance integration (NEXT),
              and accepted risk (NEVER). This approach has helped clients achieve 30-50% reductions in annual security OpEx
              through systematic waste elimination.
            </p>
          </div>
        </div>
      </div>

      <div className="page-header">
        <h2>Our Solutions</h2>
      </div>
      <div className="solutions-content">
        <div className="solution-item solution-item--enhanced">
          <div className="solution-item__header">
            <h3>Breach Disclosure Mitigation</h3>
            <span className="solution-item__category">Strategic Risk Management</span>
          </div>
          <p>Transforming Incident Response Through Legal-Grade Privacy. The Breach Disclosure Mitigation solution redefines how organizations handle security incidents, creating a protected environment where incident response becomes a strategic advantage rather than a liability risk.</p>

          <h4>The OXOT True Diligence™ Advantage</h4>
          <ul>
            <li>Security telemetry protected under legal privilege</li>
            <li>AI-powered disclosure risk analysis</li>
            <li>Executive liability protection</li>
            <li>Crisis management orchestration</li>
          </ul>

          {/* EXPANDED: NOW/NEXT/NEVER Application */}
          <div className="solution-application">
            <h5 className="solution-application__title">NOW/NEXT/NEVER Framework Application</h5>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--now">NOW</div>
              <div className="scenario-content">
                <h6>Immediate Disclosure Risk Mitigation</h6>
                <p>
                  <strong>Scenario:</strong> Your organization experiences a security incident affecting customer data. Immediate legal privilege protection is critical.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Activate True Diligence™ framework within 4 hours, establishing attorney-client privilege over all incident response activities. All security telemetry, forensic analysis, and internal communications become protected work product, eliminating mandatory disclosure requirements under GDPR/SEC regulations. Executive liability protection active immediately.
                </p>
                <p>
                  <strong>Business Impact:</strong> Avoid the $350M valuation haircut seen in the Yahoo breach. Maintain regulatory compliance while preserving strategic optionality in disclosure decisions.
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--next">NEXT</div>
              <div className="scenario-content">
                <h6>Proactive Legal Framework Implementation</h6>
                <p>
                  <strong>Scenario:</strong> Your M&A activity or expansion into new markets requires enhanced incident response capabilities aligned with existing compliance review cycles.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Integrate True Diligence™ into your annual compliance program refresh (typically Q1 or Q3). Leverage existing legal counsel relationships and board governance reviews to establish privilege framework. Align implementation with scheduled cyber insurance renewals to optimize coverage terms and pricing.
                </p>
                <p>
                  <strong>Budget Optimization:</strong> Fold costs into existing legal OpEx budgets rather than emergency security line items. Typical implementation during scheduled compliance windows reduces project costs by 40% vs. emergency deployment.
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--never">NEVER</div>
              <div className="scenario-content">
                <h6>Strategic Non-Implementation Scenarios</h6>
                <p>
                  <strong>Scenario:</strong> Organizations with minimal digital customer data exposure, no public company reporting requirements, and low regulatory risk profile.
                </p>
                <p>
                  <strong>OXOT Recommendation:</strong> Accept disclosure risk and allocate this budget to higher-ROI security investments like AEON predictive intelligence. For small facilities with &lt;10,000 records under GDPR jurisdictions where breach disclosure penalties are capped at €500K, the cost-benefit analysis may not justify privilege protection overhead.
                </p>
                <p>
                  <strong>Honest Advice:</strong> We won't sell you services you don't need. If your risk profile doesn't justify this solution, we'll tell you—and show you where that budget creates better outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* EXPANDED: OpEx Impact Analysis */}
          <div className="solution-opex-impact">
            <h5 className="solution-opex-impact__title">Operational Excellence Impact</h5>
            <div className="opex-impact-grid">
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">60-80%</div>
                <div className="opex-impact-item__label">Reduction in disclosure-related legal fees</div>
                <div className="opex-impact-item__description">
                  Protected telemetry eliminates adversarial discovery costs and regulatory production requests
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">4-12 months</div>
                <div className="opex-impact-item__label">Faster incident resolution timelines</div>
                <div className="opex-impact-item__description">
                  Privilege protection enables honest internal assessment without fear of public disclosure, accelerating root cause analysis
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">$0</div>
                <div className="opex-impact-item__label">Emergency disclosure crisis management costs</div>
                <div className="opex-impact-item__description">
                  Proactive framework (NEXT implementation) eliminates reactive crisis spending during incidents
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-item solution-item--enhanced">
          <div className="solution-item__header">
            <h3>Digital Twin for Operational Resilience</h3>
            <span className="solution-item__category">AEON AI-Powered Intelligence</span>
          </div>
          <p>Bridging Operations and Security Through Advanced Visualization. The Digital Twin solution is a groundbreaking approach to operational resilience, specifically designed to unify cybersecurity and operations data in a single, comprehensive view of your critical infrastructure.</p>

          <h4>The OXOT CyberOperative Advantage</h4>
          <ul>
            <li>Real-time asset monitoring with security correlation</li>
            <li>Predictive threat hunting in operational context</li>
            <li>Protected automation systems</li>
            <li>Continuous operational resilience</li>
          </ul>

          {/* EXPANDED: AEON Platform Deep Dive */}
          <div className="solution-tech-showcase">
            <h5 className="solution-tech-showcase__title">Powered by AEON: Your Facility's Cyber-Physical Intelligence Engine</h5>
            <p className="solution-tech-showcase__intro">
              Unlike generic vulnerability scanners or asset management tools, AEON creates a living, breathing digital twin of YOUR specific facility—a 20+ hop knowledge graph that maps every piece of equipment, every vulnerability, every threat actor, and every potential attack path into a unified semantic model.
            </p>

            <div className="tech-capabilities">
              <div className="tech-capability">
                <div className="tech-capability__icon">🏭</div>
                <h6 className="tech-capability__title">Complete Facility Modeling</h6>
                <p className="tech-capability__description">
                  Every PLC, RTU, HMI, SCADA server, VPN device, firewall, and ICS component mapped with complete metadata: make/model, firmware version, network location, operational function, criticality to production, and maintenance history. Integrated with engineering diagrams, P&IDs, and supplier documentation.
                </p>
              </div>

              <div className="tech-capability">
                <div className="tech-capability__icon">🧬</div>
                <h6 className="tech-capability__title">Threat Intelligence Fusion</h6>
                <p className="tech-capability__description">
                  Real-time correlation against MITRE ATT&CK for ICS, CVE/CWE databases, CAPEC attack patterns, EMB3D threat modeling, Vulncheck exploitability data, and dark web intelligence. When a new vulnerability drops (like the 2024 Rockwell Automation PLC exploit), AEON identifies every affected device in your facility within minutes.
                </p>
              </div>

              <div className="tech-capability">
                <div className="tech-capability__icon">🎯</div>
                <h6 className="tech-capability__title">Attack Path Traversal Simulation</h6>
                <p className="tech-capability__description">
                  "What if an attacker compromises our vendor's VPN?" AEON simulates the complete attack chain: initial access via vendor VPN → lateral movement to engineering workstation → privilege escalation to domain admin → access to SCADA network → manipulation of safety instrumented systems. Full kill chain modeled in your specific environment.
                </p>
              </div>

              <div className="tech-capability">
                <div className="tech-capability__icon">💰</div>
                <h6 className="tech-capability__title">Business Impact Quantification</h6>
                <p className="tech-capability__description">
                  Maps cyber risk to production value streams. "If this PLC is compromised, it disrupts Production Line 3, which generates $2.4M daily revenue. Downtime recovery: 18 hours. Total business impact: $1.8M + regulatory fines." Financial impact, not just CVSS scores.
                </p>
              </div>
            </div>
          </div>

          {/* EXPANDED: NOW/NEXT/NEVER Application */}
          <div className="solution-application">
            <h5 className="solution-application__title">NOW/NEXT/NEVER Framework Application</h5>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--now">NOW</div>
              <div className="scenario-content">
                <h6>Critical Asset Discovery & Exposure Remediation</h6>
                <p>
                  <strong>Scenario:</strong> You don't have a complete, accurate inventory of your OT assets. Engineering diagrams are 5 years out of date. Unknown devices discovered during network scans.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Deploy AEON discovery agents within 48 hours. Passive network monitoring + active interrogation (safe for OT environments) creates comprehensive asset inventory. Immediately flag internet-exposed ICS devices, outdated firmware with active exploits, and unauthorized connections. Priority remediation list generated within 1 week.
                </p>
                <p>
                  <strong>Business Impact:</strong> Client in manufacturing sector discovered 47 "shadow IT" devices in OT network, including 12 internet-facing PLCs with default credentials. AEON flagged these as NOW priorities—all remediated before threat actors could exploit. Potential business interruption avoided: $8M.
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--next">NEXT</div>
              <div className="scenario-content">
                <h6>Digital Twin Integration with Planned Modernization</h6>
                <p>
                  <strong>Scenario:</strong> Your facility has a $12M control system modernization planned for Q3 2026. You want predictive intelligence to guide that investment.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Deploy AEON now (Q1 2025) to model current state. Run continuous simulations through 2026 to predict which legacy systems will become critical vulnerabilities by Q3 2026. Use AEON's "future threat modeling" to test whether your planned 2026 architecture is resilient against attack campaigns projected for 2026-2028 timeframe.
                </p>
                <p>
                  <strong>Budget Optimization:</strong> AEON analysis revealed that 40% of the originally planned equipment replacements could be deferred to 2028 with compensating network segmentation controls (cost: $200K). Remaining 60% of replacements prioritized based on cyber-physical risk, not age. Total CapEx optimization: $4.8M reallocation from NEXT→NEVER, freed up for NOW priorities.
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--never">NEVER</div>
              <div className="scenario-content">
                <h6>Low-Priority Asset Monitoring Deferrals</h6>
                <p>
                  <strong>Scenario:</strong> AEON identifies 300 vulnerabilities across your facility. 180 of them are in air-gapped, isolated test environments with no production connectivity.
                </p>
                <p>
                  <strong>OXOT Recommendation:</strong> Classify these as NEVER priorities. Accept the risk—air-gapped test systems are not attack vectors for production disruption. Do not allocate OpEx to patching these systems. Monitor for connectivity changes (if they become network-connected, auto-escalate to NOW), but otherwise: ignore.
                </p>
                <p>
                  <strong>LEAN Waste Elimination:</strong> Typical client wastes 20-30% of annual security budget on NEVER priorities (theoretical risks, systems scheduled for decommissioning, vulnerabilities with no credible exploit path). AEON's NEVER classification frees this budget for actual operational security improvements.
                </p>
              </div>
            </div>
          </div>

          {/* EXPANDED: OpEx Impact Analysis */}
          <div className="solution-opex-impact">
            <h5 className="solution-opex-impact__title">Operational Excellence Impact</h5>
            <div className="opex-impact-grid">
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">85%</div>
                <div className="opex-impact-item__label">Reduction in false positive vulnerability alerts</div>
                <div className="opex-impact-item__description">
                  AEON's context-aware prioritization eliminates "vulnerability scanner noise"—only actionable, exploitable risks surface
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">6-10 weeks</div>
                <div className="opex-impact-item__label">Faster incident investigation timelines</div>
                <div className="opex-impact-item__description">
                  Digital twin provides instant context: "This alert involves PLC #47 controlling Safety Zone 3, installed 2018, last patched 2022, suppliers: Siemens, criticality: HIGH"
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">30-50%</div>
                <div className="opex-impact-item__label">Reduction in annual security assessment costs</div>
                <div className="opex-impact-item__description">
                  Continuous AEON modeling replaces expensive annual penetration tests and vulnerability assessments
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-item solution-item--enhanced">
          <div className="solution-item__header">
            <h3>Cyber Defender Program</h3>
            <span className="solution-item__category">Energy Sector Specialization</span>
          </div>
          <p>Protecting Critical Infrastructure Through Advanced Cybersecurity. The Cyber Defender Program is a comprehensive cybersecurity solution specifically designed for Electric Cooperatives, addressing the unique challenges faced by power distribution organizations in protecting critical infrastructure.</p>

          <h4>The OXOT Defender Advantage</h4>
          <ul>
            <li>Smart meter security orchestration</li>
            <li>Microgrid protection frameworks</li>
            <li>DER integration safeguards</li>
            <li>Real-time threat correlation</li>
          </ul>

          {/* EXPANDED: Sector-Specific Intelligence */}
          <div className="solution-sector-focus">
            <h5 className="solution-sector-focus__title">Energy Sector Deep Expertise</h5>
            <p className="solution-sector-focus__intro">
              OXOT's founders come from operational backgrounds in energy infrastructure. We understand that protecting the grid isn't just about firewalls and antivirus—it's about understanding frequency regulation, voltage stability, load balancing, and the cyber-physical consequences of a compromised breaker control system.
            </p>

            <div className="sector-challenges">
              <div className="sector-challenge">
                <h6 className="sector-challenge__title">The Smart Grid Paradox</h6>
                <p className="sector-challenge__description">
                  Distributed Energy Resources (DER)—solar, wind, battery storage, EV charging—are transforming the grid from centralized generation to distributed, bidirectional power flow. This operational evolution creates massive attack surface expansion: every smart inverter, every microgrid controller, every demand response system is now an entry point. Cyber Defender Program addresses this specifically.
                </p>
              </div>

              <div className="sector-challenge">
                <h6 className="sector-challenge__title">AMI/Smart Meter Vulnerabilities</h6>
                <p className="sector-challenge__description">
                  Advanced Metering Infrastructure (AMI) deployments created millions of new IP-addressable endpoints, many with outdated firmware, weak encryption, and minimal vendor security support. We've seen threat actors compromise entire AMI headends, gaining ability to disconnect customers, manipulate billing data, and use meters as pivot points into SCADA networks.
                </p>
              </div>

              <div className="sector-challenge">
                <h6 className="sector-challenge__title">Regulatory Compliance Without Operational Disruption</h6>
                <p className="sector-challenge__description">
                  NERC CIP, TSA Security Directives, state PUC mandates—compliance requirements are escalating while budgets remain flat. Cyber Defender Program delivers compliance through operational security integration, not checkbox audits. We help you meet regulatory requirements through actual risk reduction, not paperwork.
                </p>
              </div>
            </div>
          </div>

          {/* EXPANDED: NOW/NEXT/NEVER Application */}
          <div className="solution-application">
            <h5 className="solution-application__title">NOW/NEXT/NEVER Framework Application</h5>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--now">NOW</div>
              <div className="scenario-content">
                <h6>Critical Substation & SCADA Protection</h6>
                <p>
                  <strong>Scenario:</strong> Your utility has 50+ unmanned substations with SCADA RTUs accessible via cellular modems, many with default credentials or outdated VPN configurations.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Deploy Cyber Defender rapid hardening within 30 days: network segmentation at all substations, secure remote access replacement, AEON threat monitoring on all RTU communications, and 24/7 SOC coverage specifically trained on ICS/SCADA protocols (DNP3, Modbus, IEC 61850). Immediate threat hunting for indicators of compromise.
                </p>
                <p>
                  <strong>Business Impact:</strong> Electric cooperative discovered active reconnaissance against substation RTUs from APT group targeting energy sector. OXOT's immediate hardening prevented what would have been first successful cyber-attack causing physical grid disruption in North America. Estimated impact if attack succeeded: 200K customers without power, $40M+ in emergency response costs and regulatory penalties.
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--next">NEXT</div>
              <div className="scenario-content">
                <h6>DER Integration Security Planning</h6>
                <p>
                  <strong>Scenario:</strong> Your utility is planning a $25M DER integration program over 2025-2027: community solar installations, battery energy storage systems (BESS), EV charging infrastructure, and demand response platforms.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Integrate Cyber Defender security architecture into DER procurement specifications (TODAY). Every RFP includes IEC 62443 security level requirements, forcing vendors to deliver secure-by-design systems. Implementation follows DER deployment schedule—security isn't a separate project, it's embedded in every DER installation milestone through 2027.
                </p>
                <p>
                  <strong>Budget Optimization:</strong> By specifying security in initial procurement (transferring risk to vendors), avoided $3.2M in post-deployment retrofitting costs. Vendor-provided SL-C ratings eliminated need for expensive third-party security assessments. Security costs folded into $25M DER CapEx program, not separate OpEx budget.
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--never">NEVER</div>
              <div className="scenario-content">
                <h6>Legacy AMI Meter Patching Deferral</h6>
                <p>
                  <strong>Scenario:</strong> AEON identifies vulnerabilities in 150,000 smart meters scheduled for replacement in 2027 AMI technology refresh.
                </p>
                <p>
                  <strong>OXOT Recommendation:</strong> NEVER priority—do not allocate budget to patching meters scheduled for replacement in 24 months. Instead, implement compensating network controls: segment AMI headend network, deploy AEON anomaly detection on meter communications, monitor for exploitation attempts. If meters are compromised, incident response plan is in place, but proactive patching of soon-to-be-replaced hardware is waste.
                </p>
                <p>
                  <strong>LEAN Waste Elimination:</strong> Avoided $1.8M in AMI firmware update project costs (truck rolls to 150K locations). Budget reallocated to NOW priorities (substation hardening). Meters will be replaced in 2027 anyway—why spend OpEx on temporary fixes?
                </p>
              </div>
            </div>
          </div>

          {/* EXPANDED: OpEx Impact Analysis */}
          <div className="solution-opex-impact">
            <h5 className="solution-opex-impact__title">Operational Excellence Impact</h5>
            <div className="opex-impact-grid">
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">100%</div>
                <div className="opex-impact-item__label">NERC CIP compliance maintained without dedicated compliance FTE</div>
                <div className="opex-impact-item__description">
                  Cyber Defender Program delivers operational security that satisfies regulatory requirements—compliance is a byproduct, not the primary objective
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">75%</div>
                <div className="opex-impact-item__label">Reduction in vendor security assessment costs</div>
                <div className="opex-impact-item__description">
                  IEC 62443 procurement specifications transfer security burden to vendors—they prove security, you don't assess it
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">24/7</div>
                <div className="opex-impact-item__label">Energy-sector-trained SOC coverage without hiring specialized staff</div>
                <div className="opex-impact-item__description">
                  OXOT's SOC analysts understand DNP3, Modbus, and IEC 61850—can differentiate normal grid operations from cyber-attacks
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="solution-item solution-item--enhanced">
          <div className="solution-item__header">
            <h3>Confidential SOC-as-a-Service</h3>
            <span className="solution-item__category">Privacy-First Operations</span>
          </div>
          <p>Your Privacy-First Security Partner. OXOT's Confidential SOC-as-a-Service revolutionizes how organizations approach security operations by combining enterprise-grade protection with unprecedented privacy guarantees.</p>

          {/* EXPANDED: Privacy Architecture */}
          <div className="solution-privacy-framework">
            <h5 className="solution-privacy-framework__title">Attorney-Client Privilege at the Infrastructure Layer</h5>
            <p className="solution-privacy-framework__intro">
              Traditional SOC-as-a-Service creates a problem: every security alert, every incident investigation, every vulnerability scan becomes discoverable in litigation and regulatory proceedings. OXOT's Confidential SOC operates under attorney-client privilege, making all security telemetry protected work product.
            </p>

            <div className="privacy-benefits">
              <div className="privacy-benefit">
                <h6 className="privacy-benefit__title">Honest Internal Assessment Without Public Disclosure Risk</h6>
                <p className="privacy-benefit__description">
                  Your security team can be completely honest about vulnerabilities, incidents, and exposure without fear that this analysis becomes evidence in shareholder lawsuits or regulatory enforcement actions. Protected privilege means you can fix problems before they become public crises.
                </p>
              </div>

              <div className="privacy-benefit">
                <h6 className="privacy-benefit__title">M&A Due Diligence Without Liability Assumption</h6>
                <p className="privacy-benefit__description">
                  Acquiring a company? Confidential SOC allows deep security assessment of the target without creating discoverable evidence of "prior knowledge" of vulnerabilities. If the deal closes, you've inherited visibility; if it doesn't, your assessment remains privileged.
                </p>
              </div>

              <div className="privacy-benefit">
                <h6 className="privacy-benefit__title">Board-Level Reporting Without Legal Exposure</h6>
                <p className="privacy-benefit__description">
                  CFOs and board members can receive frank security briefings without creating fiduciary duty liability. Privilege protection allows executive teams to make informed risk decisions based on complete threat intelligence, not sanitized summaries designed to minimize legal exposure.
                </p>
              </div>
            </div>
          </div>

          {/* EXPANDED: NOW/NEXT/NEVER Application */}
          <div className="solution-application">
            <h5 className="solution-application__title">NOW/NEXT/NEVER Framework Application</h5>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--now">NOW</div>
              <div className="scenario-content">
                <h6>Active Incident Response with Legal Protection</h6>
                <p>
                  <strong>Scenario:</strong> You're experiencing an active security incident. Every action, every log file, every analysis document could be subpoenaed in shareholder litigation.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Activate Confidential SOC within 2 hours. All incident response activities conducted under attorney-client privilege via our legal partnership. AEON forensic analysis, threat hunting, and remediation planning all become protected work product. You get complete threat intelligence without creating litigation evidence.
                </p>
                <p>
                  <strong>Business Impact:</strong> Manufacturing client avoided the Marriott/Starwood scenario. Post-acquisition, OXOT's privileged assessment discovered a dormant breach dating back 2 years. Because assessment was privileged, acquirer could remediate WITHOUT triggering mandatory disclosure requirements. Legal fees saved: $12M+ (avoided SEC enforcement, shareholder class action, and customer notification costs).
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--next">NEXT</div>
              <div className="scenario-content">
                <h6>Proactive SOC Transition During Planned IT Transformation</h6>
                <p>
                  <strong>Scenario:</strong> Your organization is migrating to cloud infrastructure over 18 months (2025-2026). Current SOC can't monitor hybrid cloud effectively.
                </p>
                <p>
                  <strong>OXOT Response:</strong> Transition to Confidential SOC in phases aligned with cloud migration timeline. Month 1-6: on-prem monitoring. Month 7-12: hybrid visibility. Month 13-18: full cloud-native SOC. Each phase timed to match application migration schedule—security transitions follow business transitions, not lead them.
                </p>
                <p>
                  <strong>Budget Optimization:</strong> Avoided "rip and replace" SOC migration costs. Existing SIEM investment depreciated naturally over 18 months while OXOT's platform ramped. Total migration cost: 60% lower than emergency SOC replacement, and privileged framework established proactively before first cloud workload goes live.
                </p>
              </div>
            </div>

            <div className="solution-application__scenario">
              <div className="scenario-badge scenario-badge--never">NEVER</div>
              <div className="scenario-content">
                <h6>Low-Risk Development Environment Monitoring</h6>
                <p>
                  <strong>Scenario:</strong> Your organization has 15 non-production development/test environments with no customer data, no production connectivity, and no compliance scope.
                </p>
                <p>
                  <strong>OXOT Recommendation:</strong> NEVER priority—do not allocate SOC monitoring budget to dev/test environments. Accept the risk. If a developer's laptop is compromised and laterally moves into dev environment, the business impact is: zero. Reallocate that SOC license cost to production monitoring.
                </p>
                <p>
                  <strong>Honest Advice:</strong> Traditional SOC vendors want you to monitor everything (more licenses = more revenue). OXOT's advisor mindset: we tell you what NOT to monitor. Typical client saves $120K annually by eliminating NEVER priority monitoring scope.
                </p>
              </div>
            </div>
          </div>

          {/* EXPANDED: OpEx Impact Analysis */}
          <div className="solution-opex-impact">
            <h5 className="solution-opex-impact__title">Operational Excellence Impact</h5>
            <div className="opex-impact-grid">
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">$0</div>
                <div className="opex-impact-item__label">Litigation discovery costs for security incident data</div>
                <div className="opex-impact-item__description">
                  All SOC telemetry protected under privilege—no eDiscovery costs, no adversarial production requests
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">90%</div>
                <div className="opex-impact-item__label">Reduction in false positive alert escalations</div>
                <div className="opex-impact-item__description">
                  AEON-powered SOC delivers context-aware alerts—only genuine threats reach your team, eliminating alert fatigue
                </div>
              </div>
              <div className="opex-impact-item">
                <div className="opex-impact-item__metric">50-70%</div>
                <div className="opex-impact-item__label">Lower total cost vs. building internal SOC capability</div>
                <div className="opex-impact-item__description">
                  Avoid hiring 8-12 FTEs for 24/7 coverage, SIEM infrastructure costs, and continuous training—OXOT delivers enterprise SOC at mid-market pricing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
