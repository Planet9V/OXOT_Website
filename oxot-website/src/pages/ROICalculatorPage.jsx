import React from 'react';
import ROICalculator from '../components/ROICalculator';
import './ROICalculatorPage.css';

/**
 * ROICalculatorPage - Dedicated page for OT Breach Cost Avoidance Calculator
 *
 * ICE Score: 8.7/10 - Quantifies value in executive language (dollars, not packets)
 * Provides shareable business case and generates qualified leads
 */
const ROICalculatorPage = () => {
  return (
    <div className="roi-calculator-page">
      <ROICalculator />
    </div>
  );
};

export default ROICalculatorPage;
