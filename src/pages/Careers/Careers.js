import React, { useState } from 'react';
import './Careers.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import axios from 'axios';

const Careers = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleApplyClick = (type) => {
    setFormType(type);
    setShowForm(true);
    setShowSuccess(false);
    setErrorMessage('');
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormType('');
    setErrorMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post('/api/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setShowForm(false);
        setShowSuccess(true);
      } else {
        setErrorMessage(response.data.message || 'There was an issue with your submission.');
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setErrorMessage('There was an error submitting the form. Please try again later.');
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="careers-page">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Careers</h1>
              <ul className="breadcrumb-menu">
                <li><a href="/">JCS Estimates</a></li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="page-title">Careers at JCS Estimates</h1>

        <div className="career-sections">
          <section className="career-section internship-section">
            <h2>Internships</h2>
            <div className="career-content">
              <div className="career-image">
                <img src="assets/img/careers_imgs/internship.jpg" alt="Internship" />
              </div>
              <div className="career-text">
                <p>
                  At JCS Estimates, we offer internship opportunities that provide hands-on experience in the construction 
                  estimation and project management industry. Our internships are designed to help you gain valuable skills, 
                  work on real-world projects, and receive mentorship from industry experts.
                </p>
                <p>Benefits of our Internship Program:</p>
                <ul>
                  <li>Gain practical experience in construction estimation and planning</li>
                  <li>Learn from seasoned professionals in project estimation and management</li>
                  <li>Flexible working hours to accommodate your schedule</li>
                  <li>Access to industry-specific training resources and workshops</li>
                  <li>Opportunities for full-time employment upon completion</li>
                </ul>
                <button className="apply-button" onClick={() => handleApplyClick('Internship')}>Apply Now</button>
              </div>
            </div>
          </section>

          <section className="career-section jobs-section">
            <h2>Jobs</h2>
            <div className="career-content">
              <div className="career-image">
                <img src="assets/img/careers_imgs/jobs.jpg" alt="Jobs" />
              </div>
              <div className="career-text">
                <p>
                  Join JCS Estimates, a leader in project estimation, architectural design, and cost management, and be part of a 
                  team that sets standards in construction estimation and project efficiency. We are looking for talented individuals 
                  who are passionate about accuracy, efficiency, and innovation in the construction sector.
                </p>
                <p>Current Job Openings:</p>
                <ul>
                  <li>
                    <strong>Project Estimator</strong>
                    <p>
                      We are looking for a skilled project estimator to join our team. You will be responsible for analyzing project costs, 
                      preparing detailed estimates, and working closely with project teams. Experience with construction estimation software 
                      and cost analysis is preferred.
                    </p>
                  </li>
                  <li>
                    <strong>Architectural Designer</strong>
                    <p>
                      As an Architectural Designer, you will be responsible for creating building designs, ensuring they meet our high standards 
                      for aesthetics and functionality. Proficiency with CAD software and a strong understanding of construction processes are required.
                    </p>
                  </li>
                  <li>
                    <strong>Construction Project Manager</strong>
                    <p>
                      We are seeking an experienced Construction Project Manager to oversee and manage project schedules, budgets, and resources. 
                      Strong organizational skills and familiarity with construction management software are essential.
                    </p>
                  </li>
                </ul>
                <button className="apply-button" onClick={() => handleApplyClick('Job')}>Apply Now</button>
              </div>
            </div>
          </section>
        </div>

        {showForm && (
          <div className="form-popup-overlay" onClick={handleCloseForm}>
            <div className="form-popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={handleCloseForm}>&times;</span>
              <h2>Apply for {formType}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Applying for:
                  <select name="applyingFor" required>
                    <option value="Internship">Internship</option>
                    <option value="Job">Job</option>
                  </select>
                </label>
                <label>
                  Skills:
                  <textarea name="skills" required></textarea>
                </label>
                <label>
                  Upload Resume:
                  <input type="file" name="resume" accept="application/pdf" required />
                </label>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Confirm Details and Apply</button>
              </form>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="success-popup-overlay" onClick={handleCloseSuccess}>
            <div className="success-popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={handleCloseSuccess}>&times;</span>
              <AiOutlineCheckCircle className="success-icon" />
              <h2>Application Submitted Successfully</h2>
              <p>Thank you for applying. Your application has been submitted successfully. We will review your application and get back to you shortly.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
