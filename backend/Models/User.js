
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  cardNumber: { type: String, required: true },
  cardHolderName: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

const AddressSchema = new Schema({
  phoneNumber: { type: String, required: true },
  state: { type: String, required: true },
  addressline: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String },
  country: { type: String },
  cards: [CardSchema],
  address: [AddressSchema],
});




const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
