'use strict';

const express = require('../../Library/Caches/typescript/2.9/node_modules/@types/express');
const app = express();


const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening in PORT:${PORT}`);
});