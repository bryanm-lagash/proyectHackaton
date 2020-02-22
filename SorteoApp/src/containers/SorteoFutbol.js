import React from 'react';
import { useDispatch } from 'react-redux';

import { equiposFutbol } from '../actions/sorteoFutbol';

const SorteoFutbol = () => {
  const dispatch = useDispatch();
  const jugadores = [
    { nombre: 'bryan' },
    { nombre: 'mathias' },
    { nombre: 'andres' },
    { nombre: 'maximiliano' },
    { nombre: 'neko' },
    { nombre: 'marco' },
    { nombre: 'patricio' },
    { nombre: 'pipo' }
  ];

  const handleData = j => {
    dispatch(equiposFutbol(j));
    // const equipoA = j[Math.floor(Math.random() * j.length)];

    // console.log(equipoA);
    // j.filter((p, i) => p.nombre !== equipoA.nombre);
    // console.log(j);
  };

  return (
    <div>
      <h1>HOLA SORTEO FUTBOL</h1>
      <button onClick={() => handleData(jugadores)}>DATA</button>
    </div>
  );
};

export default SorteoFutbol;
