import React from 'react'

const ContactPage = () => {


    return (
        <div>
            <div>
                <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Contact Us</h1>
                            <ul className="breadcumb-menu">
                                <li><a >Home</a></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-xl-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon"><i className="fas fa-location-dot" /></div>
                                    <div className="media-body">
                                        <h4 className="box-title">Our Office Address</h4><span className="contact-info_text">418 Broadway STE N Albany, NY 12207, USA
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon"><i className="fas fa-phone" /></div>
                                    <div className="media-body">
                                        <h4 className="box-title">Call Us Anytime</h4><span className="contact-info_text"><a href="tel:+380 268 9436"> +1 (380) 268-9436                                        </a> <a href="tel:+1 (614) 270-6554">+1 (614) 270-6554</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon"><i className="fas fa-envelope" /></div>
                                    <div className="media-body">
                                        <h4 className="box-title">Send An Email</h4><span className="contact-info_text"><a href="mailto:info.jscestimates.com">info.jscestimates.com</a> <a href="mailto:hr@">hr@jscestimates.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-smoke space" data-bg-src="assets/img/bg/contact_bg_1.png" id="contact-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="title-area mb-35 text-xl-start text-center"><span className="sub-title">
                                    <div className="icon-masking me-2"><span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg" /> </div>contact with us!
                                </span>
                                    <h2 className="sec-title">Have Any Questions?</h2>
                                    <p className="sec-text">Enthusiastically disintermediate one-to-one leadership via business
                                        e-commerce. Dramatically reintermediate compelling process improvements rather than
                                        empowered relationships.</p>
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
                        <div className='col-lg-6 p-0'>
                            <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" src="https://maps.google.com/maps?width=400&height=400&hl=en&q=418 Broadway STE N Albany, NY 12207, USA&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://sprunkin.com/">Sprunki Game</a></div><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}" }} /></div>
                        </div>
                        <div className='col-lg-6 p-0'>
                            <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" src="https://maps.google.com/maps?width=400&height=400&hl=en&q=AP KHAZNA TOWER BUILDING NAJDA STREET Abu Dhabi.UAE&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://sprunkin.com/">Sprunki Game</a></div><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}" }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage