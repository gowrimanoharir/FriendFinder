
var path = require('path');


module.exports = function(app){
  
    //define the route to display the Surver page
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    
    //any other route will result in hold page being displayed
    app.use(function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    

};


