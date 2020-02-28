import React, { useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import Logo from '../../../resources/Logo.png';

import './Navbar.css';

const NavbarMenu = () => {
  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Navbar
      className='Navbar'
      collapseOnSelect
      expand='md'
      bg='dark'
      variant='dark'
      fixed='top'
    >
      <Navbar.Brand href='https:www.lagash.com'>
        <img className='Logo' src={Logo} alt='Logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link onClick={handleNavigate('/sorteo')}>Nuevo Sorteo</Nav.Link>
          <Nav.Link eventKey={2} onClick={handleNavigate('/sorteoFutbol')}>
            2 Equipos
          </Nav.Link>
          <NavDropdown title='Sorteos' id='collasible-nav-dropdown'>
            <NavDropdown.Item onClick={handleNavigate('/participantes')}>
              Sorteos
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleNavigate('/participantes')}>
              Sorteos Equipos
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleNavigate('/')}>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
