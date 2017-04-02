import React from 'react';
import {
  Link
} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Hello World
      <Link to="/test">Click here</Link>
    </div>
  )
};

export default Home;
