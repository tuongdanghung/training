import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authSlice from './slices/loginSlice'
import registerSlice from './slices/registerSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        login: authSlice,
        register: registerSlice
    },
})