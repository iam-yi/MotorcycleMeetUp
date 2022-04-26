const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String
})

odule.exports = mongoose.model('Post', postSchema);