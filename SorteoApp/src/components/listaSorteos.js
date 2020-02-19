import React from 'react';
import { Button } from '@material-ui/core';

import { INSCRIPCION } from '../routes/paths';
import useStyles from '../containers/styles';

const ListaSorteo = () => {
  const classes = useStyles();

  const handleNavigate = id => {
    const url = `/lobby/${id}`;

    window.location.href = url;
  };

  return (
    <div>
      <Button
        className={classes.button}
        color='primary'
        variant='contained'
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => handleNavigate(1)}
      >
        Sorteo 1
      </Button>
      <Button
        className={classes.button}
        color='primary'
        variant='contained'
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => handleNavigate(2)}
      >
        Sorteo 2
      </Button>
      <Button
        className={classes.button}
        color='primary'
        variant='contained'
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => handleNavigate(3)}
      >
        Sorteo 3
      </Button>
    </div>
  );
};

export default ListaSorteo;
