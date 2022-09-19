import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/language.slice";

import navbarSlice from "./slices/navbar.slice";


export const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        language: languageSlice

    }
})