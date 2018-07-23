var Articulo = require('../models/articulos');
var Boom = require('boom');

module.exports = function( server ) {
  server.route({
    method: 'GET',
    path: '/api/v1/articles',
    handler: function( req, rep) {
      Articulo.find(function(err, articulos){
        if( err ) { return rep(Boom.badRequest() ); }

        rep({articulos: articulos});
      });
    }
  })
}
