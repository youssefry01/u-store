import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import themeReducer from '../features/theme/themeSlice';
import purchaseReducer from '../features/purchase/purchaseSlice';
import { apiSlice } from './api/apiSlice.js';
import authReducer from '../features/auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    theme: themeReducer,
    purchase: purchaseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false
});

setupListeners(store.dispatch)
