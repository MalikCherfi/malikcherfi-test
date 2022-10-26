import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: true,
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
    setIsLoading: (state, status) => {
      state.isLoading = status.payload;
    },
  },
});

export const { setStatus, setUsers, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
