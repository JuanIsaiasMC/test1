import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
    name: 'language',
    initialState: 'es',
    reducers: {
        setLanguage: (state, action) => {
            return action.payload
        }
    }
})

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
