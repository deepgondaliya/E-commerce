const mongoose = require('mongoose');

mongoose
.connect("mongodb://127.0.0.1:27017/E-commerce")
.then(function(){
    console.log("database connected");
})
.catch(function(){
    console.log(err);
})

//E-commerce all collection control using mongoose.connection
module.exports = mongoose.connection;