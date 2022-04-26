import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullname: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  notes: String,
  profile: String,
  business: String,
});
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
