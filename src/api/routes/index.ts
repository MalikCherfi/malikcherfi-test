import { userRouter } from "./users";
import { projectRouter } from "./projects";

const setupRoutes = (app: any) => {
  app.use("/", userRouter);
  app.use("/", projectRouter);
};

export { setupRoutes };
