var express = require("express");
var router = express.Router();
var postController = require("../controllers/postControllers");

router.get("/allposts");

module.exports = router;
