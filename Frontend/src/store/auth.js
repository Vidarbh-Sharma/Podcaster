import {createSlice} from "@reduxjs/toolkit";
//import { useDispatch } from "react-redux";
//import { authActions } from "../store/auth";
 const authSlice=createSlice({
    name:"auth",
    initialState:{ isLoggedIn:false },
   reducers:{
        login(state){
         state.isLoggedIn=true;
        },

        logout(state){
           state.isLoggedIn=false;
        },
    },

 });

export const authActions=authSlice.actions;
export default authSlice.reducer;



























//import Login from "../pages/Login";