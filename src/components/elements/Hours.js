import React from 'react';

const Hours = () => {
  return (
    <div>
      <div className='element-hours'>
        <h4 className='element-hours__title'>Training session hours</h4>
        <p className='element-hours__subtext'>(Held in-home)</p>
        <p className='element-hours__label'>Ventura & Oxnard</p>
        <div className='element-hours__time-grid	'>
          <p className='element-hours__days'>Wednesday, Thursday, Friday</p>
          <p className='element-hours__times'>4:00pm-8:00pm</p>
          <p className='element-hours__days'>Saturday, Sunday</p>
          <p className='element-hours__times'>10:00am-7:00pm</p>
        </div>
        <p className='element-hours__label'>Camarillo</p>
        <div className='element-hours__time-grid	'>
          <p className='element-hours__days'>Saturday, Sunday</p>
          <p className='element-hours__times'>10:00am-7:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default Hours;
