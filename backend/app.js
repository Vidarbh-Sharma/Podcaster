const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
//const userApi=require("./router/user");
const userApi=require("./router/user");
const CatApi=require("./router/categories");
const PodcastApi=require("./router/podcast");
const cors=require("cors");

//all routes
require("dotenv").config();
require("./conn/conn");
app.use(
    cors({
        origin:["http://localhost:5173"],
        credentials:true,
    })
);






app.use(express.json());
app.use(cookieParser());


app.use("/api/v1",userApi);
app.use("/api/v1",CatApi);
app.use("/api/v1",PodcastApi);


app.listen(process.env.PORT,()=>{
console.log(`server jk start hii ${process.env.PORT}`);
});




