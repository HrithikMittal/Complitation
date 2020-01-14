const express = require("express");
var router = express.Router();

var userController = require("../controllers/userControllers");

router.get("/", (req, res) => {
  res.send("User is here...");
});

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;
