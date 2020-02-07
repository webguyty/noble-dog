import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

import DividerIcon from '../components/layout/DividerIcon';
import HeaderHero from '../components/layout/HeaderHero';

import { FaCrown } from 'react-icons/fa';

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <header className='homeHeader'>
      <HeaderHero
        // addClass='homeHeader'
        headline='The Noble Dog'
        tagline='Behavior Modification and Training'
        tertiaryLine='Ventura County, California'
      />
    </header>
    <main>
      <DividerIcon icon={<FaCrown />} destination='#' />
      <div className='home__introBlock'>
        <div className='home__headline'>
          <h1>Ready To Be A Better Dog Owner?</h1>
        </div>
        <div className='home__introduction'>
          <div className='home__border'>
            <h2>Welcome to The Noble Dog!</h2>
            <p>
              Hello! I’m Tyler Austin, The Noble Dog’s owner and chief trainer.
              Based out of Ventura, California, we service Ventura and
              surrounding areas. I’ve been deeply involved with raising and
              working with dogs my whole life. I have always enjoyed obedience
              training and have been focusing on dog behavioral modification
              professionally since 2012. I've worked with hundreds of people in
              Ventura county to improve their dogs behavior and social skills.
            </p>
            <p className='text-center'>
              <strong>Ventura - Camarillo - Oxnard</strong>
            </p>
          </div>
        </div>
      </div>
      <div className='siteClosed'>
        <div className='siteClosed__content'>
          <h2>Thank you for checking out The Noble Dog</h2>
          <p>Please Note that the website is under maintenance.</p>
          <p>
            We are currently not accepting new clients 2/6/2020 through
            2/18/2020
          </p>
          <p>
            We apologize for any inconvenience, check back soon for updated
            information.
          </p>
          <p>
            Do you have a question? Please send us an email:
            thenobledog@gmail.com
          </p>
        </div>
      </div>
    </main>
  </>
);

export default IndexPage;
