const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FooditemSchema = new Schema({
  name: String,
  img: String,
  price:Number,
  description:String,
  category:String


});

const FoodModel = mongoose.model("fooditems", FooditemSchema);
module.exports = FoodModel;
