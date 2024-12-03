const express = require("express");
const { saveCart, fetchCart } = require("../Controllers/cartController");

const router = express.Router();

router.post("/api/shared-cart", saveCart);
router.get("/api/shared-cart/:cartId", fetchCart);

module.exports = router;
