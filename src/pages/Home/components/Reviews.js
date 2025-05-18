import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Reviews.css";

const Reviews = () => {
    // Owl Carousel settings
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["<i class='fa fa-chevron-left p-2'></i>", "<i class='fa fa-chevron-right p-2'></i>"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div>
            <div className="container rounded" style={{ marginTop: "150px" }}>
                <div className="title-area mb-5">
                    <div className="shadow-title">TESTIMONIALS</div>
                    <span className="sub-title">
                        CLIENT TESTIMONIALS
                    </span>
                    <h2 className="sec-title text-center">What Our <span className="text-theme">Clients</span> Say</h2>
                    <p className="sec-description text-center">
                        At JCS, we pride ourselves on delivering accurate estimates, innovative designs, and exceptional service. Here's what our satisfied clients have to say.
                    </p>
                </div>
                <OwlCarousel className="owl-theme" {...options}>
                    {/* Testimonial 1 */}
                    <div className="item">
                        <div className="d-flex flex-column justify-content-start testimonial mb-5 pb-2">
                            <div className="mt-2 d-flex justify-content-start">
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star-half-alt active-star"></span>
                            </div>
                            <div className="pb-2 pt-1" style={{ fontWeight: 700, textAlign: "left", color: "#000 !important" }}>Exceptional Precision</div>
                            <div className="" style={{ textAlign: "left", color: "#000 !important" }}>
                                JCS provided us with incredibly accurate cost estimations that helped us stay within budget. Their attention to detail is unmatched!
                            </div>
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                    className="rounded-circle"
                                />
                                <div className="d-flex flex-column pl-2" style={{ marginLeft: "5px" }}>
                                    <div style={{ textAlign: "left", color: "#000 !important" }}>John D.</div>
                                    <p className="designation" style={{ textAlign: "left", color: "#000 !important" }}>Project Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="item">
                        <div className="d-flex flex-column justify-content-start testimonial mb-5 pb-2">
                            <div className="mt-2 d-flex justify-content-start">
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star-half-alt active-star"></span>
                            </div>
                            <div className="pb-2 pt-1" style={{ fontWeight: 700, textAlign: "left", color: "#000 !important" }}>Innovative Designs</div>
                            <div className="" style={{ textAlign: "left", color: "#000 !important" }}>
                                The material estimations from JCS were breathtaking! They perfectly captured our vision and exceeded our expectations.
                            </div>
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                    className="rounded-circle"
                                />
                                <div className="d-flex flex-column pl-2" style={{ marginLeft: "5px" }}>
                                    <div style={{ textAlign: "left", color: "#000 !important" }}>Sarah L.</div>
                                    <p className="designation" style={{ textAlign: "left", color: "#000 !important" }}>Interior Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="item">
                        <div className="d-flex flex-column justify-content-start testimonial mb-5 pb-2">
                            <div className="mt-2 d-flex justify-content-start">
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star-half-alt active-star"></span>
                            </div>
                            <div className="pb-2 pt-1" style={{ fontWeight: 700, textAlign: "left", color: "#000 !important" }}>Reliable Partner</div>
                            <div className="" style={{ textAlign: "left", color: "#000 !important" }}>
                                JCS has been a reliable partner throughout our project. Their material lists and bid forms streamlined our procurement process significantly.
                            </div>
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                    className="rounded-circle"
                                />
                                <div className="d-flex flex-column pl-2" style={{ marginLeft: "5px" }}>
                                    <div style={{ textAlign: "left", color: "#000 !important" }}>Michael R.</div>
                                    <p className="designation" style={{ textAlign: "left", color: "#000 !important" }}>Construction Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="item">
                        <div className="d-flex flex-column justify-content-start testimonial mb-5 pb-2">
                            <div className="mt-2 d-flex justify-content-start">
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star active-star"></span>
                                <span className="fas fa-star-half-alt active-star"></span>
                            </div>
                            <div className="pb-2 pt-1" style={{ fontWeight: 700, textAlign: "left", color: "#000 !important" }}>Professional Service</div>
                            <div className="" style={{ textAlign: "left", color: "#000 !important" }}>
                                From start to finish, JCS delivered professional and transparent service. Their consultation was invaluable in planning our project.
                            </div>
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                    className="rounded-circle"
                                />
                                <div className="d-flex flex-column pl-2" style={{ marginLeft: "5px" }}>
                                    <div style={{ textAlign: "left", color: "#000 !important" }}>Emily T.</div>
                                    <p className="designation" style={{ textAlign: "left", color: "#000 !important" }}>Business Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Reviews;