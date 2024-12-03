const Cart = require("../Models/Cart");


exports.saveCart = async (req, res) => {
  const { cartId, cart } = req.body;

  try {
    const existingCart = await Cart.findOne({ cartId });
    if (existingCart) {
      existingCart.items = cart;
      await existingCart.save();
    } else {
      const newCart = new Cart({ cartId, items: cart });
      await newCart.save();
    }
    res.status(200).json({ message: "Cart saved successfully", cartId });
  } catch (error) {
    res.status(500).json({ message: "Error saving cart", error });
  }
};


exports.fetchCart = async (req, res) => {
  const { cartId } = req.params;

  try {
    const cart = await Cart.findOne({ cartId });
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};
