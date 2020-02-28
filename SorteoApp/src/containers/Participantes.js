import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
import ListaSorteoFutbol from '../components/ListaSorteoFutbol';
import CodeQR from '../components/QRcode';
import Header from '../components/Navigation/Navbar/Navbar';
import { setListaSorteos, identificarSorteoId } from '../actions/sorteo';
import { INSCRIPCION, PARTICIPANTES } from '../routes/paths';

import useStyles from './styles';

const Participantes = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listaSorteo } = useSelector(({ sorteo }) => sorteo);

  const handleNavigate = id => {
    const url = `${INSCRIPCION}/${id}`;

    console.log('Lista sorteos : ', id);

    dispatch(identificarSorteoId(id));
    dispatch(push(url));
  };

  useMount(async () => {
    // console.log(props.match.params);
    // debugger;
    firebase
      .database()
      .ref('sorteo/')
      // .ref('sorteoFutbol/')
      .orderByChild('estado')
      .equalTo('pendiente')
      .on('value', snap => {
        const sorteos = snap.val();

        if (sorteos !== null) {
          dispatch(setListaSorteos(Object.values(sorteos)));
        }
      });
  });

  if (listaSorteo === undefined || listaSorteo === null) {
    return (
      <div>
        <ListaSorteoFutbol />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h3>
        <center>Sorteos</center>
      </h3>
      <div style={{ marginTop: '50px' }} width='1000px'>
        <CodeQR path={PARTICIPANTES} />
        {Object.values(listaSorteo).map(sorteo => (
          <div
            style={{
              width: '100%',
              margin: '5px',
              height: '1%',
              textAlign: 'center'
            }}
          >
            <Button
              style={{ width: '75%', heigth: '500px' }}
              className={classes.button}
              color='primary'
              variant='contained'
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => handleNavigate(sorteo.id)}
            >
              Sorteo {sorteo.nombre_sorteo} <br /> Hecho por {sorteo.nombre}
            </Button>
            <br />
          </div>
        ))}
        <ListaSorteoFutbol />
      </div>
    </div>
  );
};

export default Participantes;
