//require the friends file which contains the user data
var friends = require('../data/friends');

//require the questions file which contains the survey questions that should be displayed
var questions = require('../data/questions');


//create a export function with api routes
module.exports = function(app){
  
    //define the friends api route to send the json of users from friends file
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    //define the survey api route to send the array of questions from questions file
    app.get('/api/survey', function(req, res){
        res.json(questions);
    });    
  
    //api to handle the user submitted data and calls the function to find the best match of friend
    app.post('/api/friends', function(req, res){
        var newUser = req.body;
        //call the findMatch function passing the new user information
        var matchUser = findMatch(newUser);

        //send back the matched user to html ti display in a modal box
        res.json(matchUser);
        friends.push(newUser);
    });    

};

//function to find the best friend match
function findMatch(newUser){
    //initiate bestmatch score difference as 0 temporarily
    var bestMatchDiff=0, tmpScoreDiff, bestMatch=0;

    //loop through the array of friends
    friends.forEach(function(curUser, i){
        console.log(bestMatchDiff, tmpScoreDiff, bestMatch);
        //initiate the temp score difference variable that will hold the difference of scores between current user in array vs new user
        tmpScoreDiff=0;

        //loop through the scores of the current user and new user to find the total difference
        for(j=0; j<newUser.scores.length; j++){
            tmpScoreDiff+=Math.abs(newUser.scores[j]-curUser.scores[j]);
        }
        
        /*if the best natch difference is greater than the calculated difference for current user & new user then swap the score and store
        the index of current user in bestMatch variable*/
        if(bestMatchDiff>tmpScoreDiff || i===0){
            bestMatchDiff=tmpScoreDiff;
            bestMatch=i;
            console.log(bestMatchDiff, tmpScoreDiff, bestMatch);
        }
    });

    console.log(friends[bestMatch]);
    //return the final best matched user details
    return friends[bestMatch];
}


