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
router.put('/mod/:companyId', function(req, res){
  console.log("컴패니 아이디는");
  console.log(req.params.companyId);
  console.log("내용은");
  console.log(req.body.body);
  console.log(req.body.body.review);
  Company.findOneAndUpdate({ID: req.params.companyId}, {$push: {reviews: req.body.body}}, function(err, company){
    console.log("찾으면");
    console.log(company);
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!company) return res.status(404).json({ error: 'company not found' });
  })
  // Company.findOne({ID: req.params.companyId} {$push: {reviews: req.body.body.review}}, function(err, company){
  //   console.log("찾으면");
  //   console.log(company);
  //   if(err) return res.status(500).json({ error: 'database failure' });
  //   if(!company) return res.status(404).json({ error: 'company not found' });

  //   if(req.body.body.review) company.reviews = company.reviews.append(req.body.body.review);
  //   console.log("들어갈땐");
  //   console.log(company.reviews);
  //     company.save(function(err){
  //     if(err){
  //         console.error(err);
  //         res.json({result: 0});
  //         return;
  //     }

  //     res.json({result: 1});
  //   })
  // })

});
// { _id: req.body.id }, 
//    { $push: { friends: objFriends  } },

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
