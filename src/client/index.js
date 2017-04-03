import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../shared/Main';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('app'));