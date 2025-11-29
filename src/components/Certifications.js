import React from 'react';
import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Python for Data Science and Machine Learning Essential Training Part 1',
      issuer: 'LinkedIn Learning',
      date: 'Sep 01, 2025',
      description: 'Completed an Intermediate Python course focused on using Python for Data Science and Machine Learning. Learned data preparation basics (filtering, selecting, transformation, grouping) and libraries such as NumPy and Pandas. Learned to visualize data with plots in Seaborn/Matplotlib, displaying time series, statistical data, and more. Learned exploratory data analysis with Pearson, Spearman rank, and Chi-Square correlation, as well as analysis for outliers. Learned the basics of Machine Learning (cleaning categorical values, test and train sets, ect) and Web Scraping with BeautifulSoup.',
      skills: ['Machine Learning', 'Python (Programming Language)', 'Data Science']
    },
    {
      id: 2,
      title: 'SQL for Data Analysis',
      issuer: 'LinkedIn Learning',
      date: 'Sep 22, 2025',
      description: 'Completed an Intermediate SQL course on LinkedIn Learning that covered the different data types in SQL and methods to find missing values, potentially inaccurate data values, and duplicate rows. Learned the fundamentals of a relational database and the most common SQL structures. Learned how to work with dates in SQL, and functions such as string functions, aggregate functions, and data manipulation methods. Learned how to display the data extracted with SQL in a visualization using Plotly.',
      skills: ['SQL']
    },
    {
      id: 3,
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera / Google',
      date: '2024',
      description: 'Completed a professional course offered by Coursera and Google. Worked for about 8 hours per week for 24 weeks across junior and senior years. Gained skills such as data cleaning, analysis, & visualization. Learned to organize and present data findings using spreadsheets or programming languages like SQL, Tableau, and R. Completed the Capstone Project that applied these skills to the stock market, and earned a certificate for completing the course. This course deepened my passion for data science, especially for using newly-learned skills in a business context.',
      skills: ['Data Analysis', 'Visualization', 'SQL', 'Tableau']
    },
    {
      id: 4,
      title: 'Data Structures in Python - LinkedIn Learning Certificate',
      issuer: 'LinkedIn Learning',
      date: 'Aug 22, 2025',
      description: 'Completed a Python course that taught how to implement and utilize arrays, lists, dictionaries, stacks, and queues effectively. Learned about time and space complexities and the best use cases for each of these data structures. Used Github Codespaces to create Python applications such as a To-do list, reservation waitlist, and an inventory tracker. Overall, this course reviewed the fundamentals of one of the most crucial foundations of data science: data structures. Confident that the syntax learned in this course will transfer well into future courses and internships.',
      skills: ['Data Structures', 'Python (Programming Language)']
    },
    {
      id: 5,
      title: 'Python and Statistics for Financial Analysis',
      issuer: 'The Hong Kong University of Science and Technology / Coursera',
      date: '2024',
      description: 'Completed a course offered by The Hong Kong University of Science and Technology that covered applying statistical analysis to stock data to create linear regression models for financial analysis and investment. Learned how to munge and visualize stock data and how to apply statistics concepts such as random variables, distribution, samplings, and inferences to this data. Lastly, used Python to create predictive regression models for the SPDR S&P 500 ETF Trust.',
      skills: ['Python', 'Financial Analysis', 'Statistics']
    },
    {
      id: 6,
      title: 'Learning Excel Desktop (Microsoft 365)',
      issuer: 'LinkedIn Learning',
      date: 'Aug 12, 2025',
      description: 'Completed a course that covers the fundamentals of Excel, starting with creating a new workbook, and expanding to adding content, using relative cell referencing and autofill, and formatting content. Also learned how to prevent relative addressing and manage columns and rows. Used freeze panes, insert recommended charts, use Copilot for assistance, and methods to share and print workbooks.',
      skills: ['Microsoft Excel']
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
                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
