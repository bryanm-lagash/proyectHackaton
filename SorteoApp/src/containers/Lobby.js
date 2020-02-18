import React, { useCallback } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { goBack, push } from 'connected-react-router';

import jsonApi from '../services/jsonApi';
import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';
import { GANADOR } from '../routes/paths';
import Header from '../components/Header';

import useStyles from './styles';

let timer;
const Lobby = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  const handleApi = async () => {
    const { data } = await jsonApi().getGanador();

    if (data) {
      dispatch(push(GANADOR));

      return true;
    }

    return false;
  };

  timer = setInterval(() => {
    if (!handleApi()) {
      clearTimer();
    }
  }, 2000);
  const clearTimer = () => {
    clearInterval(timer);
  };

  return (
    <Container className={classes.container} maxWidth={false}>
      <Header />
      <InfoSorteo />
      <ListaUsers />
    </Container>
  );
};

export default Lobby;
