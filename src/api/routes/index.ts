import { userRouter } from "./users";

const setupRoutes = (app: any) => {
  app.use("/", userRouter);
};

export { setupRoutes };
