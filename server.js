var mongoose = require('mongoose');
var express = require('express');
var exphbs = require('exphbs');

mongoose.Promise = Promise;

var app = express();

app.engine('hbs', require('exphbs'));

app.set('view engine', 'hbs');
