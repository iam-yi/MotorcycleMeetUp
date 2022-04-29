const Post = require('../models/post');
const Comment = require('../models/post');

module.exports = {
    index,
    new: newComments,
    create,
    show,
    delete: deleteComments,
    update
};

function update(req, res) {
    Post.findOne({'comments._id': req.params.id}, function(err, post) {
        const comment = post.comments.id(req.params.id);
        if (!comment.user._id.equals(req.user._id)) return res.redirect(`/posts/${post._id}`);
        comment.content = req.body.content;
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        });
    });
  }

  function deleteComments(req, res, next) {
    Post.findOne({'comments._id': req.params.id}).then(function(post) {
      const comment = post.comments.id(req.params.id);
      if (!comment.user.equals(req.user._id)) return res.redirect(`/posts/${posts._id}`);
      comment.remove();
      post.save().then(function() {
        res.redirect(`/posts/${post._id}`);
      }).catch(function(err) {
        return next(err);
      });
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

