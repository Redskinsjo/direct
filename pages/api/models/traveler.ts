import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TravelerSchema = new Schema({
  fullname: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  notes: String,
  profile: String,
});
const TravelerModel =
  mongoose.models.Traveler || mongoose.model("Traveler", TravelerSchema);
export default TravelerModel;
