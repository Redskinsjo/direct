import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  nickname: {
    unique: true,
    type: String,
  },
  hash: String,
  salt: String,
  token: String,
});
const AdminModel =
  mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
export default AdminModel;
