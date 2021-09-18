const express = require('express');
const logger = require('./logger')

const mongoose = require('./mongoose')
const service = require('./services')

const app = express();

global.logger = logger;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose(app);
service(app);


module.exports = app;