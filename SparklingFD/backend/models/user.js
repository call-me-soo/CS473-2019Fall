const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userid: String,
    pw: String,
    major: String,
    nickname: String 
});

module.exports = mongoose.model('user', userSchema); 