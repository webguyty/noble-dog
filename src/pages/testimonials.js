import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeaderHero from '../components/layout/HeaderHero';
import DividerIcon from '../components/layout/DividerIcon';
import {
  FaPaw,
  FaCrown,
  FaDog,
  FaHandPaper,
  FaUserFriends
} from 'react-icons/fa';
import Cities from '../components/elements/Cities';
import BtnFancyText from '../components/buttons/BtnFancyText';
import ContactForm from '../components/blocks/ContactForm';
import TestimonialSlider from '../components/blocks/TestimonialSlider';
import testimonials from '../tnd/testimonials';

// import str from '../tnd/testimonials';

const Testimonials = () => (
  <>
    <Layout>
      <SEO title='Home' />
      <header className='homeHeader'>
        <HeaderHero
          // addClass='homeHeader'
          headline='Kind words from clients'
          // tagline='Behavior Modification and Training'
          // tertiaryLine='Ventura County, California'
        />
      </header>
      <DividerIcon icon={<FaCrown />} destination='#maintenance' />
      <div className='testimonial-page'>
        <h1>
          This page is currently under maintenance. Please check back soon!
        </h1>
      </div>
    </Layout>
  </>
);

export default Testimonials;
