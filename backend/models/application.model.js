const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    personalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PersonalDetail",
    },
    familyInformation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FamilyInformation",
    },
    educationalBackground: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EducationalBackground",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
