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
        <div className="solution-item">
          <h3>Digital Twin for Operational Resilience</h3>
          <p>Bridging Operations and Security Through Advanced Visualization. The Digital Twin solution is a groundbreaking approach to operational resilience, specifically designed to unify cybersecurity and operations data in a single, comprehensive view of your critical infrastructure.</p>
          <h4>The OXOT CyberOperative Advantage</h4>
          <ul>
            <li>Real-time asset monitoring with security correlation</li>
            <li>Predictive threat hunting in operational context</li>
            <li>Protected automation systems</li>
            <li>Continuous operational resilience</li>
          </ul>
        </div>
        <div className="solution-item">
          <h3>Cyber Defender Program</h3>
          <p>Protecting Critical Infrastructure Through Advanced Cybersecurity. The Cyber Defender Program is a comprehensive cybersecurity solution specifically designed for Electric Cooperatives, addressing the unique challenges faced by power distribution organizations in protecting critical infrastructure.</p>
          <h4>The OXOT Defender Advantage</h4>
          <ul>
            <li>Smart meter security orchestration</li>
            <li>Microgrid protection frameworks</li>
            <li>DER integration safeguards</li>
            <li>Real-time threat correlation</li>
          </ul>
        </div>
        <div className="solution-item">
          <h3>Confidential SOC-as-a-Service</h3>
          <p>Your Privacy-First Security Partner. OXOT's Confidential SOC-as-a-Service revolutionizes how organizations approach security operations by combining enterprise-grade protection with unprecedented privacy guarantees.</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
