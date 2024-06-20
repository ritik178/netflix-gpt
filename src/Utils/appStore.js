import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import moviesReducer from "./movieSlice";


const appStore=configureStore({
    reducer: {
        user: appReducer,
        movies: moviesReducer,
    },
});

export default appStore;
