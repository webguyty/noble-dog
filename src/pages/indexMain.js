import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

import DividerIcon from '../components/layout/DividerIcon';
import HeaderHero from '../components/layout/HeaderHero';
import Inquire from '../components/blocks/Contact';

import Slider from '../components/blocks/SuccessSlider';

import Image2 from '../components/Image2';

import {
  FaPaw,
  FaCrown,
  FaDog,
  FaHandPaper,
  FaUserFriends
} from 'react-icons/fa';

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
      <DividerIcon icon={<FaCrown />} destination='#home__mainCopy' />
      <section className='section-home-content'>
        <div className='home__introBlock'>
          <div className='home__headline'>
            <h1>Ready To Be A Better Dog Owner?</h1>
          </div>
          <div className='home__introduction'>
            <div className='home__border'>
              <h2>Welcome to The Noble Dog!</h2>
              <p>
                Hello! I’m Tyler Austin, The Noble Dog’s owner and chief
                trainer. Located in Camarillo, we service Ventura County and
                surrounding areas. I’ve been deeply involved with raising and
                working with dogs my whole life. I have always enjoyed obedience
                training and have been focusing on dog behavioral modification
                professionally since 2012.
              </p>
            </div>
          </div>
        </div>

        <div className='home__mainCopy'>
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
                issues or bad habits with your pet. The fact is many dog owners
                experience behavioral problems with their furry best friends.
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
                And that’s where I come in! Together, we’ll get you and your dog
                on the same wavelength. You’ll be happier, experience more good
                times, and become closer with your pet than you ever imagined.
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
      </section>

      <section className='section-features'>
        <h2 className='feature-box__mainTitle fancyText'>
          We can help you build your:
        </h2>
        <div className='feature-box__grid'>
          <div className='feature-box'>
            <h3 className='heading-tertiary'>Relationship</h3>
            <FaUserFriends className='feature-box__icon' />
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              eveniet maxime suscipit magnam.
            </p>
          </div>
          <div className='feature-box'>
            <h3 className='heading-tertiary'>Leadership</h3>
            <FaCrown className='feature-box__icon' />
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              eveniet maxime suscipit magnam.
            </p>
          </div>
          <div className='feature-box'>
            <h3 className='heading-tertiary'>Socialization</h3>
            <FaDog className='feature-box__icon' />
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              eveniet maxime suscipit magnam.
            </p>
          </div>
          <div className='feature-box'>
            <h3 className='heading-tertiary'>Basic Commands</h3>
            <FaHandPaper className='feature-box__icon' />
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              eveniet maxime suscipit magnam.
            </p>
          </div>
        </div>
        <h3 className='feature-box__link fancyText'>Learn More</h3>
      </section>

      <section className='section-stories'>
        <Slider title='That piece of shit' />
      </section>

      <section className='section-inquire'>
        <Inquire />
      </section>

      <div className='fillerDiv'>
        <Image2 />
      </div>
    </main>
  </>
);

export default IndexPage;
