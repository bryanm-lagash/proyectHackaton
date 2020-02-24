import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { TORNEO_PING_PONG } from '../actions/sorteoPingPong';

const INITIAL_STATE = {
  duplas: []
};

const calcularDuplas = produce((draft, { data }) => {
  //   for (let index = 0; index < data.length / 2; index++) {
  //     if (draft.duplas.length === 0) {
  //       const jugadorB = data[Math.floor(Math.random() * data.length)];

  //       draft.duplas[index] = { [index]: jugadorB };
  //       draft.duplas = data.filter(p => jugadorB !== p);
  //     } else if (draft.duplas.length !== 0) {
  //       const jugadorB =
  //         draft.duplas[Math.floor(Math.random() * draft.duplas.length)];

  //       draft.duplas[index] = jugadorB;
  //       draft.duplas = draft.duplas.filter(p => jugadorB !== p);
  //     }
  //   }

  for (let index = 0; index < data.length / 2; index++) {
    const jugadorB = data[Math.floor(Math.random() * data.length)];
    const equipo = `equipo${index}`;

    draft.duplas[index] = { equipo: jugadorB.nombre };
    console.log('duplas', draft.duplas);
  }
});

// const calculoCapitanes = produce((draft, { data }) => {
//   const capitanA =
//     data[0].equipoA[Math.floor(Math.random() * data[0].equipoA.length)].nombre;
//   const capitanB =
//     data[1].equipoB[Math.floor(Math.random() * data[1].equipoB.length)].nombre;

//   draft.capitanes = { capitanA, capitanB };
// });

const reducer = createReducer(INITIAL_STATE, {
  [TORNEO_PING_PONG]: calcularDuplas
  // [CAPITANES_EQUIPOS]: calculoCapitanes
});

export default reducer;
