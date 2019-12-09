const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: Number,
    // company: {type: Schema.Types.Mixed, required: true},
    user: {type: Schema.Types.Mixed, required: true},
    semester: {type: Schema.Types.Mixed, required: true},
    aggregate: {type: Number, required: true},
    salary: {type:Number, required: true},
    salaryPercent: {type:Number, required: true},
    like: {type: Array, required: true},
    content: {type:String, required: true}
});

module.exports = mongoose.model('review', reviewSchema); 