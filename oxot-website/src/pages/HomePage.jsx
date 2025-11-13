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
