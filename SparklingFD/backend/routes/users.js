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
    if(req.body.username == '' || req.body.password == '' || req.body.passwordConfirmation == '' || req.body.department == ''){
        return res.status(400).send("필수 항목을 입력해주세요.")
    }
    User.findOne({username: req.body.username}, function(err, doc){
        if (err) {
            return res.status(500).send("MongoDB Error");
        } else if (doc){
            return res.status(400).send("이미 존재하는 ID입니다.");
        } else {
            if (req.body.password !== req.body.passwordConfirmation){
                return res.status(400).send("확인 비밀번호가 일치하지 않습니다.");
            }
            User.create(req.body, function(err, user){
                if (err){
                    req.flash("user", req.body);
                    req.flash("errors", parseError(err));
                    return res.redirect('/signup');
                }
                return res.json({result: 1});
            });
        }
    })
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
                department: currentUser.department
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