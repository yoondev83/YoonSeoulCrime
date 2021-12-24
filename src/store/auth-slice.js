import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userId: null,
        userEmail: null,
    },
    reducers:{
        login(state, action){
            state.isAuthenticated = true;
            state.userEmail       = action.payload.userEmail;
            state.userId          = action.payload.userId;
        },
        logout(state){
            console.log("logout!");
            state.isAuthenticated = false;
            state.userId          = null;
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPass");
            axios.post("https://guarded-plains-97482.herokuapp.com/api/logout")
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;