import React from 'react';
import DigitalTwinVisualization from '../../components/DigitalTwinVisualization';
import './ServiceSubPage.css';

const DigitalTwinPage = () => {
  return (
    <div className="service-sub-page">
      <div className="page-header">
        <h2>AEON Cyber Digital Twin</h2>
      </div>
      <div className="sub-page-content">
        <p>Our AEON Cyber Digital Twin provides a high-fidelity, dynamic model of your entire operational technology (OT) environment. By bridging the gap between the cyber and physical realms, we offer unparalleled visibility and control, enabling you to anticipate threats, optimize performance, and ensure operational resilience.</p>
        <DigitalTwinVisualization />
        <p>The visualization above demonstrates how the Digital Twin maps the complex relationships between your critical assets, from PLCs and HMIs to sensors and actuators. This living model allows you to simulate the impact of cyber threats and operational changes in a safe, virtual environment, ensuring that your real-world systems remain secure and efficient.</p>
      </div>
    </div>
  );
};

export default DigitalTwinPage;
