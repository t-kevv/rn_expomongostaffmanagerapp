const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moment = require("moment");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect("mongodb://localhost:27017/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });

app.listen(port, () => {
    console.log("Server is running on port 8000");
});


const Staff = require("./models/staff");
const Attendance = require("./models/attendance");

//endpoint to register a staff
app.post("/addStaff", async (req, res) => {
    try {
        const { employeeName, employeeId, designation, phoneNumber, dateOfBirth, joiningDate, activeEmployee, salary, address, } = req.body;
        //create a new staff
        const newStaff = new Staff({ employeeName, employeeId, designation, phoneNumber, dateOfBirth, joiningDate, activeEmployee, salary, address, });
        await newStaff.save();
        res.status(201).json({ message: "Employee saved successfully", employee: newEmployee });
    } catch (error) {
        console.log("Error creating employee", error);
        res.status(500).json({ message: "Failed to add a staff" });
    }
});
