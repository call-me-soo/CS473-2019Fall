var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const Review = require('../models/review');

//모든 리뷰 불러오기
router.get('/', function(req, res){
    Review.find(function(err, reviews){
        if(err){
            console.log('database failure error');
            return res.status(500).send({error: 'database failure'});
        }
        res.json(reviews);
    })
})

//베스트 리뷰 불러오기
router.get('/best', function(req, res){
    Review.find().sort({like:-1}).limit(10).exec(function(err, doc){
        if (err) return res.status(500).send("MongoDB error");
        if (!doc) return res.status(404).send("Review not found");
        res.json(doc);
    })
})


//리뷰 1개 불러오기
router.get('/:id', function(req, res){
    Review.findOne({id: req.params.id}, function(err, doc){
        if (err) return res.status(500).send("MongoDB error");
        if (!doc) return res.status(404).send("Review not found");
        res.json(doc);
    })
})

//리뷰 1개에 좋아요 반영하기
router.put('/like/:id', function(req, res){
    Review.findOneAndUpdate({id: req.params.id}, {$inc: {like: 1}}, function(err, doc){
        if (err) return res.status(500).send("MongoDB error");
        if (!doc) return res.status(404).send("Reviews not found");
        return res.send("좋아요");
    })
})


//리뷰 작성 페이지 불러오기
router.get("/new", function(req, res){
    var review = req.flash("review")[0] || {};
    var errors = req.flash("errors")[0] || {};
    res.render("reviews/new", { review:review, errors:errors });
});

//리뷰 제출하기
router.post('/', function(req, res){
    Review.create(req.body.body, function(err, review){
        if (err) {
            req.flash("review", req.body.body);
            req.flash("error", err);
            return res.redirect('/reviews/new');
        }
        return res.json({result: 1});
    })
})

//한 회사에 대한 리뷰 불러오기
router.get('/company/:id', function(req, res){
    Review.find({company: {id: req.params.id}}, function(err, doc){
        if (err) return res.status(500).send("MongoDB error");
        if (!doc) return res.status(404).send("review not found");
        return res.json(doc);
    })
})
module.exports = router;
