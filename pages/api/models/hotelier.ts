import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HotelierSchema = new Schema({
  fullname: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  notes: String,
  profile: String,
});
const HotelierModel =
  mongoose.models.Hotelier || mongoose.model("Hotelier", HotelierSchema);
export default HotelierModel;
