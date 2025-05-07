import React, { useState, useEffect } from 'react';
import courses from './courses';
import './Trainings.css';

const Trainings = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleReadMore = (course) => {
    setSelectedCourse(course);
  };

  const handleClosePopup = () => {
    setSelectedCourse(null);
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
    <div className="trainings-page">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Trainings</h1>
              <ul className="breadcrumb-menu">
                <li><a href="/">JCS Estimates</a></li>
                <li>Trainings</li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="page-title">Enhance Your Skills with <span className="text-theme">SEAD</span> Trainings</h1>
        <p className="page-description">Explore our range of training programs designed to equip you with the skills needed to excel in the world of estimation and freelancing. From cost estimation and design to bid forms, our trainings are crafted to provide comprehensive learning experiences.</p>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-img">
                <img src={course.image} alt={course.name} />
              </div>
              <div className="course-content">
                <h3 className="box-title"><a href="#!" onClick={() => handleReadMore(course)}>{course.name}</a></h3>
                <p className="course-text">{course.excerpt}</p>
                <button className="read-more-button" onClick={() => handleReadMore(course)}>Read More</button>
              </div>
            </div>
          ))}
        </div>

        {selectedCourse && (
          <div className="course-popup-overlay" onClick={handleClosePopup}>
            <div className="course-popup" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={handleClosePopup}>&times;</button>
              <img src={selectedCourse.image} alt={selectedCourse.name} className="popup-image" />
              <h2>{selectedCourse.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: selectedCourse.description }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trainings;
