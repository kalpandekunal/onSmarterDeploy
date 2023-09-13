const express = require("express");
const { getReview,postReview,deleteReview,updateReviewData,dailyData } = require("../Controllers/ReviewControl");


const ReviewRouter = express();

ReviewRouter.get("/",getReview);
ReviewRouter.post("/add",postReview);
ReviewRouter.delete("/deleteReview/:id",deleteReview);
ReviewRouter.patch("/updateReview/:id",updateReviewData);
ReviewRouter.get("/dailyData",dailyData);



module.exports = ReviewRouter;

