// ServiceSection.js
import React from 'react';
import Testimonial from './Testimonial';

const ServiceSection = ({ title, description, testimonials }) => (
  <section className="service-section">
    <div className="container">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default ServiceSection;
