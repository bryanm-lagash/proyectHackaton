/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Animate } from 'animate.css-react';
import MediaQuery from 'react-responsive';
import { Random } from 'react-animated-text';

import BackgroundLogo from '../resources/Background_logo.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SORTEO } from '../routes/paths';
import jsonApi from '../services/jsonApi';
import useMount from '../hooks/useMount';
import { setListaSorteos } from '../actions/sorteo';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  useMount(async () => {
    const data = await jsonApi().getSorteo();

    dispatch(setListaSorteos(data.data));

    console.log('SORTEOS COMPARE HOMER', data.data);
  });

  return (
    <div>
      <Header />

      <MediaQuery maxWidth='550px'>
        <div
          style={{
            width: '100%',
            margin: '10px',

            height: '1%',
            textAlign: 'center'
          }}
        >
          <Button
            style={{ width: '75%', heigth: '500px', marginTop: '35px' }}
            className={classes.button}
            color='primary'
            variant='contained'
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleNavigate('/participantes')}
          >
            Ver sorteos
          </Button>
          <br />
          <Button
            style={{ width: '75%', heigth: '500px', marginTop: '30px' }}
            className={classes.button}
            color='primary'
            variant='contained'
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleNavigate('/sorteo')}
          >
            Crear sorteo
          </Button>
        </div>
      </MediaQuery>
      <div style={{ textAlign: 'center' }}>
        <img
          src={BackgroundLogo}
          style={{ position: 'relative', marginTop: '50px' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
