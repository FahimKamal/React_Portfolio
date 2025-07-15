import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = ({ currentTheme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Fahim Kamal Ahmed</Link>
      </div>
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
      </nav>
      <div className="header-right">
        <ThemeToggle theme={currentTheme} toggleTheme={toggleTheme} />
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>
    </header>
  );
};

export default Header;
