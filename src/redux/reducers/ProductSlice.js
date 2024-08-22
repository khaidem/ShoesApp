import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { PRODUCTURL } from '../../config/Urls';

const initialState = {
  loading: false,
  productList: [],
  skip: 0,
  limit: 5,
  total: 0,
  error: '',
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async ({skip,limit}) => {
    const response = await axios.get(
     `https://dummyjson.com/products/category/smartphones?limit=${limit}&skip=${skip}&select=title,price,description,thumbnail,images,dimensions,category`
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
     
    state.productList.push(...action.payload.response.products)
    state.productList.total= parseInt(action.payload.response.total)
    state.productList.skip = parseInt(action.payload.query.skip)+1;
      console.log("ProductSlice reducer", action.payload)
      
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const paginationType = type => state=> {
  const return_items= state.productList;
  const pagination_data = {
    skip: return_items
  } 
}
export default productSlice.reducer;
