import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {PRODUCTDETAILURL} from '../../config/Urls';

const initialState = {
  loading: false,
  ProductDetails: [],
  error: null,
  hasMore: true,
  limit: 10,
  total: 0,
  skip: 0
};
export const fetchProductDetails = createAsyncThunk(
  'ProductDetails/fectchProductDetails',
  async ({skip, limit}) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,thumbnail,images,dimensions,category,sku,brand`,
    );
    console.log('ProductDetails Axios', response.status);
    return response.data.products;
  },
);

const productDetailsSlice = createSlice({
  name: 'ProductDetails',
  reducers: {
    resetProduct: (state)=>{
      state.ProductDetails=[];
      state.skip=0;
      state.hasMore= true;
    }
  },
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProductDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.ProductDetails=[...state.ProductDetails, ...action.payload];
      state.skip +=state.limit;
    if(action.payload.length< state.limit){
      state.hasMore =false;
    }
      console.log('productList playload', action.payload);
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productDetailsSlice.reducer;
