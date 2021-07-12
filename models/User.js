const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  salt: String,
  hash: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
