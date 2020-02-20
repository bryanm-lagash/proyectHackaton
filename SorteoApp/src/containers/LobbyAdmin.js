import React, { useCallback } from 'react';
import { Button, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import { GANADOR } from '../routes/paths';
import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';
import CodeQR from '../components/QRcode';
import { setGanador } from '../actions/sorteo';
import Header from '../components/Header';
import jsonApi from '../services/jsonApi';

import useStyles from './styles';

const LobbyAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userList, ganador, dataForm } = useSelector(({ sorteo }) => sorteo);

  const handleGoBack = useCallback(async () => {
    // const win = userList[Math.floor(Math.random() * userList.length)].nombre;

    // dispatch(setGanador(win));
    console.log('botton lobby', userList);

    if (userList !== null) {
      dispatch(setGanador(Object.values(userList)));
      dispatch(push(GANADOR));
    }

    // if (ganador !== '') {
    //   await jsonApi().ganadorSet(ganador);
    //   dispatch(push(GANADOR));
    // }
  });

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <InfoSorteo />
        <CodeQR link='' />
      </div>
      <div>
        <Container className={classes.container} maxWidth={false}>
          <ListaUsers />
          <div style={{ textAlign: 'center' }}>
            <Button
              style={{ width: 200, height: 50 }}
              className={classes.button}
              color='primary'
              variant='contained'
              onClick={handleGoBack}
            >
              COMENZAR
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LobbyAdmin;
