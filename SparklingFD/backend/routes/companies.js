var express = require('express');
var router = express.Router();
const Company = require('../models/company');
const Review = require('../models/review');

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

router.put('/:ID', function(req, res){
  Company.findOne({ID: req.params.ID}, function(err, company){
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!company) return res.status(404).json({ error: 'company not found' });

    Review.find({'company.id': Number(req.params.ID)}, function(err, reviews){
      if (err) return res.status(500).send('database failure');
      if (!reviews) return res.status(404).send("reviews not found");
      
      var sumSalary = 0;
      var sumStar = [0,0,0,0,0];
      var numReviews = 0;

      reviews.map(review => {
        sumSalary += Number(review.review.salary);
        for (var i = 0; i < 5; i++) {
          sumStar[i] += Number(review.review.star[i]);
        }
        numReviews ++;
      })

      company.salary = Number((sumSalary / numReviews).toFixed(2));
      for (let i = 0; i < 5; i++) {
        company.star[i] = Number((sumStar[i] / numReviews).toFixed(2))
      }
      company.reviews = reviews;

      // http://blog.adeel.io/2016/03/06/mongoose-save-to-update-value-in-array/
      company.markModified('star');
      company.markModified('reviews');

      company.save(function(err){
        if(err) return res.send(err);
        return res.send({result: 1});
      })

    })
  })
})

router.put('/', function(req, res){
  Company.find((err, doc) => {
    if (err) return res.status(500).send('mongoDB error');
    if (!doc) return res.status(404).send('companies not found');
    var salaries = new Set(doc.map(company => company.salary)); // Set {100, 300, 200}
    var orderedSalaries = Array.from(salaries).sort((a, b) => b - a); // [300, 200, 100]
    var denominator = orderedSalaries.length == 1 ? 1 : orderedSalaries.length - 1;
    var updates = [];
    doc.map(company => {
      var updatePromise = Company.updateOne(
          {"_id": company._id},
          {$set: {"salaryPercent": Number((orderedSalaries.indexOf(company.salary) / denominator * 100).toFixed(2))}}
      );
      updates.push(updatePromise);
    });
    Promise.all(updates).then(function(results){
      return res.send(results);
    });
  });
})

module.exports = router;
