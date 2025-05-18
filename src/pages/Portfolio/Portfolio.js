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
    <div className="">
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Portfolio</h1>
            <ul className="breadcumb-menu">
              <li><a href="index.html">Home</a></li>
              <li>Portfolio</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="portfolio-container mb-5">

        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-4 col-sm-9 pe-xl-5">
            <div className="title-area text-center">
              {/* <div className="shadow-title color2">SERVICES</div> */}
              <span className="sub-title" >OUR RECENT WORK</span>
              <h2 className="sec-title">We have done a variety of projects <span className="text-theme">for our clients</span></h2>
            </div>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index} onClick={() => handleReadMore(project)}>
              <div className="project-thumbnail">
                <img src={project.images[0]} alt={project.name} className="thumbnail-img" />
                <div className="project-title">
                  <h3>{project.title}</h3>
                </div>
                <div className="overlay">
                  <div className="project-details">
                    <p>{project.description}</p>
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
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="excel-container">
                <img src={selectedProject.images[0]} alt={selectedProject.name} className="thumbnail-img" />

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
