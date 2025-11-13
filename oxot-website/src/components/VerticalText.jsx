import React from 'react';
import './VerticalText.css';

const VerticalText = ({ text = "Online Banking Login" }) => {
  return (
    <div className="vertical-text">
      <span className="vertical-text__content">{text}</span>
    </div>
  );
};

export default VerticalText;
