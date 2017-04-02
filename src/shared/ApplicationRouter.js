import React from 'react';
import Home from '../client/components/Home/Home';
import Main from '../client/components/Main/Main';
import {
  Switch,
  Route
} from 'react-router';

const ApplicationRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/" component={Main}/>
    </Switch>
  )
};

export default ApplicationRouter;