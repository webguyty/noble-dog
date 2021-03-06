import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';

import { FaArrowLeft, FaArrowRight, FaBone } from 'react-icons/fa';
// import testimonials from '../../tnd/testimonials';

class TestimonialSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    new Glide('.glide', {
      perView: 2,
      gap: 30,
      peak: { before: 0, after: 0 },
      breakpoints: {
        1025: {
          perView: 1
        }
      }
    }).mount();
  }

  render() {
    const { testimonials, readMoreLink, imgPath } = this.props;

    /********************
     * Process testimonials and add into a glide slide
     *******************/
    const testimonialsList = testimonials.map((data, index) => {
      // Limit length of testimonial
      const textShorter = data.text.slice(0, 370);

      // Use Image if testimonial has one and set as background image
      let backgroundImg = {};

      if (data.image === '') {
        backgroundImg = { display: 'none' };
      } else {
        backgroundImg = {
          backgroundImage:
            'url(' + require(`../../images/testimonials/${data.image}`) + ')'
        };
      }

      // Return array of glide slides
      return (
        <div className='glide__slide' key={index}>
          <div className='glide__slide__img' style={backgroundImg}></div>
          <p>
            {textShorter}...{' '}
            <a href={readMoreLink} className='glide__slide__readMoreLink'>
              Read More
            </a>
          </p>
          <p className='glide__slide__name'>{data.name}</p>
          <FaBone className='glide__slide__icon' />
          <p className='glide__slide__location'>{data.location}</p>
        </div>
      );
    });

    /********************
     * Create glide slider with testimonial slides
     *******************/

    return (
      <div className='glide'>
        {/* <h2 className='glide__heading'>We make people genuinely happy</h2> */}
        <div className='glide__track' data-glide-el='track'>
          <div className='glide__slides'>{testimonialsList}</div>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--left'
            data-glide-dir='<'
          >
            <FaArrowLeft />
          </button>
          <button
            className='glide__arrow glide__arrow--right'
            data-glide-dir='>'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
  }
}

TestimonialSlider.propTypes = {
  readMoreLink: PropTypes.string,
  testimonials: PropTypes.array,
  imgPath: PropTypes.string
};

export default TestimonialSlider;
