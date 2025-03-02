import React from 'react';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './index.css';

function Footer({ theme }) {
  return (
    <footer className={`footer ${theme}`}>
      <p className='mt-5'>&copy; 2025 Arun Pechetti. All rights reserved.</p>
      <div className="social-links">
        <a href="http://github.com/PAVVDPRASAD" target="_blank" rel="noopener noreferrer"><FaGithub style={{fontSize:"28px", color: "#5f6295"}}/></a>
        <a href="http://linkedin.com/in/arun-pechetti-521b49264" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{fontSize:"28px", color:"blue"}} /></a>
      </div>
    </footer>
  );
}

export default Footer;