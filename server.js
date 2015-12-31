module.exports = function(){

  var StaticServer = require('static-server');
  var PATH = arguments[0] || './app';

  var server = new StaticServer({
    rootPath: PATH,
    port: 3000
  });

  server.start(function(){
    console.log('Server started on port ' + server.port + ' ... path: ' + server.rootPath);
  });
  
};


