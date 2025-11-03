import React, { useState } from 'react';
import './Navigation.css';

function Navigation({ activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">🌆</div>
          <span className="logo-text">IOTTech Consulting</span>
        </div>
        <nav className="nav">
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#case-studies" 
                className={`nav-link ${activePage === 'case-studies' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('case-studies'); }}
              >
                Case Studies
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;