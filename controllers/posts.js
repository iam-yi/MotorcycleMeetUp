const Post = require('../models/post');

module.exports = {
    index,
    show,
    new: newPost,
    create
};

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { posts });
    });
}

function show(req, res) {
    Post.findById(req.params.id, function(err, post){
        res.render('posts/index', { post });  
    });
}

function create(req, res) {
    Post.create(req.body, function(err) {
        res.redirect('/posts');
    });
}
function newPost(req, res) {
    res.render('posts/index', {title: 'All Post'});
}