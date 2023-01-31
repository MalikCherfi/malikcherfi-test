import { Schema, model, Types } from "mongoose";

interface Project {
  _id: Types.ObjectId;
  name: string;
  creationDate: Date;
  description: string;
  beginningDate: Date;
  endDate: Date;
}

interface Task {
  _id: Types.ObjectId;
  name: string;
  description: string;
  beginningDate: Date;
  endDate: Date;
  projectId: string;
}

const projectSchema = new Schema<Project>({
  name: String,
  creationDate: Date,
  description: String,
  beginningDate: Date,
  endDate: Date,
});

const taskSchema = new Schema<Task>({
  name: String,
  description: String,
  beginningDate: Date,
  endDate: Date,
  projectId: String,
});

export const Project = model("Project", projectSchema);
export const Task = model("Task", taskSchema);
