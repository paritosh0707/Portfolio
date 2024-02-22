import React from "react";
import "./Card.css"; // Import CSS file for styling (if needed)
import { Link } from "react-router-dom";
import Med_chatbot from './Med_chatbot.jpg';

const Card = () => {
  return (
    <div>
    <Link to="/Med_chatbot">
    <div className="card">
     <img className="chatbot_img" src={Med_chatbot} alt="Background" />
    </div>
    </Link>
    </div>
  );
};

export default Card;
