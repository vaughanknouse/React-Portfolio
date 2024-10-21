import React from 'react'; // Import the React library
import Project from '../components/Project'; // Import the Project component
// import '../styles/Portfolio.css'; // Import the styles for the Portfolio component

// Create a Portfolio component using a const declaration
const Portfolio = () => {
  const projects = [
    // Array of project objects
    {
      title: 'Project One',
      image: 'path_to_image_1.jpg',
      description: 'Built with React, Node.js, and MongoDB.',
      liveLink: 'https://liveproject1.com',
      repoLink: 'https://github.com/repo1',
    },
    {
      title: 'Project Two',
      image: 'path_to_image_2.jpg',
      description: 'Built with React and Express.',
      liveLink: 'https://liveproject2.com',
      repoLink: 'https://github.com/repo2',
    },
  ];

  // Render the portfolio section
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className='projects'>
        {projects.map(
          (
            project // Map over the projects array
          ) => (
            <Project // Render a Project component for each project
              key={project.title} // Using title as a key, assuming it's unique
              title={project.title}
              image={project.image}
              description={project.description}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          )
        )}
      </div>
    </section>
  );
};

// Export the Portfolio component to use it in the App component
export default Portfolio;
