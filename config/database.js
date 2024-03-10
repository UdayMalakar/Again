const mongoose=require("mongoose");
const dbconnect=()=>{
    mongoose.connect(process.env.DATA_BASE_URL)
    .then(()=>{
        console.log("Db Connected successfully")
    })
    .catch((error)=>{
        console.log(error)
    })
};

module.exports=dbconnect;