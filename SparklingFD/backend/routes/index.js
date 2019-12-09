var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
var passport = require("../config/passport");

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = app;
