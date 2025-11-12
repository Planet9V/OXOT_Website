import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        <h2>Our Services</h2>
      </div>
      <div className="services-content">
        <div className="service-category">
          <h3>Cyber Assurance, Testing & Validation</h3>
          <ul>
            <li>Risk and Threat assessments</li>
            <li>Defense validation through adversarial testing</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Crisis Management</h3>
          <ul>
            <li>Program evaluation and enhancement</li>
            <li>Interactive exercises and program development</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Cyber Engineering & Integration</h3>
          <ul>
            <li>Secure Facility Design and Roadmap</li>
            <li>Digital Twin Modeling</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Cyber Technology Training & Awareness</h3>
          <ul>
            <li>Cyber Defender First Responder training</li>
            <li>Security awareness programs</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Adversarial AI-Based Cyber Defense Testing</h3>
          <ul>
            <li>Threat and Risk Services</li>
            <li>Strategic threat mitigation</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Artificial Intelligence</h3>
          <ul>
            <li>Process optimization</li>
            <li>Predictive analytics</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Supply Chain Assurance</h3>
          <ul>
            <li>Secure Remote Access implementation</li>
            <li>Vendor risk assessment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
