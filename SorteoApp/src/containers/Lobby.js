import React, { useCallback, useEffect } from 'react';
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

const Lobby = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { ganador } = useSelector(({ sorteo }) => sorteo);

  // const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  useMount(() => {
    firebase
      .database()
      .ref('ganador/')
      .on('value', snap => {
        const users = snap.val();

        // console.log('ganador lobby', users);

        if (users !== null) {
          dispatch(push(GANADOR));
        }
      });
  });

  return (
    <Container className={classes.container} maxWidth={false}>
      <Header />
      <InfoSorteo />
      <ListaUsers />
    </Container>
  );
};

export default Lobby;
