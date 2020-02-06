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
      <div className='siteClosed'>
        <div className='siteClosed__content'>
          <h2>Thank you for checking out The Noble Dog</h2>
          <p>Please Note that the website is under maintenace.</p>
          <p>
            Additionally we are currently not accepting new clients 2/6/2020
            through 2/18/2020
          </p>
          <p>
            We appologize for any inconvenience, check back soon for updated
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
