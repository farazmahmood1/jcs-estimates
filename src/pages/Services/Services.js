import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { servicesData } from './components/servicesData';
import './components/styles.css';
import Reviews from '../Home/components/Reviews';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseDetails();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const services = [
    { icon: "assets/img/icon/quantity.png", title: "Quantity Takeoff", description: "Ensures accurate cost estimation by measuring required goods and resources, critical for budgeting and effective project execution in construction." },
    { icon: "assets/img/icon/materials.png", title: "Material Estimates", description: "Provides a comprehensive material list to ensure effective resource allocation and budgeting, aiding in efficient project execution." },
    { icon: "assets/img/icon/budget.png", title: "Cost Estimates", description: "Our cost assessment serves as a financial blueprint, ensuring resources are used wisely and budgets stay on track." },
    { icon: "assets/img/icon/proposal.png", title: "Bid Proposals", description: "Crafts a compelling bid proposal with clarity and precision, distinguishing your offer from competitors." },
    { icon: "assets/img/icon/quotation.png", title: "RFQS", description: "Offering RFQS with our expertise, fulfilling unique requirements to secure preferred partner status." },
    { icon: "assets/img/icon/blueprint.png", title: "Architectural Designing", description: "Combining functionality with aesthetics, our architectural designs transform ideas into inspiring, lasting structures." }
  ];
  

  return (
    <div className="">
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Services</h1>
            <ul className="breadcumb-menu">
              <li><a href="index.html">Home</a></li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
      
      <section className="bg-top-center z-index-common space-top animate__animated animate__fadeIn" style={{ padding: "230px 0px 100px 0px" }} id="service-sec">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center">
              <div className="shadow-title color2">SERVICES</div>
              <span className="sub-title" >WHAT WE DO</span>
              <h2 className="sec-title">We Provide Exclusive Service For <span className="text-theme">Your Business</span></h2>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__zoomIn" key={index}>
              <div className="service-grid">
                <div className="service-grid_icon">
                  <img src={service.icon} alt="Icon" />
                </div>
                <div className="service-grid_content mt-1">
                  <h3 className="box-title" style={{fontSize:"16px"}}><a href="#">{service.title}</a></h3>
                  <p className="service-grid_text" style={{fontSize:"14px"}}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <div >
        <Reviews />
      </div>

      <section className="" style={{ marginTop: "250px", marginBottom: "250px" }} id="contact-sec">
        <div className="container">
          <div className="cta-box">
            <div className="row">
              <div className="col-lg-5">
                <div className="cta-box_img"><img src="assets/img/gallery/customer_support.jpg" alt="Image" /></div>
              </div>
              <div className="col-lg-7">
                <div className="cta-box_content">
                  <div className="cta-box_icon"><img src="assets/img/icon/call_1.svg" alt="Icon" /></div>
                  <div className="title-area mb-35">
                    <div className="shadow-title">CONSULTATION</div><span className="sub-title">
                      <div className="icon-masking me-2"><span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg" /> </div>LET’S
                      CONSULTATION
                    </span>
                    <h2 className="sec-title">Let’s Talk About Business Solutions <span className="text-theme">With
                      Us</span></h2>
                  </div><a href="contact.html" className="th-btn">CONTACT US<i className="fa-solid fa-arrow-right ms-2" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }}></path>
        </svg>
      </div>

      {selectedService && (
        <div className="service-details-overlay" onClick={handleCloseDetails}>
          <div className="service-details-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDetails}>
              <FaTimes />
            </button>
            <div className="service-details-icon">{selectedService.icon}</div>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.text}</p>
            <div className="service-details-description">
              <h3>Components</h3>
              <p>{selectedService.components}</p>
              <h3>Process</h3>
              <ol>
                {selectedService.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <h3>Implementations</h3>
              <ul>
                {selectedService.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
