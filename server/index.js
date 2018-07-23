
require('mahrio').runServer( process.env, __dirname)
  .then( server => {
    require('./routes')( server );

    server.route({
      method: 'GET',
      path: '/{any*}',
      handler: function(req, rep){
        rep.file('./dist/toroinvestments/index.html');
      }
    });
    server.route({
      method: 'GET',
      path: '/assets/{any?}',
      handler: {
        directory: {
          path: './dist/toroinvestments/'
        }
      }
    });
  });
