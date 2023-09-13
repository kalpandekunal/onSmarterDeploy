const BookModel = require("../Models/BookModel");
const ReviewModel = require("../Models/ReviewModel");

const getBookData = async(req,res)=>{
    try {
        let data = await BookModel.find();
        res.send({"Data" : data});
    } catch (error) {
        res.send(error.message);
    }
}



const getSpecificBookData = async(req,res)=>{
    try {
        let data = await BookModel.findById(req.params.id);
        let review = await ReviewModel.find({bookId: req.params.id});

        res.send({Data : data,reviews: review});
    } catch (error) {
        res.send(error.message);
    }
}
    
const postBookData = async(req, res)=>{
    try {
        let data = new BookModel(req.body);
        await data.save();
        res.send({"Data" : data});
    } catch (error) {
        res.send(error.message);
    }
}

const deleteBookData = async(req,res)=>{
    try {
        let data = await BookModel.findByIdAndDelete(req.params.id);
        res.send({Data : "Data deleted successfully"});
    } catch (error) {
        res.send(error.message);
    }
}


const updateBookData = async(req,res)=>{
    try {
        //console.log(req.body, req.params.id);
        let data = await BookModel.findByIdAndUpdate(req.params.id,req.body);

        res.send({Data: "Data updated successfully"});
    } catch (error) {
        res.send(error.message);
    }
}


module.exports = { getBookData, getSpecificBookData, postBookData,deleteBookData,updateBookData }