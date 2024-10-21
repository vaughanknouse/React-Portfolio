import React from 'react';
// import '../styles/Resume.css'; // Import the styles for the Resume component

// Define the Resume component
const Resume = () => {
  // Create an array of proficiencies (skills)
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  // Render the Resume component
  return (
    <section className='resume-section'>
      <h2>Resume</h2>
      {/* Link to download the resume with an aria-label for better accessibility */}
      <a href='/resume.pdf' download aria-label='Download Resume'>
        Download
      </a>
      <h3>Proficiencies:</h3>
      <ul>
        {/* Use 'skill' itself as a key for unique identification */}
        {proficiencies.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume; // Export the Resume component for use in other components or files
