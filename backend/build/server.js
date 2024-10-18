"use strict";

var express = require('express');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
var app = express();
var path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express["static"](path.join(__dirname, '../../frontend/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
  });
}
app.use(express.json());
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('MongoDB connected');
})["catch"](function (err) {
  return console.log(err);
});
// Basic route
app.get('/', function (req, res) {
  res.send('API is running...');
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT));
});