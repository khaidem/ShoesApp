import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  categoryList: [],
  error: '',
};

export const fetchCategory = createAsyncThunk('categories/fetchCategoryList', async() => {
    const response =await axios.get('https://dummyjson.com/products/categories');
    console.log('Category Status Code', response.status)
    return response.data;

});

const categorySlice = createSlice({
    name:'categories',
    reducers: {},
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchCategory.pending,(state)=>{
            state.loading= true
        })
        builder.addCase(fetchCategory.fulfilled, (state, action)=>{
            state.loading = false,
            state.categoryList= action.payload
            
        })
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.loading= false
            
            state.error= action.error.message
        })
    }

})

export default categorySlice.reducer;