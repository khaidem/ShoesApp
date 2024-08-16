import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  productList: [],
  error: '',
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await axios.get(
      'https://dummyjson.com/products/category/smartphones',
    );

    console.log('Product Status', response.status);
    return response.data.products;
  },
);

const productSlice = createSlice({
  name: 'product',
  reducers: {},
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
