const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: Number,
    company: {type: Schema.Types.Mixed, required: true},
    user: {type: Schema.Types.Mixed, required: true},
    semester: {type: Schema.Types.Mixed, required: true},
    like: {type: Number, required: true},
    review: Schema.Types.Mixed
});

const companySchema = new Schema({
    ID: Number,
    name: String,
    logosrc: String,
    field: Array,
    location: String,
    recommend: Array,
    star: Array,
    salary: Number,
    salaryPercent: Number,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('company', companySchema); 