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
  const [user, setUser] = useState();

  useMount(async () => {
    console.log('api ganador', ganador);

    // const ref = firebase.database().ref('dinosaurs');

    // ref
    //   .orderByChild('height')
    //   .equalTo(25)
    //   .on('child_added', snapshot => {
    //     console.log(snapshot.key);
    //   });
    if (ganador !== '') {
      await jsonApi().ganadorSet({ nombre: ganador });
    }

    firebase
      .database()
      .ref('ganador/')
      .orderByChild('nombre')
      .equalTo(ganador)
      .on('value', snap => {
        const win = snap.val();

        if (win !== null) {
          setUser(Object.values(win)[0].nombre);

          console.log('ganadores', Object.values(win)[0].nombre);
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

      <p>{user}</p>
    </Container>
  );
};

export default Ganador;
