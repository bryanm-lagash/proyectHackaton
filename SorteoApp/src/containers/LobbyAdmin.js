import React, { useCallback, useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import { GANADOR, INSCRIPCION } from '../routes/paths';
import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';
import CodeQR from '../components/QRcode';
import { setGanador } from '../actions/sorteo';
import Header from '../components/Navigation/Navbar/Navbar';
import jsonApi from '../services/jsonApi';

import useStyles from './styles';

const LobbyAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userList, ganador, idSorteo } = useSelector(({ sorteo }) => sorteo);

  useEffect(() => {
    if (userList.length !== 0) {
      dispatch(setGanador(Object.values(userList)));
      console.log('useMount ganador', ganador);
    }
  });

  const handleGoBack = useCallback(async () => {
    if (ganador !== '') {
      await jsonApi().ganadorSet({ nombre: ganador, idSorteo });
      dispatch(push(GANADOR));
    }
  });

  return (
    <div>
      <Header />
      <div style={{ marginTop: '80px' }} />
      <div style={{ textAlign: 'center' }}>
        <InfoSorteo />
        <CodeQR path={INSCRIPCION} id={idSorteo} />
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
