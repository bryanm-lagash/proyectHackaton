import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  CONFIGURACION_SORTEO,
  SET_USER_LIST,
  SET_GANADOR
} from '../actions/sorteo';

const INITIAL_STATE = {
  dataForm: [],
  userList: [],
  ganador: []
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
  console.log('setganador', data);
  draft.ganador = data;
  console.log('ganador', draft.ganador);
});

const reducer = createReducer(INITIAL_STATE, {
  [CONFIGURACION_SORTEO]: setData,
  [SET_USER_LIST]: setDataUser,
  [SET_GANADOR]: setGanador
});

export default reducer;
