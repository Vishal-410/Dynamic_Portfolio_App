 const express = require('express');
 const app=express();
 require("dotenv").config();
 const portfolioRoute=require("./routes/portfolioroutes")
 app.use(express.json());
app.use("/api/portfolio",portfolioRoute)
require("./config/dbcongig")
 const port=process.env.PORT || 5000;
 app.listen(port,()=>{
    console.log(`server running on ${port}`)
 })