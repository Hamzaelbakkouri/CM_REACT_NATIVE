import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types/index";
import axios from "axios";

// Action
export const getProducts = createAsyncThunk<Product[], string>(
  "product/getProducts",
  async (value: string) => {
    const { data } = await axios.get("http://192.168.56.1:3000/products" + value, {
      timeout: 10000,
    });
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
        console.error("pending...");
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.error("Error fetching products:", action.error);
      });
  },
});

export default productSlice.reducer;