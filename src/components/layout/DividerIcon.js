import React from 'react';
import PropTypes from 'prop-types';

import { FaPaw } from 'react-icons/fa';

/********************************************************
 * Icon Prop - Pass in ReactIcon component
 * Destination prop - Where you want to link to - ID on page suggested
 ********************************************************/

const DividerIcon = props => {
  return (
    <div className='dividerIcon'>
      <div className='dividerIcon__iconBorder'>
        <a href={props.destination} className='dividerIcon__icon'>
          {props.icon}
        </a>
      </div>
    </div>
  );
};

DividerIcon.defaultProps = {
  icon: <FaPaw />,
  destination: '#'
};

DividerIcon.propTypes = {
  icon: PropTypes.object,
  destination: PropTypes.string
};

export default DividerIcon;
