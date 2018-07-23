process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if( process.env.NODE_ENV === 'development' ) {
  require('node-env-file')('.env');
  console.log('Running Development!');
}

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
