import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import HireUs from './pages/HireUs/HireUs';
import Portfolio from './pages/Portfolio/Portfolio';
import Blogs from './pages/Blogs/Blogs';
import OurTeam from './pages/OurTeam/OurTeam';
import Careers from './pages/Careers/Careers';
import Trainings from './pages/Trainings/Trainings';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Import the ScrollToTop for homepage
import Contact from './pages/Contact/ContactPage' 

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Include ScrollToTop */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<HireUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/our-team" element={<OurTeam />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
