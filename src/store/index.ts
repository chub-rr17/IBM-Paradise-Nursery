import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CART_SLICE_KEY } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [CART_SLICE_KEY]: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
