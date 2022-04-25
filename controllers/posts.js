const Posts = require('../models/post');

module.exports = {
    index
}

function index(req, res) {
     Posts.find({}, function(err, posts) {
         res.render('posts', {title:'All Posts', posts});
       });
}

