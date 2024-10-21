import React from 'react'; // Import the React library
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom for navigation
// import '../styles/NotFound.css'; // Import the styles for the NotFound component

// Define the NotFound component using a const declaration
const NotFound = () => {
  return (
    <section id='not-found'>
      {/* Section for the 404 error message */}
      <h2>404 - Page Not Found</h2> {/* Display the 404 error message */}
      <p>The page you are looking for does not exist.</p>
      {/* Inform the user that the page does not exist */}
      <Link to='/'>Go Back Home</Link>
      {/* Link to navigate back to the home page */}
    </section>
  );
};

// Export the NotFound component as the default export so it can be used in other files
export default NotFound;
