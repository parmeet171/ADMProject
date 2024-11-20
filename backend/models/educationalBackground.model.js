const mongoose = require('mongoose');

const educationalBackgroundSchema = mongoose.Schema({
    tenthSchoolName: {
        type: String,
        required: true
    },
    tenthBoard: {
        type: String,
        required: true
    },
    tenthMarks: {
        type: String,
        required: true
    },
    tenthYear: {
        type: String,
        required: true
    },
    twelfthSchoolName: {
        type: String,
        required: true
    },
    twelfthBoard: {
        type: String,
        required: true
    },
    twelfthMarks: {
        type: String,
        required: true
    },
    twelfthYear: {
        type: String,
        required: true
    },
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }
})

module.exports = mongoose.model('EducationalBackground', educationalBackgroundSchema)