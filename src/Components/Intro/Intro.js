import React from "react";
import "./Intro.css"; // Import CSS file for styling (if needed)
// import { Link } from "react-router-dom";
import profile_pic from "./Profile_pic.png";
// import background from "./background.png";

const Intro = () => {
  return (
    <div className="Base">
      <div className="profile-img-container">
            <img className="profile-img" src={profile_pic} alt="Background" />
          </div>
      <div className="background"></div>
      {/* <div className="background2"></div> */}

      <div className="introduction-container">
        {/* <div className="profile-info-container"> */}
          <div className="Introduction">
            <div className="Introduction-block">
            <p className="Intro-heading">Data Scientist</p>
            <p className="Intro-description">
              Experienced Data Scientist with a fervent passion for cutting-edge
              technologies in Machine Learning, Deep Learning, and Generative
              AI.{" "}
            </p>
          </div>
        </div>

        
          <div className="name-container">
          <div className="name-block">
            <h1 className="name">Paritosh</h1>
            <h1 className="name">Sharma</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
