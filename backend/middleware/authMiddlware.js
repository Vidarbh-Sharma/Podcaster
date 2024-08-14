const jwt =require("jsonwebtoken");
const user=require("../models/user");


const authMiddlware=async(req,res,next)=>{
const token=req.cookies.podcasterUserToken;
try {
    if(token){
        const decode=jwt.verify(token, process.env.JWT_SECRET);
        const user=await UserActivation.findById(decode.id);
        if(!user){
return res.status(404).json({message:"User not found "});
        }
        req.user=user;
        next();
    }
} catch (error) {
    res.status(500).json({message:"Invalid Token"});
}

};

module.exports=authMiddlware;