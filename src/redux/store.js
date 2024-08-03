import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['loginuser']
};
const persistedReducer= persistReducer(persistConfig,loginReducer)
export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        register: registerReducer
        
    }
})

export default persistor = persistStore(store)