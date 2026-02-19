const mongoose = require("mongoose");

const musicSchema = mongoose.Schema({
  uri: {
    type: String,
    returied: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;