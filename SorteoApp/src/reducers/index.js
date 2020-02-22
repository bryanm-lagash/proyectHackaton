import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import sorteo from './sorteo';
import sorteoFutbol from './sorteoFutbol';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ router, sorteo, sorteoFutbol });

  return rootReducer;
}

export default createRootReducer;
