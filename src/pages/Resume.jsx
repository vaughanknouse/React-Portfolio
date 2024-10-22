import React from 'react';
import resumePDF from '../assets/documents/Vaughan Knouse_Web Developer_Resume.pdf'; // Adjust the path as necessary

const Resume = () => {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
  ];

  return (
    <section className='container my-5'>
      <h2>Resume</h2>
      <p>
        Download my resume{' '}
        <a href={resumePDF} download>
          here
        </a>
        .
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
