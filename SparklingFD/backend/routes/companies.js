var express = require('express');
var router = express.Router();
var companies = require('../exampleCompanies.json');
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
  // company.star = req.query.star;
  // company.salary = req.query.salary;
  company.star = [0, 0, 0, 0, 0];
  company.salary = 0;
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

router.put('/mod/update/:companyId', function(req, res){
  Company.findOne({ID: req.params.companyId}, function(err, company){
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!company) return res.status(404).json({ error: 'company not found' });
    var numofreviews = company.reviews.length
    company.salary = ((company.salary * numofreviews) + parseInt(req.body.salary)) / numofreviews
    company.salarypercent = String(company.salary) + "%"
    company.star[0] = ((company.star[0] * numofreviews) + req.body.star[0]) / numofreviews
    company.star[1] = ((company.star[1] * numofreviews) + req.body.star[1]) / numofreviews
    company.star[2] = ((company.star[2] * numofreviews) + req.body.star[2]) / numofreviews
    company.star[3] = ((company.star[3] * numofreviews) + req.body.star[3]) / numofreviews
    company.star[4] = ((company.star[4] * numofreviews) + req.body.star[4]) / numofreviews
    company.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }
      res.json({result: 1});
    })
  })
})
// router.put('/mod/:companyId', function(req, res){
//   Company.findOneAndUpdate({ID: req.params.companyId}, {$push: {reviews: req.body}}, function(err, company){
//     if(err) return res.status(500).json({ error: 'database failure' });
//     if(!company) return res.status(404).json({ error: 'company not found' });
//     res.json({result:1});
//   })
// });

module.exports = router;
