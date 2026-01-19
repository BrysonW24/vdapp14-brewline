import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import storeReducer from './slices/storeSlice';
import cartReducer from './slices/cartSlice';
import loyaltyReducer from './slices/loyaltySlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    store: storeReducer,
    cart: cartReducer,
    loyalty: loyaltyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
