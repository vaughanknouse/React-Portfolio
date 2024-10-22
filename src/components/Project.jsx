// Project.js
import React from 'react';

const Project = ({ title, image, liveLink, githubLink, technologies }) => {
  return (
    <div className='card mb-4 shadow-sm'>
      <img
        src={image}
        className='card-img-top'
        alt={title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>
          <strong>Technologies Used:</strong> {technologies.join(', ')}
        </p>
        <div className='d-flex justify-content-between'>
          <a
            href={liveLink}
            className='btn btn-primary'
            target='_blank'
            rel='noopener noreferrer'>
            Live Demo
          </a>
          <a
            href={githubLink}
            className='btn btn-secondary'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
