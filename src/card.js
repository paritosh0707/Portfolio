// import React from 'react';
// // import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation

// function PortfolioCard({ imageUrl, title, description, link }) {
// //   const history = useHistory();

//   const handleClick = () => {
//     // history.push(link); // Redirect to the specified link when clicked
//   };

//   return (
//     <div className="portfolio-item" onClick={handleClick}>
//       <img src={imageUrl} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default PortfolioCard;


import React from 'react';
import './Card.css'; // Import CSS file for styling (if needed)

const ProjectCard = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {/* You can add more details or links here if needed */}
    </div>
  );
}

export default ProjectCard;
