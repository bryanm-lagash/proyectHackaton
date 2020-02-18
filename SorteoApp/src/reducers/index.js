import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter';
import sorteo from './sorteo';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ router, counter, sorteo });

  return rootReducer;
}

export default createRootReducer;
