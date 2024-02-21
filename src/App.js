import React from "react";
import "./App.css"; // Import your CSS file for styling
import ProjectCard from "./Card"; // Adjust the path as necessary
import Project1 from "./Projects/Project1";
import { BrowserRouter as Route, Router } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  // function PortfolioSection() {
  //   return (
  //     <section id="portfolio" className="portfolio">
  //       <div className="portfolio-content">
  //         <h2>Portfolio</h2>
  //         {/* Grid layout showcasing thumbnails of your projects */}
  //         {/* Each thumbnail should link to a detailed project page */}
  //         <div className="portfolio-grid">
  //           {/* Example Portfolio Card */}
  //           <ProjectCard
  //             imageUrl="project1.jpg"
  //             title="Project 1"
  //             description="Project 1 Description"
  //             link="" // Specify the link to redirect to
  //           />
  //           {/* Add more PortfolioCard components as needed */}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }
  // const navigate = useNavigate();

  // const navigateToProject1 = () => {
  //   //  navigate to /Project1
  //   navigate('/Projects/Project1');
  // };

  // const navigate = useNavigate();
  return (
    <div className="App">
      {/* Navigation Menu */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ProjectCard />

      {/* Header */}
      <header id="home" className="header">
        <div className="banner">
          {/* Large banner image or video background */}
          {/* Title and subtitle */}
          <h1 className="title">[Your Name]'s Portfolio</h1>
          <p className="subtitle">Discover [Your Name]'s Creative Work</p>
          {/* "Watch Now" button */}
          <button className="watch-now-btn">Watch Now</button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Me</h2>
          {/* Brief introduction about yourself */}
          <p>
            Brief introduction about yourself, your expertise, and what makes
            you unique.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="portfolio-content">
          <h2>Portfolio</h2>
          {/* Grid layout showcasing thumbnails of your projects */}
          {/* Each thumbnail should link to a detailed project page */}
          <div className="portfolio-grid">
            {/* Example thumbnail */}
            <div className="portfolio-item">
              <img src="project1.jpg" alt="Project 1" />
              <p>Project 1 Description</p>
            </div>
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          {/* Contact form or contact information */}
          <form className="contact-form">{/* Form fields */}</form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">
          &copy; 2024 [Your Name]. All rights reserved.
        </p>
        {/* Social media links */}
        {/* Terms of Service / Privacy Policy links */}
      </footer>
    </div>
  );
}

export default App;
