import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import * as firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Wave } from 'react-animated-text';

import papelitos from '../containers/Papelitos.gif';
import imagen from '../containers/imagen.jpg';
import { setGanador } from '../actions/sorteo';
import useMount from '../hooks/useMount';
import useStyles from '../containers/styles';
import { HOME } from '../routes/paths';

const Ganador = () => {
  const classes = useStyles();
  const { ganador } = useSelector(({ sorteo }) => sorteo);
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  useMount(async () => {
    firebase
      .database()
      .ref('ganador/')
      .orderByChild('nombre')
      .equalTo(ganador)
      .on('value', snap => {
        const win = snap.val();

        if (win !== null) {
          setUser(Object.values(win)[0].nombre);
          console.log(Object.keys(win)[0]);
          firebase
            .database()
            .ref('sorteo')
            .child(Object.values(win)[0].idSorteo)
            .update({ estado: 'completado' });
        }
      });
  });

  setTimeout(() => {
    dispatch(push(HOME));
  }, 30000);

  return (
    <Container
      style={{ textAlign: 'center' }}
      className={classes.container}
      maxWidth={false}
    >
      <font className='winner' face='Roboto' size='20'>
        <img src={papelitos} className='app2-imagen' alt='logo' />
        <img src={papelitos} className='app3-imagen' alt='logo' />
        <Wave text={texto} effect='fadeOut' effectChange={10.2} />
      </font>
      <div>
        <img src={imagen} className='app-imagen' alt='logo' />
        <h1 className='tituloGanadro'>{user}</h1>
        <img src={imagen} className='app-imagen' alt='logo' />
      </div>
    </Container>
  );
};

export default Ganador;
