import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = props => {
  return (
    <div className='contactForm'>
      <h3 className='contactForm__title'>{props.title}</h3>
      <form action='#' className='form'>
        <div className='form__grid'>
          <div className='form__group'>
            <label htmlFor='name' className='form__label'>
              Name
            </label>
            <input
              type='text'
              className='form__input'
              placeholder='Shannon and Tiger'
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
          <div className='form__group'>
            <label htmlFor='city' className='form__label'>
              City
            </label>
            <input
              type='text'
              className='form__input'
              placeholder='City'
              id='city'
              required
            />
          </div>
        </div>
        {/* End of form grid */}
        <div className='form__group'>
          <label htmlFor='message' className='form__label'>
            Message
          </label>
          <textarea
            type='textarea'
            className='form__input'
            placeholder='Tell us a little bit about your dog and their behavior. Please let us know if you have any questions we are happy to answer them!'
            id='message'
            required
          />
        </div>
        <button className='form__button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  title: PropTypes.string
};

export default ContactForm;
