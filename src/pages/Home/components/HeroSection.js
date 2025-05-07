import React, { useRef } from "react";
import "animate.css";
import "./HeroSection.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HeroSection = () => {
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

  return (
    <>
      <div className="hero-section-wrapper">
        {/* Left Button */}
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          <i className="fa-solid fa-chevron-left" />
        </button>

        {/* Right Button */}
        <button className="nav-btn next-btn" onClick={handleNext}>
          <i className="fa-solid fa-chevron-right" />
        </button>

        <OwlCarousel
          className="owl-theme"
          ref={carouselRef}
          {...options}
        >
          {/* Slide 1 */}
          <div
            className="th-hero-wrapper hero-4"
            id="hero"
            style={{
              backgroundImage:
                "url(assets/img/DTechKrew/BGs/hero-123.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-content">
              <div className="hero-box animate__animated animate__fadeInLeft">
                <div className="hero-text-left">
                  <div className="hero-style4">
                    <span className="hero-subtitle">
                      Precision in Estimation
                    </span>
                    <h1 className="hero-title">
                      Excellence in Every Detail
                    </h1>
                    <p className="hero-text">
                      From accurate quantity takeoffs to detailed cost estimations, we ensure your project starts on the right foot.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="th-btn"
                        style={{ borderRadius: "25px !important" }}
                      >
                        Talk to Experts<i className="call-btn"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image animate__animated animate__fadeInRight">
                <img
                  src="assets/img/DTechKrew/BGs/hero-123.jpg"
                  alt="Hero Background"
                />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="th-hero-wrapper hero-4"
            id="hero"
            style={{
              backgroundImage:
                "url(assets/img/DTechKrew/BGs/hero-123.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-content">
              <div className="hero-box animate__animated animate__fadeInLeft">
                <div className="hero-text-left">
                  <div className="hero-style4">
                    <span className="hero-subtitle">
                      Innovation in Design
                    </span>
                    <h1 className="hero-title">
                      Crafting Spaces That Inspire
                    </h1>
                    <p className="hero-text">
                      Our 2D & 3D architectural designs combine functionality with aesthetics to bring your vision to life.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="th-btn"
                        style={{ borderRadius: "25px !important" }}
                      >
                        Talk to Experts<i className="call-btn"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image animate__animated animate__fadeInRight">
                <img
                  src="assets/img/DTechKrew/BGs/hero-123.jpg"
                  alt="Hero Background"
                />
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="th-hero-wrapper hero-4"
            id="hero"
            style={{
              backgroundImage:
                "url(assets/img/DTechKrew/BGs/hero-123.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-content">
              <div className="hero-box animate__animated animate__fadeInLeft">
                <div className="hero-text-left">
                  <div className="hero-style4">
                    <span className="hero-subtitle">
                      Streamlined Solutions
                    </span>
                    <h1 className="hero-title">
                      Building Trust Through Transparency
                    </h1>
                    <p className="hero-text">
                      Our bid forms and RFQ processes ensure clarity, fairness, and efficiency in every step of your project.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="th-btn"
                        style={{ borderRadius: "25px !important" }}
                      >
                        Talk to Experts<i className="call-btn"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image animate__animated animate__fadeInRight">
                <img
                  src="assets/img/DTechKrew/BGs/hero-123.jpg"
                  alt="Hero Background"
                />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default HeroSection;