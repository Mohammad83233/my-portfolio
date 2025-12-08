// src/components/Hero.jsx (Added Big Image)
import React from 'react';
import { PROFILE_DATA } from '../data';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* New: The large profile picture */}
      <img 
        src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
        alt="Mohammad Nisham VM Profile"
        className="hero-profile-img"
      />
      
      <h1>{PROFILE_DATA.name}</h1>
      <h2>{PROFILE_DATA.tagline}</h2>
      <p>{PROFILE_DATA.summary}</p>
      
      <a href="#contact" className="cta-button">
        Contact Me
      </a>
    </section>
  );
};

export default Hero;