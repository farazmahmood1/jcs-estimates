import React from 'react';
import './WhyUs.css';
import { FaUsers, FaHeadset, FaStar, FaShippingFast } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div>
      {/* Testimonials Section */}
      <div className="container my-5">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-lg-start" style={{ margin: "0px", padding: "0px" }}>
              <span className="sub-title" style={{ justifyContent: "flex-start" }}>
                CLIENT TESTIMONIALS
              </span>
              <h2 className="sec-title">What Our <span className="text-theme">Clients</span> Say</h2>
              <p className="sec-description">
                At jCS, we pride ourselves on delivering accurate estimates, innovative designs, and exceptional service. Here's what our satisfied clients have to say about working with us.
              </p>
            </div>
          </div>
        </div>

        {/* Left Column - Description */}
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold">Your Vision, Our Expertise</h2>
            <p className="text-muted">
              At JCS Estimation, we transform your ideas into reality with meticulous planning and execution. From detailed cost estimations to stunning architectural designs, we ensure every step of your project is handled with care and precision.
            </p>
            <p className="text-muted">
              Our team combines cutting-edge technology with years of industry experience to deliver results that exceed expectations. Whether you're building a home or managing a large-scale project, we’re here to support you every step of the way.
            </p>
            <div className="d-flex align-items-center mt-4">
              <div className="call-icon me-3">
                <FaHeadset size={30} color="#fff" />
              </div>
              <div>
                <p className="fw-bold mb-0">Need Assistance? Call Us!</p>
                <h5 className="fw-bold mb-0" style={{ color: "#106ebe" }}>+1 (614) 270-6554</h5>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="row g-3">
              <div className="col-6">
                <div className="fact-card text-white text-center p-4" style={{ backgroundColor: "#a4bcf3" }}>
                  <FaUsers size={30} />
                  <h3 className="fw-bold mt-2">500+</h3>
                  <p className="mb-0">Happy Clients</p>
                </div>
              </div>
              <div className="col-6">
                <div className="fact-card text-white text-center p-4" style={{ backgroundColor: "#E1EAFF" }}>
                  <FaStar size={30} />
                  <h3 className="fw-bold mt-2">98%</h3>
                  <p className="mb-0">Customer Choice</p>
                </div>
              </div>
              <div className="col-12">
                <div className="fact-card text-white text-center p-4" style={{ backgroundColor: "#a4bcf3" }}>
                  <FaShippingFast size={30} />
                  <h3 className="fw-bold mt-2">1000+</h3>
                  <p className="mb-0">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <section className="" style={{ marginTop: "250px", marginBottom:"250px" }} id="contact-sec">
        <div className="container">
          <div className="cta-box">
            <div className="row">
              <div className="col-lg-5">
                <div className="cta-box_img">
                  <img src="assets/img/gallery/customer_support.jpg" alt="Customer Support" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cta-box_content">
                  <div className="cta-box_icon">
                    <img src="assets/img/icon/call_1.svg" alt="Consultation Icon" />
                  </div>
                  <div className="title-area mb-35">
                    <div className="shadow-title">CONSULTATION</div>
                    <span className="sub-title">
                      LET’S CONSULT WITH US
                    </span>
                    <h2 className="sec-title">
                      Let’s Talk About Your Project <span className="text-theme">With JCS Estimation</span>
                    </h2>
                  </div>
                  <a className="th-btn"  href="https://api.whatsapp.com/send/?phone=18382263010&text&type=phone_number&app_absent=0"
                        target="_blank">
                    CONTACT US<i className="fa-solid fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;