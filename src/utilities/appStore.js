import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Assuming the slice is named `userSlice.js` and exports a reducer

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;
