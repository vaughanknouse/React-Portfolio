import React from 'react'; // Import React library
import { NavLink } from 'react-router-dom'; // Import NavLink component from React Router library
import '../styles/Navigation.css'; // Import the styles for the Navigation component
import logo from '../assets/images/logo.png'; // Import the logo image file

// Define the Navigation component using a const declaration
const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt='Logo' className='logo' />{' '}
      {/* Display the logo image */}
      <ul>
        <li>
          <NavLink
            to='/about' // Set the path to the About page
            className={({ isActive }) => (isActive ? 'active' : '')}>
            {' '}
            {/* Set the class name to 'active' if the link is active */}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/portfolio' // Set the path to the Portfolio page
            className={({ isActive }) => (isActive ? 'active' : '')}>
            {' '}
            {/* Set the class name to 'active' if the link is active */}
            Portfolio {/* Display the Portfolio link */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact' // Set the path to the Contact page
            className={({ isActive }) => (isActive ? 'active' : '')}>
            {' '}
            {/* Set the class name to 'active' if the link is active */}
            Contact {/* Display the Contact link */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/resume' // Set the path to the Resume page
            className={({ isActive }) => (isActive ? 'active' : '')}>
            {' '}
            {/* Set the class name to 'active' if the link is active */}
            Resume {/* Display the Resume link */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Export the Navigation component as the default export so it can be used in other files
export default Navigation;
