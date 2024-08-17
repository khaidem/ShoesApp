import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../config/Urls';


const initialState = {
  loading: false,
  error: '',
  items: [],
};

export const fetchSingleProduct = createAsyncThunk(
  'singleProduct/fetchSingleProduct',
  async (itemId) => {
    const response = await axios.get(API_BASE_URL+`/products/${itemId}`).then(result=>{
      console.log("SingleProduct",result.status)

    });
    return response.data;
  },
);
const SingleProductSlice = createSlice({
    name: 'SingleProduct',
    reducers: {},
    initialState,
    extraReducers: builder=> {
        builder.addCase(fetchSingleProduct.pending, state=> {
            state.loading = false;
        });
        builder.addCase(fetchSingleProduct.fulfilled, (state, action)=>{
            state.loading= true;
            state.SingleProduct= action.payload;
        });
        builder.addCase(fetchSingleProduct.rejected, (state, action)=> {
            state.loading = false;
            state.error=action.error.message;
        })
    } 
})


export default SingleProductSlice.reducer;