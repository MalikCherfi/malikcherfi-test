import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ColorState {
  color: string;
}

const initialState: ColorState = {
  color: "rgb(57, 57, 58)",
};

export const userSlice = createSlice({
  name: "color",
  initialState,

  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = userSlice.actions;

export default userSlice.reducer;
