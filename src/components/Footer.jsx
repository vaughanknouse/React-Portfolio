import React from 'react';

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
          rel='noopener noreferrer'>
          GitHub
        </a>
        <a
          href='https://linkedin.com/in/vaughan'
          className='text-white mx-2'
          target='_blank'
          rel='noopener noreferrer'>
          LinkedIn
        </a>
        <a
          href='https://stackoverflow.com/users/vaughan'
          className='text-white mx-2'
          target='_blank'
          rel='noopener noreferrer'>
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
