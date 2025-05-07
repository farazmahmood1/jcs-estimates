import React from 'react';

const CtaArea = () => {
  return (
    <section className="cta-area position-relative space">
      <div className="th-bg-img">
        <img src="assets/img/DTechKrew/BGs/bg_overlay_1.png" alt="overlay" />
      </div>
      <div className="container z-index-common">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="title-area mb-35">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span className="mask-icon"><img src="assets/img/theme-img/title_shape_2.svg" alt="shape" /></span>
                </div>
                CONTACT US
              </span>
              <h2 className="sec-title text-white">Need Accurate Estimation for <span className="text-theme fw-normal">Your Next Project?</span></h2>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=923087625314&text=type=phone_number&app_absent=0" className="th-btn style3">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaArea;
