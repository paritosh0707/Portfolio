import React from "react";
import "./Card.css"; // Import CSS file for styling (if needed)
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <button>
        <Link to="/Project1">Go</Link>
      </button>
      <h2>Hello</h2>
    </div>
  );
};

export default Card;
