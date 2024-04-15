import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import productReducer from "./storeProduct";
import cardReducer from "./storeCard";

export const store = configureStore({
    reducer: {
        products : productReducer,
        card : cardReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()