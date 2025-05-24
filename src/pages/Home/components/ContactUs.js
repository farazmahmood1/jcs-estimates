import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div>
                <div className="bg-smoke space" style={{marginTop:"150px"}} data-bg-src="assets/img/bg/contact_bg_1.png" id="contact-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <h2 className="sec-title" style={{ marginBottom: "0px", paddingBottom: "0px" }}>Contact <span className="text-theme">Us</span></h2>
                                <div className="title-area mb-35 text-xl-start text-center"><span className="sub-title">
                                </span>
                                    <h2 className="sec-title">Have Any Questions?</h2>
                                    <p className="sec-text">Need expert guidance? Our team at JCS is here to help you every step of the way. Reach out today, and let’s bring your vision to life!</p>
                                </div>
                                <form action="mail.php" method="POST" className="contact-form ajax-contact">
                                    <div className="row">
                                        <div className="form-group col-md-6"><input type="text" className="form-control" name="name" id="name" placeholder="Your Name" /> <i className="fal fa-user" /></div>
                                        <div className="form-group col-md-6"><input type="email" className="form-control" name="email" id="email" placeholder="Email Address" /> <i className="fal fa-envelope" /></div>
                                        <div className="form-group col-md-6"><select name="subject" id="subject" className="form-select">
                                            <option value disabled="disabled" selected="selected" hidden>Select Subject
                                            </option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Brand Marketing">Brand Marketing</option>
                                            <option value="UI/UX Designing">UI/UX Designing</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select> <i className="fal fa-chevron-down" /></div>
                                        <div className="form-group col-md-6"><input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" /> <i className="fal fa-phone" /></div>
                                        <div className="form-group col-12"><textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Your Message" defaultValue={""} /> <i className="fal fa-comment" /></div>
                                        <div className="form-btn text-xl-start text-center col-12"><button className="th-btn">Send Message<i className="fa-regular fa-arrow-right ms-2" /></button></div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-sec">
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            {/* <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" src="https://maps.google.com/maps?width=400&height=400&hl=en&q=410 Prototype Dr Suite 3, Reno, NV 89521, United States&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://sprunkin.com/">Sprunki Game</a></div><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}" }} /></div> */}
                      
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.0207982511656!2d-119.76408902349279!3d39.44626191413201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809915c42b261825%3A0x1ea2559c34dc2c13!2sJCS%20Construction!5e0!3m2!1sen!2s!4v1748120791032!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        {/* <div className='col-lg-6 p-0'>
                            <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" src="https://maps.google.com/maps?width=400&height=400&hl=en&q=AP KHAZNA TOWER BUILDING NAJDA STREET Abu Dhabi.UAE&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://sprunkin.com/">Sprunki Game</a></div><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}" }} /></div>
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default ContactUs