import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Data Science <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="hero-subtitle">
          Exploring machine learning, quantitative trading, and data-driven insights
        </p>
        
        <div className="hero-socials">
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FiGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FiLinkedin size={24} />
          </a>
          <a href="mailto:YOUR_EMAIL@example.com" className="social-btn">
            <FiMail size={24} />
          </a>
        </div>

        <button 
          className="cta-button"
          onClick={() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            setActiveSection('projects');
          }}
        >
          Explore My Work
        </button>

        <div className="scroll-indicator">
          <FiArrowDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
