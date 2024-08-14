const mongoose=require("mongoose");

const category=new mongoose.Schema({
    category:{
        type:String,
        unique:true,
        required:true,
    },
    podcasts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"podcasts",
        },  
    ],
},
{timestamps:true}

);

module.exports=mongoose.model("category",category);