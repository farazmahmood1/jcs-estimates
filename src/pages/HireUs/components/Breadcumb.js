// Breadcumb.js
import React from 'react';
import './styles.css';

const Breadcrumb = ({ title }) => {
  return (
    <div className="hireus-page">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Hire Us</h1>
              <ul className="breadcrumb-menu">
                <li><a href="/">JCS Estimates</a></li>
                <li>Why Hire Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
