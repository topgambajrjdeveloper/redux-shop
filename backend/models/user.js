const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require('crypto');

const UserSchema = Schema({
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  role: String,
  active: Boolean,
  avatar: String
});



module.exports = mongoose.model("User", UserSchema);
