var bcrypt = require("bcryptjs");
var User = require("../modals/User");
var salt = bcrypt.genSaltSync(10);

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
    .then(response => {
      console.log(response);
      if (!response) res.status(404).send("Not Found");
      else {
        response.password = undefined;
        res.send(response);
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  signup,
  signin
};
