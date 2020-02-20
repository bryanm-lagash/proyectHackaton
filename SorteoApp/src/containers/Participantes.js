import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import InfoSorteo from '../components/InfoSorteo';
import CodeQR from '../components/QRcode';
import Header from '../components/Header';
import ListaSorteos from '../components/listaSorteos';
import { setListaSorteos } from '../actions/sorteo';
import { INSCRIPCION } from '../routes/paths';

import useStyles from './styles';

const Participantes = () => {
  const listaS = [];
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNavigate = id => {
    const url = `${INSCRIPCION}/${id}`;

    window.location.href = url;
  };

  const [listaState, setListaState] = useState();

  useMount(async () => {
    const data = await jsonApi().getSorteo();

    dispatch(setListaSorteos(data.data));
    setListaState(data.data);
    console.log('SORTEOS COMPARE', data.data);
  });

  const { listaSorteo } = useSelector(({ sorteo }) => sorteo);

  console.log('PARTICIPANTES DESDE HOOOME', listaSorteo);
  const sorteos = [
    { id: 1, nombre: 'Futbol a las 15:00' },
    { id: 2, nombre: 'Lava la Loza' },
    { id: 3, nombre: 'pinpong' }
  ];

  if (listaSorteo === undefined) {
    return <div />;
  }

  return (
    <div>
      <Header />
      <Container className={classes.container} maxWidth={false}>
        <InfoSorteo />
        <CodeQR link='' />
        <Grid className={classes.grid}>
          <Paper elevation={0} className={classes.paper}>
            {Object.values(listaSorteo).map(sorteo => (
              <Button
                className={classes.button}
                color='primary'
                variant='contained'
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => handleNavigate(sorteo.id)}
                fullWidth
                display='flex'
              >
                Sorteo {sorteo.nombre_sorteo}
              </Button>
            ))}
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Participantes;
