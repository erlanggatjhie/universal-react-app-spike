import React from 'react';
import ApplicationLayout from './components/ApplicationLayout';

import express from 'express';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Main from '../shared/Main';
const app = express();

app.use('/assets', express.static('build/assets'));

app.get('*', (req, res) => {
  const mainComponent = ReactDomServer.renderToString(
    <StaticRouter context={{}} location={req.url}>
      <Main />
    </StaticRouter>
  );

  const html = ReactDomServer.renderToStaticMarkup(<ApplicationLayout mainComponent={mainComponent} />);
  res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => {
  console.log('Example app listening on 3000');
});
