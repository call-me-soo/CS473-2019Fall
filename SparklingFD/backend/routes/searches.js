var express = require('express');
var router = express.Router();
var reviews = require('../reviews.json');

router.get('/', function(req, res, next) {
  res.send(reviews)
});

router.get('/userinput', function (req, res, next) {
    // res.send(req.query.harness + req.query.atmosphere + req.query.salary + req.query.learn + req.query.welfare)
    var numofrev = 0
    var revcards = []
    var review = reviews.filter(function (review) {
        var harness_start = parseInt(req.query.harness.split(',')[0].replace('[',''))
        var harness_end = parseInt(req.query.harness.split(',')[1].replace(']',''))
        var atmosphere_start = parseInt(req.query.atmosphere.split(',')[0].replace('[',''))
        var atmosphere_end = parseInt(req.query.atmosphere.split(',')[1].replace(']',''))
        var salary_start = parseInt(req.query.salary.split(',')[0].replace('[',''))
        var salary_end = parseInt(req.query.salary.split(',')[1].replace(']',''))
        var learn_start = parseInt(req.query.learn.split(',')[0].replace('[',''))
        var learn_end = parseInt(req.query.learn.split(',')[1].replace(']',''))
        var welfare_start = parseInt(req.query.welfare.split(',')[0].replace('[',''))
        var welfare_end = parseInt(req.query.welfare.split(',')[1].replace(']',''))
        if ((review.review.star[0] >= harness_start) && (review.review.star[0] <= harness_end) &&
            (review.review.star[1] >= atmosphere_start) && (review.review.star[0] <= atmosphere_end) &&
            (review.review.star[2] >= salary_start) && (review.review.star[0] <= salary_end) &&
            (review.review.star[3] >= learn_start) && (review.review.star[0] <= learn_end) &&
            (review.review.star[4] >= welfare_start) && (review.review.star[0] <= welfare_end)){
            revcards.push(review)
            numofrev = numofrev + 1
        }
    });
    res.send({'reviewNumber':numofrev, 'reviews':revcards})
});

module.exports = router;
