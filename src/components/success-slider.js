import React, { Component } from 'react';
import Glide from '@glidejs/glide';

class Slider extends Component {
  componentDidMount() {
    new Glide('.glide', {
      perView: 2,
      gap: 20
    }).mount();
  }

  render() {
    return (
      <div className='glide'>
        <div className='glide__flexContainer'>
          <h3 className='h3Styled'>Success Stories</h3>
          {/* <p>Kind words from previous clients</p> */}
        </div>
        <div className='glide__track' data-glide-el='track'>
          <div className='glide__slides'>
            <div className='glide__slide'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas, necessitatibus! Itaque, et. Quasi autem aperiam
                consequuntur natus, suscipit molestiae placeat aut ipsam
                distinctio dicta expedita eum porro quaerat consequatur quam
                deleniti at provident obcaecati, asperiores est officia ratione
              </p>
            </div>
            <div className='glide__slide'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas, necessitatibus! Itaque, et. Quasi autem aperiam
                consequuntur natus, suscipit molestiae placeat aut ipsam
                distinctio dicta expedita eum porro quaerat consequatur quam
                deleniti at provident obcaecati, asperiores est officia ratione
                deleniti at provident obcaecati, asperiores est officia ratione
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
            prev
          </button>
          <button
            className='glide__arrow glide__arrow--right'
            data-glide-dir='>'
          >
            next
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
