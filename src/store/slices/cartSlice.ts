import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Product, ProductWithQuantity } from "../../types";

export type CartState = {
  products: ProductWithQuantity[];
};

export const CART_SLICE_KEY = "cart";

export const cartInitialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: CART_SLICE_KEY,
  initialState: cartInitialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const product = state.products.find(
        ({ product }: ProductWithQuantity) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        ({ product }: ProductWithQuantity) => product.id !== action.payload
      );
    },
    updateQuantity: (state, action: PayloadAction<ProductWithQuantity>) => {
      const product = state.products.find(
        ({ product }: ProductWithQuantity) =>
          product.id === action.payload.product.id
      );
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    resetCart: () => cartInitialState,
  },
});

export const selectCartState = (state: RootState) => state[CART_SLICE_KEY];

export const selectQuantity = createSelector(selectCartState, (cardState) =>
  cardState.products.reduce(
    (result: number, { quantity }: ProductWithQuantity) => (result += quantity),
    0
  )
);

export const selectTotalPrice = createSelector(selectCartState, (cartState) =>
  cartState.products.reduce(
    (result: number, { product, quantity }: ProductWithQuantity) =>
      (result += product.price * quantity),
    0
  )
);

export const selectProducts = createSelector(
  selectCartState,
  (cartState) => cartState.products
);

export const { addItem, removeItem, updateQuantity, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
