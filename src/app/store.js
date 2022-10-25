import { configureStore } from "@reduxjs/toolkit";
import user from "./states/user.js";

export default configureStore({
  reducer: { user: user },
});
