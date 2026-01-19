import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    ready: true,
  },
  reducers: {},
});

export default exampleSlice.reducer;
