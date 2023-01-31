import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ProjectsState {
  projects: object[];
  project: object;
}

const initialState: ProjectsState = {
  projects: [],
  project:  {},
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<object[]>) => {
      state.projects = action.payload;
    },
    setProject: (state, action: PayloadAction<object>) => {
      state.project = action.payload;
    },
  },
});

export const { setProjects, setProject } = projectSlice.actions;

export default projectSlice.reducer;
