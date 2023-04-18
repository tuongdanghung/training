import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchSearch = createAsyncThunk(
    'search',
    async (name) => {
        const response = await axios.get(`http://localhost:5000/api/v1/books/`, {
            params: {
                name: name,
            },
        })
        return response.data
    }
)

const initialState = {
    searchBook: [],
    isloading: false,
    isError: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.pending, (state, action) => {
            state.isloading = true
            state.isError = false
        })
        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.searchBook = action.payload
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchSearch.rejected, (state, action) => {
            // Add user to the state array
            state.isloading = false
            state.isError = true
        })
    },
})

export default searchSlice.reducer