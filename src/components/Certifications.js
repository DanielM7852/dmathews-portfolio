import React from 'react';
import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera / Andrew Ng',
      date: '2024',
      description: 'Comprehensive ML course covering supervised/unsupervised learning and best practices'
    },
    {
      id: 2,
      title: 'Data Science Professional',
      issuer: 'UC San Diego',
      date: '2024',
      description: 'Advanced coursework in linear algebra, statistical analysis, and data science'
    },
    {
      id: 3,
      title: 'Web Development with React',
      issuer: 'Self-Study',
      date: '2024',
      description: 'Full-stack development with React, Node.js, and modern web technologies'
    },
    {
      id: 4,
      title: 'Quantitative Trading Fundamentals',
      issuer: 'Self-Study',
      date: '2024',
      description: 'Financial modeling, options trading, and algorithmic trading concepts'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">Professional development and verified credentials</p>

        <div className="certifications-list">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-item">
              <div className="cert-icon">
                <FiAward size={24} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
