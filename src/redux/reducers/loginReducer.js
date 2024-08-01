import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';



const initialState = {
  token: '',
  loading: false,
  error: '',
  user: null,
};

export const getlogin = createAsyncThunk(
  'user/logInUser',
  async () => {
    return fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: values.username,
        password: values.password,
        expiresInMins: 30, // optional, defaults to 60
      })
    })
    .then(res => res.json())
    .then(console.log);
    
    
    // const resquest= await axios.post('https://dummyjson.com/auth/login', values);
    // const response = await resquest.data.data;
    // // await AsyncStorage.setItem('user', JSON.stringify(response.token));
    // return response;
    
  
  },
);

const loginReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getlogin.pending, state => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(getlogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(getlogin.rejected, (state, action) => {
        state.loading = true;
        state.user = null;
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const {} = loginReducer.actions;
export default loginReducer.reducer;
