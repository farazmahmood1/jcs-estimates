import React from 'react';
import 'animate.css';
import './ServicesSection.css';

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
  { icon: "assets/img/icon/park.png", title: "Landscaping", description: "Landscaping estimates covering softscape, hardscape, and maintenance planning." },
  { icon: "assets/img/icon/system.png", title: "MEP", description: "Mechanical, Electrical, and Plumbing estimates for smooth building operations." },
  { icon: "assets/img/icon/interior-design.png", title: "Interior Finishes Estimation", description: "Comprehensive estimates for all interior finish materials and design elements." },
  { icon: "assets/img/icon/thermal-insulation.png", title: "Insulation", description: "Thermal and acoustic insulation estimates for comfort and energy efficiency." },
  { icon: "assets/img/icon/cabinet.png", title: "Finishes", description: "Estimates for final finishing works, including walls, ceilings, and detailing." },
  { icon: "assets/img/icon/manager.png", title: "Furnishing", description: "Furnishing estimates to enhance functionality and aesthetics of interior spaces." }
];

const ServicesSection = () => {
  return (
    <section className="bg-top-center z-index-common space-top animate__animated animate__fadeIn" style={{ padding: "230px 0px 100px 0px" }} id="service-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center text-lg-start">
              <div className="shadow-title color2">SERVICES</div>
              <span className="sub-title" style={{justifyContent:"flex-start"}}>WHAT WE DO</span>
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
  );
};

export default ServicesSection;
