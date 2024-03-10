const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true,
     },
     img:{
        type:String,
        required:true,
     },
     categoryArray:{
        type:Array,
        required:true,
     },
     price:{
        type:Number,
        required:true,
     },
     totalPrice:{
        type:Number,
        required:true,
     },
     off:{
        type:String,
        required:true,
     },
     description:{
        type:String,
        required:true,
     },
     category:{
        type:String,
        required:true,
     }
});


module.exports=mongoose.model("Product",productSchema)