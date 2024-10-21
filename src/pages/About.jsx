import React from 'react'; // Import the React library
// import '../styles/About.css'; // Import the styles for the About component

// Define the About component using a const declaration
const About = () => {
  return (
    <section id='about'>
      {/* Section for the About content */}
      <h2>About Me</h2> {/* Heading for the About section */}
      <img src='VK_Portfolio_Image.jpeg' alt='Developer' />
      {/* Profile photo of the developer */}
      <p>
        Hi, I am Vaughan Knouse, a passionate full-stack web developer with
        experience in both frontend and backend technologies.
      </p>
      <p>
        I enjoy creating modern, responsive, and efficient applications to solve
        real-world problems, most notably healthcare.
      </p>
    </section>
  );
};

// Export the About component as the default export so it can be used in other files
export default About;
