var express = require("express");
var router = express.Router();

var postController = require("../controllers/postControllers");
var userController = require("../controllers/userControllers");

router.get("/allposts", postController.getAllPosts);
router.post(
  "/newpost/:userId",
  userController.requireSingin,
  postController.newPost
);
router.delete(
  "/deletepost/:postId",
  userController.requireSingin,
  postController.deletePost
);

// any route containing userId, our app will first execute userById()
router.param("userId", userController.userById);
// any route containing userId, our app will first execute userById()
router.param("postId", postController.postById);

module.exports = router;
