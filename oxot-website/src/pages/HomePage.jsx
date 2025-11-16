import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const servicesRef = useRef([]);
  const sectionRef = useRef(null);
  const thoughtLeadershipRef = useRef(null);

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

    // Animate thought leadership section
    if (thoughtLeadershipRef.current) {
      gsap.fromTo(
        thoughtLeadershipRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: thoughtLeadershipRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const carouselSlides = [
    {
      id: 1,
      category: 'AEON Cyber Digital Twin',
      title: 'Breakthrough Visibility for Critical Infrastructure',
      description: 'Unified OT/IT monitoring with real-time security insights and operational resilience tracking powered by advanced digital twin technology',
      cta: 'Explore AEON',
      backgroundVideo: 'https://static.videezy.com/system/resources/previews/000/037/383/original/Cyber-security-digital-and-AI-00357.mp4',
    },
    {
      id: 2,
      category: 'Grid Stability Analysis',
      title: 'Protecting the Grid\'s Precarious Pulse',
      description: 'Expert analysis and solutions for grid frequency instability, renewable integration challenges, and operational resilience - featuring Jim McKenney\'s groundbreaking research',
      cta: 'Read Analysis',
      backgroundImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80',
    },
    {
      id: 3,
      category: 'Critical Infrastructure Protection',
      title: 'Cybernetic Serenity, Delivered.',
      description: 'Comprehensive OT/ICS cybersecurity for Energy, Manufacturing, Water, and Transportation sectors with IEC 62443 expertise',
      cta: 'Our Solutions',
      backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    },
  ];

  const solutions = [
    {
      title: 'AEON Cyber Digital Twin',
      description: 'Breakthrough digital twin technology providing unified OT/IT visibility with real-time security insights, grid stability analysis, and operational resilience tracking.',
      icon: '🎯',
      link: '/solutions',
      highlight: true, // Featured solution
    },
    {
      title: 'Breach Disclosure Mitigation',
      description: 'Attorney-client privilege protection for security operations through our True Diligence™ Framework - transforming incident response with legal-grade privacy.',
      icon: '🛡️',
      link: '/solutions',
    },
    {
      title: 'Cyber Defender Program',
      description: 'Comprehensive cybersecurity program for Electric Cooperatives providing advanced protection for smart grids, DER, and critical infrastructure.',
      icon: '⚡',
      link: '/solutions',
    },
    {
      title: 'Confidential SOC-as-a-Service',
      description: 'Privacy-first security operations center with attorney-client privilege, delivering 24/7 monitoring and response while maintaining confidentiality.',
      icon: '🔍',
      link: '/solutions',
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

      {/* AEON Featured Section */}
      <section className="aeon-featured-section">
        <div className="aeon-featured__container">
          <div className="aeon-featured__content">
            <div className="aeon-featured__badge">FEATURED SOLUTION</div>
            <h2 className="aeon-featured__title">
              AEON Cyber Digital Twin
            </h2>
            <p className="aeon-featured__subtitle">
              Bridging Operations and Security Through Advanced Visualization
            </p>
            <p className="aeon-featured__description">
              The AEON Cyber Digital Twin represents a paradigm shift in critical infrastructure protection.
              By creating a unified, real-time digital representation of your OT/IT environment, AEON enables
              unprecedented visibility into operational resilience, threat landscapes, and system health.
              Featuring Jim McKenney's groundbreaking grid stability analysis, AEON addresses the most pressing
              challenges facing modern critical infrastructure.
            </p>
            <div className="aeon-featured__highlights">
              <div className="aeon-highlight">
                <div className="aeon-highlight__icon">📊</div>
                <div className="aeon-highlight__text">
                  <strong>Real-Time Visibility</strong>
                  <span>Unified OT/IT asset monitoring</span>
                </div>
              </div>
              <div className="aeon-highlight">
                <div className="aeon-highlight__icon">🔬</div>
                <div className="aeon-highlight__text">
                  <strong>Grid Stability Analysis</strong>
                  <span>Frequency instability detection</span>
                </div>
              </div>
              <div className="aeon-highlight">
                <div className="aeon-highlight__icon">🎯</div>
                <div className="aeon-highlight__text">
                  <strong>Predictive Intelligence</strong>
                  <span>AI-powered threat hunting</span>
                </div>
              </div>
            </div>
            <Link to="/solutions" className="aeon-featured__cta">
              Explore AEON Digital Twin →
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="services-section" ref={sectionRef}>
        <div className="services-section__container">
          <div className="services-section__header">
            <h2 className="services-section__title">Comprehensive Solutions for Critical Infrastructure</h2>
            <p className="services-section__subtitle">
              Advanced cybersecurity solutions designed for the most demanding industrial environments
            </p>
          </div>

          <div className="services-grid">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className={`service-card ${solution.highlight ? 'service-card--featured' : ''}`}
                ref={(el) => (servicesRef.current[index] = el)}
              >
                <div className="service-card__icon">{solution.icon}</div>
                {solution.highlight && (
                  <div className="service-card__badge">FEATURED</div>
                )}
                <h3 className="service-card__title">{solution.title}</h3>
                <p className="service-card__description">{solution.description}</p>
                <button className="service-card__cta">Learn More →</button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Preview - Jim McKenney */}
      <section className="thought-leadership-section" ref={thoughtLeadershipRef}>
        <div className="thought-leadership__container">
          <div className="thought-leadership__header">
            <span className="thought-leadership__category">THOUGHT LEADERSHIP</span>
            <h2 className="thought-leadership__title">
              Insights That Shape the Future of Critical Infrastructure Security
            </h2>
          </div>

          <div className="thought-leadership__featured">
            <div className="thought-leadership__content">
              <div className="thought-leadership__meta">
                <span className="thought-leadership__author">Jim McKenney</span>
                <span className="thought-leadership__divider">•</span>
                <span className="thought-leadership__date">Grid Stability Analysis</span>
              </div>
              <h3 className="thought-leadership__article-title">
                "Death Wobble": The Grid's Precarious Pulse
              </h3>
              <p className="thought-leadership__excerpt">
                "We are witnessing a decline in the system's inherent physical stability, a consequence of
                replacing traditional power plants with new, inverter-based technologies. This isn't merely
                an engineering footnote; it's a critical management challenge with profound implications for
                national security, economic continuity, and public safety."
              </p>
              <p className="thought-leadership__description">
                Jim McKenney's groundbreaking analysis examines the growing instability of the power grid's
                core operating rhythm. As traditional high-inertia synchronous generators are replaced by
                inverter-based resources (IBRs), the grid's ability to resist frequency changes diminishes,
                creating a dangerous "wobble" that threatens cascading failures across critical infrastructure.
              </p>
              <div className="thought-leadership__topics">
                <span className="topic-tag">Grid Frequency Instability</span>
                <span className="topic-tag">Rate of Change of Frequency (RoCoF)</span>
                <span className="topic-tag">Renewable Integration</span>
                <span className="topic-tag">Cascading Failures</span>
              </div>
              <Link to="/solutions" className="thought-leadership__cta">
                Read Full Analysis →
              </Link>
            </div>
            <div className="thought-leadership__visual">
              <div className="thought-leadership__stats-grid">
                <div className="tl-stat">
                  <div className="tl-stat__value">117</div>
                  <div className="tl-stat__label">Lines of Analysis</div>
                </div>
                <div className="tl-stat">
                  <div className="tl-stat__value">60 Hz</div>
                  <div className="tl-stat__label">Grid Frequency</div>
                </div>
                <div className="tl-stat">
                  <div className="tl-stat__value">&gt;1 Hz/s</div>
                  <div className="tl-stat__label">Critical RoCoF</div>
                </div>
                <div className="tl-stat">
                  <div className="tl-stat__value">3</div>
                  <div className="tl-stat__label">Interconnections</div>
                </div>
              </div>
            </div>
          </div>

          <div className="thought-leadership__more">
            <h4>More Research & Analysis</h4>
            <div className="tl-links">
              <Link to="/solutions" className="tl-link">
                <span>Grid Vulnerability Analysis</span>
                <span className="tl-link__arrow">→</span>
              </Link>
              <Link to="/solutions" className="tl-link">
                <span>Ransomware Resilience Frameworks</span>
                <span className="tl-link__arrow">→</span>
              </Link>
              <Link to="/solutions" className="tl-link">
                <span>M&A Cybersecurity Due Diligence</span>
                <span className="tl-link__arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section">
        <div className="value-section__container">
          <div className="value-section__content">
            <h2 className="value-section__title">Cybernetic Serenity, Delivered.</h2>
            <p className="value-section__text">
              At OXOT, we provide critical infrastructure operators with the most advanced OT/ICS cybersecurity
              services available. Our expertise spans IEC 62443 implementation, threat intelligence, digital twin
              technology, and operational resilience frameworks. We translate complex technical challenges into
              actionable strategies that enable our clients to operate with confidence in an increasingly complex
              threat landscape.
            </p>
            <div className="value-section__stats">
              <div className="value-stat">
                <div className="value-stat__number">IEC 62443</div>
                <div className="value-stat__label">Standards Authority</div>
              </div>
              <div className="value-stat">
                <div className="value-stat__number">4</div>
                <div className="value-stat__label">Critical Sectors</div>
              </div>
              <div className="value-stat">
                <div className="value-stat__number">24/7</div>
                <div className="value-stat__label">Monitoring & Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-section__container">
          <h2 className="industries-section__title">Critical Infrastructure Sectors We Protect</h2>
          <p className="industries-section__subtitle">
            Deep vertical expertise combined with comprehensive cybersecurity capabilities
          </p>
          <div className="industries-grid">
            <Link to="/industries" className="industry-card">
              <h3>Energy & Electricity</h3>
              <p>Grid stability, DER security, smart meters, substations, and renewable integration</p>
              <span className="industry-card__arrow">→</span>
            </Link>
            <Link to="/industries" className="industry-card">
              <h3>Manufacturing</h3>
              <p>ICS protection, ransomware resilience, production systems, and supply chain security</p>
              <span className="industry-card__arrow">→</span>
            </Link>
            <Link to="/industries" className="industry-card">
              <h3>Transportation</h3>
              <p>Rail signaling, aviation systems, smart transit, and intermodal facility protection</p>
              <span className="industry-card__arrow">→</span>
            </Link>
            <Link to="/industries" className="industry-card">
              <h3>Water & Wastewater</h3>
              <p>Treatment facilities, distribution networks, SCADA protection, and compliance</p>
              <span className="industry-card__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview-section">
        <div className="services-preview__container">
          <h2 className="services-preview__title">Comprehensive Cybersecurity Services</h2>
          <div className="services-preview__grid">
            <div className="service-preview-card">
              <h4>Cyber Assurance & Testing</h4>
              <p>Risk assessments, penetration testing, and IEC 62443 compliance validation</p>
            </div>
            <div className="service-preview-card">
              <h4>Crisis Management</h4>
              <p>24/7 incident response, crisis exercises, and post-incident analysis</p>
            </div>
            <div className="service-preview-card">
              <h4>Cyber Engineering</h4>
              <p>Security architecture, IAM, digital twin integration, and network segmentation</p>
            </div>
            <div className="service-preview-card">
              <h4>Training & Awareness</h4>
              <p>Cyber Defender programs, hands-on technical training, and security awareness</p>
            </div>
            <div className="service-preview-card">
              <h4>Adversarial AI Testing</h4>
              <p>AI-powered threat hunting, sector-specific intelligence, and impact assessment</p>
            </div>
            <div className="service-preview-card">
              <h4>AI Solutions</h4>
              <p>Process optimization, predictive analytics, and machine learning for threat detection</p>
            </div>
            <div className="service-preview-card">
              <h4>Supply Chain Assurance</h4>
              <p>Vendor risk assessment, secure access, and continuous supply chain monitoring</p>
            </div>
          </div>
          <Link to="/services" className="services-preview__cta">
            View All Services →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
