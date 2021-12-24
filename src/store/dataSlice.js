import {createSlice} from "@reduxjs/toolkit";
const dataSlice = createSlice({
    name: "data",
    initialState: {
        annualCrimeData: [],
        policeDispatchData: [],
        districtData: [],
    },
    reducers:{
        setData(state, action){
            state.annualCrimeData          = action.payload.annualCrimeData;
            state.policeDispatchData       = action.payload.policeDispatchData;
            state.districtData             = action.payload.districtData;
        },
    },
});

export const dataActions = dataSlice.actions;
export default dataSlice;