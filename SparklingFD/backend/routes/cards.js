var express = require('express');
var router = express.Router();
var cards = require('../cards.json');
var bodyParser = require('body-parser');
const Review = require('../models/review');

router.get('/', function(req, res){
  Review.find(function(err, reviews){
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(reviews);
  })
})

router.get('/:id', function(req, res){
  Review.findOne({id: req.params.id}, function(err, review){
    if(err) return res.status(500).json({error: err});
    if(!review) return res.status(404).json({error: 'review not found'});
    res.json(review);
  })
})

// router.get('/', function(req, res, next) {
//   res.send(cards)
// });

// router.get('/:id', function (req, res, next) {
//     var id = parseInt(req.params.id, 10)
//     var card = cards.filter(function (card) {
//         return card.id === id
//     });
//     res.send(card)
// });

module.exports = router;
