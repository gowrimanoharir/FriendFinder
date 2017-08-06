var express = require('express');
var bodyParser = require('body-parser');
//var path=require('path');

var app = express();


var PORT = process.env.PORT || 3010;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

  /*  app.use(function(req, res){
        res.sendFile(path.join(__dirname, 'app/public/home.html'));
    });*/

app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});
