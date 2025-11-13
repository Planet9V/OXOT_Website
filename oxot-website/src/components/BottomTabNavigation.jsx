import React from 'react';
import './BottomTabNavigation.css';

const BottomTabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'institutional', label: 'INSTITUTIONAL' },
    { id: 'commercial', label: 'COMMERCIAL' },
    { id: 'mortgage', label: 'MORTGAGE' },
  ];

  return (
    <div className="bottom-tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`bottom-tab ${activeTab === tab.id ? 'is-active' : ''}`}
          onClick={() => onTabChange(tab.id)}
          aria-label={`Navigate to ${tab.label}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default BottomTabNavigation;
