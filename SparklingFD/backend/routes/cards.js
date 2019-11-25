var express = require('express');
var router = express.Router();
var cards = require('../cards.json');

router.get('/', function(req, res, next) {
  res.send(cards)
});

router.get('/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10)
    var card = cards.filter(function (card) {
        return card.id === id
    });
    res.send(card)
});

module.exports = router;
