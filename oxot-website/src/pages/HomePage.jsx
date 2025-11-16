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

      {/* Value Proposition Section */}
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

      {/* Platform Features Section */}
      <section className="platform-section">
        <div className="platform-section__container">
          <h2 className="platform-section__title">Advanced Security Platform</h2>
          <p className="platform-section__subtitle">
            Cutting-edge AI-powered tools and simulations for comprehensive critical infrastructure protection
          </p>

          <div className="platform-grid">
            <a href="/aeon" className="platform-card platform-card--major">
              <div className="platform-card__badge">Flagship Platform</div>
              <div className="platform-card__icon">🧠</div>
              <h3 className="platform-card__title">AEON Cyber Digital Twin</h3>
              <p className="platform-card__description">
                AI-powered digital twin with predictive analytics, threat modeling, and psychohistory-inspired
                forecasting for critical infrastructure defense.
              </p>
              <div className="platform-card__features">
                <span className="feature-tag">Deep Graph Intelligence</span>
                <span className="feature-tag">20+ Hop Analysis</span>
                <span className="feature-tag">SBOM Integration</span>
              </div>
              <span className="platform-card__cta">Explore Platform →</span>
            </a>

            <a href="/agent-red" className="platform-card platform-card--agent-red">
              <div className="platform-card__badge">Autonomous Operations</div>
              <div className="platform-card__icon">⚔️</div>
              <h3 className="platform-card__title">Agent Red</h3>
              <p className="platform-card__description">
                Fully autonomous AI agents executing offensive frameworks with Agent-to-Agent coordination
                for advanced red team operations.
              </p>
              <div className="platform-card__features">
                <span className="feature-tag feature-tag--red">Metasploit Integration</span>
                <span className="feature-tag feature-tag--red">A2A Protocol</span>
                <span className="feature-tag feature-tag--red">OSINT Engine</span>
              </div>
              <span className="platform-card__cta platform-card__cta--red">View Capabilities →</span>
            </a>

            <a href="/simulations" className="platform-card">
              <div className="platform-card__icon">🎯</div>
              <h3 className="platform-card__title">Interactive Simulations</h3>
              <p className="platform-card__description">
                Hands-on simulations across all 16 CISA critical infrastructure sectors with real-time
                threat scenarios and attack visualization.
              </p>
              <div className="platform-card__features">
                <span className="feature-tag">16 CISA Sectors</span>
                <span className="feature-tag">Live Scenarios</span>
              </div>
              <span className="platform-card__cta">Try Simulations →</span>
            </a>

            <a href="/articles" className="platform-card">
              <div className="platform-card__icon">📚</div>
              <h3 className="platform-card__title">Knowledge Center</h3>
              <p className="platform-card__description">
                In-depth technical articles, threat intelligence reports, and security research covering
                the latest OT/ICS vulnerabilities and attack techniques.
              </p>
              <div className="platform-card__features">
                <span className="feature-tag">Threat Research</span>
                <span className="feature-tag">Best Practices</span>
              </div>
              <span className="platform-card__cta">Read Articles →</span>
            </a>
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
    </div>
  );
};

export default HomePage;
