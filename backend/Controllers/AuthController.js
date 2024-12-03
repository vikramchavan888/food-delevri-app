const bcrypt = require("bcrypt");
const { encrypt, decrypt }=require("../utility/encryption")
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");






const singup = async (req, res) => {
  try {
    const { name, phone, email, password, gender,country } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists", success: false });}
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      phone,
      email,
      password: hashedPassword,
      gender,country
    });
    await newUser.save();
    res.status(201).json({
      message: "Signup successful, now you can login",
      success: true,
    });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({
      message: "An error occurred on the server",
      success: false,
    });
  }
};




const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = "Incorrect email or password";
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });}
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ message: errorMsg, success: false });}
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" });
    res.status(200).json({
      message: "Login successful",
      success: true,
      token,
      email, id: user._id,
      name: user.name,});
  }catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({
      message: "Server error occurred",
      success: false,
    });
  }
};






const getuserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "User details",
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err,
    });
  }
};






const upadteuserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, gender, country } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { name, email, gender, country },
      { new: true });
    if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });}
    res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err,
    });
  }
};







const addCardById = async (req, res) => {
  const userId = req.params.userId;
  const { cardNumber, cardHolderName, expiryDate, cvv } = req.body;
  if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
    return res.status(400).send({
      error:
        "All fields (cardNumber, cardHolderName, expiryDate, cvv) are required.",
    });
  }
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" }); }
    const newCard = {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
    };
    newCard.cardNumber = encrypt(newCard.cardNumber);
    newCard.cvv = encrypt(newCard.cvv);
    user.cards.push(newCard);
    await user.save();
    return res.status(200).send({ message: "Card added successfully" });
  } catch (err) {
    console.error("Error adding card:", err);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};








const getCardById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).send({ error: "User not found" });
    user.cards = user.cards.map((card) => {
      card.cardNumber = decrypt(card.cardNumber);
      card.cvv = decrypt(card.cvv);
      return card;
    });
    res.send({ cards: user.cards });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};


const deleteCardById = async (req, res) => {
  const { userId, cardId } = req.params;
  try {
    const user = await UserModel.findById(userId);
    if (!user) return res
      .status(404)
      .send({ message: "User already exists", success: false });

    const cardIndex = user.cards.findIndex(
      (card) => card._id.toString() === cardId
    );
    if (cardIndex === -1)
      return res
        .status(404)
        .send({ message: "card not found", success: false });

    user.cards.splice(cardIndex, 1);
    await user.save();

    res.status(200).send({ message: "Card deleted successfully" });
  } catch (error) {
    console.error("Error deleting card:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};



const updateCardById = async (req, res) => {
  const { userId, cardId } = req.params;
  const { cardNumber, cardHolderName, expiryDate, cvv } = req.body;

  if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
    return res.status(400).send({ message: "All fields  required", success: false });
  }

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).send({ error: "User not found" });

    const cardIndex = user.cards.findIndex(
      (card) => card._id.toString() === cardId
    );
    if (cardIndex === -1)
      return res.status(404).send({ error: "Card not found" });

    const updatedCard = {
      cardNumber: encrypt(cardNumber),
      cardHolderName,
      expiryDate,
      cvv: encrypt(cvv),
    };

    user.cards[cardIndex] = updatedCard;
    await user.save();

    res.status(200).send({ message: "Card updated successfully" });
  } catch (error) {
    console.error("Error updating card:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};



const getAddresses = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findById(userId).select("address");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ addresses: user.address });
  } catch (error) {
    res.status(500).json({ message: "Error fetching addresses", error });
  }
};

// Add a new address for a user
const addAddress = async (req, res) => {
  const { userId } = req.params;
  const { phoneNumber, state, addressline, city, pincode } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newAddress = {
      phoneNumber,
      state,
      addressline,
      city,
      pincode,
    };

    user.address.push(newAddress);
    await user.save();

    res
      .status(201)
      .json({ message: "Address added successfully", address: newAddress });
  } catch (error) {
    res.status(500).json({ message: "Error adding address", error });
  }
};

// Update an existing address for a user
const updateAddress = async (req, res) => {
  const { userId, addressId } = req.params;
  const { phoneNumber, state, addressline, city, pincode } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const address = user.address.id(addressId);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    address.phoneNumber = phoneNumber || address.phoneNumber;
    address.state = state || address.state;
    address.addressline = addressline || address.addressline;
    address.city = city || address.city;
    address.pincode = pincode || address.pincode;

    await user.save();

    res.status(200).json({ message: "Address updated successfully", address });
  } catch (error) {
    res.status(500).json({ message: "Error updating address", error });
  }
};

// Delete an address for a user
const deleteAddress = async (req, res) => {
  const { userId, addressId } = req.params;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove the address by its ID
    user.address = user.address.filter(
      (address) => address._id.toString() !== addressId
    );

    await user.save();
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    console.error("Error deleting address:", error);
    res.status(500).json({ message: "Error deleting address", error });
  }
};












module.exports = {
  singup,
  addCardById,
  getuserById,
  deleteCardById,
  getCardById,
  updateCardById,
  upadteuserById,
  login,
 getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
};
