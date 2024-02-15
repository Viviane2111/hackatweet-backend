const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  content: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isLiked: { type: Boolean, default: false },
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
