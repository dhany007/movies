const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const routerNav = require('./src/index');
require('dotenv').config();

const app = express();

const { PORT } = process.env || 3000;
app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));
app.use('/', routerNav);

module.exports = app;
