import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu } from "react-icons/fi";
import "./index.css";

function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/skills", label: "Skills" },
    { path: "/about", label: "About" },
    
  ];

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar1">
      <div className="logo">
        <Link to="/">
        <img
          src="https://res.cloudinary.com/ddyogx5yr/image/upload/v1740813549/2ourrfa7_fhisux.png"
          className="logo_letter"
          alt="logo"
        />
        </Link>
      </div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-controls">
        <button onClick={toggleTheme} className="theme-toggle1">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button
          className="menu-button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <FiMenu className="menu-bar" />
        </button>
      </div>
      </div>

    
      {isMobileMenuOpen && (
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path} onClick={closeMobileMenu}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
