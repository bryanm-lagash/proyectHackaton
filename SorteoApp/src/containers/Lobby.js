import React, { useCallback } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { goBack, push } from 'connected-react-router';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
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
  const { ganador } = useSelector(({ sorteo }) => sorteo);

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  useMount(async () => {
    // firebase
    //   .database()
    //   .ref('users/')
    //   .on('value', snap => {
    //     const users = snap.val();
    //     if (users !== null) {
    //       dispatch(push(GANADOR));
    //     }
    //   });
    // const { data } = await jsonApi().getUsers();
    if (ganador) {
      dispatch(push(GANADOR));
    }
  });
  // const handleApi = async () => {
  //   const { data } = await jsonApi().getGanador();

  //   if (data) {
  //     dispatch(push(GANADOR));

  //     return true;
  //   }

  //   return false;
  // };

  // timer = setInterval(() => {
  //   if (!handleApi()) {
  //     clearTimer();
  //   }
  // }, 2000);
  // const clearTimer = () => {
  //   clearInterval(timer);
  // };

  return (
    <Container className={classes.container} maxWidth={false}>
      <Header />
      <InfoSorteo />
      <ListaUsers />
    </Container>
  );
};

export default Lobby;
