const express = require("express");
const main = require("./config/db");
const BookRouter = require("./Routes/BookRoute");
const ReviewRouter = require("./Routes/ReviewRoute");
const UserRouter = require("./Routes/UserRoute");
const cors = require("cors");
const authentication = require("./Middlewares/authentication");

require("dotenv").config();

const PORT = 4000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("HomePage");
})

app.use("/api/book",BookRouter);
app.use("/api/review",ReviewRouter);
app.use("/api/user",UserRouter);

app.listen(4000,()=>{
    main();
    console.log(`Connected to the port ${PORT}`);
})
