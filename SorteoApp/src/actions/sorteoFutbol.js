import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    equiposFutbol: ['data'],
    capitanesEquipos: ['data']
  },
  {
    prefix: 'SORTEO_FUTBOL/'
  }
);

const { equiposFutbol, capitanesEquipos } = Creators;
const { EQUIPOS_FUTBOL, CAPITANES_EQUIPOS } = Types;

export { equiposFutbol, EQUIPOS_FUTBOL, capitanesEquipos, CAPITANES_EQUIPOS };
