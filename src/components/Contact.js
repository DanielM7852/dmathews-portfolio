import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:djmathews@ucsd.edu?subject=Portfolio Contact&body=${message}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'd love to hear about your projects and opportunities</p>

        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  className="form-input"
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h3 className="info-title">Connect With Me</h3>
            
            <div className="contact-links">
              <a href="https://github.com/DanielM7852" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FiGithub size={24} />
                <span>GitHub</span>
                <FiExternalLink size={16} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-mathews-b6a0b6298/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FiLinkedin size={24} />
                <span>LinkedIn</span>
                <FiExternalLink size={16} />
              </a>
              <a href="mailto:djmathews@ucsd.edu" className="contact-link">
                <FiMail size={24} />
                <span>Email</span>
                <FiExternalLink size={16} />
              </a>
            </div>

            <div className="quick-info">
              <p><strong>Location:</strong> San Diego, CA</p>
              <p><strong>Education:</strong> UC San Diego - Data Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
