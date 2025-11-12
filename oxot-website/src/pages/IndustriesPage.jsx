import React from 'react';
import './IndustriesPage.css';

const IndustriesPage = () => {
  return (
    <div className="industries-page">
      <div className="page-header">
        <h2>Industries We Serve</h2>
      </div>
      <div className="industries-content">
        <div className="industry-card">
          <h3>Energy Sector: Electricity</h3>
          <p>Comprehensive solutions for the entire electricity supply chain.</p>
        </div>
        <div className="industry-card">
          <h3>Water Management</h3>
          <p>End-to-end water infrastructure protection.</p>
        </div>
        <div className="industry-card">
          <h3>Manufacturing</h3>
          <p>Security solutions for industrial facilities.</p>
        </div>
        <div className="industry-card">
          <h3>Transportation</h3>
          <p>Comprehensive security for transportation infrastructure.</p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
