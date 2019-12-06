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


//signin page
app.get('/signin', function(req, res){
    var username = req.flash("username")[0];
    var errors = req.flash("errors")[0] || {};
    res.render('/signin', {
      username: username,
      errors: errors
    });
  })
  
//post Login
app.post('/signin',function(req,res,next){
    var errors = {};
    var isValid = true;
    if(!req.body.username){
        isValid = false;
        errors.username = "Username is required!";
    }
    if(!req.body.password){
        isValid = false;
        errors.password = "Password is required!";
    }
    if(isValid){
        next();
    } else {
        req.flash("errors",errors);
        res.redirect("/signin");
    }
}, passport.authenticate("local-login", {
    successRedirect : "/",
    failureRedirect : "/signin"
}));

//Logout
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = app;