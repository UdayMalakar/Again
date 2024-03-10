const express=require("express");
const router=express.Router();
const product=require("../model/product")
router.get("/home",(req,res)=>{
    res.send("This is home Page")
});

router.get("/data",async(req,res)=>{
       try{

        const getData=await product.find({});
        return res.status(200)
        .json({
            success:true,
            message:"data aa gya",
            getData,
        })

       }catch(error)
       {
        console.log(error);
        return res.status(500)
        .json({
            success:false,
            message:"Somthing went wrong"
        })
       }
})

module.exports=router;