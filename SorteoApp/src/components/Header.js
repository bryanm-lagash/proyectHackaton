import React, { useCallback } from 'react';
import { Button, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import MediaQuery from 'react-responsive';

import Logo from '../resources/Logo.png';
// import useStyles from '../containers/styles';

const Header = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  const estiloLetraMid = {
    color: 'white',
    fontFamily: 'New Century Schoolbook, serif',
    fontWeight: 'bold',
    fontSize: '15px',
    marginTop: '10px'
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Container maxWidth='sm'>
          <Button
            href='/'
            style={{
              position: 'fixed',
              left: 20,
              height: 30,
              top: 15,
              marginRight: '10px'
            }}
          >
            <img src={Logo} alt='logo' />
          </Button>
        </Container>

        <MediaQuery minWidth='780px'>
          <Button onClick={handleNavigate('/')}>
            <p style={estiloLetraMid}>Home</p>
          </Button>
          <Button onClick={handleNavigate('/participantes')}>
            <p style={estiloLetraMid}>Ver Sorteos</p>
          </Button>
          <Button onClick={handleNavigate('/sorteo')}>
            <p style={estiloLetraMid}>Nuevo Sorteo</p>
          </Button>
          <Button onClick={handleNavigate('/sorteo')}>
            <p style={estiloLetraMid}>2 Equipos</p>
          </Button>
          <Button onClick={handleNavigate('/sorteo')}>
            <p style={estiloLetraMid}>Parejas</p>
          </Button>
        </MediaQuery>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
