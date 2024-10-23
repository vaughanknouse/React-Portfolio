import React from 'react';
import Project from '../components/Project';
import advancedCssPortfolioImage from '../assets/images/advanced-css-portfolio.png';
import horiseonImage from '../assets/images/horiseon.png';
import myNewWebsiteImage from '../assets/images/my-new-website.png';
import tripmasterImage from '../assets/images/tripmaster.png';
import marvelFanPageImage from '../assets/images/marvel-fan-page.png';
import gitFitImage from '../assets/images/gitfit.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Advanced CSS Portfolio',
      image: advancedCssPortfolioImage,
      liveLink: 'https://vaughanknouse.github.io/advanced-css-portfolio/',
      githubLink: 'https://github.com/vaughanknouse/advanced-css-portfolio',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Horiseon',
      image: horiseonImage,
      liveLink:
        'https://vaughanknouse.github.io/Module01Challenge_Code-Refactor/',
      githubLink:
        'https://github.com/vaughanknouse/Module01Challenge_Code-Refactor',
      technologies: ['HTML', 'CSS', 'SEO'],
    },
    {
      title: 'My New Website',
      image: myNewWebsiteImage,
      liveLink: 'https://vaughanknouse.github.io/Module1MiniProject/',
      githubLink: 'https://github.com/vaughanknouse/Module1MiniProject',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Tripmaster',
      image: tripmasterImage,
      liveLink: 'https://tripmaster-w7ep.onrender.com/',
      githubLink: 'https://github.com/vaughanknouse/tripmaster',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    },
    {
      title: 'Marvel Fan Page',
      image: marvelFanPageImage,
      liveLink: 'https://melivesel.github.io/collaboration/',
      githubLink: 'https://github.com/melivesel/collaboration',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'GitFit',
      image: gitFitImage,
      liveLink: 'https://github.com/cococnde/git-fit',
      githubLink: 'https://github.com/cococnde/git-fit',
      technologies: ['HTML', 'CSS', 'Node.js', 'Express'],
    },
  ];

  return (
    <section id='portfolio' className='container my-5'>
      <h2 className='text-center mb-4'>Portfolio</h2>
      <div className='row'>
        {projects.map((project) => (
          <div className='col-12 col-md-4 mb-4' key={project.title}>
            <Project
              title={project.title}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
