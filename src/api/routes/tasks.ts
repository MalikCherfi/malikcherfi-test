import express from "express";
import { Task } from "../models/Project";

const projectRouter = express.Router();

// CREATE TASK
projectRouter.post("/task", async (req, res) => {
  try {
    await Task.create({ ...req.body });
    res.status(201).send("Task created");
  } catch {
    res.status(500).send("Task not added");
  }
});

// GET TASK
projectRouter.get("/task", async (req, res) => {
  const users = await Task.find({});

  try {
    res.status(200).json(users);
  } catch {
    res.status(404).send("Users not found");
  }
});

// UPDATE TASK
projectRouter.put("/task/:projectId", async (req, res) => {
  try {
    await Task.updateMany({ projectId: req.params.projectId }, req.body, {
      new: true,
    });
    res.status(200).send("task update with success");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE TASK
projectRouter.delete("/task/:projectId", async (req, res) => {
  try {
    await Task.deleteMany({ projectId: req.params.projectId });
    res.status(200).send("Task delete with success");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export { projectRouter };
