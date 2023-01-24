import express from "express";
import { Task } from "../models/Project";

const taskRouter = express.Router();

// CREATE TASK
taskRouter.post("/task", async (req, res) => {
  try {
    await Task.create({ ...req.body });
    res.status(201).send("Task created");
  } catch {
    res.status(500).send("Task not added");
  }
});

// GET TASK
taskRouter.get("/task/:projectId", async (req, res) => {
  const users = await Task.find({ projectId: req.params.projectId });

  try {
    res.status(200).json(users);
  } catch {
    res.status(404).send("Users not found");
  }
});

// UPDATE TASK
taskRouter.put("/task/:projectId", async (req, res) => {
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
taskRouter.delete("/task/:projectId", async (req, res) => {
  try {
    await Task.deleteMany({ projectId: req.params.projectId });
    res.status(200).send("Task delete with success");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export { taskRouter };
