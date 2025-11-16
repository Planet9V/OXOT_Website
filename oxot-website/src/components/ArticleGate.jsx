import React, { useState } from 'react';
import './ArticleGate.css';

/**
 * ArticleGate - Lead Capture Component for Premium Content
 *
 * B2B SaaS-optimized lead capture gate for high-value technical articles
 * Features:
 * - Progressive disclosure (preview first 200-300 words)
 * - Qualifying lead capture fields (Email, Company, Role, Company Size, Challenge)
 * - Form validation
 * - Thank you state
 * - Privacy trust signals
 * - Analytics integration hooks
 */

const ArticleGate = ({
  articleId,
  articleTitle,
  articleCategory,
  previewContent,
  fullContent,
  gateType = 'hard', // 'hard' or 'soft'
  onLeadCapture = null,
  customHeadline = null,
  customCTAText = null
}) => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    role: '',
    companySize: '',
    challenge: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  // Default headlines based on article category
  const getDefaultHeadline = () => {
    if (customHeadline) return customHeadline;

    const categoryHeadlines = {
      'Grid Stability': 'Access Technical Analysis: Grid Frequency & Infrastructure Resilience',
      'IEC 62443': 'Unlock Complete IEC 62443 Implementation Guide',
      'Ransomware': 'Download Ransomware Readiness Framework',
      'Threat Intelligence': 'Access Full Threat Intelligence Analysis',
      'M&A': 'Unlock OT Cybersecurity M&A Due Diligence Framework',
      'Identity Security': 'Access Identity-Centric Security Implementation Guide',
      'Risk Management': 'Download Risk Quantification Methodology',
      'default': 'Access Premium OT Cybersecurity Research'
    };

    return categoryHeadlines[articleCategory] || categoryHeadlines.default;
  };

  // Default CTA text variants
  const getCTAText = () => {
    if (customCTAText) return customCTAText;
    return gateType === 'hard' ? 'Unlock Full Article' : 'Continue Reading';
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = 'Business email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    } else if (formData.email.includes('@gmail.') || formData.email.includes('@yahoo.') ||
               formData.email.includes('@hotmail.') || formData.email.includes('@outlook.')) {
      errors.email = 'Please use your business email address';
    }

    // Company validation
    if (!formData.company || formData.company.trim().length < 2) {
      errors.company = 'Company name is required';
    }

    // Role validation
    if (!formData.role) {
      errors.role = 'Please select your role';
    }

    // Company size validation
    if (!formData.companySize) {
      errors.companySize = 'Please select company size';
    }

    // Challenge is optional but encouraged

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'lead_capture', {
        article_id: articleId,
        article_title: articleTitle,
        article_category: articleCategory,
        gate_type: gateType,
        company_size: formData.companySize,
        role: formData.role
      });
    }

    // Custom lead capture handler (integrate with CRM/email service)
    if (onLeadCapture) {
      try {
        await onLeadCapture({
          ...formData,
          articleId,
          articleTitle,
          articleCategory,
          timestamp: new Date().toISOString(),
          source: 'article_gate'
        });
      } catch (error) {
        console.error('Lead capture error:', error);
      }
    }

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowFullContent(true);

      // Scroll to content after brief delay
      setTimeout(() => {
        const contentElement = document.getElementById('gated-full-content');
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }, 800);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="article-gate">
      {/* Preview Content - Always visible for SEO */}
      <div className="article-gate__preview">
        {previewContent}
      </div>

      {/* Gate Overlay */}
      {!showFullContent && (
        <div className="article-gate__overlay">
          <div className="article-gate__blur-gradient" />

          <div className="article-gate__form-container">
            <div className="article-gate__form-card">
              {!isSubmitted ? (
                <>
                  {/* Value Proposition */}
                  <div className="article-gate__header">
                    <div className="article-gate__category-badge">{articleCategory}</div>
                    <h3 className="article-gate__headline">
                      {getDefaultHeadline()}
                    </h3>
                    <p className="article-gate__subheadline">
                      This {articleTitle.split(':')[0]} represents original OXOT research combining technical depth,
                      real-world intelligence, and actionable frameworks for OT/ICS cybersecurity professionals.
                    </p>
                  </div>

                  {/* Lead Capture Form */}
                  <form onSubmit={handleSubmit} className="article-gate__form" noValidate>
                    {/* Email Field */}
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Business Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.name@company.com"
                        className={`form-input ${formErrors.email ? 'form-input--error' : ''}`}
                        required
                        autoComplete="email"
                      />
                      {formErrors.email && (
                        <span className="form-error">{formErrors.email}</span>
                      )}
                    </div>

                    {/* Company Field */}
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className={`form-input ${formErrors.company ? 'form-input--error' : ''}`}
                        required
                        autoComplete="organization"
                      />
                      {formErrors.company && (
                        <span className="form-error">{formErrors.company}</span>
                      )}
                    </div>

                    {/* Role Field */}
                    <div className="form-group">
                      <label htmlFor="role" className="form-label">
                        Your Role <span className="required">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`form-select ${formErrors.role ? 'form-input--error' : ''}`}
                        required
                      >
                        <option value="">Select your role...</option>
                        <option value="CISO">CISO / Chief Information Security Officer</option>
                        <option value="CIO">CIO / Chief Information Officer</option>
                        <option value="VP_Engineering">VP Engineering / VP Operations</option>
                        <option value="Director_Security">Director of Security</option>
                        <option value="OT_Security">OT Security Manager/Engineer</option>
                        <option value="IT_Security">IT Security Manager/Engineer</option>
                        <option value="Compliance">Compliance / Risk Manager</option>
                        <option value="Consultant">Consultant / Advisor</option>
                        <option value="Other">Other</option>
                      </select>
                      {formErrors.role && (
                        <span className="form-error">{formErrors.role}</span>
                      )}
                    </div>

                    {/* Company Size Field */}
                    <div className="form-group">
                      <label htmlFor="companySize" className="form-label">
                        Company Size <span className="required">*</span>
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className={`form-select ${formErrors.companySize ? 'form-input--error' : ''}`}
                        required
                      >
                        <option value="">Select company size...</option>
                        <option value="1-50">1-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1,000 employees</option>
                        <option value="1001-5000">1,001-5,000 employees</option>
                        <option value="5000+">5,000+ employees</option>
                      </select>
                      {formErrors.companySize && (
                        <span className="form-error">{formErrors.companySize}</span>
                      )}
                    </div>

                    {/* Challenge Field (Optional but valuable for lead scoring) */}
                    <div className="form-group">
                      <label htmlFor="challenge" className="form-label">
                        Primary OT Security Challenge <span className="optional">(Optional)</span>
                      </label>
                      <select
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select your biggest challenge...</option>
                        <option value="IEC62443_Compliance">IEC 62443 Compliance</option>
                        <option value="Ransomware_Defense">Ransomware Defense</option>
                        <option value="IT_OT_Convergence">IT/OT Convergence</option>
                        <option value="Legacy_Systems">Legacy System Security</option>
                        <option value="Vendor_Risk">Third-Party/Vendor Risk</option>
                        <option value="Network_Segmentation">Network Segmentation</option>
                        <option value="M&A_Due_Diligence">M&A Due Diligence</option>
                        <option value="Incident_Response">Incident Response Planning</option>
                        <option value="Asset_Visibility">Asset Discovery & Visibility</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="article-gate__cta-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner" />
                          Unlocking...
                        </>
                      ) : (
                        <>
                          {getCTAText()} →
                        </>
                      )}
                    </button>

                    {/* Trust Signals */}
                    <div className="article-gate__trust-signals">
                      <div className="trust-signal">
                        <span className="trust-icon">🔒</span>
                        <span>Your information is secure</span>
                      </div>
                      <div className="trust-signal">
                        <span className="trust-icon">📧</span>
                        <span>No spam, unsubscribe anytime</span>
                      </div>
                      <div className="trust-signal">
                        <span className="trust-icon">⚡</span>
                        <span>Instant access to content</span>
                      </div>
                    </div>

                    {/* Privacy Policy Link */}
                    <p className="article-gate__privacy-note">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>
                      . We respect your inbox and only send valuable OT security insights.
                    </p>
                  </form>
                </>
              ) : (
                // Thank You State
                <div className="article-gate__thank-you">
                  <div className="thank-you-icon">✓</div>
                  <h3>Welcome to OXOT Research</h3>
                  <p>
                    Thank you for your interest, {formData.email.split('@')[0]}!
                    Your full article access is now available below.
                  </p>
                  <p className="thank-you-next-steps">
                    <strong>What's Next:</strong><br />
                    • Full article content unlocked below<br />
                    • Check your inbox for related resources<br />
                    • Explore our <a href="/solutions">Solutions</a> and <a href="/services">Services</a>
                  </p>
                  {formData.challenge && (
                    <div className="thank-you-personalized">
                      <p>
                        <strong>Based on your interest in {formData.challenge.replace(/_/g, ' ')}:</strong><br />
                        We'll follow up with specific resources addressing this challenge.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full Content - Revealed after form submission */}
      {showFullContent && (
        <div id="gated-full-content" className="article-gate__full-content">
          {fullContent}

          {/* Post-Content CTA */}
          <div className="article-gate__post-cta">
            <div className="post-cta-card">
              <h4>Ready to Strengthen Your OT Security Posture?</h4>
              <p>
                This article represents just one facet of OXOT's comprehensive approach to
                OT/ICS cybersecurity. Let's discuss how we can help your organization.
              </p>
              <div className="post-cta-buttons">
                <a href="/contact" className="post-cta-button post-cta-button--primary">
                  Schedule Consultation
                </a>
                <a href="/solutions" className="post-cta-button post-cta-button--secondary">
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleGate;
