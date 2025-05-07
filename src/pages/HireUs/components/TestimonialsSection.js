import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Testimonial from './Testimonial';
import { useSwipeable } from 'react-swipeable';

const TestimonialsSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first "real" testimonial
  const [isTransitioning, setIsTransitioning] = useState(false);
  const length = testimonials.length;

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Handle looping logic after transitioning
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);

        // Loop from first to last, and last to first
        if (currentIndex === 0) {
          setCurrentIndex(length);
        } else if (currentIndex === length + 1) {
          setCurrentIndex(1);
        }
      }, 500); // Must match the CSS transition time

      return () => clearTimeout(timer);
    }
  }, [currentIndex, length, isTransitioning]);

  // Create an array with duplicated elements for the looping effect
  const loopedTestimonials = [
    testimonials[length - 1], // Fake last item (before the first)
    ...testimonials,
    testimonials[0], // Fake first item (after the last)
  ];

  // Handle instant position change for seamless looping
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(length);
      }, 0);
    } else if (currentIndex === length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 0);
    }
  }, [currentIndex, length]);

  return (
    <div className="testimonials-section" {...swipeHandlers}>
      <FaArrowLeft className="arrow" onClick={handlePrevious} />
      <div className="testimonials-wrapper">
        <div
          className={`testimonials-slider ${isTransitioning ? 'transition' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Move by 100% of the container width
        >
          {loopedTestimonials.map((testimonial, index) => (
            <div className="testimonial-container" key={index}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <FaArrowRight className="arrow" onClick={handleNext} />
    </div>
  );
};

export default TestimonialsSection;
