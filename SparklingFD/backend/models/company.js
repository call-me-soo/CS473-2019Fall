const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    ID: Number,
    name: String,
    logosrc: String,
    field: Array,
    location: String,
    recommend: Array,
    star: Array,
    salary: Number,
    salarypercent: String,
    reviews: Array
});

module.exports = mongoose.model('company', companySchema); 