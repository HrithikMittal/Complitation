var express = require("express");
var router = express.Router();
var postController = require("../controllers/postControllers");
var userController = require("../controllers/userControllers");

router.get("/allposts", postController.getAllPosts);
router.post("/newpost/:userId", postController.newPost);

// any route containing userId, our app will first execute userById()
router.param("userId", userController.userById);
module.exports = router;
