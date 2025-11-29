import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ClarityCart - E-commerce AI Chatbot',
      description: 'AI-powered chatbot for e-commerce using LLMs to enhance customer service and product recommendations',
      technologies: ['Python', 'LLM', 'FastAPI', 'React'],
      github: 'https://github.com/ClarityCart-Dev/shopifyembeddedapp',
      highlights: ['NLP Integration', 'Real-time Chat', 'Product Search']
    },
    {
      id: 2,
      title: 'NFL Big Data Bowl 2026',
      description: 'Advanced analytics project analyzing NFL play data to identify coaching insights and optimize play recommendations',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'React'],
      demo: '#',
      highlights: ['Play Analytics', 'Coach Dashboard', 'ML Models']
    },
    {
      id: 3,
      title: 'BigDataView',
      description: 'During my Data Science internship at Boeing, I collaborated with a mentor and a multi-disciplinary engineering team to create a Python visualization tool for multi-dimensional hypersonic and plane trajectory data. BigDataView uses Python, Matplotlib, JSON, and more to convert complex 5 or more dimensional data into comprehensive 2-D dashboards using nested heatmaps.',
      technologies: ['Python', 'Matplotlib', 'JSON', 'Data Visualization'],
      github: 'https://github.com/DanielM7852/BigDataView',
      demo: '#',
      highlights: ['7D Data Visualization', 'Heatmaps', 'Surface Plots']
    },
    {
      id: 4,
      title: 'Quantitative Trading Models',
      description: 'Machine learning models for financial market prediction using time series analysis and ensemble methods',
      technologies: ['Python', 'NumPy', 'Scikit-learn', 'TensorFlow'],
      github: 'https://github.com/DanielM7852/Quantam-Dimensionality-Reduction-for-Portfolio-Optimization',
      demo: '#',
      highlights: ['Time Series', 'Ridge Regression', 'Backtesting']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Other work in machine learning, data science, and full-stack development</p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub size={20} />
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-tag">{highlight}</span>
                ))}
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
