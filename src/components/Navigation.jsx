import React from 'react';
import './Navigation.css';

function Navigation({ activePage, setActivePage }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">🌆</div>
          <span className="logo-text">IOTTech Consulting</span>
        </div>
        <nav className="nav">
          <ul className="nav-menu">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActivePage('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActivePage('about'); }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActivePage('services'); }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#case-studies" 
                className={`nav-link ${activePage === 'case-studies' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActivePage('case-studies'); }}
              >
                Case Studies
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="hamburger">
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