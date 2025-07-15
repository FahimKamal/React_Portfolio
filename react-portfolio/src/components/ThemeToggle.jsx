import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle-container">
      <label className="theme-toggle-switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;