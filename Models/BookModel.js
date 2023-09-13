const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    img : String,
    title : String,
    author : String,
    desc : String
})

const BookModel = mongoose.model("book",BookSchema);

module.exports = BookModel;