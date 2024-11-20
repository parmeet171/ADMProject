const mongoose = require('mongoose');

const familyInformationSchema = mongoose.Schema({
    fatherName: {
        type: String,
        required: true
    },
    fatherContactNumber: {
        type: String,
        required: true
    },
    fatherEmail: {
        type: String,
        // required: true
    },
    MotherName: {
        type: String,
        required: true
    },
    MotherContactNumber: {
        type: String,
        required: true
    },
    MotherEmail: {
        type: String,
        // required: true
    },
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }
})

module.exports = mongoose.model('FamilyInformation', familyInformationSchema);