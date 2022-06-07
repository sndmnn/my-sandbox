import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsListPage from '../pages/ProductsListPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ProductsListPage} />
  </Switch>
);

export default Routes;
