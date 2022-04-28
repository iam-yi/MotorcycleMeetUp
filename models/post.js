const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    userName: String,
   userAvatar: String,
})

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String
    },
   user: {
       type: Schema.Types.ObjectId,
       ref: "User"
   },
   userName: String,
   userAvatar: String,
   comments: [commentSchema]
})

module.exports = mongoose.model('Post', postSchema);