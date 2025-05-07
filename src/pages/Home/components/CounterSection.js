import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import './CounterSection.css';

const CounterSection = () => {
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0, efficiency: 0 });
  const [animate, setAnimate] = useState(false);
  const counterSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const projects = prev.projects < 1100 ? prev.projects + 100 : 1150;
          const years = prev.years < 9 ? prev.years + 1 : 9;
          const clients = prev.clients < 500 ? prev.clients + 50 : 500;
          const efficiency = prev.efficiency < 98 ? prev.efficiency + 10 : 98;
          return { projects, years, clients, efficiency };
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [animate]);

  return (
    <div ref={counterSectionRef} className="animate__animated animate__fadeIn" style={{ backgroundColor: "#E1EAFF", padding: "50px 0px", marginTop: "50px" }} id="counter-sec">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6 col-lg-3">
            <div className={` ${animate ? 'animate__animated animate__fadeInUp' : ''}`}>
              <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img style={{ height: "40px", marginBottom: "30px" }} className='' src="assets/img/icon/counters/verification.png" alt="Icon" />
                <h2 className="counter-card_number mb-0" style={{ fontSize: "18px", lineHeight: "20px" }} ><span className="counter-number" style={{ fontSize: "28px" }}>{counters.projects}</span>+</h2>
                <p className="counter-card_text mt-0">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={` ${animate ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img style={{ height: "40px" }} className='mb-4' src="assets/img/icon/counters/certificate-1.png" alt="Icon" />
                <h2 className="counter-card_number" style={{ fontSize: "18px", lineHeight: "20px" }}><span className="counter-number" style={{ fontSize: "28px" }}>{counters.years}</span>+</h2>
                <p className="counter-card_text">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={` ${animate ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img style={{ height: "70px" }} className='pb-3 mb-1' src="assets/img/icon/counters/customer-feedback.png" alt="Icon" />
                <h2 className="counter-card_number" style={{ fontSize: "18px", lineHeight: "10px" }}><span className="counter-number" style={{ fontSize: "28px" }}>{counters.clients}</span>+</h2>
                <p className="counter-card_text">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={` ${animate ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img style={{ height: "50px" }} className='mb-3' src="assets/img/icon/counters/productivity.png" alt="Icon" />
                <h2 className="counter-card_number" style={{ fontSize: "18px", lineHeight: "20px" }}><span className="counter-number" style={{ fontSize: "28px" }}>{counters.efficiency}</span>%</h2>
                <p className="counter-card_text">Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
