'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

// Routes
var routes = require('./routes/master');

server.connection({port: 3000, host: 'localhost'});

server.route(routes);

server.start((err) => {
  if (err){
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
})