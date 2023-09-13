const ReviewModel = require("../Models/ReviewModel");

const getReview = async(req,res)=>{
    try {
        let data = await ReviewModel.find();
        res.send({"Data" : data});
    } catch (error) {
        req.send(error.message);
    }
}


const postReview = async(req,res)=>{
    try {
        let data = new ReviewModel(req.body);
        await data.save();
        res.send({"Data" : data});
    } catch (error) {
        res.send(error.message);
    }
}


const deleteReview = async(req,res)=>{
    try {
        //let {id} = res.params;
        
        let data = await ReviewModel.findByIdAndDelete(req.params.id);
        res.send({Data : "Review Deleted Successfully"});
    } catch (error) {
        res.send(error.message)
    }
}

const updateReviewData = async(req,res)=>{
    try {
        //console.log(req.body, req.params.id);
        let data = await ReviewModel.findByIdAndUpdate(req.params.id,req.body);

        res.send({Data: "Data updated successfully"});
    } catch (error) {
        res.send(error.message);
    }
}

const dailyData = async(req, res)=>{
    try {
        let data = await ReviewModel.find({createdAt: new Date().getDate()});
        // console.log(new Date().getDate());
        res.send({"Data": data})
    } catch (error) {
        res.send(error.message);
    }
}


module.exports = { getReview,postReview,deleteReview,updateReviewData,dailyData };