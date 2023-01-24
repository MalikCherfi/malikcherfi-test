import { userRouter } from "./users";
import { projectRouter } from "./projects";
import { taskRouter } from "./tasks";

const setupRoutes = (app: any) => {
  app.use("/", userRouter);
  app.use("/", projectRouter);
  app.use("/", taskRouter);
};

export { setupRoutes };
