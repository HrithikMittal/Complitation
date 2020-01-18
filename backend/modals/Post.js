var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
    requird: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  updated: {
    type: Date
  }
});
module.exports = Post = mongoose.model("Post", postSchema);
