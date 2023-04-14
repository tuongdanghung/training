import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const token = localStorage.getItem('auth')

export const fetchUser = createAsyncThunk(
    'user',
    async (user) => {
        const response = await axios.get('http://localhost:5000/api/v1/user',
            { headers: { "Authorization": `${user.length !== 0 ? user : token}` } })
        return response.data
    }
)

export const updateUser = createAsyncThunk(
    'update',
    async (user) => {
        const headers = {
            'Authorization': `${token}`
        };
        const response = await axios.put('http://localhost:5000/api/v1/user', user, { headers })
        return response
    }
)


const initialState = {
    user: [],
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
            state.user = action.payload
            state.isloading = false
            state.isError = false
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload.data
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