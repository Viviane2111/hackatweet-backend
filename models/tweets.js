const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  username: String,
  content: String,
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
