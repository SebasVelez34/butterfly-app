import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import routes from '../routes';

import Layout from '../client/Pages/Layout';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/*', async (req, res) => {
  const context = {};
  const dataRequirements =
    routes
      .filter(route => matchPath(route, req.url)) // filter matching paths
      .map(route => route.component); // dispatch data requirement
  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <StaticRouter context={context} location={req.url}>
        <Layout />
      </StaticRouter>
    );
    const reactDom = renderToString(jsx);
    res.send(htmlTemplate(reactDom));
  });

});

function htmlTemplate(reactDom) {
  return `
      <!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8">
            <title>Butterfly</title>
        </head>

        <body class="u-green1">
            <div id="app">${reactDom}</div>
            <script src="/static/bundle.js"></script>
        </body>
      </html>
  `;
}



app.listen(3000, () => {
  console.log('server started: http://localhost:3000')
});
