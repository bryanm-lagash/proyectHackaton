import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { EQUIPOS_FUTBOL } from '../actions/sorteoFutbol';

const INITIAL_STATE = {
  equipoA: [],
  equipoB: []
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

const reducer = createReducer(INITIAL_STATE, {
  [EQUIPOS_FUTBOL]: calcularEquipos
});

export default reducer;
