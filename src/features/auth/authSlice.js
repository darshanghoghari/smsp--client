// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    loading: false,
    error: null,
    user: null,
};

// Define the base URL for the backend API
const baseURL = 'http://localhost:3000/';

// Define Thunk for signup API request
export const signup = createAsyncThunk('auth/signup', async (userData) => {
    delete userData.confirmPassword
    try {
        const response = await axios.post(`${baseURL}auth/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

// Define Thunk for login API request
export const login = createAsyncThunk('auth/login', async (userData) => {
    try {
        const response = await axios.post(`${baseURL}auth/login`, userData);
        const data = await response?.data?.data;
        await SetCookie('Authorization', data?.token?.token, data?.token?.expiresIn);
        localStorage.setItem('userData', JSON.stringify(data?.user));
        return data;
    } catch (error) {
        throw error.response.data;
    }
});

// Create a slice for authentication
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the reducer
export default authSlice.reducer;
