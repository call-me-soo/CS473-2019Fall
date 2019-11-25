var express = require('express');
var router = express.Router();
var companies = require('../companies.json');
var bodyParser = require('body-parser');
const Company = require('../models/company');

router.get('/', function(req, res){
  Company.find(function(err, companies){
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(companies);
  })
})

router.get('/:ID', function(req, res){
  Company.findOne({ID: req.params.ID}, function(err, company){
    if(err) return res.status(500).json({error: err});
    if(!company) return res.status(404).json({error: 'company not found'});
    res.json(company);
  })
})

// router.get('/', function(req, res, next) {
//   res.send(companies)
// });

// router.get('/:ID', function (req, res, next) {
//     // console.log('ID')
//     var id = parseInt(req.params.ID, 10)
//     // console.log(id)
//     var companybyID = companies.filter(function (company) {
//         return company.ID === id
//     });
//     res.send(companybyID)
// });

module.exports = router;
