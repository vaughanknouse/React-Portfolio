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
          className='icon-link mx-2'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Visit Vaughan's GitHub Profile">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://linkedin.com/in/vaughan'
          className='icon-link mx-2'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Visit Vaughan's LinkedIn Profile">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://stackoverflow.com/users/vaughan'
          className='icon-link mx-2'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Visit Vaughan's Stack Overflow Profile">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
