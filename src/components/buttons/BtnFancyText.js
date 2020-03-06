import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BtnFancyText = props => {
  return (
    <div>
      <Link
        className={`btnFancyText btnFancyText--${props.color}`}
        to={props.to}
      >
        {props.title}
      </Link>
    </div>
  );
};

BtnFancyText.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string
};

export default BtnFancyText;
