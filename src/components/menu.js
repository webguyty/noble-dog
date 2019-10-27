import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => (
  <nav>
    <Navbar expand='lg'>
      <img src={require('../images/logo.png')} className='logo' />
      <Navbar.Brand href='#home'>The Noble Dog</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='justify-content-end'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Training Services</Nav.Link>
          <Nav.Link href='#link'>Testimonials</Nav.Link>
          <Nav.Link href='#link'>Photos</Nav.Link>
          <Nav.Link href='#link'>Blog</Nav.Link>
          <Nav.Link href='#link'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </nav>
);

export default Menu;
