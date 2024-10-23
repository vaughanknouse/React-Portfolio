import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-dark text-white text-center p-3 mt-4'>
      <p>
        © {new Date().getFullYear()} Vaughan's Portfolio. All rights reserved.
      </p>
      <div>
        <a
          href='https://github.com/vaughan'
          className='text-white mx-2'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Visit Vaughan's GitHub Profile">
          <FontAwesomeIcon icon={faGithub} className='mr-1' />
          GitHub
        </a>
        <a
          href='https://linkedin.com/in/vaughan'
          className='text-white mx-2'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Visit Vaughan's LinkedIn Profile">
          <FontAwesomeIcon icon={faLinkedin} className='mr-1' />
          LinkedIn
        </a>
        <a
          href='https://stackoverflow.com/users/vaughan'
          className='text-white mx-2'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Visit Vaughan's Stack Overflow Profile">
          <FontAwesomeIcon icon={faStackOverflow} className='mr-1' />
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
