import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ currentTheme, toggleTheme }) => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink to="/" className={`d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none ${currentTheme === 'dark' ? 'text-white' : 'text-dark'}`}>
          Fahim Kamal Ahmed
        </NavLink>

        <ul className="nav nav-masthead col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/" className="nav-link px-2">Home</NavLink></li>
          <li><NavLink to="/projects" className="nav-link px-2">Projects</NavLink></li>
          <li><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></li>
        </ul>

        <div className="col-md-3 text-end">
          <ThemeToggle theme={currentTheme} toggleTheme={toggleTheme} />
        </div>
      </header>
    </div>
  );
};

export default Header;
