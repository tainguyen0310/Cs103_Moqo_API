import mongoose, { Schema } from "mongoose";

interface User {
  name: String;
  email: String;
  password: String;
}

const UserSchema = new Schema<User>({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
