const db = require('./config/config');
const express = require('express');
const route = require('./route/route')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

db.connect();

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/',route)

app.listen(port,()=>{
    console.log(`Server run at port ${port}`)
})