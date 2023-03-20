import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: 'home',
    reducers: {
        navigateTo(state, action) {
            state = action.payload;
            return state;
        }
    }
});
export const { navigateTo } = navSlice.actions;

export default navSlice.reducer;