import { configureStore } from "@reduxjs/toolkit";
import user from "./states/user";
import color from "./states/color";
import project from "./states/project";
import task from "./states/task";

export const store = configureStore({
  reducer: { user: user, color: color, project: project, task: task },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
