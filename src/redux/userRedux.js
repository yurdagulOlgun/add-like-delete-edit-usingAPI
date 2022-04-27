import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        users: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getUsersStart: (state) => {
            state.isFetching = true;
        },
        getUsersSuccess: (state,action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        getUsersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //delete
        deleteUserStart: (state) => {
            state.isFetching= true;
            state.error = false;
        },
        deleteUserSuccess: (state,action) => {
            state.isFetching = false;
            const userID = action.payload
            
            state.users = state.users.filter((item) => item.id !== userID)
            
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        
    }
});

export const { getUsersFailure, getUsersStart, getUsersSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess } = userSlice.actions;
export default userSlice.reducer;