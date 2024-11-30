const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
    {
        courseName: {
            type: String,
            required: true,
            unique: true
        },
        enrolledStudents: {
            type: Number,
            required: true
        },
        totalSeats: {
            type: Number,
            required: true,
            default: 500        
        },
        fees: {
            type: Number,
            required: true,
            default: 50000
        }
    }
)

module.exports = mongoose.model("Course", courseSchema);