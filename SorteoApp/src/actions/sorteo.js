import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    configuracionSorteo: ['data'],
    setUserList: ['data'],
    setGanador: ['data']
  },
  {
    prefix: 'SORTEO/'
  }
);

const { configuracionSorteo, setUserList, setGanador } = Creators;

const { CONFIGURACION_SORTEO, SET_USER_LIST, SET_GANADOR } = Types;

export {
  configuracionSorteo,
  CONFIGURACION_SORTEO,
  setUserList,
  SET_USER_LIST,
  setGanador,
  SET_GANADOR
};
