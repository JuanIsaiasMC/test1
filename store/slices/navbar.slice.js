import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: '',
    reducers: {
        setNavbar: (state, action) => {
            const navbar = action.payload
            return navbar
        }
    }
})

export const getNavbarData = () => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json')
        .then((res) => dispatch(setNavbar(res.data)))
        .catch(err => console.log(err))
    // .finally(() => dispatch(setIsLoading(false)));
}


export const { setNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
