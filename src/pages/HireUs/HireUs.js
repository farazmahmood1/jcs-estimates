import React from 'react';
import './HireUs.css';
import Reviews from '../Home/components/Reviews';


const HireUs = () => {
  return (
    <>

      <div>
        <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">About Us</h1>
              <ul className="breadcumb-menu">
                <li><a >Home</a></li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="overflow-hidden space" id="about-sec">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column - Image Section */}
              <div className="col-xl-6 mb-30 mb-xl-0">
                <div className="img-box1">
                  <div className="img1">
                    <img src="assets/img/gallery/about_1_1.png" alt="About JCS" />
                  </div>
                  <div className="shape1">
                    <img src="assets/img/gallery/about_shape_1.png" alt="Shape" />
                  </div>
                  <div className="year-counter">
                    <h3 className="year-counter_number">
                      <span className="counter-number">9</span>+
                    </h3>
                    <p className="year-counter_text">Years of Experience</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Content Section */}
              <div className="col-xl-6">
                <div className="ps-xxl-4 ms-xl-3">
                  <div className="title-area mb-35">
                    <span className="sub-title">
                      <div className="icon-masking me-2">
                        <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_1.svg" />
                      </div>
                      About Us
                    </span>
                    <h2 className="sec-title">
                      We Transform Ideas Into Reality With <span className="text-theme">Precision and Excellence</span>
                    </h2>
                  </div>
                  <p className="mt-n2 mb-25">
                    At JCS, we specialize in delivering accurate estimates, innovative architectural designs, and comprehensive project solutions. With over 25 years of experience, our team combines expertise, technology, and a client-centric approach to ensure success at every stage of your project.
                  </p>
                  <div className="about-feature-wrap">
                    {/* Feature 1 */}
                    <div className="about-feature">
                      <div className="about-feature_icon">
                        <img src="assets/img/icon/about_feature_1_1.svg" alt="Certified Icon" />
                      </div>
                      <div className="media-body">
                        <h3 className="about-feature_title">Certified Experts</h3>
                        <p className="about-feature_text">Trusted for delivering precise and dependable services.</p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="about-feature">
                      <div className="about-feature_icon">
                        <img src="assets/img/icon/about_feature_1_2.svg" alt="Team Icon" />
                      </div>
                      <div className="media-body">
                        <h3 className="about-feature_title">Experienced Team</h3>
                        <p className="about-feature_text">A dedicated team of professionals committed to excellence.</p>
                      </div>
                    </div>
                  </div>
                  <div className="btn-group">
                    <a  href="https://api.whatsapp.com/send/?phone=18382263010&text&type=phone_number&app_absent=0"
                        target="_blank" className="th-btn">
                      DISCOVER MORE<i className="fa-solid fa-arrow-right ms-2" />
                    </a>
                    <div className="call-btn">
                      <div className="play-btn">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="media-body">
                        <span className="btn-text">Call Us On:</span>{" "}
                        <a href="tel:+" className="btn-title">
                          +1 (123) 123-4567
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="space" data-bg-src="assets/img/bg/why_bg_1.png">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              {/* Left Column - Image Section */}
              <div className="col-xxl-7 col-xl-6 mb-30 mb-xl-0">
                <div className="img-box2">
                  <div className="img1">
                    <img src="assets/img/gallery/why_1_1.jpg" alt="Why Choose JCS" />
                  </div>
                </div>
              </div>

              {/* Right Column - Content Section */}
              <div className="col-xxl-5 col-xl-6">
                <div className="title-area mb-35">
                  <span className="sub-title">
                    WHY CHOOSE US
                  </span>
                  <h2 className="sec-title">
                    Excellence in Material Take Off <span className="text-theme">and Construction Cost Estimation</span>
                  </h2>
                </div>
                <p className="mt-n2 mb-30">
                  At JCS, we specialize in delivering accurate cost estimations, innovative architectural designs, and comprehensive project solutions. Our team combines cutting-edge technology with years of industry experience to ensure precision, efficiency, and client satisfaction at every stage of your project.
                </p>
                <div className="two-column">
                  {/* Checklist 1 */}
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="far fa-solid fa-check" /> Accurate Quantity Takeoffs
                      </li>
                      <li>
                        <i className="far fa-solid fa-check" /> Transparent Cost Estimations
                      </li>
                      <li>
                        <i className="far fa-solid fa-check" /> Streamlined Bid Forms
                      </li>
                    </ul>
                  </div>

                  {/* Checklist 2 */}
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="far fa-solid fa-check" /> Stunning 2D & 3D Architectural Designs
                      </li>
                      <li>
                        <i className="far fa-solid fa-check" /> Expert Consultation Services
                      </li>
                      <li>
                        <i className="far fa-solid fa-check" /> Timely Project Delivery
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "150px" }}>
          <Reviews />

        </div>

        {/* <section className="bg-top-right overflow-hidden space-bottom" id="blog-sec" data-bg-src="assets/img/bg/blog_bg_1.png">
          <div className="container space-bottom">
            <div className="title-area text-center"><span className="sub-title">
              <div className="icon-masking me-2"><span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_1.svg" /> <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" /></div>NEWS &amp; ARTICLES
            </span>
              <h2 className="sec-title">Get Every Single Update <span className="text-theme">Blog</span></h2>
            </div>
            <div className="slider-area">
              <div className="swiper th-slider has-shadow" id="blogSlider1" data-slider-options="{&quot;loop&quot;:true,&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:1},&quot;576&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;768&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;},&quot;992&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;},&quot;1200&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;}}}">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_1.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />15
                          Jan, 2024</a> <a ><i className="fal fa-comments" />2
                            Comments</a></div>
                        <h3 className="box-title"><a >Unsatiable entreaties may
                          collecting Power.</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_2.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />16
                          Jan, 2024</a> <a ><i className="fal fa-comments" />3
                            Comments</a></div>
                        <h3 className="box-title"><a >Regional Manager &amp; limited time
                          management.</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_3.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />17
                          Jan, 2024</a> <a ><i className="fal fa-comments" />2
                            Comments</a></div>
                        <h3 className="box-title"><a >What’s the Holding Back the It
                          Solution Industry?</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_4.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />19
                          Jan, 2024</a> <a ><i className="fal fa-comments" />4
                            Comments</a></div>
                        <h3 className="box-title"><a >Latin derived from Cicero's
                          1st-century BC</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_1.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />15
                          Jan, 2024</a> <a ><i className="fal fa-comments" />2
                            Comments</a></div>
                        <h3 className="box-title"><a >Unsatiable entreaties may
                          collecting Power.</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_2.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />16
                          Jan, 2024</a> <a ><i className="fal fa-comments" />3
                            Comments</a></div>
                        <h3 className="box-title"><a >Regional Manager &amp; limited time
                          management.</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_3.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />17
                          Jan, 2024</a> <a ><i className="fal fa-comments" />2
                            Comments</a></div>
                        <h3 className="box-title"><a >What’s the Holding Back the It
                          Solution Industry?</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img"><img src="assets/img/blog/blog_1_4.jpg" alt="blog image" /></div>
                      <div className="blog-content">
                        <div className="blog-meta"><a ><i className="fal fa-calendar-days" />19
                          Jan, 2024</a> <a ><i className="fal fa-comments" />4
                            Comments</a></div>
                        <h3 className="box-title"><a >Latin derived from Cicero's
                          1st-century BC</a></h3>
                        <div className="blog-bottom"><a  className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a  className="line-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div><button data-slider-prev="#blogSlider1" className="slider-arrow style3 slider-prev"><i className="far fa-arrow-left" /></button> <button data-slider-next="#blogSlider1" className="slider-arrow style3 slider-next"><i className="far fa-arrow-right" /></button>
            </div>
          </div>
          <div className="container">
            <div className="slider-area text-center">
              <div className="swiper th-slider" data-slider-options="{&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:2},&quot;576&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;},&quot;768&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;},&quot;992&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;},&quot;1200&quot;:{&quot;slidesPerView&quot;:&quot;4&quot;},&quot;1400&quot;:{&quot;slidesPerView&quot;:&quot;5&quot;}}}">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_1.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_2.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_3.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_4.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_5.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_6.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_1.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_2.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_3.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_4.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_5.png" alt="Brand Logo" /></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-box"><img src="assets/img/brand/brand_1_6.png" alt="Brand Logo" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-mockup" data-bottom={0} data-left={0}>
            <div className="particle-2 small" id="particle-4" />
          </div>
        </section> */}
      </div>

    </>
  );
};

export default HireUs;
