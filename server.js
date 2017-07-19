//  MONGOOSE
var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect("mongodb://localhost/cryptonetnews");
mongoose.Promise = Promise;

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
app.listen(3000, function() {
  console.log("Listening on port 3000");
});
