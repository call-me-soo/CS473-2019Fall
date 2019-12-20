var express = require('express');
var router = express.Router();
const Review = require('../models/review');

//모든 리뷰 불러오기 (최신순)
router.get('/', function(req, res){
    Review.find().sort({_id: -1}).exec(function(err, reviews){
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

//리뷰 1개에 좋아요+1 반영하기
router.put('/like/:id', function(req, res){
    Review.findOneAndUpdate({id: req.params.id}, {$inc: {like: 1}}, function(err, doc){
        if (err) return res.status(500).send("MongoDB error");
        if (!doc) return res.status(404).send("Reviews not found");
        return res.send("좋아요");
    })
})

//리뷰 1개에 좋아요-1 반영하기
router.put('/likedown/:id', function(req, res){
    Review.findOneAndUpdate({id: req.params.id}, {$inc: {like: -1}}, function(err, doc){
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
    
    Review.count({}, (err, count) => {
        if (err) res.redirect('/reviews/new');
        req.body.id = count + 1;

        Review.create(req.body, (err, review) => {
            if (err) {
                req.flash("review", req.body);
                req.flash("error", err);
                return res.redirect('/reviews/new');
            }

            console.log(review);
            Review.find((err, doc) => {
                if (err) return res.status(500);

                var salaries = new Set(doc.map(review => review.review.salary)); // Set {100, 300, 200}
                var orderedSalaries = Array.from(salaries).sort((a,b) => b-a); // [300, 200, 100]
                var updates = [];
                doc.map(review => {
                    var updatePromise = Review.updateOne(
                        {"_id": review._id},
                        {$set: {
                            "review.salaryPercent": Number((orderedSalaries.indexOf(review.review.salary) / (orderedSalaries.length - 1) * 100).toFixed(2)),
                            "review.star.2": Number(((1 - orderedSalaries.indexOf(review.review.salary) / (orderedSalaries.length - 1)) * 5).toFixed(2)),
                            // "review.aggregate": Number((review.review.star.reduce((a, b) => a + b, 0) / 5).toFixed(2))
                            "review.aggregate": Number(((review.review.star[0] + review.review.star[1] + review.review.star[3] + review.review.star[4] + Number(((1 - orderedSalaries.indexOf(review.review.salary) / (orderedSalaries.length - 1)) * 5).toFixed(2))) / 5).toFixed(2))
                        }});
                    updates.push(updatePromise);
                });
                Promise.all(updates).then(function(results){
                    return res.send(results);
                });
            })
        })
    });
})

//한 회사에 대한 리뷰 불러오기
router.get('/company/:id', function(req, res){
    Review.find({'company.id': Number(req.params.id)}).sort({_id:-1}).exec(function(err, doc){
        if (err) return res.status(500).send("MongoDB error");
        if (!doc) return res.status(404).send("reviews not found");
        return res.json(doc);
    })
})

module.exports = router;
