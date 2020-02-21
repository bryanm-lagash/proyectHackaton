import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  CONFIGURACION_SORTEO,
  SET_USER_LIST,
  SET_GANADOR,
  SET_LISTA_SORTEOS,
  IDENTIFICAR_SORTEO_ID
} from '../actions/sorteo';

const INITIAL_STATE = {
  dataForm: [],
  userList: [],
  ganador: '',
  listaSorteos: [],
  idSorteo: ''
};

const setData = produce((draft, { data }) => {
  draft.dataForm = data;
});

const setDataUser = produce((draft, { data }) => {
  draft.userList = data;
});

const setGanador = produce((draft, { data }) => {
  draft.ganador = data[Math.floor(Math.random() * data.length)].nombre;
});

const setListaSorteos = produce((draft, { data }) => {
  draft.listaSorteo = data;
});

const identificarSorteoId = produce((draft, { data }) => {
  draft.idSorteo = data;
});

const reducer = createReducer(INITIAL_STATE, {
  [CONFIGURACION_SORTEO]: setData,
  [SET_USER_LIST]: setDataUser,
  [SET_GANADOR]: setGanador,
  [SET_LISTA_SORTEOS]: setListaSorteos,
  [IDENTIFICAR_SORTEO_ID]: identificarSorteoId
});

export default reducer;
