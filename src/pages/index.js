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

const IndexPage = () => (
  <>
    <Layout>
      <SEO title='Home' />
      <header className='homeHeader'>
        <HeaderHero
          // addClass='homeHeader'
          headline='The Noble Dog'
          tagline='Behavior Modification and Training'
          tertiaryLine='Ventura County, California'
        />
      </header>
      <DividerIcon icon={<FaCrown />} destination='#maintenance' />
      <div className='home__introBlock'>
        <div className='home__headline'>
          <h1>Ready To Be A Better Dog Owner?</h1>
        </div>
        <div className='home__introduction'>
          <div className='home__border'>
            <h2>
              Welcome to <span className='fancyText'>The Noble Dog!</span>
            </h2>
            <p>
              Hello! I’m Tyler Austin, The Noble Dog’s owner and chief trainer.
              Based out of Ventura, California, we service Ventura and
              surrounding areas. I’ve been deeply involved with raising and
              working with dogs my whole life. I have always enjoyed obedience
              training and have been focusing on dog behavioral modification
              professionally since 2012. I've worked with hundreds of people in
              Ventura county to improve their dogs behavior and social skills.
            </p>
            <Cities />
          </div>
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
              issues or bad habits with your pet. The fact is many dog owners
              experience behavioral problems with their furry best friends.
            </p>
            <br />
            <p>
              The problem usually occurs when some dog owners think they can
              manage the issues on their own, or simply choose to “go it alone”.
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
              I invite you to take a moment to fully check out this site and my
              services. Let’s see what I can do for your dog and you.
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

        <div className='home__mainCopy__behaviorIssues'>
          <div>
            <h3>Common behavior problems we help with</h3>
            <ul>
              <li>
                <FaDog />
                <p>Walking properly </p>
              </li>
              <li>
                <FaDog />
                <p>Socializing</p>
              </li>
              <li>
                <FaDog />
                <p>Basic commands</p>
              </li>
              <li>
                <FaDog />
                <p>Aggression</p>
              </li>
              <li>
                <FaDog />
                <p>Integrating</p>
              </li>

              <li>
                <FaDog />
                <p>Dominance</p>
              </li>
              <li>
                <FaDog />
                <p>Destructive behavior</p>
              </li>
              <li>
                <FaDog />
                <p>Running away</p>
              </li>
              <li>
                <FaDog />
                <p>Anxiety</p>
              </li>
              <li>
                <FaDog />
                <p>And More!</p>
              </li>
            </ul>
            <div className='text-center pt-3'>
              <BtnFancyText
                title='Training Programs'
                to='trainingInfo'
                color='grey'
              />
            </div>
          </div>
        </div>
      </div>

      <section className='section-features'>
        <h2>We can help you build your:</h2>
        <div className='feature-box__grid'>
          <div className='feature-box'>
            <h4>Relationship</h4>
            <FaUserFriends className='feature-box__icon' />
            <p>Fully enjoy your dog</p>
            <p>
              Trust your dog's good behavior around family members and out in
              public
            </p>
            <p>Have fun training together</p>
          </div>
          <div className='feature-box'>
            <h4>Leadership</h4>
            <FaCrown className='feature-box__icon' />
            <p>Be a great influence</p>
            <p>
              We will work together to communicate calmly and effectively with
              your dog
            </p>
            <p>Positively influence behavior</p>
          </div>
          <div className='feature-box'>
            <h4>Socialization</h4>
            <FaDog className='feature-box__icon' />
            <p>Build social skills</p>
            <p>
              Teach your dog to interact in a friendly way with people and other
              dogs
            </p>
            <p>Feel comfortable meeting others</p>
          </div>
          <div className='feature-box'>
            <h4>Basic Commands</h4>
            <FaHandPaper className='feature-box__icon' />
            <p>Master the basics</p>
            <p>
              We will work with you to get down the basic commands in many
              situations
            </p>
            <p>Heal, sit, stay, come, and more!</p>
          </div>
        </div>
        <div className='section-features__button-grid'>
          <BtnFancyText title='Learn More' to='trainingInfo' />
          <BtnFancyText title='Get Started' to='contactUs' />
        </div>
      </section>
      <section className='section-stories'>
        <TestimonialSlider
          testimonials={testimonials}
          imgPath='../../images/testimonials/'
          readMoreLink='/testimonials'
        />

        <div className='section-stories__button'>
          <BtnFancyText
            title='Read More Stories'
            to='testimonials'
            color='grey'
          />
        </div>
      </section>
      <section className='section-inquire'>
        <div className='home__contactForm'>
          <ContactForm title='Tell us about your dog' />
        </div>
      </section>
    </Layout>
  </>
);

export default IndexPage;
