// src/Components/objects/RecentlyAccessedBox.js
import React from 'react';
import './RecentlyAccessedBox.css';

const RecentlyAccessedBox = ({ iconColor, text }) => {
  return (
    <div className="recently-accessed-box">
      <div className="icon" style={{ backgroundColor: iconColor }}></div>
      <span className="text">{text}</span>
    </div>
  );
};

export default RecentlyAccessedBox;
