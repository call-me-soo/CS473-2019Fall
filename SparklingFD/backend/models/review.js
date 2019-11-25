const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: Number,
    company: Schema.Types.Mixed,
    user: Schema.Types.Mixed,
    semester: Schema.Types.Mixed,
    like: Number,
    review: Schema.Types.Mixed
});

module.exports = mongoose.model('review', reviewSchema); 