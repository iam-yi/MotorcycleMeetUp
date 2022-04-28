const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    userName: String,
   userAvatar: String,

})

module.exports = mongoose.model('Comment', commentSchema);