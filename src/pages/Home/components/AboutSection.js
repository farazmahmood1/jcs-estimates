import React, { useState } from 'react';
import 'animate.css';
import './AboutSection.css';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('cat1');

  return (
    <div className="overflow-hidden space" style={{ padding: "150px 0px" }} id="about-sec" >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box4 tilt-active">
              <img src="assets/img/DTechKrew/BGs/about_3_1.png" alt="About" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-35 text-center text-xl-start">
              {/* <div className="shadow-title">ABOUT US</div> */}
              <span className="sub-title" style={{ justifyContent: "flex-start" }}>About JCS Estimates</span>
              <h2 className="sec-title">
                JCS Estimates - Precision in Every Estimate, Excellence in Every Build
              </h2>
            </div>
            <p>
              JCS Estimates is dedicated to offering accurate, innovative, and effective cost estimation services to elevate your business. Our committed team ensures every project is executed to idealism.
            </p>
            <div className="achivement-tab">
              <button
                className={`tab-button ${activeTab === 'cat1' ? 'active' : ''}`}
                onClick={() => setActiveTab('cat1')}
              >
                Our Mission
              </button>
              <button
                className={`tab-button ${activeTab === 'cat2' ? 'active' : ''}`}
                onClick={() => setActiveTab('cat2')}
              >
                Our Vision
              </button>
            </div>
            <div className="achivement-box-area">
              <div className={`filter-item cat1 ${activeTab === 'cat1' ? 'active' : ''}`}>
                <div className="achivement-box">
                  <div className="media-body">
                    <h3 className="box-title">Our Mission</h3>
                    <p className="achivement-box_text">
                      To help organizations grow by providing precise cost estimation services, allowing projects to be completed within budget and on time, enabling clients to achieve new heights.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`filter-item cat2 ${activeTab === 'cat2' ? 'active' : ''}`}>
                <div className="achivement-box">
                  <div className="media-body">
                    <h3 className="box-title">Our Vision</h3>
                    <p className="achivement-box_text">
                      To become the leader in cost-effective solutions, setting industry standards in accuracy, innovation, and quality, guiding the future of cost estimation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
