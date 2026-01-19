import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import storeReducer from './slices/storeSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    store: storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
