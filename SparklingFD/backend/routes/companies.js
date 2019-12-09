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
    var zero = 0
    var one = 0
    var two = 0
    var three = 0
    var four = 0
    console.log("여기부터야야")
    console.log(company.reviews)
    if(company.reviews){
      console.log(company.reviews.length)
      for (var i = 0; i < company.reviews.length; i++) {
        console.log(company.reviews[i].review.star[0])
        console.log(company.reviews[i].review.star[1])
        console.log(company.reviews[i].review.star[2])
        console.log(company.reviews[i].review.star[3])
        console.log(company.reviews[i].review.star[4])
        zero = zero + company.reviews[i].review.star[0];
        one = one + company.reviews[i].review.star[1];
        two = two + company.reviews[i].review.star[2];
        three = three + company.reviews[i].review.star[3];
        four = four + company.reviews[i].review.star[4];
      }
      company.star[0] = zero / company.reviews.length
      company.star[1] = one / company.reviews.length
      company.star[2] = two / company.reviews.length
      company.star[3] = three / company.reviews.length
      company.star[4] = four / company.reviews.length
    }
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
// router.put('/mod/update/:companyId', function(req, res){
  // Company.findOne({ID: req.params.companyId}, function(err, company){
  //   console.log("찾으면");
  //   console.log(company);
  //   if(err) return res.status(500).json({ error: 'database failure' });
  //   if(!company) return res.status(404).json({ error: 'company not found' });
  //   console.log("들어갈땐1");
  //   console.log(req.body.salary);
  //   console.log(parseInt(req.body.salary));
  //   console.log(company.salary);
  //   var numofreviews = company.reviews.length
  //   company.salary = ((company.salary * numofreviews) + parseInt(req.body.salary)) / numofreviews
  //   company.salarypercent = String(company.salary) + "%"
  //   // company.star[0] = ((company.star[0] * numofreviews) + req.body.star[0]) / numofreviews
  //   // company.star[1] = ((company.star[1] * numofreviews) + req.body.star[1]) / numofreviews
  //   // company.star[2] = ((company.star[2] * numofreviews) + req.body.star[2]) / numofreviews
  //   // company.star[3] = ((company.star[3] * numofreviews) + req.body.star[3]) / numofreviews
  //   // company.star[4] = ((company.star[4] * numofreviews) + req.body.star[4]) / numofreviews
  //   console.log("들어갈땐2");
  //   // console.log(company.star);
  //   console.log(company.salary);
  //   company.save(function(err){
  //     if(err){
  //         console.error(err);
  //         res.json({result: 0});
  //         return;
  //     }
  //     res.json({result: 1});
  //   })
  // })
// })
router.put('/mod/:companyId', function(req, res){
  console.log("컴패니 아이디는");
  console.log(req.params.companyId);
  console.log("내용은");
  console.log(req.body.body);
  console.log(req.body.body.review);
  Company.findOneAndUpdate({ID: req.params.companyId}, {$push: {reviews: req.body.body}}, function(err, company){
    console.log("찾으면");
    console.log(req.body.body)
    console.log("이거랑")
    console.log(company);
    console.log(company.reviews);
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!company) return res.status(404).json({ error: 'company not found' });
  })
  Company.findOne({ID: req.params.companyId}, function(err, company){
    console.log("찾으면");
    console.log(company);
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!company) return res.status(404).json({ error: 'company not found' });
    console.log("들어갈땐1");
    console.log(req.body.salary);
    console.log(parseInt(req.body.salary));
    console.log(company.salary);
    var numofreviews = company.reviews.length + 1;
    console.log("Sogood")
    console.log(numofreviews)
    console.log(company.salary)
    console.log(company.salary * numofreviews)
    console.log((company.salary * numofreviews) + parseInt(req.body.salary))
    company.salary = ((company.salary * (numofreviews - 1)) + parseInt(req.body.salary)) / numofreviews
    var totalreview = 0
    for (var i = 0; i < company.reviews.length; i++) {
      if(company.reviews){
        totalreview = totalreview + company.reviews[i].review.star[2]
      }
    }
    company.salarypercent = (totalreview / numofreviews) * 20
    // company.star[0] = ((company.star[0] * numofreviews) + req.body.star[0]) / numofreviews
    // company.star[1] = ((company.star[1] * numofreviews) + req.body.star[1]) / numofreviews
    // company.star[2] = ((company.star[2] * numofreviews) + req.body.star[2]) / numofreviews
    // company.star[3] = ((company.star[3] * numofreviews) + req.body.star[3]) / numofreviews
    // company.star[4] = ((company.star[4] * numofreviews) + req.body.star[4]) / numofreviews
    console.log("들어갈땐2");
    // console.log(company.star);
    console.log(company.salary);
    company.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }
      res.json({result: 1});
    })
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
