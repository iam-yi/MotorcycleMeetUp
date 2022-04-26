const Post = require('../models/post');

module.exports = {
    index,
    show,
    new: newPost,
    create
};

function index(req, res) {
    Post.find({}).populate('user')
     .exec(function(err, posts) {
        res.render('posts/index', { posts });
    });
}

function show(req, res) {
    Post.findById(req.params.id)
        .populate('user')
        .exec(function(err, post) {
            res.render('posts/index', { post });   
        })
}

// function create(req, res) {
//     Post.create(req.body, function(err, post) {
//         req.body.user = req.user._id;
//         req.body.userName = req.user.name;
//         req.body.userAvatar = req.user.avatar;
//         res.redirect('/posts');
//     });
// }
async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
   const post = await Post.create(req.body);
    res.redirect('/posts');
}

function newPost(req, res) {
    res.render('posts/index', {title: 'All Post'});
}