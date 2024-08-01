// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     token: '',
//     loading: false,
//     error: '',
//     user: null,
// }
// export const getRegister = createAsyncThunk(
//     async (value) => {
//         return fetch('https://dummyjson.com/users/add', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               firstName: value.username,
//               lastName: 'Ovi',
//               age: 250,
//               /* other user data */
//             })
//           })
//           .then(res => res.json())
//           .then(console.log);
//     }
// )


// const registerReducer = createSlice({})