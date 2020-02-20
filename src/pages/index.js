import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import SEO from '../components/seo';

import DividerIcon from '../components/layout/DividerIcon';
import HeaderHero from '../components/layout/HeaderHero';

import { FaCrown } from 'react-icons/fa';

const IndexPage = () => (
  <>
    <Layout>
      <div>
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
                  Hello! I’m Tyler Austin, The Noble Dog’s owner and chief
                  trainer. Based out of Ventura, California, we service Ventura
                  and surrounding areas. I’ve been deeply involved with raising
                  and working with dogs my whole life. I have always enjoyed
                  obedience training and have been focusing on dog behavioral
                  modification professionally since 2012. I've worked with
                  hundreds of people in Ventura county to improve their dogs
                  behavior and social skills.
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
          <div className='home__mainCopy' id='home__mainCopy'>
            <h2 className='heading-secondary' id='homeTitle'>
              Ready For A Happier Dog That's Easier To Manage?
            </h2>
            <div className='home__mainCopy__grid'>
              <div className='home__mainCopy__content home__mainCopy__content--1'>
                <h2 className='heading-secondary'>
                  Understand that you’re not alone
                </h2>
                <p>
                  Like most dog owners, you may be experiencing chronic behavior
                  issues or bad habits with your pet. The fact is many dog
                  owners experience behavioral problems with their furry best
                  friends.
                </p>
                <br />
                <p>
                  The problem usually occurs when some dog owners think they can
                  manage the issues on their own, or simply choose to “go it
                  alone”.
                </p>
              </div>
              <div className=' home__mainCopy__composition'>
                <div className='composition'>
                  <img
                    src={require('../images/dog-composition-1.jpg')}
                    className='composition__photo composition__photo--p1'
                    alt='Dog compilation photo 1'
                  />
                  <img
                    src={require('../images/dog-composition-2.jpg')}
                    className='composition__photo composition__photo--p2'
                    alt='Dog compilation photo 2'
                  />
                </div>
              </div>
              <div className='home__mainCopy__content home__mainCopy__content--2'>
                <h2 className='heading-secondary'>
                  In many cases it's best to call a professional
                </h2>
                <p>
                  And that’s where I come in! Together, we’ll get you and your
                  dog on the same wavelength. You’ll be happier, experience more
                  good times, and become closer with your pet than you ever
                  imagined.
                </p>
                <br />
                <p>
                  I invite you to take a moment to fully check out this site and
                  my services. Let’s see what I can do for your dog and you.
                </p>
              </div>

              <div className='home__mainCopy__composition'>
                <div className='composition'>
                  <img
                    src={require('../images/dog-composition-3.jpg')}
                    className='composition__photo composition__photo--p3'
                    alt='Dog compilation photo 3'
                  />
                  <img
                    src={require('../images/dog-composition-4.jpg')}
                    className='composition__photo composition__photo--p4'
                    alt='Dog compilation photo 4'
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  </>
);

export default IndexPage;
