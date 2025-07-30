import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: JSON.parse(localStorage.getItem('darkTheme')) || false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsDark: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem('darkTheme', action.payload);
    },
  },
});

export const { setIsDark } = themeSlice.actions;
export default themeSlice.reducer;
