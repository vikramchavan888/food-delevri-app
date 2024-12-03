const {
  singup,
  login,
  getCardById,
  addCardById,
  deleteCardById,
  getuserById,
  updateCardById,
  upadteuserById,
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} = require("../Controllers/AuthController");


const {
  loginValidation,
  signupValidation,
  addacardvalidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, singup);
router.post("/add-card/:userId",addacardvalidation, addCardById);
router.get("/cards/:userId", getCardById);
router.get("/:id", getuserById);
router.put("/:id", upadteuserById);
router.delete("/delete-card/:userId/:cardId", deleteCardById);
router.put("/update-card/:userId/:cardId", updateCardById);

router.get("/addresses/:userId", getAddresses);
router.post("/add-address/:userId", addAddress);
router.put("/update-address/:userId/:addressId", updateAddress);
router.delete("/delete-address/:userId/:addressId", deleteAddress);
module.exports = router;
