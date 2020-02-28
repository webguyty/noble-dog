import React from 'react';

const ContactInformation = () => {
  return (
    <div className='elements-contact-info'>
      <div>
        <p className='elements-contact-info__label'>Phone</p>
        <p className='elements-contact-info__address'>(805) 222-6726</p>
      </div>
      <div>
        <p className='elements-contact-info__label'>Email</p>
        <p className='elements-contact-info__address'>
          <a href='#'>thenobledog@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
