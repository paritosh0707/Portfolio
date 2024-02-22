import React from "react";
import "./Intro.css"; // Import CSS file for styling (if needed)
// import { Link } from "react-router-dom";
import Med_chatbot from "./Med_chatbot.jpg";

const Intro = () => {
  return (
    <div className="introduction-container">
      <div className="profile-img-container">
        <img className="profile-img" src={Med_chatbot} alt="Background" />
      </div>
      {/* Large banner image or video background */}
      {/* Title and subtitle */}
      <div className="profile-info-container">
        <h1 className="title">[Your Name]'s Portfolio</h1>
        <p className="subtitle">Discover [Your Name]'s Creative Work</p>
        {/* "Watch Now" button */}
        <button className="watch-now-btn">Watch Now</button>
      </div>
    </div>
  );
};

export default Intro;
