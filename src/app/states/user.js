import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isConnected: false,
  },
  reducers: {
    setUser: (state, status) => {
      state.isConnected = status.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
