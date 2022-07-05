const mongoose = require('mongoose')

const todoList = mongoose.model(
    "bookingList", 
    new mongoose.Schema(
        {
            service: {
                type: String,
                required: true,
            },
            fName: {
                type: String,
                required: true,
            },
            lName: {
                type: String,
                required: true,
            },
            email: {
                type: email,
                required: true,
            },
            date: {
                type: date,
                required: true,
            },
            time: {
                type: time,
                required: true,
            },
        },
        {timestamps : true}
    )
);

module.exports = bookingList;