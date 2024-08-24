import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  loading: false,
  productList: [],
  skip: 0,
  limit: 10,
  total: 0,
  error: '',
  hasMore: true,
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async ({skip, limit}) => {
    try{
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,thumbnail,images,dimensions,category,sku,brand`,
      );
      console.log('Product Status', response.status);
      return response.data.products;
    }catch(error){
      return rejectWithValue(error.message);
    }
 

   
  },
);

const productSlice = createSlice({
  name: 'product',
  reducers: {
    resetProducts: (state)=>{
      state.productList= [];
      state.skip= 0;
      state.hasMore = true;
    }
  },
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;

      state.productList = [...state.productList, ...action.payload];
      state.skip += state.limit;
      if(action.payload.length < state.limit){
        state.hasMore = false;
      }
      // console.log('ProductSlice reducer', action.payload);
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const {resetProducts} = productSlice.actions;
export default productSlice.reducer;
