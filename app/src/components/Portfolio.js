import React from 'react';
import project1 from '../images/featured1.webp';
import project2 from '../images/featured2.webp';
import project3 from '../images/featured3.webp';

const Portfolio = () => {
  const projects = [
    {
      img: project1,
      title: 'Project 1',
      description: 'Description of Project 1. This project is about...',
    },
    {
      img: project2,
      title: 'Project 2',
      description: 'Description of Project 2. This project is about...',
    },
    {
      img: project3,
      title: 'Project 3',
      description: 'Description of Project 3. This project is about...',
    }
  ];

  return (
    <div style={{ height: '100vh' }}>
      <h1>My Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
