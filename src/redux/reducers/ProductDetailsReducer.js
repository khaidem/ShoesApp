import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import {PRODUCTDETAILURL } from "../../config/Urls"

const initialState ={
    loading : false,
    ProductDetails: [],
    error: ''
}
export const fetchProductDetails= createAsyncThunk(
    'ProductDetails/fectchProductDetails',
    async (slug)=> {
        const response = await axios.get(`https://dummyjson.com/products/category/${slug}`)
        console.log('ProductDetails Axios', response.status)
        return response.data.products
    }
)

const productDetailsSlice = createSlice({
    name: 'ProductDetails',
    reducers: {},
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProductDetails.pending, state => {
          state.loading = true;
        });
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.ProductDetails = action.payload;
          // console.log('productList playload', action.payload);
        });
        builder.addCase(fetchProductDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
      },

})

export default productDetailsSlice.reducer