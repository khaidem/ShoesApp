import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';



const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  
};

export const loginUser = createAsyncThunk(
  'user/logInUser',
  async (userData , {rejectWithValue}) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', userData);
      await AsyncStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      if(error.response && error.response.data){
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Something went wrong');
      
    } 
  },
);



const loginSlice = createSlice({
  name: 'loginuser',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error= null;
      state.token= null;
    }
  },


  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        
        // console.log("For Reducer Data",action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        // console.log("Form Reducer Error",action.payload);
        state.error = action.payload;
      });
  },
});



export const {logout} = loginSlice.actions;
export default loginSlice.reducer;
