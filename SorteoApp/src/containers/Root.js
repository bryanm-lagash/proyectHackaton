import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import BackgroundLogo from '../resources/Background_logo.png';
import Footer from '../components/Footer';
import Header from '../components/Navigation/Navbar/Navbar';

import useStyles from './styles';

const Root = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <img
          src={BackgroundLogo}
          style={{ position: 'relative', top: 60 }}
          alt='BackgroundLogo'
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        {' '}
        <Button
          className={classes.button}
          color='primary'
          variant='contained'
          onClick={handleNavigate('/sorteo')}
          style={{ position: 'relative', top: 120 }}
        >
          Let's Go
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
