const express=require("express");
const app=express();
require("dotenv").config();
const dbconnect=require("./config/database");
const cors =require("cors");
dbconnect();
const router=require("./routes/router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/v1",router);
app.get("/",(req,res)=>{
    res.send("baba is here")
})
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is Started at PORT : ${PORT}`);
})