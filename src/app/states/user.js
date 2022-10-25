import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isConnected: false,
    users: [],
  },
  reducers: {
    setStatus: (state, status) => {
      state.isConnected = status.payload;
    },
    setUsers: (state, status) => {
      state.users = status.payload;
    },
  },
});

export const { setStatus, setUsers } = userSlice.actions;

export default userSlice.reducer;
