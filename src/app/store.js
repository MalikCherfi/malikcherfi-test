import { configureStore } from "@reduxjs/toolkit";
import user from "./states/user.js";
import color from "./states/color.js";

export default configureStore({
  reducer: { user: user, color: color},
});
