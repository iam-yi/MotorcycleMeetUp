const Post = require('../models/post');
const { find } = require('../models/post');

module.exports = {
    index,
    new: newComments,
    create,
    show,
    delete: deleteComments
};

function deleteComments(req, res) {
    Comment.findOne({_id: req.params.id})
    .then(function(comment) {
        if(!comment) return res.redirect('/posts/:id');
        comment.remove();
        res.redirect(`/posts/:id`);
    });
}    


function index(req, res) {
    Comment.find({}).populate('user')
     .exec(function(err, comments) {
        res.render('posts/show', { comments });
    });
    
}

function show(req, res) {
    Comment.findById(req.params.id)
    .populate('user')
    .exec(function(err, comment) {
        res.render('posts/show', { comment });   
    })
}


function newComments(req, res) {
    res.render('comments/show', { postId: req.params.id });
};

async function create(req, res) {
    const post = await Post.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    post.comments.push(req.body);
    await post.save();
    res.redirect(`/posts/${req.params.id}`);
}

// function create(req, res) {
//     Post.findOne({
//         _id: req.params.id
//     }, function(err, post) {
//         if(err) res.redirect(`/posts/${post._id}/new`);
//         req.body.post = post._id;
//         var comment = new Comment(req.body);
//         comment.save();
//         res.redirect(`/posts/${post._id}`);
//     });
// }