// src/components/Contact.jsx
import React from 'react';
import { PROFILE_DATA } from '../data'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p>I'm currently seeking my first opportunity in IT. Feel free to reach out via email or phone to discuss projects and roles.</p>
      
      <div className="contact-details">
        <p>📧 Email: 
          <a href={`mailto:${PROFILE_DATA.email}`}>{PROFILE_DATA.email}</a>
        </p>
        <p>📞 Phone: 
          <a href={`tel:${PROFILE_DATA.phone}`}>{PROFILE_DATA.phone}</a>
        </p>
        <p>📍 Location: {PROFILE_DATA.location}</p>
        {/* Add LinkedIn/GitHub icons here later */}
      </div>
    </section>
  );
};

export default Contact;