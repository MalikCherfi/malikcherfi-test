import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ColorState {
  textColor: string;
  cardColor: string;
}

const initialState: ColorState = {
  textColor: "rgb(57, 57, 58)",
  cardColor: "rgb(255, 133, 82)",
};

export const userSlice = createSlice({
  name: "color",
  initialState,

  reducers: {
    setTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
    setCardColor: (state, action: PayloadAction<string>) => {
      state.cardColor = action.payload;
    },
  },
});

export const { setTextColor, setCardColor } = userSlice.actions;

export default userSlice.reducer;
