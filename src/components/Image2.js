import React from 'react';
import PropTypes from 'prop-types';

const Image2 = props => {
  return <div>THIs is as fuacking text</div>;
};

Image2.defaultProps = {
  image1: '<h3 className=fancyText>The Noble Dog</h3>',
  image2: '<h3 className=fancyText>The Noble Dog</h3>'
};

Image2.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string
};

export default Image2;
