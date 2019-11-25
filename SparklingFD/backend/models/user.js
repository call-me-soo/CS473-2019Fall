const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    userid: String,
    pw: String,
    department: String,
    nickname: String 
});

module.exports = mongoose.model('user', userSchema); 