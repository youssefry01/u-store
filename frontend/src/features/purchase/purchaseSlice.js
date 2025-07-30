import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPrice: 0,
  selectedPayment: null,
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setSelectedPayment: (state, action) => {
      state.selectedPayment = action.payload;
    },
  },
});

export const { setSelectedPrice, setSelectedPayment } = purchaseSlice.actions;
export default purchaseSlice.reducer;
