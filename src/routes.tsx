import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Orphanege from './pages/Orphanage';
import OrphanegesMap from './pages/OrphanagesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={OrphanegesMap} path="/app" />
        <Route component={CreateOrphanage} path="/orphanages/create" />
        <Route component={Orphanege} path="/orphanages/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
