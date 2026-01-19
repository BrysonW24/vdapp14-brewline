import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
};

type CartState = {
  storeId: string | null;
  items: CartItem[];
};

type AddItemPayload = {
  storeId: string;
  id: string;
  name: string;
  price: number;
  quantity?: number;
  notes?: string;
};

type UpdateItemPayload = {
  id: string;
  quantity: number;
};

const initialState: CartState = {
  storeId: null,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartStore(state, action: PayloadAction<string>) {
      if (state.storeId && state.storeId !== action.payload) {
        state.items = [];
      }
      state.storeId = action.payload;
    },
    addItem(state, action: PayloadAction<AddItemPayload>) {
      const { storeId, id, name, price, quantity = 1, notes } = action.payload;
      if (state.storeId && state.storeId !== storeId) {
        state.items = [];
      }
      state.storeId = storeId;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.quantity += quantity;
        if (notes) {
          existing.notes = notes;
        }
      } else {
        state.items.push({ id, name, price, quantity, notes });
      }
    },
    updateItemQuantity(state, action: PayloadAction<UpdateItemPayload>) {
      const item = state.items.find((entry) => entry.id === action.payload.id);
      if (!item) return;
      item.quantity = action.payload.quantity;
      if (item.quantity <= 0) {
        state.items = state.items.filter((entry) => entry.id !== action.payload.id);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  updateItemQuantity,
  removeItem,
  clearCart,
  setCartStore,
} = cartSlice.actions;

export default cartSlice.reducer;
