const Post = require('../models/post');
const Comment = require('../models/comment')

module.exports = {
    new: newComments,
    create,
    show
};

function show(req, res) {
    Comment.findById(req.params.id)
    .populate('user')
    .exec(function(err, comment) {
        res.render('posts/show', { comments });   
    })
}


function newComments(req, res) {
    res.render('comments/new', { postId: req.params.id });
};

function create(req, res) {
    Post.findOne({
        _id: req.params.id
    }, function(err, post) {
        if(err) res.redirect(`/posts/${post._id}/new`);
        req.body.post = post._id;
        var comment = new Comment(req.body);
        comment.save();
        res.redirect(`/posts/${post._id}`);
    });
}