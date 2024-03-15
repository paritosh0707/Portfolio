import React from "react";
import "./App.css"; // Import your CSS file for styling
import Med_chatbot_card from "./Components/Cards/Med_chatbot_card/Card";
// import Med_chatbot from "./Med_chatbot.jpg";
import Intro from "./Components/Intro/Intro";
// import background from "./Background.jpg";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";

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
  // style={{
  //   backgroundImage: `url(${background})`}}
  // const navigate = useNavigate();

  return (
    <div className="App">
      {/* Navigation Menu */}
      {/* <img className="background-img" src={background} alt="Background" /> */}
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


    

      <section id="home" className="header">
        <Intro />
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <Skills />
        </div>
      </section>


      <section id="portfolio" className="portfolio">
        <div className="portfolio-content">
          <Experience />
        </div>
      </section>
      
     {/* <Med_chatbot_card></Med_chatbot_card> */}
      {/* Introduction */}
      

      
      

      {/* About Section */}
      

      {/* Portfolio Section */}
      

      {/* <Med_chatbot_card /> */}

      {/* Contact Section */}
      {/* <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <form className="contact-form"></form>
        </div>
      </section>

      
      <footer className="footer">
        <p className="copyright">
          &copy; 2024 [Your Name]. All rights reserved.
        </p>
        
      </footer> */}
   </div>
  );
}

export default App;
