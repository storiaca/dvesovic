import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loader: false,
  },
  reducers: {
    toggleLoader: (state, { payload }) => {
      state.laoder = payload;
    },
  },
});

export const { toggleLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
