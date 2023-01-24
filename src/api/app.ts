import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { setupRoutes } from "./routes/index";
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

setupRoutes(app);

const databaseUrl = process.env.DATABASE_URL;

mongoose
  .connect(databaseUrl!)
  .then(() => {
    app.listen(port, () => {
      console.log("Server app listening on port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });

export default app;
