var express = require("express");
var router = express.Router();

var postController = require("../controllers/postControllers");
var userController = require("../controllers/userControllers");

router.get("/allposts", postController.getAllPosts);
router.get("/tags", postController.getPostByTag);
router.post(
  "/newpost/:userId",
  userController.requireSingin,
  postController.newPost
);
router.put(
  "/editpost/:postId",
  userController.requireSingin,
  postController.isPoster,
  postController.editPost
);
router.delete(
  "/deletepost/:postId",
  userController.requireSingin,
  postController.isPoster,
  postController.deletePost
);

// any route containing userId, our app will first execute userById()
router.param("userId", userController.userById);
// any route containing userId, our app will first execute userById()
router.param("postId", postController.postById);

module.exports = router;
