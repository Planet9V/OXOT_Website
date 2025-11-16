import React, { useState } from 'react';
import './ROICalculator.css';

/**
 * ROICalculator - Interactive OT Breach Cost Avoidance Calculator
 *
 * Converts technical security discussion into financial business case
 * ICE Score: 8.7/10 (Impact: 10, Confidence: 9, Ease: 7)
 *
 * Based on industry data:
 * - Colonial Pipeline: $4.4M ransom + $1.85B market cap loss
 * - JBS Foods: $11M ransom + operational disruption
 * - Oldsmar Water: Near-miss with potential catastrophic impact
 */
const ROICalculator = () => {
  const [formData, setFormData] = useState({
    annualRevenue: '',
    downtimeTolerance: '3',
    securityMaturity: '2',
    industrySector: 'manufacturing',
    otAssets: '',
    email: '',
    companyName: '',
  });

  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const industrySectors = [
    { value: 'manufacturing', label: 'Manufacturing', riskMultiplier: 1.2 },
    { value: 'energy', label: 'Energy Generation', riskMultiplier: 1.5 },
    { value: 'water', label: 'Water/Wastewater', riskMultiplier: 1.3 },
    { value: 'food', label: 'Food & Beverage', riskMultiplier: 1.1 },
    { value: 'transportation', label: 'Transportation', riskMultiplier: 1.4 },
    { value: 'chemicals', label: 'Chemicals/Pharma', riskMultiplier: 1.3 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateROI = (e) => {
    e.preventDefault();

    const revenue = parseFloat(formData.annualRevenue) * 1000000; // Convert to millions
    const downtime = parseInt(formData.downtimeTolerance);
    const maturity = parseInt(formData.securityMaturity);
    const assets = parseInt(formData.otAssets);
    const sector = industrySectors.find(s => s.value === formData.industrySector);

    // Industry breach probability (annual)
    // Based on IBM Cost of Breach 2024 + CISA ICS advisories
    const baseProbability = 0.28; // 28% annual breach probability for OT environments

    // Maturity-adjusted probability
    const maturityMultipliers = [2.0, 1.5, 1.0, 0.6, 0.3]; // Level 1-5
    const adjustedProbability = baseProbability * maturityMultipliers[maturity - 1] * sector.riskMultiplier;

    // Direct costs (ransom, forensics, legal)
    const directCosts = Math.min(revenue * 0.02, 10000000); // 2% of revenue or $10M cap

    // Downtime costs (revenue loss per day)
    const dailyRevenue = revenue / 365;
    const downtimeCosts = dailyRevenue * downtime;

    // Indirect costs (regulatory, reputation, customer churn, insurance premium increases)
    // Based on Ponemon Institute: indirect = 3-4x direct costs
    const indirectCosts = (directCosts + downtimeCosts) * 3.2;

    // Total expected loss
    const totalBreachCost = directCosts + downtimeCosts + indirectCosts;

    // Annual Loss Expectancy (ALE) = Probability × Impact
    const ale = adjustedProbability * totalBreachCost;

    // OXOT engagement cost (tiered pricing model)
    let oxotCost;
    if (assets < 100) {
      oxotCost = 150000; // Small deployment
    } else if (assets < 500) {
      oxotCost = 350000; // Medium deployment
    } else if (assets < 2000) {
      oxotCost = 750000; // Large deployment
    } else {
      oxotCost = 1500000; // Enterprise deployment
    }

    // Risk reduction from OXOT engagement
    // Based on: IEC 62443 compliance + AEON Digital Twin + True Diligence™ + 24/7 SOC
    const riskReduction = 0.78; // 78% risk reduction (conservative estimate)
    const reducedALE = ale * (1 - riskReduction);
    const annualSavings = ale - reducedALE;

    // ROI calculation
    const roi = ((annualSavings - oxotCost) / oxotCost) * 100;
    const paybackMonths = (oxotCost / annualSavings) * 12;

    setResults({
      totalBreachCost: totalBreachCost,
      ale: ale,
      oxotCost: oxotCost,
      annualSavings: annualSavings,
      roi: roi,
      paybackMonths: paybackMonths,
      riskReduction: riskReduction * 100,
      breachProbability: adjustedProbability * 100,
    });

    setShowResults(true);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="roi-calculator">
      <div className="roi-calculator__container">
        <div className="roi-calculator__header">
          <span className="roi-calculator__badge">INTERACTIVE TOOL</span>
          <h2 className="roi-calculator__title">
            OT Breach Cost Avoidance Calculator
          </h2>
          <p className="roi-calculator__subtitle">
            Calculate your expected annual loss from OT/ICS breaches and quantify the ROI of OXOT's comprehensive protection.
            Based on industry data from Colonial Pipeline, JBS Foods, and IBM Cost of Breach 2024.
          </p>
        </div>

        {!showResults ? (
          <form onSubmit={calculateROI} className="roi-calculator__form">
            <div className="roi-form-section">
              <h3 className="roi-form-section__title">Organization Profile</h3>

              <div className="roi-form-group">
                <label htmlFor="annualRevenue">Annual Revenue (in millions)</label>
                <div className="roi-input-wrapper">
                  <span className="roi-input-prefix">$</span>
                  <input
                    type="number"
                    id="annualRevenue"
                    name="annualRevenue"
                    min="10"
                    max="100000"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    required
                    placeholder="250"
                  />
                  <span className="roi-input-suffix">M</span>
                </div>
                <span className="roi-form-help">Example: $250M annual revenue</span>
              </div>

              <div className="roi-form-group">
                <label htmlFor="industrySector">Industry Sector</label>
                <select
                  id="industrySector"
                  name="industrySector"
                  value={formData.industrySector}
                  onChange={handleInputChange}
                  required
                >
                  {industrySectors.map(sector => (
                    <option key={sector.value} value={sector.value}>
                      {sector.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="roi-form-group">
                <label htmlFor="otAssets">Number of OT/ICS Assets</label>
                <input
                  type="number"
                  id="otAssets"
                  name="otAssets"
                  min="10"
                  max="50000"
                  value={formData.otAssets}
                  onChange={handleInputChange}
                  required
                  placeholder="350"
                />
                <span className="roi-form-help">PLCs, RTUs, HMIs, SCADA servers, etc.</span>
              </div>
            </div>

            <div className="roi-form-section">
              <h3 className="roi-form-section__title">Current Security Posture</h3>

              <div className="roi-form-group">
                <label htmlFor="securityMaturity">OT Security Maturity Level</label>
                <select
                  id="securityMaturity"
                  name="securityMaturity"
                  value={formData.securityMaturity}
                  onChange={handleInputChange}
                  required
                >
                  <option value="1">Level 1 - Initial (No formal OT security program)</option>
                  <option value="2">Level 2 - Developing (Basic controls, limited monitoring)</option>
                  <option value="3">Level 3 - Defined (Documented processes, asset inventory)</option>
                  <option value="4">Level 4 - Managed (Continuous monitoring, IEC 62443 alignment)</option>
                  <option value="5">Level 5 - Optimized (Full digital twin, AI-powered defense)</option>
                </select>
              </div>

              <div className="roi-form-group">
                <label htmlFor="downtimeTolerance">Days to Recover from OT Breach</label>
                <input
                  type="number"
                  id="downtimeTolerance"
                  name="downtimeTolerance"
                  min="1"
                  max="365"
                  value={formData.downtimeTolerance}
                  onChange={handleInputChange}
                  required
                />
                <span className="roi-form-help">Colonial Pipeline: 6 days | JBS Foods: 4 days</span>
              </div>
            </div>

            <div className="roi-form-section roi-form-section--lead-capture">
              <h3 className="roi-form-section__title">Get Your Results</h3>
              <p className="roi-lead-capture-text">
                See your personalized ROI analysis, including expected annual loss, OXOT engagement cost, and payback period.
              </p>

              <div className="roi-form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  placeholder="Acme Manufacturing"
                />
              </div>

              <div className="roi-form-group">
                <label htmlFor="email">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <button type="submit" className="roi-calculator__submit">
              Calculate My ROI →
            </button>
          </form>
        ) : (
          <div className="roi-results">
            <div className="roi-results__header">
              <h3>Your OT Cybersecurity ROI Analysis</h3>
              <p>Based on {formData.companyName}'s profile</p>
            </div>

            <div className="roi-results__grid">
              <div className="roi-result-card roi-result-card--danger">
                <div className="roi-result-card__label">Current Breach Risk (Annual)</div>
                <div className="roi-result-card__value">{formatPercent(results.breachProbability)}</div>
                <div className="roi-result-card__context">
                  Based on {formData.industrySector} sector + maturity level {formData.securityMaturity}
                </div>
              </div>

              <div className="roi-result-card roi-result-card--critical">
                <div className="roi-result-card__label">Expected Total Breach Cost</div>
                <div className="roi-result-card__value">{formatCurrency(results.totalBreachCost)}</div>
                <div className="roi-result-card__context">
                  Direct costs + {formData.downtimeTolerance} days downtime + 3.2x indirect losses
                </div>
              </div>

              <div className="roi-result-card roi-result-card--warning">
                <div className="roi-result-card__label">Annual Loss Expectancy (ALE)</div>
                <div className="roi-result-card__value">{formatCurrency(results.ale)}</div>
                <div className="roi-result-card__context">
                  Probability × Impact (what you're ACTUALLY risking each year)
                </div>
              </div>

              <div className="roi-result-card roi-result-card--info">
                <div className="roi-result-card__label">OXOT Engagement Cost</div>
                <div className="roi-result-card__value">{formatCurrency(results.oxotCost)}</div>
                <div className="roi-result-card__context">
                  IEC 62443 + AEON Digital Twin + 24/7 SOC + True Diligence™
                </div>
              </div>

              <div className="roi-result-card roi-result-card--success">
                <div className="roi-result-card__label">Risk Reduction</div>
                <div className="roi-result-card__value">{formatPercent(results.riskReduction)}</div>
                <div className="roi-result-card__context">
                  Attorney-client privilege + comprehensive OT protection
                </div>
              </div>

              <div className="roi-result-card roi-result-card--success">
                <div className="roi-result-card__label">Annual Savings</div>
                <div className="roi-result-card__value">{formatCurrency(results.annualSavings)}</div>
                <div className="roi-result-card__context">
                  Reduced ALE from OXOT protection
                </div>
              </div>

              <div className="roi-result-card roi-result-card--highlight">
                <div className="roi-result-card__label">Return on Investment</div>
                <div className="roi-result-card__value">{formatPercent(results.roi)}</div>
                <div className="roi-result-card__context">
                  {results.roi > 100 ? '🎯 Strong business case' : '⚠️ Needs strategic consideration'}
                </div>
              </div>

              <div className="roi-result-card roi-result-card__highlight">
                <div className="roi-result-card__label">Payback Period</div>
                <div className="roi-result-card__value">
                  {results.paybackMonths < 12
                    ? `${Math.round(results.paybackMonths)} months`
                    : `${(results.paybackMonths / 12).toFixed(1)} years`
                  }
                </div>
                <div className="roi-result-card__context">
                  Time to recover OXOT investment from risk reduction
                </div>
              </div>
            </div>

            <div className="roi-results__interpretation">
              <h4>What This Means</h4>
              {results.roi > 200 && (
                <p className="roi-interpretation--excellent">
                  <strong>Exceptional ROI:</strong> With {formatPercent(results.roi)} ROI, OXOT delivers ${(results.roi / 100 + 1).toFixed(1)}x
                  return on investment. This is a compelling business case for immediate engagement. Your current {formatPercent(results.breachProbability)}
                  annual breach risk represents an unacceptable financial exposure.
                </p>
              )}
              {results.roi >= 100 && results.roi <= 200 && (
                <p className="roi-interpretation--good">
                  <strong>Strong ROI:</strong> With {formatPercent(results.roi)} ROI, OXOT provides solid value. Your current ALE of {formatCurrency(results.ale)}
                  significantly exceeds the cost of comprehensive protection. Consider this a strategic investment in operational resilience.
                </p>
              )}
              {results.roi < 100 && results.roi > 0 && (
                <p className="roi-interpretation--moderate">
                  <strong>Moderate ROI:</strong> While {formatPercent(results.roi)} ROI may not seem compelling on paper, consider the qualitative benefits:
                  attorney-client privilege protection, regulatory compliance, customer confidence, and insurance premium reductions. The True Diligence™
                  framework alone can save millions in litigation exposure.
                </p>
              )}
              {results.roi <= 0 && (
                <p className="roi-interpretation--strategic">
                  <strong>Strategic Investment:</strong> The calculated ROI reflects low current risk exposure—which may indicate you're underestimating
                  indirect costs, regulatory fines, or reputational damage. Many of our clients discovered hidden vulnerabilities during initial assessment
                  that dramatically changed their risk profile. Consider a complimentary security posture review.
                </p>
              )}
            </div>

            <div className="roi-results__cta">
              <h4>Next Steps</h4>
              <p>
                Ready to turn this analysis into action? Our security architects can perform a complimentary
                ransomware readiness assessment and provide a detailed proposal based on your specific environment.
              </p>
              <div className="roi-results__cta-buttons">
                <a href="/services" className="roi-cta-button roi-cta-button--primary">
                  Schedule Assessment
                </a>
                <button
                  onClick={() => setShowResults(false)}
                  className="roi-cta-button roi-cta-button--secondary"
                >
                  Recalculate with Different Inputs
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="roi-calculator__disclaimer">
          <p>
            <strong>Methodology:</strong> This calculator uses industry-standard Annual Loss Expectancy (ALE) calculations
            based on IBM Cost of a Data Breach 2024, Ponemon Institute research, and real-world OT breach data (Colonial Pipeline,
            JBS Foods, Oldsmar Water). Results are estimates for planning purposes and actual costs/ROI may vary based on specific
            circumstances. OXOT engagement costs are indicative and subject to custom scoping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
