import React, { useState } from 'react';
import { Container, List, ListItem } from '@material-ui/core';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';

const Ganador = () => {
  const classes = useStyles();

  const [ganador, setGanador] = useState([]);

  useMount(async () => {
    const { data } = await jsonApi().getGanador();

    setGanador(data);
    console.log('api ganador', data);
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
