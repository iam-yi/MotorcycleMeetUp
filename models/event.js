const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
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
   Date: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    }
   },
   userName: String,
   userAvatar: String
})

module.exports = mongoose.model('Event', eventSchema);