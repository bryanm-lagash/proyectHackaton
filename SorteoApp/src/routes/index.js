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
  FormFutbol,
  SorteoPingPong
} from '../containers';
import Navbar from '../components/Navigation/Navbar/Navbar';

import {
  HOME,
  SORTEO,
  LOBBY_ADMIN,
  PARTICIPANTES,
  INSCRIPCION,
  GANADOR,
  LOBBY,
  SORTEO_FUTBOL,
  FORM_FUTBOL,
  SORTEO_PING_PONG,
  NAVBAR
} from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={HOME} component={Home} />
    <Route path={SORTEO} component={Sorteo} />
    <Route path={LOBBY_ADMIN} component={LobbyAdmin} />
    <Route path={PARTICIPANTES} component={Participantes} />
    <Route path={INSCRIPCION} component={Inscripcion} />
    <Route path={`${INSCRIPCION}:id`} component={Inscripcion} />
    <Route path={GANADOR} component={Ganador} />
    <Route path={LOBBY} component={Lobby} />
    <Route path={SORTEO_FUTBOL} component={SorteoFutbol} />
    <Route path={FORM_FUTBOL} component={FormFutbol} />
    <Route path={SORTEO_PING_PONG} component={SorteoPingPong} />
    <Route path={NAVBAR} component={Navbar} />
  </Switch>
);

export default Routes;
