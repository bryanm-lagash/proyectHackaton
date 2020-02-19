import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    configuracionSorteo: ['data'],
    setUserList: ['data'],
    setGanador: ['data'],
    setListaSorteos: ['data']
  },
  {
    prefix: 'SORTEO/'
  }
);

const {
  configuracionSorteo,
  setUserList,
  setGanador,
  setListaSorteos
} = Creators;

const {
  CONFIGURACION_SORTEO,
  SET_USER_LIST,
  SET_GANADOR,
  SET_LISTA_SORTEOS
} = Types;

export {
  configuracionSorteo,
  CONFIGURACION_SORTEO,
  setUserList,
  SET_USER_LIST,
  setGanador,
  SET_GANADOR,
  setListaSorteos,
  SET_LISTA_SORTEOS
};
