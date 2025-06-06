const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');;
const handleRequest = require("./service/middleware/handleRequest");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



handleRequest(app);

module.exports = app;
