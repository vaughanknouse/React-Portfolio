import React from 'react'; // Import the React library
// import '../styles/Footer.css'; // Import the styles for the Footer component

// Create a Footer component
const Footer = () => {
  return (
    <footer>
      <a href='https://github.com/vaughanknouse'>GitHub</a> {/* GitHub link */}
      <a href='https://linkedin.com/in/vaughanknouse'>LinkedIn</a>{' '}
      {/* LinkedIn link */}
      <a href='https://stackoverflow.com/users/vaughanknouse'>
        Stack Overflow
      </a>{' '}
      {/* Stack Overflow link */}
      <p>&copy; 2024 Vaughan Knouse</p> {/* Display the current year */}
    </footer>
  );
};

// Export the Footer component as the default export so it can be used in other files
export default Footer;
