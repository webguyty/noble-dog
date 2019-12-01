import React, { Component } from 'react';
import Glide from '@glidejs/glide';
// import { Helmet } from 'react-helmet';
{
  /* <script src='https://cdn.jsdelivr.net/npm/@glidejs/glide' />;
new Glide('.glide').mount(); */
}

// let action = document.querySelector('glide');

class Slider extends Component {
  componentDidMount() {
    new Glide('.glide').mount();
  }

  render() {
    return (
      <div className='glide__container'>
        <div className='glide'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              <li className='glide__slide'>0</li>
              <li className='glide__slide'>1</li>
              <li className='glide__slide'>2</li>
            </ul>
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
      </div>
    );
    {
      /* <script src='https://cdn.jsdelivr.net/npm/@glidejs/glide' />
      <script>new Glide('.glide').mount()</script> */
    }
  }
}

// const Slider = () => (
//   <div>
//     <div className='glide__container'>
//       <div class='glide'>
//         {' '}
//         b
//         <div class='glide__track' data-glide-el='track'>
//           <ul class='glide__slides'>
//             <li class='glide__slide'>0</li>
//             <li class='glide__slide'>1</li>
//             <li class='glide__slide'>2</li>
//           </ul>
//         </div>
//         <div class='glide__arrows' data-glide-el='controls'>
//           <button class='glide__arrow glide__arrow--left' data-glide-dir='<'>
//             prev
//           </button>
//           <button class='glide__arrow glide__arrow--right' data-glide-dir='>'>
//             next
//           </button>
//         </div>
//       </div>
//     </div>
//     <script src='https://cdn.jsdelivr.net/npm/@glidejs/glide' />
//     <script>new Glide('.glide').mount()</script>
//   </div>
// );

export default Slider;
