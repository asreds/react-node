#!/usr/bin/env node

import React from "react";
import ReactDOMServer from "react-dom/server";
import { renderRoutes } from "react-router-config";
import routes from "../../client/routes";

export default function handleRender(req, res, next) {
  let html;

  return Promise.all(promises).then(() => {
    // return respond html as string from react-dom-server
    html = ReactDOMServer.renderToString(renderRoutes(routes));
    if (context.url) {
      res.status(500).end("internal server error");
    } else {
      //render html + preloaded state
      res.send(renderHtml(html, store.getState(), styleTags));
    }
  });
}

// wrapper of render HTML
function renderHtml(body = "") {
  return `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        </head>
      <body>
        <div id="app">${body}</div>
        <script src="${webpackAssets.vendor.js}"></script>
        <script src="${webpackAssets.app.js}"></script>
      </body>
    </html>
  `.replace(/\s\s+/g, "");
}
