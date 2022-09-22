import { configureStore } from "@reduxjs/toolkit";
import busketSlice from "./slices/busketSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    busket: busketSlice,
  },
});
