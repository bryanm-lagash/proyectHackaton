import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as firebase from 'firebase';

import { useMount } from '../hooks';
import { torneoPingPong } from '../actions/sorteoPingPong';

const SorteoPingPong = () => {
  const { equipoA, equipoB, capitanes } = useSelector(
    ({ sorteoFutbol }) => sorteoFutbol
  );
  const dispatch = useDispatch();
  const jugadores = [
    { nombre: 'bryan' },
    { nombre: 'mathias' },
    { nombre: 'andres' },
    { nombre: 'maximiliano' },
    { nombre: 'neko' },
    { nombre: 'marco' },
    { nombre: 'patricio' },
    { nombre: 'pipo' },
    { nombre: 'jeremy' },
    { nombre: 'jimy' }
  ];

  useMount(async () => {
    firebase
      .database()
      .ref('users/add')
      .on('value', snap => {
        const response = snap.val();

        console.log(Object.values(response));

        if (response !== null) {
          // dispatch(equiposFutbol(Object.values(response)));
          dispatch(torneoPingPong(jugadores));
        }
      });
  });

  const handleData = () => {
    // dispatch(capitanesEquipos(j));

    console.log('selector', capitanes);
  };

  return (
    <div>
      <h1>HOLA SORTEO FUTBOL</h1>
      <div>
        <h2>EQUIPO A</h2>
        <h3>Capitan: {capitanes.capitanA}</h3>
        {equipoA.map(({ nombre, id }) => (
          <div key={id}>
            <div>Nombre:{nombre}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>EQUIPO B</h2>
        <h3>Capitan: {capitanes.capitanB}</h3>
        {equipoB.map(({ nombre, id }) => (
          <div key={id}>
            <div>Nombre:{nombre}</div>
          </div>
        ))}
      </div>
      <button onClick={() => handleData([{ equipoA }, { equipoB }])}>
        Escoger Capitanes
      </button>
    </div>
  );
};

export default SorteoPingPong;
