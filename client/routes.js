import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './components/Home';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
  </Route>
);

export default routes;
