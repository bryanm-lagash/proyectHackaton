import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
import { configuracionSorteo } from '../actions/sorteo';

const InfoSorteo = () => {
  const dispatch = useDispatch();
  const { idSorteo, dataForm } = useSelector(({ sorteo }) => sorteo);

  useMount(async () => {
    firebase
      .database()
      .ref('sorteo/')
      .orderByChild('id')
      .equalTo(idSorteo)
      .on('value', snap => {
        const infoSorteo = snap.val();

        if (infoSorteo !== null) {
          dispatch(configuracionSorteo(Object.values(infoSorteo)));
        }
      });
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px ' }}>
      {Object.values(dataForm).map(sorteo => (
        <div>
          <h2 style={{ color: 'rgb(25,41,151)', marginTop: '15px' }}>
            {sorteo.nombre_sorteo}
          </h2>
          <h5 style={{ color: 'rgb(36,58,218)' }}>Creador: {sorteo.nombre}</h5>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default InfoSorteo;
