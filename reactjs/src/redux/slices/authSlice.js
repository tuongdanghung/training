import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchAuth = createAsyncThunk(
    'auth',
    async (data) => {
        try {
            await axios.post("http://localhost:5000/api/v1/auth/login", data)
        } catch (error) {
            console.log(error)
        }
    }
)


const initialState = {
    listUsers: [],
    isloading: false,
    isError: false,
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuth.pending, (state, action) => {
            state.isloading = true
            state.isError = false
        })
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.listUsers = action.payload
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchAuth.rejected, (state, action) => {
            // Add user to the state array
            state.isloading = false
            state.isError = true
        })
    },
})

export default authSlice.reducer