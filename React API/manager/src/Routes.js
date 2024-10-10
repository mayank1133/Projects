// Routes.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EnterData from './EnterData';
import ViewAndEditData from './ViewAndEditData';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EnterData} />
        <Route path="/view-and-edit" component={ViewAndEditData} />
      </Switch>
    </Router>
  );
};

export default Routes;