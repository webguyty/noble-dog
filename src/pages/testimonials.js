import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeaderHero from '../components/layout/HeaderHero';
import DividerIcon from '../components/layout/DividerIcon';
import { FaCrown, FaBone } from 'react-icons/fa';
import TestimonialFull from '../components/testimonials/TestimonialFull';
import testimonials from '../tnd/testimonials';

// import str from '../tnd/testimonials';

const Testimonials = () => (
  <>
    <Layout>
      <SEO title='Home' />
      <header className='homeHeader'>
        <HeaderHero
          // addClass='homeHeader'
          headline='Kind Words'
          // tagline='Behavior Modification and Training'
          // tertiaryLine='Ventura County, California'
        />
      </header>
      <DividerIcon icon={<FaCrown />} destination='#maintenance' />
      <div className='testimonial-page'>
        <div className='testimonial-page__wrapper'>
          <h1>Kind words from Ventura County</h1>
          <div className='testimonial-page__intro'>
            <p>
              We have had the pleasure of working with hundreds of families and
              their dogs in Ventura County. People have been kind enough to
              share the behaviorial and training goals they had when they
              reached out to us for help. Find out what we have been able to
              help out with and the experience of working with us. Find us on{' '}
              <a
                href='https://www.yelp.com/biz/the-noble-dog-ventura'
                className='testimonial-page--yelp'
                target='_blank'
              >
                Yelp!
              </a>
            </p>
          </div>

          <TestimonialFull testimonials={testimonials} />
        </div>
      </div>
    </Layout>
  </>
);

export default Testimonials;
