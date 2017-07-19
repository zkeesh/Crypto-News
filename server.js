//  MONGOOSE
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var db = mongoose.connection;
mongoose.connect("mongodb://localhost/cryptonetnews");

//  EXPRESS
var express = require('express');
var app = express();

//  EXPRESS-HANDLEBARS
var exphbs = require('exphbs');
app.engine('hbs', require('exphbs'));
app.set('view engine', 'hbs');

// IMPORT THE ARTICLE MODEL
var Article = require("./models/article.js");

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
