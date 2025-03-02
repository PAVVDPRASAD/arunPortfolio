// import React, { useState } from 'react';
import './index.css';

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <img src="https://res.cloudinary.com/ddyogx5yr/image/upload/v1740813549/2ourrfa7_fhisux.png" className="logo_letter" alt="logo"  />
      </div>
      <ul className="nav-links">
        <li className="tab-names"><a href="#home">Home</a></li>
        <li className="tab-names"><a href="#about">About</a></li>
        <li className="tab-names"><a href="#projects">Projects</a></li>
        <li className="tab-names"><a href="#skills">Skills</a></li>
        <li className="tab-names"><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Navbar;