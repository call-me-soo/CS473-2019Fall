var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
const User = require('../models/user');

//create new user
app.post('/add', function(req, res){
    var user = new User();
    user.userid = req.query.userid;
    user.pw = req.query.pw;
    user.major = req.query.major;
    user.nickname = req.query.nickname;

    user.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
});

//Index
app.get('/', function(req,res){
    User.find(function(err, users){
        if(err){
            console.log('database failure error');
            return res.status(500).send({error: 'database failure'});
        }
        res.json(users);
    })
});

module.exports = app;