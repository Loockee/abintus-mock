'use strict';

const SwaggerRestify = require('swagger-restify-mw');
const restify = require('restify');
const Logger = require('bunyan');
const logger = new Logger({name: 'contractsApi'});
const app = restify.createServer({
  name: 'contractsApi',
  log: logger
});

module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

SwaggerRestify.create(config, function(err, swaggerRestify) {
  if (err) { throw err; }

  swaggerRestify.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerRestify.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
