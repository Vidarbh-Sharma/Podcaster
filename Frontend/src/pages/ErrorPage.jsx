//import React from "react";
//import {Link} from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";
const ErrorPage =()=>{
   
    const [UserData, setUserData] = useState();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    useEffect(() => {

        const fetchUserDeatils = async () => {
            const res = await axios.get("http://localhost:3000/api/v1/user-deatails", {
                withCredentials: true,
            });
            setUserData(res.data.user);
        };
        fetchUserDeatils();
    }, []);

    const LogoutHandler = async () => {
        const res = await axios.post("http://localhost:3000/api/v1/logout",
            {
                withCredentials: true,
            });
        console.log(res);
        //dispatch(authActions.logout());
        dispatch(authActions.logout());
        navigate("/");
    };

    return (
       
        <>
        <div
         className="text-xl md:text-4xl lg:text-xl text-black-100 font-bold text-center">
            The code master

        
            <div class="bg-white my-4 mx-4 p-4 shadow border rounded">
    <img src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=" class="mx-auto text-center  rounded-full h-32 w-32 mb-4 object-cover" alt="profile-img" title="profile-img"/>
    <h1 class="text-center text-gray-900 text-2xl">Kumar Vidarbh Sharma</h1>
    <div class="flex flex-wrap justify-center my-4">
       

        <a href="https://github.com/Vidarbh-Sharma"
            class="flex content-center items-center border-gray-300 border rounded px-1 py-1 text-gray-400 mr-2 mb-4 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50"
                class="mr-1" fill="currentColor">
                <path
                    d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 ...">
                </path>
            </svg>
            Github
        </a>
        <a href="https://www.linkedin.com/in/vidarbh-sharma-825660286/"
            class="flex content-center items-center border-gray-300 border rounded px-1 py-1 text-gray-400 mr-2 mb-4 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50"
                class="mr-1" fill="currentColor">
                <path
                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z">
                </path>
            </svg>
            Linkedin
        </a>
        <a href="https://www.instagram.com/vidarbh001/?hl=en"
            class="flex content-center items-center border-gray-300 border rounded px-1 py-1 text-gray-400 mb-4 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50"
                class="mr-1" fill="currentColor">
                <path
                    d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z">
                </path>
            </svg>
            Instagram
        </a>
    </div>
</div>







            <p className="text-red-300 mt-1"> </p>
            <p className="text-red-300"></p>
        </div>
        <div className="bg-gray-900 rounded py-8  flex-col md:flex-row items-center justify-center gap-1 md:justify-between px-40 lg:px-40">
        <div>
                    <button className="bg-blue-500 px-4 py-5 rounded text-zinc-90 font-bold hover:shadow-xl transition-all duration-300 bottom-down" onClick={LogoutHandler}>Log Out</button>
                </div>

               
                    </div>
              




























        {UserData && <div className="flex items-center justify-center text-4xl fond-semibold text-zinc-700 h-screen">
        
            <div className="bg-green-900 rounded py-8  flex-col md:flex-row items-center justify-center gap-1 md:justify-between px-40 lg:px-40">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-zinc-300">Profile Name</p>
                    <h1 className="text-xl md:text-4xl lg:text-xl text-zinc-100 font-bold text-center" >
                      {UserData.username}
                      the code master
                     
                    </h1>
        
                    <p className="text-zinc-300 mt-1"> {UserData.email}</p>
                </div>
         
            </div>
    
        </div>}

        <div className="px-4 lg:px-12 my-4">
        <div className="flex items-center justify-between gap-4">
            <h1 className="text-xl font-bold md:font-bold">Your Podcasts</h1>
          <Link to="/add-podcast" className="px-4 py-2 bg-zinc-800 text-white rounded font-bold">Add-Podcast</Link>
          
            </div>
            </div>
        
              
        </>
        
            );
        };
    



export default ErrorPage;







































//import React, { useEffect, useState } from "react";
//import axios from "axios";
//import { useDispatch } from "react-redux";
//import { authActions } from "../store/auth";
//import { useNavigate } from "react-router-dom";
//const ErrorPage = () => {
    //const [UserData, setUserData] = useState();
    //const dispatch = useDispatch();
    //const navigate=useNavigate();
    //useEffect(() => {

       // const fetchUserDeatils = async () => {
           // const res = await axios.get("http://localhost:3000/api/v1/user-deatails", {
             //   withCredentials: true,
           // });
           // setUserData(res.data.user);
        //};
        //fetchUserDeatils();
    //}, []);

    //const LogoutHandler = async () => {
       // const res = await axios.post("http://localhost:3000/api/v1/logout",
         //   {
             //   withCredentials: true,
           // });
       // console.log(res);
       // dispatch(authActions.logout());
       // navigate("/");
    //};

    //return (
       // <>
//{UserData && <div className="flex items-center justify-center text-4xl fond-semibold text-zinc-700 h-screen">

   // <div className="bg-green-900 rounded py-8  flex-col md:flex-row items-center justify-center gap-1 md:justify-between px-40 lg:px-40">
      //  <div className="flex flex-col items-center md:items-start">
         //   <p className="text-zinc-300">Profile</p>
           // <h1 className="text-xl md:text-4xl lg:text-xl text-zinc-100 font-bold text-center">
              //  <h1>Name</h1>
           // </h1>

          //  <p className="text-zinc-300 mt-1"> H</p>
        //</div>
       // <div>
           // <button className="bg-white px-1 py-1 rounded text-zinc-90 font-semibold hover:shadow-xl transition-all duration-10" onClick={LogoutHandler}>Log Out</button>
       // </div>
   // </div>

//</div>}
        
//</>

   //);
//};

//export default ErrorPage;