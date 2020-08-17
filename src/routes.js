import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './page/Dashboard';
import Pokemon from './page/Pokemon';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pokemon/:id" component={Pokemon} />
  </Switch>
);

export default Routes;
