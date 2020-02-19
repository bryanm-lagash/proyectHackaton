import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';

import InfoSorteo from '../components/InfoSorteo';
import CodeQR from '../components/QRcode';
import Header from '../components/Header';
import ListaSorteos from '../components/listaSorteos';

import useStyles from './styles';

const Participantes = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container className={classes.container} maxWidth={false}>
        <InfoSorteo />
        <CodeQR />
        <Grid className={classes.grid}>
          <Paper elevation={0} className={classes.paper}>
            <ListaSorteos />
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Participantes;
