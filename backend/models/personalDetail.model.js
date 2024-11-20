const mongoose = require('mongoose')

const personalDetailSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    addressline1: {
        type: String,
        required: true
    },
    addressline2: String,
    dob: {
        type: Date,
        required: true
    },
     state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    },
})

module.exports = mongoose.model('PersonalDetail', personalDetailSchema)