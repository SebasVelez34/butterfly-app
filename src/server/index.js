import path from 'path';
import express from 'express';
import serialize from 'serialize-javascript'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

import apiRoutes from './api';
import routes from '../routes';

import App from '../client/App';

const app = express();

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));
app.use('/api', apiRoutes);

app.get('/*', async (req, res) => {
  const activeRoute = routes.find((route) =>
    matchPath(route.path, req.url)
  ) || {};

  const promise = activeRoute.fetchInitialData
  ? activeRoute.fetchInitialData(req.path)
  : Promise.resolve();

    promise
    .then((data) => {
      const jsx = (
        <StaticRouter location={req.url}>
          <App serverData={data}/>
        </StaticRouter>
      );
      const reactDOM = renderToString(jsx);
      res.send(htmlTemplate(reactDOM, data));
    })
});

function htmlTemplate(reactDOM, data) {
  return `
      <!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8">
            <title>Butterfly</title>
        </head>

        <body>
            <div id="root">${reactDOM}</div>
            <script>window.__INITIAL_DATA__ = ${serialize(data, { isJSON: true })}</script>
            <script src="/static/bundle.js"></script>
        </body>
      </html>
  `;
}



app.listen(3000, () => {
  console.log('server started: http://localhost:3000')
});
