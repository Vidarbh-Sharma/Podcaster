import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";

//import Header from "../components/Profile/Header";
import Header from "../components/Profile/Header";








const Profile = () => {
  const isLoggedIn= useSelector((state)=> state.auth.isLoggedIn);
  return (
    <div>
        {isLoggedIn ?(
         <>
        <Header />

          </>
         ): (
         <ErrorPage />
        )
         }
    </div>
  );
};

export default Profile;