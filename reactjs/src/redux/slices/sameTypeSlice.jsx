import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchSameType = createAsyncThunk(
    'sameType',
    async (category) => {
        const response = await axios.get(`http://localhost:5000/api/v1/books/`, {
            params: {
                category_code: category,
            },
        })
        return response.data
    }
)

const initialState = {
    sameTypeBook: [],
    isloading: false,
    isError: false,
}

export const bookSlice = createSlice({
    name: 'sameType',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSameType.pending, (state, action) => {
            state.isloading = true
            state.isError = false
        })
        builder.addCase(fetchSameType.fulfilled, (state, action) => {
            state.sameTypeBook = action.payload
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchSameType.rejected, (state, action) => {
            // Add user to the state array
            state.isloading = false
            state.isError = true
        })
    },
})

export default bookSlice.reducer