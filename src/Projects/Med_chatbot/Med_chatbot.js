import React from 'react';
import './Med_chatbot.css';

const Med_chatbot = () => {
  return (
    <div className="project-page">
      <section className="background">
        <div className="content">
          <h2>Background</h2>
          <p>Placeholder text for background section...</p>
        </div>
        <div className="image">
          <img src="background_image.jpg" alt="Background" />
        </div>
      </section>

      <section className="problem-statement">
        <div className="image">
          <img src="problem_image.jpg" alt="Problem Statement" />
        </div>
        <div className="content">
          <h2>Problem Statement</h2>
          <p>Placeholder text for problem statement section...</p>
        </div>
      </section>

      <section className="architecture">
        <div className="content">
          <h2>Architecture</h2>
          <p>Placeholder text for architecture section...</p>
        </div>
        <div className="image">
          <img src="architecture_image.jpg" alt="Architecture" />
        </div>
      </section>

      <section className="solution">
        <div className="image">
          <img src="solution_image.jpg" alt="Solution" />
        </div>
        <div className="content">
          <h2>Solution</h2>
          <p>Placeholder text for solution section...</p>
        </div>
      </section>

      <section className="results">
        <div className="content">
          <h2>Results</h2>
          <p>Placeholder text for results section...</p>
        </div>
        <div className="image">
          <img src="results_image.jpg" alt="Results" />
        </div>
      </section>
    </div>
  );
};

export default Med_chatbot;
