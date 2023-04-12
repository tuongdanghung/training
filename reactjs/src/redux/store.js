import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authSlice from './slices/authSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authSlice
    },
})