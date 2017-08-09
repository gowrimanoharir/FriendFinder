//require express and body parser

var express = require('express');
var bodyParser = require('body-parser');

//instantiate express instance
var app = express();

//define the port variable to use process env or port no whichever is available
var PORT = process.env.PORT || 4000;

//initiate bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//require the api routes file to get the routing setup for api's
require('./app/routing/apiRoutes.js')(app);

//require the api routes file to get the routing setup for html
require('./app/routing/htmlRoutes.js')(app);


//initiate server listen
app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});
