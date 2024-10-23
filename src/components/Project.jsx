import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, image, liveLink, githubLink, technologies }) => {
  return (
    <div className='card mb-4 shadow-sm'>
      <img
        src={image}
        className='card-img-top'
        alt={`Screenshot of ${title}`}
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
            rel='noopener noreferrer'
            onClick={(e) => !liveLink && e.preventDefault()} // Prevent default if no link
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            className='btn btn-secondary'
            target='_blank'
            rel='noopener noreferrer'
            onClick={(e) => !githubLink && e.preventDefault()} // Prevent default if no link
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
