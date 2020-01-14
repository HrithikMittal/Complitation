const express = require("express");
var router = express.Router();

var userController = require("../controllers/userControllers");

router.get("/", (req, res) => {
  res.send("User is here...");
});

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.put(
  "/edituser/:userId",
  userController.requireSingin,
  userController.hasAuthorization,
  userController.editUser
);

router.param("userId", userController.userById);
module.exports = router;
