const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResturentSchema = new Schema({
  name: String,
  img: String,
  link: String,
});

const ResturentModel = mongoose.model("resturents", ResturentSchema);
module.exports = ResturentModel;
