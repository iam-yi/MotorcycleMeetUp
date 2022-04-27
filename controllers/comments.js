const Post = require('../models/post');
const Comment = require('../models/comment')

module.exports = {
    new: newComments,
    create
};

function newComments(req, res) {
    res.render('posts/new', { postId: req.params.id });
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