import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import DetailsCard from './components/DetailsCard';
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/people/:uid" component={DetailsCard} />
      <Route path="/planets/:uid" component={DetailsCard} /> 
      <Route path="/vehicles/:uid" component={DetailsCard} /> 
    </Switch>
  );
};

export default Routes;