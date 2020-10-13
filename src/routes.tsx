import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanegesMap from './pages/OrphanagesMap';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={OrphanegesMap} path="/app" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;