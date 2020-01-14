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

const editPost = (req, res) => {
  var post = req.post;
  post = _.extend(post, req.body);
  post.updated = Date.now();
  console.log(post);
  //   post.save(err => {
  //     if (err) {
  //       return res.status(400).json({
  //         error: err
  //       });
  //     }
  //     res.json(post);
  //   });
};

const deletePost = (req, res) => {
  let post = req.post;
  console.log(post);
  post
    .remove()
    .then(post => {
      res.send({ Message: "Deleted Post successfully", post: post });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const isPoster = (req, res, next) => {
  let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;
  if (!isPoster) {
    return res.status(403).json({
      error: "User is not authorized"
    });
  }
  next();
};

const postById = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(404).json({
        error: "Post not found"
      });
    }
    req.post = post; // adds post object in req with post info
    next();
  });
};

module.exports = {
  getAllPosts,
  newPost,
  editPost,
  deletePost,
  postById,
  isPoster
};
