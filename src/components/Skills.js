import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Machine Learning',
      skills: ['PCA', 'LDA', 'Ridge Regression', 'Scikit-learn', 'TensorFlow', 'Transformers']
    },
    {
      category: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Statistical Analysis', 'Data Visualization', 'Feature Engineering', 'EDA']
    },
    {
      category: 'Programming',
      skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'SQL']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Docker', 'Jupyter Notebook', 'VS Code', 'Kaggle', 'Gradescope']
    },
    {
      category: 'Quantitative Finance',
      skills: ['Time Series Analysis', 'Options Trading', 'Backtesting', 'Market Analysis', 'Financial Modeling']
    },
    {
      category: 'Web Development',
      skills: ['React', 'Tailwind CSS', 'Node.js', 'RESTful APIs', 'Responsive Design', 'UI/UX']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technical skills developed through coursework and hands-on projects</p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
