import React from 'react';
import ApplicationLayout from './components/ApplicationLayout';

import express from 'express';
import ReactDomServer from 'react-dom/server';
const app = express();

app.get('*', (req, res) => {
  const html = ReactDomServer.renderToString(<ApplicationLayout location={req.url} />);
  res.send(`<!doctype html>${html}`);
});


app.listen(3000, () => {
  console.log('Example app listening on 3000');
});
