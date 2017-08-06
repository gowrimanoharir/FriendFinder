var path = require('path');
var friends = require('../data/friends')

module.exports = function(app){
  
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });
  

    app.post('/api/friends', function(req, res){
        var newUser = req.body;
        friends.push(newUser);
        var matchUser = findMatch(newUser);
        res.json(matchUser);
    });    

};

function findMatch(newUser){
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
    return friends[bestMatch];
}


