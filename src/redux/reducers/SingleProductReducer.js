import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_BASE_URL} from '../../config/Urls';

const initialState = {
  loading: false,
  error: '',
  SingleProduct: {},
};

export const fetchSingleProduct = createAsyncThunk(
  'singleProduct/fetchSingleProduct',
  async itemId => {
    const response = await axios
      .get(API_BASE_URL + `/products/${itemId}`)
      
    // console.log('result', response.data);
    // console.log('itemID', itemId);
    return response.data;
  },
);
const SingleProductReducer = createSlice({
  name: 'SingleProduct',
  reducers: {},
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchSingleProduct.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.SingleProduct = action.payload;
      // console.log('Single Data', action.payload);
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default SingleProductReducer.reducer;
