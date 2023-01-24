import mongoose from "mongoose";
import request from "supertest";
import app from "../../../api/app";

require("dotenv").config();

// HELP FOR USE MONGOOSE VERY IMPORTANT
// https://stackoverflow.com/questions/69187442/const-utf8encoder-new-textencoder-in-node-js/69187990#69187990

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL!);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
