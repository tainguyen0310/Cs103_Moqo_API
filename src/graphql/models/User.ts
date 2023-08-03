import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
