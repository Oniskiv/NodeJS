'use strict';
var config = require('./config/config');
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var mongoose = require("mongoose");

mongoose.connect(config.mongodb.url + '/' + config.mongodb.dbName)
    .then(() => console.log('Connecting to the mongo successfully'))
    .catch((err) => console.error(err));
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
