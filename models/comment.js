const mongoose = require('mongoose');
const Joi = require('joi');

const replySchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 5, maxlength: 1000},
    timeStamp: {type: Date, default: Date.now()},
});

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 5, maxlength: 1000},
    videoId: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now()},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    replies: [{type: replySchema}],
})

const Reply = mongoose.model('Reply', replySchema);
const Comment = mongoose.model('Comment', commentSchema);

function validateComment(comment) {
    const schema = Joi.object({
        text: Joi.string().min(5).max(1000).required(),
        videoId: Joi.string().required(),
        
       
    });
    return schema.validate(comment);
}

module.exports = { validateComment, commentSchema }

module.exports = {
    Reply,
    Comment,
}