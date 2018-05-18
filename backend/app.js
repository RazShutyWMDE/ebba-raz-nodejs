var express = require('express');
var app = express();

var SomethingController = require('./controllers/SomethingController');
app.use('/something', SomethingController);

module.exports = app;