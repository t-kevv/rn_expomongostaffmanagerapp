const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    employeeName: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        required: true
    },
    joiningDate: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    activeEmployee: {
        type: Boolean,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Staff = mongoose.model("staffs", staffSchema);

module.exports = Staff;