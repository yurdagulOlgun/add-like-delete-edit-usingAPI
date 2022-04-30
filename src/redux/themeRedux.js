import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        themeName: ""
    },
    reducers: {
        changeTheme: (state,action) => {
            state.themeName = action.payload;
        }
    }
})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;