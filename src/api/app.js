import express from "express";
import cors from "cors";
import { setupRoutes } from "./routes/index.js";
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

setupRoutes(app);

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});
