const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { ROLE } = require("./role");
mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: ROLE.USER,
    validate(value) {
      if (value != ROLE.ADMIN && value != ROLE.USER) throw new Error("Role Doesn't Exists");
    },
  },
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model("account", User, "account");
