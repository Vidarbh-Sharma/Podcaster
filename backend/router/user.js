const router=require("express").Router();
const User=require("../models/user");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const authMiddlware = require("../middleware/authMiddlware");

//sign-up
router.post("/sign-up",async(req,res)=>{
    try{
const{username,email,password}=req.body;
if(!username || !email || !password){
    return res.status(400).json({message:"All fields are required"});
}
if(username.length<5){
    return res.status(400).json({message:"username must have 5 chaters"});
}

if(password.length<6){
    return res.status(400).json({message:"password must have 6 chaters"});
}

//check user exists or not

const existingEmail=await User.findOne({email:email});
const existingUsername=await User.findOne({username:username});

if(existingEmail || existingUsername){
    return res.status(400).json({message:"username or email already exists"});
}
//has the password
const salt=await bcrypt.genSalt(10);
const hashedPass=await bcrypt.hash(password,salt);

const newUser=new User({username,email,password:hashedPass});
await newUser.save();
return res.status(200).json({message:"Account created"});



    }catch(error){
console.log(error);
res.status(400).json({error});
    }
});


//sign-in route
router.post("/sign-in",async(req,res)=>{
    try{
const {email,password}=req.body;


if( !email || !password){
    return res.status(400).json({message:"All fields are required"});
}
//cheack user
const existingUser=await User.findOne({email:email});

if(!existingUser ){
    return res.status(400).json({message:"Invalid credentials"});
}

// cheack password is matched or not

const isMatch=await bcrypt.compare(password,existingUser.password);


if(!isMatch ){
    return res.status(500).json({message:"Invalid credentials"});
}

//generate token token
const token=jwt.sign({id:existingUser._id,email:existingUser.email},
    process.env.JWT_SECRET,{expiresIn:"30d"}
);
res.cookie("podcasterUserToken",token,{
    httpOnly:true,
    maxAge:30 * 24 * 60 * 100,//30 days
    secure:process.env.NODE_ENV==="production",
    sameSite:"None",
});
return res.status(200).json({
    id:existingUser._id,
    username:existingUser.username,
    email:email,
    message:"Sign-in-Successfully",
});


    }catch(error){
        res.status(500).json({error});
    }
})

//logout 

router.post("/logout",async(req,res)=>{
    res.clearCookie("podcasterUserToken",{
        httpOnly:true,
    });
    res.status(200).json({message:"Logged out"});
});

//cheack cookie present or not
router.get("/check-cookie",async(req,res)=>{
    const token=req.cookies.podcasterUserToken;
    if(token){
      return  res.status(200).json({message:true});
    }
   return res.status(200).json({message:false});
   // res.json({message:"Logged out"});
});


//Route to fetch user details
router.get("/user-deatails",authMiddlware, async(req,res)=>{
    try {
        const {email}=req.User;
        const existingUser=await User.findOne({email:email}).select("-password");
        return res.status(200).json({
            user:existingUser,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
});
module.exports=router;