import express from "express";
import bcrypt from "bcryptjs";
import jwt from "../utils/jwt.js";
import mongoose from "mongoose";
import User from "../models/User.js";

const userRouter = express.Router();
const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(databaseUrl);

// REGISTER USER
userRouter.post("/register", async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);

  try {
    await User.create({ ...req.body });
    res.status(201).send("User created");
  } catch {
    res.status(500).send("User not added");
  }
});

// LOGIN USER
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    });

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      res.status(401).send("Email address or password not valid");
    } else {
      const token = await jwt.signAccessToken(user);

      res.status(201).send(token);
    }
  } catch {
    res.status(404).send("User not registered");
  }
});

// VERIFY ACCESS TOKEN
userRouter.get("/session/user", async (req, res) => {
  const token = req.headers.authorization;

  await jwt
    .verifyAccessToken(token)
    .then(() => {
      User.find({})
        .then((user) => {
          res.json(user);
        })
        .catch(() => {
          res.status(404).send("Error retrieving user");
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// GET USERS
userRouter.get("/users", async (req, res) => {
  const users = await User.find({});

  try {
    res.status(200).send(users);
  } catch {
    res.status(404).send("Users not found");
  }
});

export { userRouter };
