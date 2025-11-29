import React from 'react';
import './FeaturedProject.css';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="featured-project">
      <div className="container">
        <h2 className="section-title">Featured Project</h2>
        <p className="section-subtitle">SKIPREDICT - Song Skipability Analyzer</p>

        {/* Embedded SKIPREDICT App */}
        <div className="skipredict-container">
          <iframe
            src="https://skipredict.pythonanywhere.com/"
            title="SKIPREDICT - Song Skipability Analyzer"
            className="skipredict-iframe"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className="skipredict-info">
          <h3>About SKIPREDICT</h3>
          <p>
            SKIPREDICT is a full-stack application that combines music analytics with machine learning principles to create an in-depth analysis of songs found on the iTunes API. The program analyzes features such as tempo, valence, and duration to provide a skipability score using a custom formula. Features include audio previews for immediate listening, as well as links integrating Spotify and iTunes. The tech stack consists of Python with Flask for the backend, HTML5, CSS3, and JavaScript for the frontend, iTunes Search API + Spotify Integration for song data, and PythonAnywhere for hosting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
