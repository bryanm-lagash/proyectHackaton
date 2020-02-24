import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { EQUIPOS_FUTBOL, CAPITANES_EQUIPOS } from '../actions/sorteoFutbol';

const INITIAL_STATE = {
  equipoA: [],
  equipoB: [],
  capitanes: []
};

const calcularEquipos = produce((draft, { data }) => {
  for (let index = 0; index < data.length / 2; index++) {
    if (draft.equipoB.length === 0) {
      const jugadorB = data[Math.floor(Math.random() * data.length)];

      draft.equipoA[index] = jugadorB;
      draft.equipoB = data.filter(p => jugadorB !== p);
    } else if (draft.equipoB.length !== 0) {
      const jugadorB =
        draft.equipoB[Math.floor(Math.random() * draft.equipoB.length)];

      draft.equipoA[index] = jugadorB;
      draft.equipoB = draft.equipoB.filter(p => jugadorB !== p);
    }
  }
});

const calculoCapitanes = produce((draft, { data }) => {
  const capitanA =
    data[0].equipoA[Math.floor(Math.random() * data[0].equipoA.length)].nombre;
  const capitanB =
    data[1].equipoB[Math.floor(Math.random() * data[1].equipoB.length)].nombre;

  draft.capitanes = { capitanA, capitanB };
});

const reducer = createReducer(INITIAL_STATE, {
  [EQUIPOS_FUTBOL]: calcularEquipos,
  [CAPITANES_EQUIPOS]: calculoCapitanes
});

export default reducer;
