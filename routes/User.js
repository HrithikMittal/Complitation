const express = require("express");
var router = express.Router();

var userController = require("../controllers/userControllers");

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.put(
  "/edituser/:userId",
  userController.requireSingin,
  userController.hasAuthorization,
  userController.editUser
);
router.delete(
  "/deluser/:userId",
  userController.requireSingin,
  userController.hasAuthorization,
  userController.deleteUser
);

router.param("userId", userController.userById);
module.exports = router;
