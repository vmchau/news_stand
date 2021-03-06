import mongoose from 'mongoose';

const comments = mongoose.Schema({
  time: { type: String },
  comment: { type: String },
  url: { type: String },
  author: { type: String },
});

const Comment = mongoose.model('Comment', comments);

export default Comment;
