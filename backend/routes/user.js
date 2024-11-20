const express = require("express");
// const { signUp, sendOtp, login } = require("../controllers/user");
const { signUp, login } = require("../controllers/user");
const router = express.Router();

router.post("/signup", signUp);
// router.post("/sendotp", sendOtp);
router.post("/login", login);

module.exports = router;
