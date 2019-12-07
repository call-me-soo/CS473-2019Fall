var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
var passport = require("../config/passport");
const User = require('../models/user');

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
   
// signup page
app.get("/signup", function(req, res){
    var user = req.flash("user")[0] || {};
    var errors = req.flash("errors")[0] || {};
    res.render("/signup", {user: user, errors: errors});
});

// create
app.post("/", function(req, res){
    User.create(req.body, function(err, user){
        if(err) {
            req.flash("user", req.body);
            req.flash("errors", parseError(err));
            return res.json(err);
        }
        res.json({result: 1});
    });
});

//post Login
app.post('/signin', (req, res, next) => {
    passport.authenticate("local-login", (err, user, info) => {
        if (err) res.json(401, 'fuck!! bitch')
        if (!user) res.json(404, `there's no one you find out bitch`)
        User.findOne({_id: user._id})
        .then(currentUser => {
            return res.json({
                _id: user._id,
                nickname: currentUser.nickname,
            })
        })
    })(req, res, next)
})

//Logout
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

// Functions
function parseError(errors){
    var parsed = {};
    if(errors.name == 'ValidationError'){
        for(var name in errors.errors){
            var validationError = errors.errors[name];
            parsed[name] = { message:validationError.message };
        }
    } else if(errors.code == "11000" && errors.errmsg.indexOf("username") > 0) {
        parsed.username = { message:"This username already exists!" };
    } else {
        parsed.unhandled = JSON.stringify(errors);
    }
    return parsed;
}

module.exports = app;