import React, { useCallback } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import loginBg2 from '../resources/loginBg2.gif';
import Ganadores from '../components/Ganador';
import Header from '../components/Header';

import useStyles from './styles';

const Ganador = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }}
    >
      <div>
        <Container className={classes.container} maxWidth={false}>
          <Header />
          <Ganadores />
        </Container>
      </div>
    </div>
  );
};

export default Ganador;
