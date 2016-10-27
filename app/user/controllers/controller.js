var user = require('../models/user');
var userModel = require('../models/model');
var express = require('express');

module.exports = function(app){ 
	app.get('/getAllUsers', function(req, res){
        // get and return all the todos after you create another
        userModel.getAllUsers().exec(function (err, result) {
            res.json(result);
        });
	});

	app.post('/newUser', function(req, res){
		user.create({
            name : req.body.name,
            username : req.body.username,
            password : req.body.password
        }, function(err, result) {
            if (err){
                res.send(err);
            }
            else{
	        	res.send(result);
	        }
        });
	});

    app.get('/admin', function(req, res){
        res.render('index.html', { data : '123' });
    });
}