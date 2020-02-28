import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeaderHero from '../components/layout/HeaderHero';
import DividerIcon from '../components/layout/DividerIcon';
import { FaCrown } from 'react-icons/fa';

import ContactForm from '../components/blocks/ContactForm';
import Cities from '../components/elements/Cities';
import ContactInfo from '../components/elements/ContactInfo';

const contactUs = () => {
  return (
    <div>
      <Layout>
        <SEO title='Contact Us' />
        <header className='contact-header'>
          <HeaderHero
            headline='Contact Us'
            tagline='Ventura County, California'
          />
        </header>
        <DividerIcon icon={<FaCrown />} destination='#' />
        <div className='contact-wrapper'>
          <section className='contact-section'>
            <h2 className='heading-secondary'>
              Ready to improve your dog's behavior?
            </h2>
            <h3 className='heading-tertiary'>
              Please send us a message or give us a call today!
            </h3>
            <p className='contactPage__introP'>
              We are happy to help answer questions you may have about our
              training programs. Find out what we can do to help your
              relationship with your best friend.
            </p>
            <div className='contactPage__grid'>
              <div className='contactPage__details'>
                <h3>Ventura County</h3>
                <div className='mb-4'>
                  <Cities />
                </div>
                <ContactInfo />
              </div>
              <div className='contactPage__form'>
                <ContactForm title='Send us a message' />
              </div>
            </div>
            {/* End of grid */}
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default contactUs;
