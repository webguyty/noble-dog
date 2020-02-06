import React from 'react';
import PropTypes from 'prop-types';

const HeaderHero = props => {
  return (
    <div className='headerHero'>
      <div className='headerHero--imageTint'>
        <div className='headerHero--contentAlign'>
          <h2 className='headerHero__headline'>{props.headline}</h2>
          <h3 className='headerHero__tagline'>{props.tagline}</h3>
          <p className='headerHero__tertiaryLine'>{props.tertiaryLine}</p>
        </div>
      </div>
    </div>
  );
};

HeaderHero.defaultProps = {};

HeaderHero.propTypes = {
  headline: PropTypes.string,
  tagline: PropTypes.string,
  tertiaryLine: PropTypes.string
};

export default HeaderHero;

/************************************************************* 
 * How to add background image and styling
 * Wrap HeaderHero component in custom class, extend the 
 * headerHero class and modify as needed
 * Example: 
  
.homeHeader {
  @extend .headerHero;

  & .headerHero {
    background: url('../images/home-header-2.jpg') no-repeat 30% center/cover;

    &--imageTint {
      background-color: rgba(0, 0, 0, 0.249);
    }
  }
} 
*************************************************************/
