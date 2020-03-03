import React from 'react';
import { FaCrown } from 'react-icons/fa';

const Cities = () => {
  return (
    <div className='element-cities'>
      <p>Ventura</p>

      <FaCrown className='element-cities__icon' />

      <p>Camarillo</p>

      <FaCrown className='element-cities__icon' />

      <p>Oxnard</p>
    </div>
  );
};

export default Cities;
