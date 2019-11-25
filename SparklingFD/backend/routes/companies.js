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
router.post('/add', function(req, res){
  var company = new Company();
  company.ID = req.query.ID;
  company.name = req.query.name;
  company.logosrc = req.query.logosrc;
  company.field = req.query.field;
  company.location = req.query.location;
  company.recommend = req.query.recommend;
  company.star = req.query.star;
  company.salary = req.query.salary;
  company.reviews = req.query.reviews;

  company.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      res.json({result: 1});

  });
});
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
