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
    { icon: "assets/img/icon/construction.png", title: "Earthwork", description: "Comprehensive earthwork estimation services to support site preparation and foundational planning." },
    { icon: "assets/img/icon/concrete-mixer.png", title: "Concrete", description: "Accurate concrete volume calculations ensuring optimal structural strength and cost efficiency." },
    { icon: "assets/img/icon/house-frame.png", title: "Framing", description: "Detailed framing estimates for structural integrity and material optimization." },
    { icon: "assets/img/icon/drywall.png", title: "Drywall", description: "Precise drywall material and labor estimates for efficient interior construction." },
    { icon: "assets/img/icon/floor.png", title: "Flooring", description: "Estimates tailored to various flooring types for budget planning and design needs." },
    { icon: "assets/img/icon/demolition.png", title: "Demolition", description: "Safe and cost-effective demolition estimates, accounting for labor and debris removal." },
    { icon: "assets/img/icon/brickwall.png", title: "Masonry", description: "Expert masonry quantity takeoffs and cost projections for robust construction." },
    { icon: "assets/img/icon/structural.png", title: "Structure Steel", description: "Accurate structural steel estimation ensuring stability and code compliance." },
    { icon: "assets/img/icon/roof.png", title: "Roofing", description: "Detailed roofing estimates considering materials, labor, and weatherproofing." },
    { icon: "assets/img/icon/painting.png", title: "Painting", description: "Painting estimates for interior and exterior finishes, enhancing durability and appeal." },
    { icon: "assets/img/icon/landscaping.png", title: "Landscaping", description: "Landscaping estimates covering softscape, hardscape, and maintenance planning." },
    { icon: "assets/img/icon/mep.png", title: "MEP", description: "Mechanical, Electrical, and Plumbing estimates for smooth building operations." },
    { icon: "assets/img/icon/interior.png", title: "Interior Finishes Estimation", description: "Comprehensive estimates for all interior finish materials and design elements." },
    { icon: "assets/img/icon/insulation.png", title: "Insulation", description: "Thermal and acoustic insulation estimates for comfort and energy efficiency." },
    { icon: "assets/img/icon/finishes.png", title: "Finishes", description: "Estimates for final finishing works, including walls, ceilings, and detailing." },
    { icon: "assets/img/icon/furnishing.png", title: "Furnishing", description: "Furnishing estimates to enhance functionality and aesthetics of interior spaces." }
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
