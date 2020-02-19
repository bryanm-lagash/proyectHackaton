import React, { useState } from 'react';
import { Container, List } from '@material-ui/core';
import * as firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';

import { setGanador } from '../actions/sorteo';
import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';

const Ganador = () => {
  const classes = useStyles();
  const { ganador } = useSelector(({ sorteo }) => sorteo);
  const dispatch = useDispatch();

  useMount(async () => {
    // const { data } = await jsonApi().getGanador();

    // setGanador(data);
    console.log('api ganador', ganador);
    // const ref = firebase.database().ref('dinosaurs');

    // ref
    //   .orderByChild('height')
    //   .equalTo(25)
    //   .on('child_added', snapshot => {
    //     console.log(snapshot.key);
    //   });
    firebase
      .database()
      .ref('ganadores/')
      .on('value', snap => {
        const win = snap.val();

        if (win !== null) {
          dispatch(setGanador(Object.values(win)));
          // agregar un dispatch como en listaUsers

          console.log('ganadores', Object.values(win));
        }
      });
  });

  return (
    <Container
      style={{ textAlign: 'center' }}
      className={classes.container}
      maxWidth={false}
    >
      <font face='Roboto' size=' 7'>
        EL GANADOR ES
      </font>
      <h1 />
      <List className={classes.List}>
        <font face='Roboto' size=' 7'>
          "{ganador}"
        </font>
        <h1 />
      </List>
    </Container>
  );
};

export default Ganador;
