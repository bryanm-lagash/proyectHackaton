import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import sorteo from './sorteo';
import sorteoFutbol from './sorteoFutbol';
import sorteoPingPong from './sorteoPingPong';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({
    router,
    sorteo,
    sorteoFutbol,
    sorteoPingPong
  });

  return rootReducer;
}

export default createRootReducer;
