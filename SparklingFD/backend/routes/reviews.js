var express = require('express');
var router = express.Router();
var reviews = require('../reviews.json');

router.get('/', function(req, res, next) {
  res.send(reviews)
});

router.get('/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10)
    var review = reviews.filter(function (review) {
        return review.id === id
    });
    res.send(review)
});

router.get('/company/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10)
    var companyInfo = reviews.filter(function (companyInfo) {
        return companyInfo.company.id === id
    });
    res.send(companyInfo)
});

module.exports = router;
