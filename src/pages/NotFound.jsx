import React from 'react';

const NotFound = () => {
  return (
    <div className='text-center my-5'>
      <h2>404 Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href='/' className='btn btn-primary'>
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
