import React, { useState } from 'react';
import * as firebase from 'firebase';
import { Button } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { useEffect } from '../hooks/index';
import useStyles from '../containers/styles';
import { identificarSorteoId } from '../actions/sorteo';
import { INSCRIPCION } from '../routes/paths';

const ListaSorteoFutbol = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [ListaSorteoFutbol, setListaSorteoFutbol] = useState();

  useEffect(() => {
    firebase
      .database()
      .ref('sorteoFutbol/')
      .orderByChild('estado')
      .equalTo('pendiente')
      .on('value', snap => {
        const response = snap.val();

        console.log('primero', response);

        response
          ? setListaSorteoFutbol(Object.values(response))
          : console.log(response);
      });
  });
  const handleNavigate = id => {
    const url = `${INSCRIPCION}/${id}`;

    console.log('Lista sorteos : ', id);

    dispatch(identificarSorteoId(id));
    dispatch(push(url));
  };

  if (ListaSorteoFutbol === undefined || ListaSorteoFutbol === null) {
    return <div />;
  }

  return (
    <div>
      <h3>
        <center>Sorteos Futbol</center>
      </h3>
      <div width='1000px'>
        {Object.values(ListaSorteoFutbol).map(sorteo => (
          <div
            key={sorteo.id}
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
              Sorteo {sorteo.nombreSorteo} <br /> Hecho por{' '}
              {sorteo.nombreCreado}
            </Button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaSorteoFutbol;
