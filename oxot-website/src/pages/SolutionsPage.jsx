import React from 'react';
import './SolutionsPage.css';

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      <div className="page-header">
        <h2>Our Solutions</h2>
      </div>
      <div className="solutions-content">
        <div className="solution-item">
          <h3>Breach Disclosure Mitigation</h3>
          <p>Transforming Incident Response Through Legal-Grade Privacy. The Breach Disclosure Mitigation solution redefines how organizations handle security incidents, creating a protected environment where incident response becomes a strategic advantage rather than a liability risk.</p>
          <h4>The OXOT True Diligence™ Advantage</h4>
          <ul>
            <li>Security telemetry protected under legal privilege</li>
            <li>AI-powered disclosure risk analysis</li>
            <li>Executive liability protection</li>
            <li>Crisis management orchestration</li>
          </ul>
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
