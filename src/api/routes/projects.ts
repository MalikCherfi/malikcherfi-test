import express from "express";
import { Project } from "../models/Project";

const projectRouter = express.Router();

// CREATE PROJECT
projectRouter.post("/project", async (req, res) => {
  try {
    await Project.create({ ...req.body });
    res.status(201).send("Project created");
  } catch {
    res.status(500).send("Project not added");
  }
});

// GET PROJECTS
projectRouter.get("/project", async (req, res) => {
  const users = await Project.find({});

  try {
    res.status(200).json(users);
  } catch {
    res.status(404).send("Users not found");
  }
});

// UPDATE PROJECTS
projectRouter.put("/project/:id", async (req, res) => {

  try {
    await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send("project update with success");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE PROJECTS
projectRouter.delete("/project/:id", async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);
    res.status(200).send("Project delete with success");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export { projectRouter };
