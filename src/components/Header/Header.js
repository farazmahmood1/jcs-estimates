import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setShowMobileHeader(true);
    }
  }, []);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleMenuItemClick = (path) => {
    setActiveItem(path);
    toggleMobileMenu();
  };

  return (
    <header className="th-header header-layout2">
      <div className={`header-top ${showMobileHeader ? 'show' : ''}`}>
        <div className="container">
          <div className="header-links">
            <ul>
              {/* remove the bounce */}
              <li className='d-flex align-items-center'><i className="fa-solid fa-location-dot" style={{ fontSize: "12px" }}></i>Albany, NY 12207, USA</li>
              <li className='d-flex align-items-center'><i className="fa-brands fa-whatsapp" style={{ fontSize: "15px" }}></i><a href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">+1 (614) 123 4567</a></li>
              <li className='d-flex align-items-center'><i className="fa-solid fa-envelope" style={{ fontSize: "15px" }}></i><a href="mailto:info@">info@jcsestimates.net</a></li>
              <li className='d-flex align-items-center'><i className="fa-solid fa-phone" style={{ fontSize: "12px" }}></i><a href="tel:380 268 9436" target="_blank" rel="noopener noreferrer">(380) 123 4567</a></li>
            </ul>
          </div>
          <div className="header-social">
            <span className="social-title">Follow Us On : </span>
            {/* <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a> */}
            <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" style={{ fontSize: "12px", marginTop: "4px" }}></i></a>
            {/* <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> */}
            {/* <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a> */}
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        <div className="menu-area" >
          <div className="container" >
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link className="icon-masking" style={{display:"flex", justifyContent:"flex-start", alignItems:"baseline"}} to="/">
                    <img src="assets/img/Logo/logo2.png" alt="superiorestimates Logo" style={{ width: '90px', height: '90px' }} />
                    <img src="assets/img/Logo/heading.png" alt="superiorestimates Logo" style={{ width: '140px', height: '17px', paddingBottom:"0px" }} />

                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className={`main-menu d-none d-lg-inline-block ${isMobileMenuOpen ? 'open' : ''}`}>
                  <ul className="menu-list " >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/our-team">Our Team</Link></li>
                    {/* <li><Link to="/careers">Careers</Link></li> */}
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
              {/* <div className="col-auto d-none d-lg-block">
                <div className="header-button">
                  <a href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="th-btn appointment-btn">
                    Book an Appointment <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div> */}
              <div className="col-auto d-lg-none">
                <div className="header-button">
                  <button type="button" className="th-menu-toggle" onClick={toggleMobileMenu}>
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu d-lg-none">
          <ul>
            <li className={activeItem === '/' ? 'active' : ''}>
              <Link to="/" onClick={() => handleMenuItemClick('/')}>Home</Link>
            </li>
            <li className={activeItem === '/services' ? 'active' : ''}>
              <Link to="/services" onClick={() => handleMenuItemClick('/services')}>Services</Link>
            </li>
            <li className={activeItem === '/hireus' ? 'active' : ''}>
              <Link to="/hireus" onClick={() => handleMenuItemClick('/hireus')}>Hire Us</Link>
            </li>
            <li className={activeItem === '/portfolio' ? 'active' : ''}>
              <Link to="/portfolio" onClick={() => handleMenuItemClick('/portfolio')}>Portfolio</Link>
            </li>
            <li className={activeItem === '/blogs' ? 'active' : ''}>
              <Link to="/blogs" onClick={() => handleMenuItemClick('/blogs')}>Blogs</Link>
            </li>
            <li className={activeItem === '/our-team' ? 'active' : ''}>
              <Link to="/our-team" onClick={() => handleMenuItemClick('/our-team')}>Our Team</Link>
            </li>
            <li className={activeItem === '/careers' ? 'active' : ''}>
              <Link to="/careers" onClick={() => handleMenuItemClick('/careers')}>Careers</Link>
            </li>
            <li className={activeItem === '/trainings' ? 'active' : ''}>
              <Link to="/trainings" onClick={() => handleMenuItemClick('/trainings')}>Trainings</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
