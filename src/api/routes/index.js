import { userRouter }  from "./users.js";

const setupRoutes = (app) => {
  app.use("/", userRouter);
};

export { setupRoutes };
