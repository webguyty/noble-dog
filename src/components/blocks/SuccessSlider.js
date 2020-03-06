import React, { Component } from 'react';
import Glide from '@glidejs/glide';

import { FaArrowLeft, FaArrowRight, FaPaw } from 'react-icons/fa';

class SuccessSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    new Glide('.glide', {
      perView: 2,
      gap: 30
    }).mount();
    // console.log(this.props.title);
  }

  render() {
    return (
      <div className='glideWrapper'>
        <div className='glide'>
          <h2 className='glide__heading'>We make people genuinely happy</h2>
          <div className='glide__track' data-glide-el='track'>
            <div className='glide__slides'>
              <div className='glide__slide'>
                <div className='glide__slide__img'></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas, necessitatibus! Itaque, et. Quasi autem aperiam
                  consequuntur natus, suscipit molestiae placeat aut ipsam
                  distinctio dicta expedita eum porro quaerat consequatur quam
                  deleniti at provident obcaecati, asperiores est officia
                  ratione
                </p>
                <p className='glide__slide__name'>Tyler Austin </p>
                <FaPaw className='glide__slide__icon' />
                <p className='glide__slide__location'>Ventura</p>
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

export default SuccessSlider;
