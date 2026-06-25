// src/components/Contact.jsx
import React from 'react';
import { PROFILE_DATA } from '../data'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p>I'm currently seeking opportunities in the IT industry. Feel free to reach out to discuss projects, collaborations, or roles.</p>
      
      <div className="contact-grid">
        <div className="contact-card glass-card">
          <span className="contact-icon">📧</span>
          <div className="contact-label">Email</div>
          <div className="contact-value">
            <a href={`mailto:${PROFILE_DATA.email}`}>{PROFILE_DATA.email}</a>
          </div>
        </div>

        <div className="contact-card glass-card">
          <span className="contact-icon">📞</span>
          <div className="contact-label">Phone</div>
          <div className="contact-value">
            <a href={`tel:${PROFILE_DATA.phone}`}>{PROFILE_DATA.phone}</a>
          </div>
        </div>

        <div className="contact-card glass-card">
          <span className="contact-icon">📍</span>
          <div className="contact-label">Location</div>
          <div className="contact-value">{PROFILE_DATA.location}</div>
        </div>
      </div>

      <div className="contact-social-links">
        <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link linkedin">
          🔗 LinkedIn Profile
        </a>
        <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="contact-social-link github">
          💻 GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;