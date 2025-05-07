import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CounterSection from './components/CounterSection';
import ProcessSection from './components/ProcessSection';
import Reviews from './components/Reviews';
import WhyUs from './components/WhyUs';
import ContactUs from './components/ContactUs';
import Faq from './components/Faq';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CounterSection />
      <ProcessSection />
      <WhyUs />
      <Reviews />
      <Faq/>
      <ContactUs/>
    </>
  );
};

export default Home;
