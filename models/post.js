const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
   userAvatar: String
})

module.exports = mongoose.model('Post', postSchema);