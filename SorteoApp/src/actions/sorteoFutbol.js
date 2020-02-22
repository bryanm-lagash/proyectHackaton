import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    equiposFutbol: ['data']
  },
  {
    prefix: 'SORTEO_FUTBOL/'
  }
);

const { equiposFutbol } = Creators;
const { EQUIPOS_FUTBOL } = Types;

export { equiposFutbol, EQUIPOS_FUTBOL };
