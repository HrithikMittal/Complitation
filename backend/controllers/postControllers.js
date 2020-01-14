var Post = require("../modals/Post");

const getAllPosts = (req, res) => {
  Post.find()
    .then(posts => {
      if (!posts) res.send("No Post is there sorry");
      res.send(posts);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const newPost = (req, res) => {
  var newPost = new Post(req.body);
  newPost
    .save()
    .then(response => {
      res.send("Post saved successfully and is ", response);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  getAllPosts,
  newPost
};
