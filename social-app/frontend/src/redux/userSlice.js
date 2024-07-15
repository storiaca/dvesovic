import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    role: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    restoreUser: (state) => {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
  },
});

export const { setUser, restoreUser } = userSlice.actions;
export default userSlice.reducer;
