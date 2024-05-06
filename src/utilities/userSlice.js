import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null, // set initial state to null
    reducers: {
        addUser: (state, action) => {
            // Directly return the new state
            return action.payload;
        },
        removeUser: (state, action) => {
            // Assuming this might reset to initial state or recover from some storage
            return state; // Modify according to your logic
        },
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
