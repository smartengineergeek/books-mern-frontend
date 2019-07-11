const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/books', {useNewUrlParser: true})
.catch(error => { console.log('Connection error', error.message)});

mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to ");
});

mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});

const db = mongoose.connection;
module.exports = db;