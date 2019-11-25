var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
const User = require('../models/user');

app.post('/add', function(req, res){
    var user = new User();
    user.id = req.query.id;
    user.userid = req.query.userid;
    user.pw = req.query.pw;
    user.department = req.query.department;
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

app.get('/', function(req,res){
    User.find(function(err, users){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users);
    })
});

module.exports = app;