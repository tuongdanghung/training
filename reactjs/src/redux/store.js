import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authSlice from './slices/loginSlice'
import registerSlice from './slices/registerSlice'
import bookReducer from './slices/bookSlice'
import sameTypeReducer from './slices/sameTypeSlice'
import searchReducer from './slices/searchSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        login: authSlice,
        register: registerSlice,
        book: bookReducer,
        sameType: sameTypeReducer,
        search: searchReducer
    },
})