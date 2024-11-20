const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already in use"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  // applications: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Application",
  //     // validate: {
  //     //   validator: function (val) {
  //     //     return val.length <= 2;
  //     //   },
  //     //   message: "Student can only submit 2 applications",
  //     // },
  //   },
  // ],
  type: {
    type: String,
    enum: ["Admin", "Student"],
    default: "Student",
  },
});

// const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
