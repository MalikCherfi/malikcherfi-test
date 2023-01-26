import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TasksState {
  tasks: object[];
}

const initialState: TasksState = {
  tasks: [],
};

export const projectSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<object[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = projectSlice.actions;

export default projectSlice.reducer;
