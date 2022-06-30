const mongoose = require('mongoose');

let seats = mongoose.Schema({
    count : Number
})

let seatsdb = mongoose.model("seat",seats);


module.exports = seatsdb;
