
var user = require('./user');


module.exports.getAllUsers = function(){
    
    return user.find({});
}

