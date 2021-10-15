import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice ({
    name: 'userReducer',
    initialState: {
        connected: false, 
        token: 0,
        user: {},
    },
    reducers: {
        logIn : (state, token) => {
            state.connected = true;
            state.token = token.payload;
        },
        setUser: (state, user) => {
            state.user = user.payload;
        },
        updateUser: (state, user) => {
            state.user.firstName = user.payload.firstName;
            state.user.lastName = user.payload.lastName;
        },
        logOut: (state) => {
            state.connected = false;
            state.token = 0;
            state.user = '';
            sessionStorage.clear();
        },
    }
});

// Action creators are generated for each case reducers function
export const { logIn, logOut, setUser, updateUser } = actions;

export default reducer;
