import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
    "userName": "Demo User",
    "handle": "@demouser",
    "image": "../images/donkey.jpeg"
};

const templateTuit = {
    ...currentUser,
    "topic": "",
    "time": "1m",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                _id: (new Date()).getTime(),
                ...action.payload,
                ...templateTuit
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
    }
});
export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;