/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import BackgroundLogo from '../resources/Background_logo.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SORTEO } from '../routes/paths';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <img src={BackgroundLogo} style={{ position: 'relative', top: 60 }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        {' '}
        <Button
          className={classes.button}
          color='primary'
          variant='contained'
          onClick={handleNavigate(SORTEO)}
          style={{ position: 'relative', top: 120 }}
        >
          Let's Go
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
