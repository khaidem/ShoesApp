import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getlogin } from "./loginReducer";
const initialState = {
    token: '',
    loading: false,
    error: '',
    user: null,
}
export const getRegister = createAsyncThunk(
    async (value) => {
        return fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: value.username,
              email: value.email,
              password: value.password,
              /* other user data */
            })
          })
          .then(res => res.json())
          .then(console.log);
    }
)


const registerReducer = createSlice({
    name: 'addUser',
    initialState,
    reducers: {},
    extraReducers: (bulider)=> {
        bulider.addCase(getRegister.pending, state => {
            state.loading = true;
            state.user= null;
            state.error= null;
        })
        .addCase(getRegister.fulfilled, (state, action)=> {
            state.loading = false;
            state.token= action.payload;
            state.error= null;
        })
        .addCase(getlogin.rejected, (state, action)=> {
            state.loading= true;
            state.user = null;
            console.log(action.error.message);
            state.error=action.error.message;
        })
    }
})
export default registerReducer.reducer;