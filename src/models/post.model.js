const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  Name: String,
  caption: String,
})

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;