import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  LISTA_USUARIOS,
  DROP_USUARIOS_CARGADOS,
  UPDATE_USER
} from '../actions/counter';

const INITIAL_STATE = {
  datosApi: []
};

const listaUsuarios = produce((draft, { index }) => {
  draft.datosApi.push(index);
});
const dropUsuariosCargados = produce((draft, { index }) => {
  draft.datosApi.splice(index.index, 1);
});

const updateUser = produce((draft, { index }) => {
  draft.datosApi.forEach((element, i) => {
    if (i === index.indice) {
      element.name.first = index.data.firstName;
      element.name.last = index.data.lastName;
      element.email = index.data.email;
    }
  });
});

const reducer = createReducer(INITIAL_STATE, {
  [LISTA_USUARIOS]: listaUsuarios,
  [DROP_USUARIOS_CARGADOS]: dropUsuariosCargados,
  [UPDATE_USER]: updateUser
});

export default reducer;
