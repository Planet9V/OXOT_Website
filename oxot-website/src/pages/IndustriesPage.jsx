import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './IndustriesPage.css';

const IndustriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // All 16 CISA Critical Infrastructure Sectors
  const industries = [
    {
      id: 'chemical',
      name: 'Chemical',
      icon: '⚗️',
      description: 'Process safety and security for chemical manufacturing facilities, toxic release prevention, and CFATS compliance.',
      keyServices: [
        'CFATS security compliance',
        'Process control system security',
        'Safety instrumented systems (SIS)',
        'Insider threat mitigation'
      ],
      regulations: ['CFATS', 'IEC 62443', 'EPA'],
      simulationLink: '/simulations/chemical-plant'
    },
    {
      id: 'commercial-facilities',
      name: 'Commercial Facilities',
      icon: '🏢',
      description: 'Integrated security for large commercial complexes, retail centers, entertainment venues, and public gathering spaces.',
      keyServices: [
        'Physical security integration',
        'Access control systems',
        'Video surveillance & analytics',
        'Emergency notification systems'
      ],
      regulations: ['NFPA', 'Building Codes', 'PSIM Standards'],
      simulationLink: '/simulations/commercial-facility'
    },
    {
      id: 'communications',
      name: 'Communications',
      icon: '📡',
      description: 'Network resilience and security for telecommunications infrastructure, 5G networks, and emergency communications.',
      keyServices: [
        '5G network security',
        'DDoS mitigation',
        'Network operations center (NOC) security',
        'Emergency communications priority'
      ],
      regulations: ['FCC', 'CISA', 'NIST CSF'],
      simulationLink: '/simulations/telecom-network'
    },
    {
      id: 'critical-manufacturing',
      name: 'Critical Manufacturing',
      icon: '🏭',
      description: 'Advanced security for defense contractors, aerospace manufacturing, and facilities producing essential goods.',
      keyServices: [
        'CMMC compliance (Levels 1-3)',
        'Intellectual property protection',
        'Supply chain security',
        'CNC and robotics security'
      ],
      regulations: ['CMMC', 'NIST 800-171', 'ITAR/EAR'],
      simulationLink: '/simulations/critical-manufacturing'
    },
    {
      id: 'dams',
      name: 'Dams',
      icon: '🌊',
      description: 'SCADA and control system security for hydroelectric facilities, flood control, and water resource management.',
      keyServices: [
        'Dam control system security',
        'SCADA protection',
        'Flood control automation',
        'Emergency response systems'
      ],
      regulations: ['FERC', 'IEC 62443', 'Dam Safety'],
      simulationLink: '/simulations/hydroelectric-dam'
    },
    {
      id: 'defense-industrial-base',
      name: 'Defense Industrial Base',
      icon: '🛡️',
      description: 'Comprehensive security for defense contractors handling classified information and critical defense systems.',
      keyServices: [
        'Classified network security',
        'DoD cybersecurity requirements',
        'Continuous monitoring (CDM)',
        'Insider threat programs'
      ],
      regulations: ['CMMC', 'NIST 800-171', 'DFARS', 'ITAR'],
      simulationLink: '/simulations/defense-contractor'
    },
    {
      id: 'emergency-services',
      name: 'Emergency Services',
      icon: '🚨',
      description: 'Mission-critical security for 911 dispatch centers, emergency operations, and first responder communications.',
      keyServices: [
        'CAD system security',
        'Emergency radio networks (P25)',
        'Multi-agency coordination',
        'Continuity of operations'
      ],
      regulations: ['CISA', 'FirstNet', 'NIMS'],
      simulationLink: '/simulations/emergency-services'
    },
    {
      id: 'energy',
      name: 'Energy',
      icon: '⚡',
      description: 'Grid security, substation automation, pipeline monitoring, and renewable energy integration for the power sector.',
      keyServices: [
        'NERC CIP compliance',
        'Substation automation security',
        'Pipeline SCADA protection',
        'Smart grid security'
      ],
      regulations: ['NERC CIP', 'IEC 61850', 'TSA Security Directives'],
      simulationLink: '/simulations/power-substation'
    },
    {
      id: 'financial-services',
      name: 'Financial Services',
      icon: '🏦',
      description: 'High-availability security for banking systems, trading platforms, payment networks, and financial data centers.',
      keyServices: [
        'Core banking security',
        'Payment network protection',
        'DDoS mitigation',
        'Regulatory compliance (GLBA, PCI DSS)'
      ],
      regulations: ['GLBA', 'PCI DSS', 'FFIEC', 'SOX'],
      simulationLink: '/simulations/financial-datacenter'
    },
    {
      id: 'food-agriculture',
      name: 'Food and Agriculture',
      icon: '🌾',
      description: 'Security for food processing plants, cold chain logistics, precision agriculture, and farm-to-table traceability.',
      keyServices: [
        'Food processing automation security',
        'Cold chain monitoring',
        'HACCP compliance',
        'Supply chain traceability'
      ],
      regulations: ['HACCP', 'FDA', 'USDA'],
      simulationLink: '/simulations/food-processing'
    },
    {
      id: 'government-facilities',
      name: 'Government Facilities',
      icon: '🏛️',
      description: 'Integrated security systems for federal buildings, military installations, and critical government infrastructure.',
      keyServices: [
        'PIV/CAC credentialing',
        'Perimeter security',
        'Screening systems',
        'Continuity of government (COG)'
      ],
      regulations: ['HSPD-12', 'FICAM', 'FedRAMP'],
      simulationLink: '/simulations/government-facility'
    },
    {
      id: 'healthcare',
      name: 'Healthcare and Public Health',
      icon: '🏥',
      description: 'Patient safety and data protection for hospitals, healthcare delivery networks, and medical device ecosystems.',
      keyServices: [
        'Electronic health record (EHR) security',
        'Medical device security',
        'HIPAA compliance',
        'Telehealth protection'
      ],
      regulations: ['HIPAA', 'HITECH', 'FDA Medical Device'],
      simulationLink: '/simulations/hospital-systems'
    },
    {
      id: 'information-technology',
      name: 'Information Technology',
      icon: '💻',
      description: 'Cloud infrastructure security, managed service provider protection, and large-scale IT operations.',
      keyServices: [
        'Cloud security (multi-tenant)',
        'SOC 2 / ISO 27001 compliance',
        'DevSecOps integration',
        'Supply chain security'
      ],
      regulations: ['SOC 2', 'ISO 27001', 'FedRAMP'],
      simulationLink: '/simulations/cloud-service-provider'
    },
    {
      id: 'nuclear',
      name: 'Nuclear',
      icon: '☢️',
      description: 'Defense-in-depth security for nuclear power plants, research reactors, and radioactive materials handling.',
      keyServices: [
        'NRC cybersecurity compliance',
        'Safety system protection',
        'Defense-in-depth architecture',
        'Reactor control security'
      ],
      regulations: ['NRC 10 CFR 73.54', 'IEC 62645', 'NEI 08-09'],
      simulationLink: '/simulations/nuclear-power-plant'
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: '🚄',
      description: 'Security for aviation, maritime, rail, and mass transit systems ensuring safe and resilient transportation networks.',
      keyServices: [
        'Airport operations security',
        'Port terminal systems',
        'Positive train control (PTC)',
        'TSA compliance'
      ],
      regulations: ['TSA', 'FAA', 'MTSA', 'FRA'],
      simulationLink: '/simulations/airport-operations'
    },
    {
      id: 'water',
      name: 'Water and Wastewater',
      icon: '💧',
      description: 'Critical infrastructure protection for drinking water treatment, wastewater management, and distribution systems.',
      keyServices: [
        'Water treatment SCADA security',
        'Chemical dosing control',
        'EPA compliance',
        'Emergency response'
      ],
      regulations: ['EPA', 'AWWA', 'IEC 62443'],
      simulationLink: '/simulations/water-treatment'
    }
  ];

  const categories = ['all', ...new Set(industries.map(i => i.id))];

  const filteredIndustries = selectedCategory === 'all'
    ? industries
    : industries.filter(i => i.id === selectedCategory);

  return (
    <div className="industries-page">
      <div className="industries-hero">
        <div className="industries-hero__content">
          <h1 className="industries-hero__title">Critical Infrastructure Sectors</h1>
          <p className="industries-hero__subtitle">
            Comprehensive OT/ICS security solutions for all 16 CISA-defined critical infrastructure sectors
          </p>
        </div>
      </div>

      <div className="industries-container">
        <div className="industries-stats">
          <div className="stat-item">
            <div className="stat-number">16</div>
            <div className="stat-label">CISA Sectors</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Protected Systems</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime SLA</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">SOC Monitoring</div>
          </div>
        </div>

        <div className="industries-grid">
          {filteredIndustries.map((industry) => (
            <div key={industry.id} className="industry-card">
              <div className="industry-card__header">
                <span className="industry-card__icon">{industry.icon}</span>
                <h3 className="industry-card__name">{industry.name}</h3>
              </div>

              <p className="industry-card__description">{industry.description}</p>

              <div className="industry-card__services">
                <h4>Key Services</h4>
                <ul>
                  {industry.keyServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="industry-card__regulations">
                <h4>Regulatory Frameworks</h4>
                <div className="regulation-tags">
                  {industry.regulations.map((reg, index) => (
                    <span key={index} className="regulation-tag">{reg}</span>
                  ))}
                </div>
              </div>

              <div className="industry-card__footer">
                <Link to={industry.simulationLink} className="industry-card__cta">
                  View Simulation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="industries-cta">
          <h2>Protect Your Critical Infrastructure</h2>
          <p>Get a comprehensive security assessment tailored to your sector's unique threats and compliance requirements.</p>
          <div className="industries-cta__buttons">
            <Link to="/contact" className="btn-primary">Request Assessment</Link>
            <Link to="/simulations" className="btn-secondary">Explore Simulations</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
