
var mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    name : String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

