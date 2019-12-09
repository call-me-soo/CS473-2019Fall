var express = require('express');
var router = express.Router();
var reviews = require('../exampleReviews.json');
var companies = require('../exampleCompanies.json');
var bodyParser = require('body-parser');
const Company = require('../models/company');

router.get('/', function(req, res){
    Company.find(function(err, companies){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(companies);
    })
})

router.get('/userinput', function (req, res){
    var numofrev = 0
    var revcards = []
    var harness_start = parseInt(req.query.harness)
    var atmosphere_start = parseInt(req.query.atmosphere)
    var salary_start = parseInt(req.query.salary)
    var learn_start = parseInt(req.query.learn)
    var welfare_start = parseInt(req.query.welfare)
    if(req.query.input == "all"){
        Company.find({$and: [
                {"star.0":{$gte:harness_start}},
                {"star.1":{$gte:atmosphere_start}},
                {"star.2":{$gte:salary_start}},
                {"star.3":{$gte:learn_start}},
                {"star.4":{$gte:welfare_start}}]}, function(err, companies) {
            if(err) return res.status(500).json({error: err});
            if(!companies) return res.status(404).json({error: 'company not found'});
            res.json(companies);
        })
    }else{
        Company.find({$and: [
                {"star.0":{$gte:harness_start}},
                {"star.1":{$gte:atmosphere_start}},
                {"star.2":{$gte:salary_start}},
                {"star.3":{$gte:learn_start}},
                {"star.4":{$gte:welfare_start}},
                {"name": {$regex: new RegExp(req.query.input, "i")}}]}, function(err, companies) {
            if(err) return res.status(500).json({error: err});
            if(!companies) return res.status(404).json({error: 'company not found'});
            res.json(companies);
        })
    }
});

module.exports = router;
