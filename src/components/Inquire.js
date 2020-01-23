import React from 'react';
import PropTypes from 'prop-types';

const Inquire = props => {
  return (
    <div className='inquire'>
      <h2 className='inquire__title'>Tell us about your dog</h2>
      <form action='#' className='form'>
        <div className='form__group'>
          <label htmlFor='name' className='form__label'>
            Name
          </label>
          <input
            type='text'
            className='form__input'
            placeholder='Full Name'
            id='name'
            required
          />
        </div>
        <div className='form__group'>
          <label htmlFor='email' className='form__label'>
            Email
          </label>
          <input
            type='email'
            className='form__input'
            placeholder='dog@gmail.com'
            id='email'
            required
          />
        </div>
        <div className='form__group'>
          <label htmlFor='phone' className='form__label'>
            Phone Number (optional)
          </label>
          <input
            type='tel'
            className='form__input'
            placeholder='(805) 555-5555'
            id='phone'
          />
        </div>
      </form>
    </div>
  );
};

Inquire.propTypes = {};

export default Inquire;
