const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  cartId: { type: String, required: true, unique: true },
  items: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
