import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Import the logo image
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import Bootstrap components

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' className='p-3'>
      <Container className='justify-content-between'>
        <Navbar.Brand as={NavLink} to='/'>
          <img
            src={logo}
            alt="Vaughan's Logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
          Vaughan Knouse
        </Navbar.Brand>
        <Nav className='ml-auto'>
          {' '}
          {/* Align navigation to the right */}
          <Nav.Link as={NavLink} to='/' aria-label='About Me'>
            About Me
          </Nav.Link>
          <Nav.Link as={NavLink} to='/portfolio' aria-label='Portfolio'>
            Portfolio
          </Nav.Link>
          <Nav.Link as={NavLink} to='/contact' aria-label='Contact'>
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to='/resume' aria-label='Resume'>
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
