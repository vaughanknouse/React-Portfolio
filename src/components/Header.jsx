import React from 'react'; // Import React library
import Navigation from './Navigation'; // Import the Navigation component
// import '../styles/Header.css'; // Import the styles for the Header component

// Define the Header component
const Header = () => {
  return (
    <header>
      <h1>Vaughan Knouse</h1> {/* Display the name of the portfolio owner */}
      <Navigation /> {/* Render the Navigation component */}
    </header>
  );
};
// Export the Header component as the default export so it can be used in other files
export default Header;
