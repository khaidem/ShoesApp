import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/LoginSlice";
import registerReducer from "./reducers/RegisterReducer";
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
import OnbaordingReducer from "./reducers/OnbaordingReducer";
import ProductReducer from "./reducers/ProductSlice";
import CategoryReducer from "./reducers/CategorySlice";
import SingleProductReducer from "./reducers/SingleProductReducer";
import ProductDetailsReducer from "./reducers/ProductDetailsReducer";




const persistConfig = {
    key: 'root',
    storage: asyncStorage,
   
};
const persistedReducerLogin= persistReducer(persistConfig,loginReducer)
const persistedReducerRegistere= persistReducer(persistConfig,registerReducer)
export const store = configureStore({
    reducer: {
      onbaording: OnbaordingReducer,
        auth: persistedReducerLogin,
        register: persistedReducerRegistere,
        categories: CategoryReducer,
        product: ProductReducer,
        SingleProduct: SingleProductReducer,
        ProductDetails: ProductDetailsReducer
       


        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);
