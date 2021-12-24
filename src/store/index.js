import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import dataSlice from "./dataSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        data: dataSlice.reducer,
    },
});

export default  store;