import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "color",
  initialState: {
    color: "rgb(57, 57, 58)",
  },
  reducers: {
    setColor: (state, status) => {
      state.color = status.payload;
    },
  },
});

export const { setColor } = userSlice.actions;

export default userSlice.reducer;
