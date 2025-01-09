import { createSlice } from "@reduxjs/toolkit";
// import { theme, theme } from "antd";

const initialState = {
    theme : "light",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        changeTheme:(state,action)=>{
                state.theme = action.payload
        },
    }
})

export const {changeTheme} = themeSlice.actions


export default themeSlice.reducer