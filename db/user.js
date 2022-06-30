const mongoose = require('mongoose');

let user = mongoose.Schema({
    name : { type : String , unique : true},
    surname : String,
    phone : String,
    seatno : Number
})

let userdb = mongoose.model("user",user);


module.exports = userdb;