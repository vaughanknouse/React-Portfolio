import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Import the logo image

const Header = () => {
  return (
    <header className='bg-dark text-white p-3'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <NavLink to='/'>
            <img
              src={logo}
              alt="Vaughan's Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />{' '}
            {/* Adjust the height and spacing */}
          </NavLink>
          <h1 className='mb-0'>Vaughan Knouse</h1>{' '}
          {/* Remove margin-bottom for better alignment */}
        </div>
        <nav>
          <ul className='nav'>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to='/'>
                About Me
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to='/portfolio'>
                Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to='/contact'>
                Contact
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to='/resume'>
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
