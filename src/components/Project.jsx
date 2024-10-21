import React from 'react'; // Import React to use JSX syntax and create components
import PropTypes from 'prop-types'; // Import PropTypes for type checking
// import '../styles/Project.css'; // Import the styles for the Project component

// Define the Project component
const Project = ({ title, imageUrl, liveLink, githubLink }) => {
  return (
    <div className='project'>
      <h3>{title}</h3> {/* Display the project title */}
      <img src={imageUrl} alt={title} /> {/* Display the project image */}
      <div>
        {/* Container div for links */}
        <a href={liveLink} target='_blank' rel='noopener noreferrer'>
          Live Application
        </a>
        {/* Link to live application */}
        <a href={githubLink} target='_blank' rel='noopener noreferrer'>
          GitHub Repository
        </a>
        {/* Link to GitHub repository */}
      </div>
    </div>
  );
};

// Define the expected prop types for the Project component
Project.propTypes = {
  title: PropTypes.string.isRequired, // Title of the project, required
  imageUrl: PropTypes.string.isRequired, // URL of the project image, required
  liveLink: PropTypes.string.isRequired, // URL for the live application, required
  githubLink: PropTypes.string.isRequired, // URL for the GitHub repository, required
};

// Export the Project component as the default export for use in other parts of the application
export default Project;
