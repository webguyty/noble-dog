import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaDog } from 'react-icons/fa';

const Menu = () => (
  <nav>
    <Navbar expand='lg'>
      <img
        src={require('../../images/logo.png')}
        width='45'
        height='65'
        // width='150'
        // height='217'
        className='logo'
        alt='The Noble Dog logo'
      />
      <Navbar.Brand className='fancyText' href='/'>
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
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/trainingInfo'>Training Information</Nav.Link>
          <Nav.Link href='/contactUs'>Contact Us</Nav.Link>
          {/* <Nav.Link href='#link'>Kind Words</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </nav>
);

export default Menu;
