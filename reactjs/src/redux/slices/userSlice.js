import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async () => {
        const response = await axios.get('http://localhost:5000/api/v1/books')
        return response.data
    }
)


const initialState = {
    listUsers: [],
    isloading: false,
    isError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isloading = true
            state.isError = false
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.listUsers = action.payload
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            // Add user to the state array
            state.isloading = false
            state.isError = true
        })
    },
})

export default userSlice.reducer