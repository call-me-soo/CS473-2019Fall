var express = require('express');
var router = express.Router();
var companies = require('../companies.json');

router.get('/', function(req, res, next) {
  res.send(companies)
});

router.get('/:ID', function (req, res, next) {
    // console.log('ID')
    var id = parseInt(req.params.ID, 10)
    // console.log(id)
    var companybyID = companies.filter(function (company) {
        return company.ID === id
    });
    res.send(companybyID)
});

module.exports = router;
