const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "all field are mendatory"],
    },
    email: {
      type: String,
      require: [true, "all field are mendatory"],
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
