import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema<User>({
  name: String,
  email: String,
  phone: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
