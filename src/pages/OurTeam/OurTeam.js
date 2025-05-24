import React from 'react';
import './OurTeam.css';

const teamMembers = [
  { id: '01', name: 'Muhammad Ahtsham Haider', role: 'Co-Founder', img: 'assets/img/team/aa.png' },
  { id: '02', name: 'Cody Martinez', role: 'Sales Manager', img: 'assets/img/team/Business_development_manager-Cody_Martinez.png' },
  { id: '03', name: 'Jia Brian', role: 'Marketing Head', img: 'assets/img/team/Marketing_head_-_Jia_Brian.png' },
  { id: '04', name: 'Anna Amelia', role: 'Operational Manager', img: 'assets/img/DTechKrew/Team/oprmngr.jpg' },
  { id: '05', name: 'Norah Smith', role: 'Recruitment Manager', img: 'assets/img/team/Norah Smith - Recruitment_manager-.png' },
  { id: '06', name: 'James Stephen', role: 'Legal Advisor', img: 'assets/img/team/Legal_Advisor-_James_Stephen-.png' },
  // { id: '07', name: 'Ken Mark', role: 'Co-Founder', img: 'assets/img/team/Ken Mark -Bussiness Developer.png' },
];

const OurTeam = () => {
  return (
    <div>
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Team</h1>
            <ul className="breadcumb-menu">
              <li><a href="index.html">Home</a></li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space-top" style={{ marginBottom: "150px" }}>
        <div className="container">
          <div className="row gy-40 align-items-center">
            <div className="col-xl-5">
              <div className="team-featured-img"><img src="\assets\img\DTechKrew\Team\ceo.jpg" alt="Team" /></div>
            </div>
            <div className="col-xl-7">
              <div className="team-featured">
                <h2 className="team-title">Ahmed Pervaiz</h2>
                <p className="team-desig">Founder & CEO</p>
                <p className="team-bio">At JCS Estimation, we are proud to offer trusted and accurate construction estimation services across the United States for over 9 years. As a team of professionals led by industry expertise, our mission has always been to help clients build with confidence by providing detailed and cost-effective estimation solutions.

                  <br /><br />As a Civil Engineer by profession, I understand the critical importance of precision in every project. With hands-on experience in the field and a deep understanding of construction dynamics, I’ve built this company to bridge the gap between project vision and practical planning. Over the years, we’ve had the privilege of working with many well-known contractors, architects, and construction firms nationwide.
                  <br /><br />From residential and commercial to industrial projects, our team is dedicated to delivering top-tier services tailored to your unique needs. Thank you for considering us as your trusted estimation partner — we look forward to helping you bring your next project to life.
                </p>
                <div className="team-contact-wrap">
                  <div className="team-contact" style={{ padding: "11px 3px" }}>
                    <div className="icon-btn"><i className="fa-solid fa-phone" /></div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Phone Number</h6><a className="team-contact_link" href="tel:+19356542587">+1 614 270 6554 </a>
                    </div>
                  </div>
                  <div className="team-contact" style={{ padding: "11px 3px" }}>
                    <div className="icon-btn"><i className="fa-solid fa-envelope" /></div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Email Address</h6><a className="team-contact_link" href="mailto:info@.com">ahmed@jcsestimate.com</a>
                    </div>
                  </div>
                  <div className="team-contact" style={{ padding: "11px 3px" }}>
                    <div className="icon-btn"><i className="fa-solid fa-clock" /></div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Timings</h6><span className="team-contact_link">10:00AM - 4:00PM</span>
                    </div>
                  </div>
                </div><a className="th-btn">MAKE AN APPOINTMENT<i className="fa-solid fa-arrow-right ms-2" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
};

export default OurTeam;
