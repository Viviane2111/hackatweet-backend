var express = require("express");
var router = express.Router();
require("../models/connection");
const Tweet = require("../models/tweets");
const User = require("../models/users");

router.post("/", function (req, res) {
  if (!req.body.id) {
    console.log(req.body.id);
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  const newTweet = new Tweet({
    username: req.body.username,
    content: req.body.content,
  });
  newTweet.save().then((data) => {
    User.updateOne(
      { token: req.body.id },
      { $push: { content: data._id } }
    ).then((data) => {
      console.log(data);
    });
    res.json({ result: true, content: req.body.content });
  });
});
module.exports = router;
