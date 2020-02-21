import React, { useCallback } from 'react';
import { Button, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import MediaQuery from 'react-responsive';

import Logo from '../resources/Logo.png';
import useStyles from '../containers/styles';

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Container maxWidth='sm'>
          <Button
            href='https://www.lagash.com/'
            style={{
              position: 'fixed',
              left: 20,
              height: 30,
              top: 15,
              marginRight: '10px'
            }}
          >
            <img src={Logo} />
          </Button>
        </Container>
        <MediaQuery minWidth='550px'>
          <Button onClick={handleNavigate('/')}>
            {' '}
            <p
              style={{
                color: 'white',
                fontFamily: 'New Century Schoolbook, serif',
                fontWeight: 'bold',
                fontSize: '14px',
                marginTop: '10px'
              }}
            >
              Home
            </p>
          </Button>
          <Button onClick={handleNavigate('/participantes')}>
            <p
              style={{
                color: 'white',
                fontFamily: 'New Century Schoolbook, serif',
                fontWeight: 'bold',
                fontSize: '14px',
                marginTop: '10px',
                marginLeft: 0
              }}
            >
              Ver Sorteos
            </p>
          </Button>
          <Button onClick={handleNavigate('/sorteo')}>
            {' '}
            <p
              style={{
                color: 'white',
                fontFamily: 'New Century Schoolbook, serif',
                fontWeight: 'bold',
                fontSize: '14px',
                marginTop: '10px'
              }}
            >
              Crear Sorteo
            </p>
          </Button>
        </MediaQuery>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
