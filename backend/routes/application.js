const express = require("express");
const { setPersonalDetail, submitApplication, setFamilyInformation, setEducationalBackground, getApplications, getAllApplications, updateStatus } = require("../controllers/application");
const router = express.Router();

router.post("/personaldetail", setPersonalDetail);
router.post("/familyinformation", setFamilyInformation);
router.post("/educationalbackground", setEducationalBackground);
router.post("/submit", submitApplication);
router.get("/allapplications", getAllApplications);
router.get("/:userId", getApplications);
router.put("/updatestatus", updateStatus)

module.exports = router;
