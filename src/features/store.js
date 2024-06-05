// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import houseReducer from './home/homeSlice'


// Create the Redux store
const store = configureStore({
    reducer: {
        auth: authReducer,
        house: houseReducer
    },
});

export default store;
