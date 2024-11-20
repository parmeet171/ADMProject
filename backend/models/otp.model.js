const mongoose = require("mongoose");
const {sendVerificationEmail} = require("../utils/mailSender");

const otpSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  otp: {
    type: String,
    required: true,
    maxLength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // 600 seconds = 10 min.
  }
});

//send mail before saving new data
otpSchema.pre("save", async function (next) {
  if (this.isNew) {
    // console.log('opt save')
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

module.exports = mongoose.model("OTP", otpSchema);
