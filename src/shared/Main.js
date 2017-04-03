import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../client/components/Home/Home';
import About from '../client/components/About/About';
import {
  Switch,
  Route
} from 'react-router';

const Main = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/">About</Link>

      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/" component={About}/>
      </Switch>
    </div>
  )
};

export default Main;