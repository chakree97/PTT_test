const mongoose = require('mongoose');
const connect = ()=>{
    mongoose.connect('mongodb://localhost:27017/PTT_Test',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    },(err)=>{
        console.log(err);
    });
}

exports.connect = connect