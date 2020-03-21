import React from 'react';
import PropTypes from 'prop-types';

import { FaBone } from 'react-icons/fa';

const TestimonialSingle = props => {
  const testimonials = props.testimonials;
  let testimonial;

  testimonials.forEach(data => {
    if (data.name === props.name) {
      // If testimonial has image - process it
      let backgroundImg = {};

      if (data.image === '') {
        backgroundImg = { display: 'none' };
      } else {
        backgroundImg = {
          backgroundImage:
            'url(' + require(`../../images/testimonials/${data.image}`) + ')'
        };
      }

      testimonial = (
        <div className='testimonials-single'>
          <div className='testimonials-single__img' style={backgroundImg}></div>
          <div className='testimonials-single__text'>
            <p className='testimonials-single__name'>{data.name}.</p>
            <FaBone className='testimonials-single__icon' />
            <p className='testimonials-single__location'>{data.location}</p>
            <p className='testimonials-single__review'>{data.text}</p>
          </div>
        </div>
      );
    }
  });

  return testimonial;
};

TestimonialSingle.propTypes = {
  name: PropTypes.string,
  testimonials: PropTypes.array
};

export default TestimonialSingle;
