import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/resume'>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
