import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import asyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
    
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: asyncStorage,
   
};
const persistedReducerLogin= persistReducer(persistConfig,loginReducer)
const persistedReducerRegistere= persistReducer(persistConfig,registerReducer)
export const store = configureStore({
    reducer: {
        auth: persistedReducerLogin,
        register: persistedReducerRegistere
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);
