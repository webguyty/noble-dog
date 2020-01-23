import React from 'react';
import PropTypes from 'prop-types';

const HeaderHero = props => {
  return (
    <header className={'headerHero ' + props.addClass}>
      <div className='headerHero--imageTint'>
        <div className='headerHero--contentAlign'>
          <h2 className='headerHero__headline'>{props.headline}</h2>
          <h3 className='headerHero__tagline'>{props.tagline}</h3>
          <p className='headerHero__tertiaryLine'>{props.tertiaryLine}</p>
        </div>
      </div>
    </header>
  );
};

HeaderHero.defaultProps = {};

HeaderHero.propTypes = {
  headline: PropTypes.string,
  tagline: PropTypes.string,
  tertiaryLine: PropTypes.string,
  addClass: PropTypes.string
};

export default HeaderHero;

/************************************************************* 
 * How to add background image a styling
 * Add class to main block and add a class in style sheet of headerHero + 'addClass' name.
 * 
 * Example in SCSS
 .homeHeader.headerHero {
  background: url('../images/home-header-2.jpg') no-repeat 30% center/cover;

  & .headerHero {
    &--imageTint {
      background-color: rgba(0, 0, 0, 0.249);
    }
  }
}
*************************************************************/
