import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StoreLocation = {
  id: string;
  name: string;
  suburb: string;
  status: 'Open' | 'Closed';
  busy: 'Low' | 'Medium' | 'High';
  eta: string;
  isFavorite?: boolean;
};

type StoreState = {
  currentStoreId: string;
  stores: StoreLocation[];
};

const initialState: StoreState = {
  currentStoreId: 'store-1',
  stores: [
    {
      id: 'store-1',
      name: 'Mugshot Coffee',
      suburb: 'Surry Hills',
      status: 'Open',
      busy: 'Medium',
      eta: '8 min',
      isFavorite: true,
    },
    {
      id: 'store-2',
      name: 'Brewline CBD',
      suburb: 'Melbourne',
      status: 'Open',
      busy: 'High',
      eta: '12 min',
    },
    {
      id: 'store-3',
      name: 'Northside Brew',
      suburb: 'Brunswick',
      status: 'Closed',
      busy: 'Low',
      eta: 'Opens 7:00 AM',
    },
  ],
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setCurrentStore(state, action: PayloadAction<string>) {
      state.currentStoreId = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      state.stores = state.stores.map((store) =>
        store.id === action.payload
          ? { ...store, isFavorite: !store.isFavorite }
          : store
      );
    },
  },
});

export const { setCurrentStore, toggleFavorite } = storeSlice.actions;
export default storeSlice.reducer;
