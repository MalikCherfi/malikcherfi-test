import mongoose from "mongoose";
import { Schema, model, Types } from "mongoose";

interface User {
  _id: Types.ObjectId;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  name: String,
  lastName: String,
  email: String,
  password: String,
});

const User = model("User", userSchema);
export default User;
