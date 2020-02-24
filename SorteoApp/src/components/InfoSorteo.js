import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
import useStyles from '../containers/styles';
import { configuracionSorteo } from '../actions/sorteo';

const InfoSorteo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { idSorteo, dataForm } = useSelector(({ sorteo }) => sorteo);

  useMount(async () => {
    firebase
      .database()
      .ref('sorteo/')
      .orderByChild('id')
      .equalTo(idSorteo)
      .on('value', snap => {
        const infoSorteo = snap.val();

        if (infoSorteo !== null) {
          dispatch(configuracionSorteo(Object.values(infoSorteo)));
        }
      });
  });

  if (dataForm === undefined) {
    return (
      <div>
        <p>HOLAAAA</p>
      </div>
    );
  }

  return (
    <Container className={classes.container} maxWidth={false}>
      {Object.values(dataForm).map((sorteo, i) => (
        <div>
          <h2>Nombre Sorteo: {sorteo.nombre_sorteo}</h2>
          <h5>Creador: {sorteo.nombre}</h5>
          <p>ID: {sorteo.id}</p>
        </div>
      ))}
    </Container>
  );
};

export default InfoSorteo;
