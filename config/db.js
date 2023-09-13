const mongoose = require("mongoose");


const main = async()=>{
    const connect = await mongoose.connect("mongodb+srv://kunalkalpande:kunal@cluster0.g0mcnrk.mongodb.net/books");
    
    console.log("Connected to database");
}

module.exports = main;
