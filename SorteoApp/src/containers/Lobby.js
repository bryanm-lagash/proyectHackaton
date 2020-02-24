import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';
import { GANADOR, INSCRIPCION } from '../routes/paths';
import Header from '../components/Header';
import { setGanador } from '../actions/sorteo';
import CodeQR from '../components/QRcode';

import useStyles from './styles';

const Lobby = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { idSorteo } = useSelector(({ sorteo }) => sorteo);

  useMount(() => {
    firebase
      .database()
      .ref('ganador/')
      .orderByChild('idSorteo')
      .equalTo(idSorteo)
      .on('value', snap => {
        const users = snap.val();

        if (users !== null) {
          dispatch(setGanador(Object.values(users)));
          dispatch(push(GANADOR));
        }
      });
  });

  return (
    <Container className={classes.container} maxWidth={false}>
      <Header />
      <InfoSorteo />
      <CodeQR path={INSCRIPCION} id={idSorteo} />
      <ListaUsers />
    </Container>
  );
};

export default Lobby;
