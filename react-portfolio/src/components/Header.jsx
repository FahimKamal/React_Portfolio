import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = ({ currentTheme, toggleTheme }) => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          Fahim Kamal Ahmed
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="/projects" className="nav-link px-2 link-dark">Projects</Link></li>
          <li><Link to="/contact" className="nav-link px-2 link-dark">Contact</Link></li>
        </ul>

        <div className="col-md-3 text-end">
          <ThemeToggle theme={currentTheme} toggleTheme={toggleTheme} />
        </div>
      </header>
    </div>
  );
};

export default Header;
