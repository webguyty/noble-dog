import React from 'react';
import PropTypes from 'prop-types';

import { FaBone } from 'react-icons/fa';

const TestimonialFull = props => {
  const testimonials = props.testimonials;

  const testimonialsList = testimonials.map((data, index) => {
    // If testimonial has image - process it in style
    let backgroundImg = {};

    if (data.image === '') {
      backgroundImg = { display: 'none' };
    } else {
      backgroundImg = {
        backgroundImage:
          'url(' + require(`../../images/testimonials/${data.image}`) + ')'
      };
    }

    return (
      <div className='testimonials-full' key={index}>
        <div className='testimonials-full__img' style={backgroundImg}></div>
        <div className='testimonials-full__text'>
          <p className='testimonials-full__name'>{data.name}.</p>
          <FaBone className='testimonials-full__icon' />
          <p className='testimonials-full__location'>{data.location}</p>
          <p className='testimonials-full__review'>{data.text}</p>
        </div>
      </div>
    );
  });

  return <div>{testimonialsList}</div>;
};

TestimonialFull.propTypes = {
  testimonials: PropTypes.array
};

export default TestimonialFull;
