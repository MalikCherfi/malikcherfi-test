const usersRouter = require("./users");

const setupRoutes = (app) => {
  app.use("/", usersRouter);
};

module.exports = {
  setupRoutes,
};
