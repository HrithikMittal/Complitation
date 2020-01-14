const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));

var user = require("./routes/User");
var post = require("./routes/Post");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database is connected Successfully");
  })
  .catch(err => {
    console.log("Error is ", err.message);
  });

app.get("/", (req, res) => {
  res.send("You are Welcome in My API world");
});

app.use("/user", user);
app.use("/post", post);

app.listen(process.env.port, () => {
  console.log(`Server is listening on PORT:${process.env.port}`);
});
