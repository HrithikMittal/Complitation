var bcrypt = require("bcryptjs");
var User = require("../modals/User");
var expressJwt = require("express-jwt");
var jwt = require("jsonwebtoken");
var salt = bcrypt.genSaltSync(10);
require("dotenv").config();

const signup = (req, res) => {
  var newUser = new User(req.body);
  newUser.password = bcrypt.hashSync(newUser.password, salt);

  User.findOne({ email: req.body.email })
    .then(response => {
      if (response) res.send("Already registered...");
      newUser
        .save()
        .then(user => {
          res.status(200).send(user);
        })
        .catch(err => {
          console.log("Error is", err.message);
        });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) res.status(404).send("Not Found");

      user.password = undefined;

      // generate a token with user id and secret
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      // persist the token as 't' in cookie with expiry date
      res.cookie("t", token, { expire: new Date() + 9999 });
      // return response with user and token to frontend client
      const { _id, name, email } = user;
      return res.json({ token, user: { _id, email, name } });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "Signout successfully" });
};

const userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.profile = user; // adds profile object in req with user info
    next();
  });
};

const requireSingin = expressJwt({
  // if the token is valid, express jwt appends the
  // verified users id in an auth key to the
  // request object
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});

module.exports = {
  signup,
  signin,
  signout,
  userById,
  requireSingin
};
