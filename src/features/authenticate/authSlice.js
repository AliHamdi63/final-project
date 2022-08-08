import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/dist";
import axios from 'axios'
import cookie from "cookiejs";


let url = 'https://foody--api.herokuapp.com/';

export const userLogin = createAsyncThunk('auth/login', async (user) => {
    let response = await axios.post(`${url}auth/login`, user);
    console.log(response.data)
    return response.data
})
export const userRegister = createAsyncThunk('auth/register', async (user) => {
    let response = await axios.post(`${url}auth/register`, user);
    // console.log(response.data)
    return response.data
})

export const logout = createAsyncThunk('auth/logout', async () => {
    // console.log("User Logout")
    return null
})


const authSlice = createSlice({
    name: 'auth',
    initialState: { user: JSON.parse(cookie.get('user')) || null, isFetching: false, error: false },

    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.user = action.payload;
            cookie('user', JSON.stringify(action.payload), 1);
        },
        [userLogin.rejected]: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        [userRegister.pending]: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        [userRegister.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.user = action.payload;
            cookie('user', JSON.stringify(action.payload), 1);
        },
        [userRegister.rejected]: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        [logout.pending]: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        [logout.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.user = action.payload;
            cookie.remove('user');
        },
        [logout.rejected]: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    }
})


export default authSlice.reducer;
