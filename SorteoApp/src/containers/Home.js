/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import MediaQuery from 'react-responsive';
import { MDBView, MDBMask } from 'mdbreact';

import Tombola from '../resources/tombola.png';
import PingPong from '../resources/pingpong.png';
import Futbol from '../resources/futbol.png';
import TombolaDesktop from '../resources/tombolaDesktop.png';
import PingPongDesktop from '../resources/pingpongDesktop.png';
import FutbolDesktop from '../resources/futbolDesktop.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
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

      <MediaQuery maxWidth='1366px'>
        {/* {Logo SORTEO */}
        <div style={{ textAlign: 'center' }}>
          <MDBView hover zoom>
            <Button
              href='/sorteo'
              style={{
                position: 'relative',
                left: 0,
                height: '210px',
                width: '100%',
                marginTop: '0px'
              }}
            >
              <img src={Tombola} />
              <MDBMask className='flex-center' overlay='indigo-strong'>
                <p className='white-text'>Crear Sorteo Personalizado</p>
              </MDBMask>
            </Button>
          </MDBView>
        </div>

        {/* {Logo Futbol */}
        <div style={{ textAlign: 'center' }}>
          <MDBView hover zoom>
            <Button
              href='/sorteo'
              style={{
                position: 'relative',
                left: 0,
                height: '210px',
                width: '100%',
                top: 0
              }}
            >
              <img src={Futbol} />
              <MDBMask className='flex-center' overlay='indigo-strong'>
                <p className='white-text'>Crear 2 Equipos</p>
              </MDBMask>
            </Button>
          </MDBView>
        </div>

        {/* {Logo PINGPONG */}

        <div style={{ textAlign: 'center' }}>
          <MDBView hover zoom>
            <Button
              href='/sorteo'
              style={{
                position: 'relative',
                left: 0,
                height: '210px',
                width: '100%',
                top: 0
              }}
            >
              <img src={PingPong} />
              <MDBMask className='flex-center' overlay='indigo-strong'>
                <p className='white-text'>Sortear PArejas de PingPong</p>
              </MDBMask>
            </Button>
          </MDBView>
        </div>
        <div
          style={{
            width: '100%',
            margin: '10px',

            height: '1%',
            textAlign: 'center'
          }}
        >
          <Button
            style={{
              width: '75%',
              heigth: '500px',
              marginTop: '35px',
              marginBottom: '75px'
            }}
            className={classes.button}
            color='primary'
            variant='contained'
            onClick={handleNavigate('/participantes')}
          >
            Ver sorteos disponibles
          </Button>
        </div>
      </MediaQuery>

      {/* {VERSION DESKTOPP */}
      <MediaQuery minWidth='1367px'>
        <div style={{ textAlign: 'center' }}>
          <MDBView hover zoom>
            <Button
              href='/sorteo'
              style={{
                position: 'relative',
                left: 0,
                height: '380px',
                width: '100%',
                marginTop: '0px'
              }}
            >
              <img src={TombolaDesktop} />
              <MDBMask className='flex-center' overlay='indigo-strong'>
                <p className='white-text'>Crear Sorteo Personalizado</p>
              </MDBMask>
            </Button>
          </MDBView>
        </div>

        {/* {Logo Futbol */}
        <div style={{ textAlign: 'center' }}>
          <MDBView hover zoom>
            <Button
              href='/sorteo'
              style={{
                position: 'relative',
                left: 0,
                height: '380px',
                width: '100%',
                top: 0
              }}
            >
              <img src={FutbolDesktop} />
              <MDBMask className='flex-center' overlay='indigo-strong'>
                <p className='white-text'>Crear 2 Equipos</p>
              </MDBMask>
            </Button>
          </MDBView>
        </div>

        {/* {Logo PINGPONG */}

        <div style={{ textAlign: 'center', marginBottom: '55px' }}>
          <MDBView hover zoom>
            <Button
              href='/sorteo'
              style={{
                position: 'relative',
                left: 0,
                height: '380px',
                width: '100%',
                top: 0
              }}
            >
              <img src={PingPongDesktop} />
              <MDBMask className='flex-center' overlay='indigo-strong'>
                <p className='white-text'>Sortear PArejas de PingPong</p>
              </MDBMask>
            </Button>
          </MDBView>
        </div>
      </MediaQuery>
      <Footer />
    </div>
  );
};

export default Home;
