var path = require('path');
var friends = require('../data/friends');
var questions = require('../data/questions');

module.exports = function(app){
  
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.get('/api/survey', function(req, res){
        res.json(questions);
    });    
  

    app.post('/api/friends', function(req, res){
        var newUser = req.body;
        var matchUser = findMatch(newUser);
        res.json(matchUser);
        friends.push(newUser);
    });    

};

function findMatch(newUser){
    var bestMatchDiff=0, tmpScoreDiff, bestMatch=0;
    friends.forEach(function(curUser, i){
        console.log(bestMatchDiff, tmpScoreDiff, bestMatch);
        tmpScoreDiff=0;
        for(j=0; j<newUser.scores.length; j++){
            tmpScoreDiff+=Math.abs(newUser.scores[j]-curUser.scores[j]);
        }
        if(bestMatchDiff>tmpScoreDiff || i===0){
            bestMatchDiff=tmpScoreDiff;
            bestMatch=i;
            console.log(bestMatchDiff, tmpScoreDiff, bestMatch);
        }
    });

    console.log(friends[bestMatch]);
    return friends[bestMatch];
}


