import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

import Menu from '../components/menu';
import Slider from '../components/success-slider';
import Image2 from '../components/Image2';

import { FaPaw } from 'react-icons/fa';

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Menu />
    <header className='homeHeader'>
      <div className='homeHeader--darkLayer'>
        <div className='homeHeader--content'>
          <h3 className='homeHeader--headLine fancyText'>The Noble Dog</h3>
          <h4 className='homeHeader--tagLine'>
            Behavior Modification and Training
          </h4>
          <p className='homeHeader--locLine'>Ventura County, California</p>
        </div>
      </div>
    </header>
    <main>
      <div className='pawDivider'>
        <div className='pawDivider__border'>
          <FaPaw className='pawDivider__pawIcon' />
        </div>
      </div>
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
          <h2>Ready For A Happier Dog That's Easier To Manage?</h2>
          <div className='home__mainCopy__grid'>
            <div className='home__mainCopy__content home__mainCopy__content--1'>
              <h3 className='h3Styled'>Understand that you’re not alone</h3>
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
            <div className=' home__mainCopy__composition--1'>
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
              <h3 className='h3Styled'>
                In many cases it's best to call a professional
              </h3>
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

            <div className='home__mainCopy__composition--1'>
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
      <section className='section-stories'>
        <div className='stories__bg-image'>
          <div className='stories__slider'>
            <div>
              <Slider />
            </div>
          </div>
        </div>
      </section>

      <div className='fillerDiv'>
        <Image2 />
      </div>
    </main>
  </>
);

export default IndexPage;
