import React, { useState, useEffect } from 'react';
import projects from './projects';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Portfolio</h1>
              <ul className="breadcrumb-menu">
                <li><a href="/">JCS Estimates</a></li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>  



      <div className="portfolio-container">
        <h1 className="page-title">Explore Our <span className="text-theme">Projects</span></h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index} onClick={() => handleReadMore(project)}>
              <div className="project-thumbnail">
                <img src={project.images[0]} alt={project.name} className="thumbnail-img" />
                <div className="project-title">
                  <h3>{project.name}</h3>
                </div>
                <div className="overlay">
                  <div className="project-details">
                    <p>{project.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-popup-overlay" onClick={handleClosePopup}>
          <div className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>&times;</button>
            <div className="project-popup-content">
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <div className="excel-container">
                <iframe
                  src={selectedProject.embedUrl}
                  title={selectedProject.name}
                  className="excel-iframe"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
