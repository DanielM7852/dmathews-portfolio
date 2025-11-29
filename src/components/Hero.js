import React, { useState, useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Daniel Mathews';
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;

    if (!isDeleting && displayText.length < fullText.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === fullText.length) {
      // Pause at end
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle">
          Exploring data science and machine learning as a Data Science major at UC San Diego
        </p>
        
        <div className="hero-socials">
          <a href="https://github.com/DanielM7852" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/daniel-mathews-b6a0b6298/" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FiLinkedin size={24} />
          </a>
          <a href="mailto:djmathews@ucsd.edu" className="social-btn">
            <FiMail size={24} />
          </a>
        </div>

        <button 
          className="cta-button"
          onClick={() => {
            document.getElementById('featured-project').scrollIntoView({ behavior: 'smooth' });
            setActiveSection('featured-project');
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
