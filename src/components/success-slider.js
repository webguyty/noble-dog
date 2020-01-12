import React, { Component } from 'react';
import Glide from '@glidejs/glide';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

class Slider extends Component {
  componentDidMount() {
    new Glide('.glide', {
      perView: 2,
      gap: 30
    }).mount();
  }

  render() {
    return (
      <div className='glideWrapper'>
        <div className='glide'>
          <h3 className='h3Styled'>We make people genuinely happy</h3>

          <div className='glide__track' data-glide-el='track'>
            <div className='glide__slides'>
              <div className='glide__slide'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas, necessitatibus! Itaque, et. Quasi autem aperiam
                  consequuntur natus, suscipit molestiae placeat aut ipsam
                  distinctio dicta expedita eum porro quaerat consequatur quam
                  deleniti at provident obcaecati, asperiores est officia
                  ratione
                </p>
              </div>
              <div className='glide__slide'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas, necessitatibus! Itaque, et. Quasi autem aperiam
                  consequuntur natus, suscipit molestiae placeat aut ipsam
                  distinctio dicta expedita eum porro quaerat consequatur quam
                  deleniti at provident obcaecati, asperiores est officia
                  ratione deleniti at provident obcaecati, asperiores est
                  officia ratione
                </p>
              </div>
              <div className='glide__slide'>3</div>
              <div className='glide__slide'>4</div>
              <div className='glide__slide'>5</div>
              <div className='glide__slide'>6</div>
              <div className='glide__slide'>7</div>
            </div>
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
      </div>
    );
  }
}

export default Slider;
