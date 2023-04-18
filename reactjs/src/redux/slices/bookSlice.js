import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchBook = createAsyncThunk(
    'book',
    async (page) => {
        const response = await axios.get(`http://localhost:5000/api/v1/books/?page=${page}`)
        return response.data
    }
)

export const fetchOneBook = createAsyncThunk(
    'one/book',
    async (id) => {
        const response = await axios.get(`http://localhost:5000/api/v1/books/book/${id}`);
        return response
    }
)

const initialState = {
    books: [],
    isloading: false,
    isError: false,
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state, action) => {
            state.isloading = true
            state.isError = false
        })
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.books = action.payload
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchOneBook.fulfilled, (state, action) => {
            state.books = action.payload.data.book
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchBook.rejected, (state, action) => {
            // Add user to the state array
            state.isloading = false
            state.isError = true
        })
    },
})

export default bookSlice.reducer