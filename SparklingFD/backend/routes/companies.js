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

var stars
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
      stars = company.star
    }
    res.json(company);
  })
  Company.findOneAndUpdate({ID: req.params.ID}, {$set: {star: stars}}, function(err, company){
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!company) return res.status(404).json({ error: 'company not found' });
  })
})

router.put('/:ID', function(req, res){
  Company.findOne({ID: req.params.ID}, function(err, company){
    if(err) return res.status(500).json({ error: 'database failure' });
    if(!company) return res.status(404).json({ error: 'company not found' });

    Review.find({'company.id': Number(req.params.ID)}, function(err, reviews){
      if (err) return res.status(500).send('database failure');
      if (!reviews) return res.status(404).send("reviews not found");
      
      var sumMajor = {'전산': 0, '기계': 0, '전자': 0, '산디': 0, '생화공': 0, '신소재': 0, '기타': 0};
      var sumSalary = 0;
      var sumStar = [0,0,0,0,0];
      var numReviews = 0;

      reviews.map(review => {
        Object.keys(sumMajor).forEach(e => {
          if (e == review.user.major){
            sumMajor[review.user.major]++;
          }
        })
        sumSalary += Number(review.review.salary);
        for (var i = 0; i < 5; i++) {
          sumStar[i] += Number(review.review.star[i]);
        }
        numReviews ++;
      })

      company.recommend = Object.keys(sumMajor).sort((a, b) => {return Number(sumMajor[b]) - Number(sumMajor[a])}).slice(0,2);
      company.salary = Number((sumSalary / numReviews).toFixed(2));
      for (let i = 0; i < 5; i++) {
        company.star[i] = Number((sumStar[i] / numReviews).toFixed(2))
      }

      // http://blog.adeel.io/2016/03/06/mongoose-save-to-update-value-in-array/
      company.markModified('star');
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
