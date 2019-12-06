var express = require('express');
var router = express.Router();
var reviews = require('../reviews.json');
var bodyParser = require('body-parser');
const Review = require('../models/review');

// router.post('/', function(req, res){
//     var review = new Review();
//     review.id = req.body.id;
//     review.company = req.body.company;
//     review.user = req.body.user;
//     review.semester = req.body.semester;
//     review.like = req.body.like;
//     review.review = req.body.review;
//     console.log(review)
//     review.save(function(err){
//         if(err){
//             console.error(err);
//             res.json({result: 0});
//             return;
//         }
//         res.json({result: 1});
//     });
// });
router.post('/', function(req, res){
    var review = new Review();
    console.log("initial");
    console.log(review);
    console.log(review.id);
    review.id = req.body.id;
    console.log("Them");
    console.log(review);
    console.log(req.body.id);
    console.log(review.id);
    review.company = req.body.company;
    review.user = req.body.user;
    review.semester = req.body.semester;
    review.like = req.body.like;
    review.review = req.body.review;
    console.log(review);
    console.log(review.id)
    console.log(req.body.id);
    review.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }
        res.json({result: 1});
    });
});

module.exports = router;

