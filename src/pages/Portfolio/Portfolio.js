import React, { useState, useEffect, useRef } from 'react';
import projects from './projects';
import './Portfolio.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null); 
   const carouselRef = useRef(null);
  
    const options = {
      responsiveClass: true,
      dots: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    };
  
    const handleNext = () => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    };
  
    const handlePrev = () => {
      if (carouselRef.current) {
        carouselRef.current.prev();
      }
    };

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
            <div className="project-item" style={{ width: index === 0 ? "100%" : "" }} key={index} onClick={() => handleReadMore(project)}>
              <div className="project-thumbnail" style={{ height: index === 0 ? "300px" : "" }}>
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
              <p>{selectedProject.details}</p>

              <OwlCarousel className="owl-theme"
          ref={carouselRef}
          {...options}>
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="excel-container">
                    <img src={img} alt={`${selectedProject.title}-${idx}`} className="thumbnail-img" />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;
