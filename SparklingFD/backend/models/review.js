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

module.exports = mongoose.model('review', reviewSchema); 