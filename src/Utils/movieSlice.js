import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState: {
        top100Moviess:  null,
    },
    reducers: {
        addTop100moviess: (state,action) =>{
            state.top100Moviess=action.payload;

        }
    }
});

export const {addTop100moviess} = movieSlice.actions;

export default movieSlice.reducer;
