import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchRegister = createAsyncThunk(
    'register',
    async (data) => {
        console.log(data);
        try {
            const res = await axios.post("http://localhost:5000/api/v1/auth/register", data)
            return res
        } catch (error) {
            console.log(error)
        }
    }
)


const initialState = {
    userRegister: [],
    isloading: false,
    isError: false,
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state, action) => {
            state.isloading = true
            state.isError = false
        })
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.userRegister = action.payload.data
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchRegister.rejected, (state, action) => {
            // Add user to the state array
            state.isloading = false
            state.isError = true
        })
    },
})

export default registerSlice.reducer