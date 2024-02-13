import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "langConfig",
    initialState: {
        lang: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})
export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;