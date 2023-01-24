import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ProjectsState {
  projects: object[];
}

const initialState: ProjectsState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<object[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;
