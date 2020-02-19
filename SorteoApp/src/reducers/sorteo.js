import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  CONFIGURACION_SORTEO,
  SET_USER_LIST,
  SET_GANADOR,
  SET_LISTA_SORTEOS
} from '../actions/sorteo';

const INITIAL_STATE = {
  dataForm: [],
  userList: [],
  ganador: '',
  listaSorteos: []
};

const setData = produce((draft, { data }) => {
  console.log('data reducer', data);

  draft.dataForm = data;
});

const setDataUser = produce((draft, { data }) => {
  console.log('data user reducer', data);
  draft.userList = data;
});

const setGanador = produce((draft, { data }) => {
  // draft.ganador = data;
  draft.ganador = data[Math.floor(Math.random() * data.length)].nombre;
  console.log('setganador', draft.ganador);
});

const setListaSorteos = produce((draft, { data }) => {
  draft.listaSorteo = data;
  console.log('reducerrrrrrrr', data);
});

const reducer = createReducer(INITIAL_STATE, {
  [CONFIGURACION_SORTEO]: setData,
  [SET_USER_LIST]: setDataUser,
  [SET_GANADOR]: setGanador,
  [SET_LISTA_SORTEOS]: setListaSorteos
});

export default reducer;
