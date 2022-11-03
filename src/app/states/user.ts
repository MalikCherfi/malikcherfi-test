import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UsersState {
  isLoading: boolean;
  isConnected: boolean;
  users: object[];
}

const initialState: UsersState = {
  isLoading: true,
  isConnected: false,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setUsers: (state, action: PayloadAction<object[]>) => {
      state.users = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setStatus, setUsers, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
