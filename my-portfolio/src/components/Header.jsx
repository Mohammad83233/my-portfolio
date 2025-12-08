// src/components/Header.jsx (Restored Name)
import React from 'react';
import { PROFILE_DATA } from '../data';

const Header = () => {
  const firstName = PROFILE_DATA.name.split(' ')[0];

  return (
    <header className="header-nav">
      {/* Restored the name back to the header */}
      <div className="logo">
        <a href="#hero">
          <h1>NISHAM</h1>
        </a>
      </div>
      
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="contact-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;