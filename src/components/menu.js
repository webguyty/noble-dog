import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaDog } from 'react-icons/fa';

const Menu = () => (
  <nav>
    {/* <img src={require('../images/logo.png')} className='logo' /> */}
    <Navbar expand='lg'>
      <img
        src={require('../images/logo.png')}
        width='45'
        height='65'
        // width='150'
        // height='217'
        className='logo'
        alt='The Noble Dog logo'
      />
      <Navbar.Brand className='fancyText' href='#home'>
        The Noble Dog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'>
        <div className='mobileToggle'>
          <FaDog />
          {' Menu'}
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='justify-content-end'>
          <Nav.Link href='#contact-us'>Contact Us</Nav.Link>
          <Nav.Link href='#link'>Training Services</Nav.Link>
          <Nav.Link href='#link'>Testimonials</Nav.Link>
          <Nav.Link href='#link'>Photos</Nav.Link>
          <Nav.Link href='#link'>Blog</Nav.Link>
          <Nav.Link href='#link'></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </nav>
);

export default Menu;
