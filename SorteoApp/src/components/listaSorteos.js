import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { INSCRIPCION } from '../routes/paths';
import useStyles from '../containers/styles';

const uuidv4 = require('uuid/v4');

const ListaSorteo = () => {
  const classes = useStyles();

  const handleNavigate = id => {
    const url = `${INSCRIPCION}/${id}`;

    console.log(uuidv4());
    window.location.href = url;
  };

  const sorteos = [
    { id: 1, nombre: 'Futbol a las 15:00' },
    { id: 2, nombre: 'Lava la Loza' },
    { id: 3, nombre: 'pinpong' }
  ];

  const botones = sorteos.map(sorteo => (
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
