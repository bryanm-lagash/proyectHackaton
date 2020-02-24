import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    torneoPingPong: ['data']
  },
  {
    prefix: 'SORTEO_PING_PONG/'
  }
);

const { torneoPingPong } = Creators;
const { TORNEO_PING_PONG } = Types;

export { torneoPingPong, TORNEO_PING_PONG };
