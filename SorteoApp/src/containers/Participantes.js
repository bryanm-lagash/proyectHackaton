import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
// import InfoSorteo from '../components/InfoSorteo';
import CodeQR from '../components/QRcode';
import Header from '../components/Header';
import { setListaSorteos, identificarSorteoId } from '../actions/sorteo';
import { INSCRIPCION } from '../routes/paths';

import useStyles from './styles';

const Participantes = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listaSorteo } = useSelector(({ sorteo }) => sorteo);

  const handleNavigate = id => {
    const url = `${INSCRIPCION}/${id}`;

    dispatch(identificarSorteoId(id));
    dispatch(push(url));
  };

  useMount(async () => {
    console.log(props.match.params);
    firebase
      .database()
      .ref('sorteo/')
      .on('value', snap => {
        const sorteos = snap.val();

        if (sorteos !== null) {
          dispatch(setListaSorteos(Object.values(sorteos)));
        }
      });
  });

  if (listaSorteo === undefined || listaSorteo === null) {
    return <div />;
  }

  return (
    <div>
      <Header />
      <div width='1000px'>
        <CodeQR link='' />
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
      </div>
    </div>
  );
};

export default Participantes;
