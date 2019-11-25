var express = require('express');
var router = express.Router();
var reviews = require('../reviews.json');
var companies = require('../companies.json');
var users = require('../users.json');

router.get('/', function(req, res, next) {
  res.send(reviews)
});
router.post('/output', function(req, res){
    var result = {  };
    var username = req.params.username;
    if(!req.body["companyID"] || !req.body["userID"] || !req.body["semester"] || !req.body["review"]){
        result["success"] = 0;
        result["error"] = "invalid request";
        res.json(result);
        return;
    }
    var companybyID = companies.filter(function (company) {
        return company.ID === req.body.companyID
    });
    var userbyID = users.filter(function (user) {
        return user.id === req.body.userID
    });
    var reviews = req.body.review.star.split(',')
    var sum = 0
    for (var i = 0; i < reviews.length; i++){
        sum = sum + parseInt(reviews[i].replace(']','').replace('[',''))
    }
    result = {
        id:1,
        company: companybyID,
        user: userbyID,
        semester: req.body.semester,
        like: 0,
        review: {"aggregate": sum/5,"star": req.body.review.star, "content": req.body.review.content}
    }
    console.log(result)
    res.json(result)  
    res.end(result);
});

module.exports = router;
