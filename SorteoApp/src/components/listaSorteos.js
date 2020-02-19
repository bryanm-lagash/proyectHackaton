import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import { INSCRIPCION } from '../routes/paths';
import useStyles from '../containers/styles';

const uuidv4 = require('uuid/v4');

const ListaSorteo = props => {
  const classes = useStyles();

  const { listaSorteos } = useSelector(({ sorteo }) => sorteo);

  console.log('weninisi', listaSorteos);
  useMount(() => {
    // console.log('weninisi', listaSorteos);
  });

  const handleNavigate = id => {
    const url = `${INSCRIPCION}/${id}`;

    window.location.href = url;
  };

  const sorteos = [
    { id: 1, nombre: 'Futbol a las 15:00' },
    { id: 2, nombre: 'Lava la Loza' },
    { id: 3, nombre: 'pinpong' }
  ];

  const botones = props.lista.map(sorteo => (
    <Button
      className={classes.button}
      color='primary'
      variant='contained'
      fullWidth
      // eslint-disable-next-line react/jsx-no-bind
      onClick={() => handleNavigate(sorteo.id)}
    >
      Sorteo {sorteo.nombre}
    </Button>
  ));

  return <div>{botones}</div>;
};

export default ListaSorteo;
