import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    
    loading: false,
    error: null,
    user: null,
}
export const registerUser = createAsyncThunk(
    'registerUser',
    async (userData , {rejectWithValue}) => {
      try {
        const response = await axios.post('https://dummyjson.com/users/add', userData);
       
        return response.data;
      } catch (error) {
        if(error.response && error.response.data){
          return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue('Something went wrong');
        
      } 
    },
  );




const registerReducer = createSlice({
    name: 'addUser',
    initialState,
    reducers: {},
    extraReducers: (bulider)=> {
        bulider.addCase(registerUser.pending, state => {
            state.loading = true;
         
            state.error= null;
        })
        .addCase(registerUser.fulfilled, (state, action)=> {
            state.loading = false;
            state.user= action.payload;
           
        })
        .addCase(registerUser.rejected, (state, action)=> {
            state.loading= true;
            state.error = null;
            console.log(action.payload);
            state.error=action.payload;
        })
    }
})
export default registerReducer.reducer;