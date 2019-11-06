import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

import Menu from '../components/menu';

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
    <div className='pawDivider'>
      <div className='pawDivider__border'>
        <FaPaw className='pawDivider__pawIcon' />
      </div>
    </div>
    <div className='fillerDiv'></div>
  </>
);

export default IndexPage;
