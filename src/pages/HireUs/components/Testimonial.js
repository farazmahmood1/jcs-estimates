import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonial = ({ text, rating, name, username, company, service }) => (
  <div className="testimonial">
    <div className="testimonial-rating">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <FaStar key={i} />
      ))}
      {rating % 1 !== 0 && <FaStarHalfAlt />}
    </div>
    <p>"{text}"</p>
    <h4>{name} {username && `(${username})`}</h4>
    <h5>{company && company}</h5>
    <h6>{service && `Service: ${service}`}</h6>
  </div>
);

export default Testimonial;
