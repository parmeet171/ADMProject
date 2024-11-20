const express = require('express');
const router = express.Router();
const userRouter = require("./user");
const applicationRouter = require("./application");

router.use('/user', userRouter);
router.use('/application', applicationRouter)

module.exports = router;