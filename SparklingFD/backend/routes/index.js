var express = require('express');
var router = express.Router();
var passport = require("../config/passport");

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

//signin page
router.get('/signin', function(req, res){
  var username = req.flash("username")[0];
  var errors = req.flash("errors")[0] || {};
  res.render('/signin', {
    username: username,
    errors: errors
  });
});

//post login
router.post('/signin', function(req, res, next){
  var errors = {};
  var isValid = true;
  if(!req.body.username) {
    isValid = false;
    errors.username = "Username is required";
  }
  if(!req.body.password) {
    isValid = false;
    errors.password = "Password is required";
  }
  if(isValid){
    next();
  } else {
    req.flash("errors", errors);
    res.redirect('/signin');
  }
}, passport.authenticate("local-login",{
    successRedirect: "/",
    failureRedirect: "/signin"
  }
));

// Logout
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
