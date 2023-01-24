import { Schema, model, Types } from "mongoose";

interface Project {
  _id: Types.ObjectId;
  name: string;
  creationDate: Date;
  endDate: Date;
  tasks: string[];
}

const projectSchema = new Schema<Project>({
  name: String,
  creationDate: Date,
  endDate: Date,
  tasks: Array,
});

const Project = model("Project", projectSchema);
export default Project;
