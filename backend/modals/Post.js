var mongoose = require("mongoose");
var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  }
});
module.exports = Post = mongoose.model("Post", postSchema.getAllposts);
