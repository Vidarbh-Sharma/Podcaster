//import React, { useEffect, useState } from "react";
//import axios from "axios";
//import { useDispatch } from "react-redux";
//import { authActions } from "../store/auth";
//import { useNavigate } from "react-router-dom";

const Header= () => {
   // const [UserData, setUserData] = useState();
    //const dispatch = useDispatch();
    //const navigate=useNavigate();
    //useEffect(() => {

       // const fetchUserDeatils = async () => {
          //  const res = await axios.get("http://localhost:3000/api/v1/user-deatails", {
             //   withCredentials: true,
           // });
           // setUserData(res.data.user);
      // };
       // fetchUserDeatils();
   // }, []);

    //const LogoutHandler = async () => {
       // const res = await axios.post("http://localhost:3000/api/v1/logout",
          //  {
             //   withCredentials: true,
          //  });
       // console.log(res);
        //dispatch(authActions.logout());
       // dispatch(authActions.logout());
       // navigate("/");
    //};

    return (
       // <h1>Profile</h1>
       <>
{UserData && <div className="flex items-center justify-center text-4xl fond-semibold text-zinc-700 h-screen">

    <div className="bg-green-900 rounded py-8  flex-col md:flex-row items-center justify-center gap-1 md:justify-between px-40 lg:px-40">
        <div className="flex flex-col items-center md:items-start">
            <p className="text-zinc-300">Profile</p>
            <h1 className="text-xl md:text-4xl lg:text-xl text-zinc-100 font-bold text-center">
              {UserData.username}
            </h1>

            <p className="text-zinc-300 mt-1"> {UserData.email}</p>
        </div>
        <div>
            <button className="bg-white px-1 py-1 rounded text-zinc-90 font-semibold hover:shadow-xl transition-all duration-300" onClick={LogoutHandler}>Log Out</button>
        </div>
    </div>
<div>
    <h1>Hello</h1>
    </div>
</div>}
        
</>

    );
};
      
      
    

export default Header;


















































































//import React from "react";

//const Header = () => {
    //return (
       // <div className="bg-green-900 rounded py-8 flex-col md:flex-row items-center justify-center gap-4 md:justify-between px-4 lg:px-12">
            //<div className="flex flex-col items-center md:items-start">
              //  <p className="text-zinc-300">Profile</p>
              //  <h1 className="text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-bold text-center">
               //     the code Master
               /// </h1>

               // <p className="text-zinc-300 mt-1">Kholi@123gmail.com</p>
           // </div>
           // <div>
               // <button className="bg-white px-4 py-2 rounded text-zinc-800 font-semibold hover:shadow-xl transition-all duration-300">Log Out</button>
           // </div>
        //</div>
   // );
//};

//export default Header;