// set up ======================================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');  
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./config/database');

// configuration ===============================================================
mongoose.connect(database.url);

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

//app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================
require('./app/routes')(app);

// listen (start app with node server.js) ======================================
var port = 3000;
app.listen(port, function(){
	console.log('app listen on '+port);
});