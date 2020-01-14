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
  newPost.postedBy = req.profile;
  newPost.createdDate = Date.now();
  newPost
    .save()
    .then(response => {
      res.send({ message: "Post saved successfully and is ", resp: response });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const postById = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      res.status(404).json({
        error: "Post not found"
      });
    }
    req.post = post; // adds post object in req with post info
    next();
  });
};

const deletePost = (req, res) => {
  console.log(req.profile);
  console.log("=======================");
  console.log(req.post);
};

module.exports = {
  getAllPosts,
  newPost,
  deletePost,
  postById
};
