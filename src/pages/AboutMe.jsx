import React from 'react';
import avatar from '../assets/images/VK_Portfolio_Image.jpeg'; // Path to your avatar image

const AboutMe = () => {
  return (
    <section id='about-me' className='container my-5'>
      <div className='about-me-content'>
        <img
          src={avatar}
          alt='Vaughan profile picture'
          className='profile-img shadow'
        />
        <div className='about-text'>
          <h2 className='about-title'>About Me</h2>
          <p className='about-description'>
            Hi! I'm Vaughan, a full-stack web developer passionate about
            creating modern and functional applications. I specialize in React,
            Node.js, and responsive web design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
