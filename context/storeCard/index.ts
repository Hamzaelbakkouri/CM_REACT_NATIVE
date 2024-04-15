import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Card, Product } from "../../types/index";

type CardState = {
  productsOfcards: Card[];
};

const initialState: CardState = {
  productsOfcards: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const card = state.productsOfcards.find(
        (product) => product.product.id === action.payload.id
      );
      if (card) {
        state.productsOfcards = state.productsOfcards.map((product) =>
          product.product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        
        state.productsOfcards = [...state.productsOfcards, { product: action.payload, quantity: 1 }];
        
      }
    },
    
    addQuantity: (state, action: PayloadAction<Product>) => {
      const product = state.productsOfcards.find(
        (product) => product.product.id === action.payload.id
      );
      if (product) {
        state.productsOfcards = state.productsOfcards.map((product) =>
          product.product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
    },
   
    removeQuantity: (state, action: PayloadAction<Product>) => {
      const product = state.productsOfcards.find(
        (product) => product.product.id === action.payload.id
      );
      if (product) {
        if (product.quantity > 1) {
          state.productsOfcards = state.productsOfcards.map((product) =>
            product.product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
        } else {
          state.productsOfcards = state.productsOfcards.filter(
            (product) => product.product.id !== action.payload.id
          );
        }
      }
    },
  },
});

export default cardSlice.reducer;
export const { addProduct, removeQuantity, addQuantity } = cardSlice.actions;
