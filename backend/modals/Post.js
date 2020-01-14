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
  postedBy: {
    type: ObjectId,
    ref: "User",
    requird: true
  },
  createdDate: {
    type: Date,
    required: true
  }
});
module.exports = Post = mongoose.model("Post", postSchema);
