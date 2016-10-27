
var user = require('./user');


module.exports.getAllUsers = function(){
	/*user.find(function(err, result) {
        if (err){
            console.log(err);
        }else{
        	console.log(result);
        }
    });*/

    console.log(yield user.find().Schema);
}

