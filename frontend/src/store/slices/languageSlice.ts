import { createSlice } from "@reduxjs/toolkit";
import { config } from "../../config";

const initialState = {
    lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : config.defaultLang,
};

export const languageSlice = createSlice({
    name: "languageSlice",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.lang = action.payload.lang;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
