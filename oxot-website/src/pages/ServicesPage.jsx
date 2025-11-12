import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      title: 'AEON Cyber Digital Twin',
      description: 'Gain unparalleled visibility into your operational technology (OT) environment with a dynamic, living model of your critical assets. Our Digital Twin bridges the gap between cyber and physical systems for enhanced resilience.',
      link: '/services/digital-twin'
    },
    {
      title: 'AI-Powered Penetration Testing',
      description: 'Leverage our fully autonomous, adversarial AI to continuously test your defenses. Discover and remediate vulnerabilities before attackers can exploit them with our next-generation penetration testing services.',
      link: '/services/ai-pen-testing'
    },
    {
      title: 'Strategic Roadmap & Facility Due Diligence',
      description: 'Develop a comprehensive cybersecurity strategy that aligns with your business objectives. We provide expert facility due diligence and create actionable roadmaps to mature your security posture over time.',
      link: '/services/strategic-roadmap'
    },
    {
      title: 'SBOM & GBOM Analysis',
      description: 'Achieve deep supply chain visibility with our Software Bill of Materials (SBOM) and Governance Bill of Materials (GBOM) analysis. We correlate vulnerabilities to give you a clear picture of your component-level risk.',
      link: '/services/sbom-gbom-analysis'
    },
    {
      title: 'Predictive Cyber Intelligence',
      description: 'Stay ahead of threats with our predictive intelligence services. We analyze global threat data and attacker TTPs to forecast potential attacks against your sector and specific operations.',
      link: '/services/predictive-intelligence'
    },
    {
      title: 'IEC 62443 Services',
      description: 'Ensure your industrial control systems (ICS) are secure and compliant with the leading international standard. We are experts in implementing the IEC 62443 framework for Manufacturing, Energy, and Data Centers.',
      link: '/services/iec-62443'
    },
    {
      title: 'Express Attack Briefs',
      description: 'Receive rapid, AI-driven analysis of emerging threats. The AEON engine analyzes attacker techniques to determine if your organization is susceptible to a specific attack, providing actionable intelligence in minutes.',
      link: '/services/express-briefs'
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <h2>Our Services</h2>
        <p>Cutting-edge solutions to protect your most critical operations.</p>
      </div>
      <div className="services-content">
        {services.map((service, index) => (
          <div className="service-category" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="learn-more-btn">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
