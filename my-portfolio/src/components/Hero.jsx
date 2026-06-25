// src/components/Hero.jsx
import React from 'react';
import { PROFILE_DATA } from '../data';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <img 
        src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
        alt="Mohammad Nisham VM Profile"
        className="hero-profile-img"
      />
      
      <h1>{PROFILE_DATA.name}</h1>
      
      <p className="hero-tagline">
        <span className="highlight">MCA Postgraduate</span> &nbsp;•&nbsp; Python & Web Developer &nbsp;•&nbsp; <span className="highlight">ML Enthusiast</span>
      </p>

      <div className="hero-badges">
        <span className="hero-badge">📍 {PROFILE_DATA.location}</span>
        <span className="hero-badge">✅ {PROFILE_DATA.availability} Availability</span>
        <span className="hero-badge">🛂 {PROFILE_DATA.visaStatus}</span>
      </div>

      <p className="hero-summary">{PROFILE_DATA.summary}</p>
      
      <div className="hero-buttons">
        <a href="#contact" className="cta-button">
          Get In Touch →
        </a>
        <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="cta-button cta-button-outline">
          View GitHub
        </a>
      </div>

      <div className="hero-social-links">
        <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
          🔗 LinkedIn
        </a>
        <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="social-link">
          💻 GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;