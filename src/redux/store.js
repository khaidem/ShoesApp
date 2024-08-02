import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        register: registerReducer
        
    }
})

export default store;