import { Schema, model, Types } from "mongoose";

interface User {
  _id: Types.ObjectId;
  name: string;
  lastName: string;
  email: string;
  creationDate: Date;
  password: string;
}

const userSchema = new Schema<User>({
  name: String,
  lastName: String,
  email: String,
  creationDate: Date,
  password: String,
});

const User = model("User", userSchema);
export default User;
