import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Sorteo,
  LobbyAdmin,
  Participantes,
  Inscripcion,
  Ganador,
  Lobby,
  SorteoFutbol,
  FormFutbol
} from '../containers';

import {
  HOME,
  SORTEO,
  LOBBY_ADMIN,
  PARTICIPANTES,
  INSCRIPCION,
  GANADOR,
  LOBBY,
  SORTEO_FUTBOL,
  FORM_FUTBOL
} from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={HOME} component={Home} />
    <Route path={SORTEO} component={Sorteo} />
    <Route path={LOBBY_ADMIN} component={LobbyAdmin} />
    <Route path={PARTICIPANTES} component={Participantes} />
    <Route path={INSCRIPCION} component={Inscripcion} />
    <Route path={GANADOR} component={Ganador} />
    <Route path={LOBBY} component={Lobby} />
    <Route path={SORTEO_FUTBOL} component={SorteoFutbol} />
    <Route path={FORM_FUTBOL} component={FormFutbol} />
  </Switch>
);

export default Routes;
