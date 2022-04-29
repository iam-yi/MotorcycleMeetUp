const Event = require('../models/event');

module.exports = {
    index,
    show,
    new: newEvent,
    create,
    delete: deleteEvent
};

function deleteEvent(req,res) {
    Event.findOne({_id: req.params.id})
    .then(function(event) {
        if(!event) return res.redirect('/events');
        event.remove();
        res.redirect(`/events`);
    });
}

function index(req, res) {
    Event.find({}).populate('user')
     .exec(function(err, events) {
        res.render('events/index', { events });
    });
}

function show(req, res) {
    Event.findById(req.params.id)
        .populate('user')
        .exec(function(err, event) {
            res.render('events/index', { event });   
        })
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
   const event = await Event.create(req.body);
    res.redirect('/events');
}

function newEvent(req, res) {
    res.render('events/index', {title: 'All Event'});
}
