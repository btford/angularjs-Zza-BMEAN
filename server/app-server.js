/**
 * Express application server handling all client requests
 */
var express        = require('express')
    , bodyParser   = require('body-parser')
    , compress     = require('compression')
    , favicon      = require('static-favicon')
    , fileServer   = require('serve-static')
    , logger       = require('morgan')
    , cors         = require('cors')

    , breezeRoutes = require('./zza/breeze-routes')
    , errorHandler = require('./zza/errorHandler')

    , port         = process.env["PORT"] || 8080
    , app          = express()

    , workingDir   = process.cwd();
    // , workingDir   = process.cwd() + '/client';      enable for Heroku deployment...

    app.use( favicon()                  );
    app.use( logger('dev')              );
    app.use( compress()                 );
    app.use( bodyParser.json()          );
    app.use( bodyParser.urlencoded()    );
    app.use( cors()                     );        // enable ALL CORS requests

    breezeRoutes.configure( app );                // Configure both breeze-specific routes for REST API

    // Support static file content
    app.use( fileServer( workingDir ));

    app.use( errorHandler );

    // Start listening for HTTP requests
    app.listen( port );

    // Configuration logging
    console.log('env = '+ app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + workingDir );
    console.log('\nListening on port '+ port);


module.exports = app;

