import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types/index";
import axios from "axios";

// Action
export const getProducts = createAsyncThunk<Product[], string>(
  "product/getProducts",
  async (text: string) => {
    const { data } = await axios.get("http://localhost:5000/products?product_name_like=" + text);
    return data;
  }
);


interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

// Slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
      });
  },
});

export default productSlice.reducer;