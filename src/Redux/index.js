import { combineReducers, configureStore } from "@reduxjs/toolkit";
import passwordSlice from "./passwordSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/lib/persistStore";



const reducers = combineReducers ({
  
    password : passwordSlice
  
})

const persistConfigure = ({
  key:'root',
  storage,
  whiteList: ['password']
})


const persistedReducer = persistReducer(persistConfigure,reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({ serializableCheck: false }),
})


export const  persistor = persistStore(store)
