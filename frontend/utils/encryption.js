const crypto = require("crypto");
require("dotenv").config(); // Load the environment variables from .env file

// Retrieve the encryption key from environment variables
const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, "hex"); // 32-byte key from .env
const IV_LENGTH = 16; // AES block size for CBC mode

// Function to encrypt card numbers
const encryptCardNumber = (cardNumber) => {
  // Generate a random IV (16 bytes)
  const iv = crypto.randomBytes(IV_LENGTH);

  // Create a cipher using AES-256-CBC
  const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, iv);

  let encrypted = cipher.update(cardNumber, "utf8", "hex");
  encrypted += cipher.final("hex");

  // Return the IV and encrypted data concatenated with a colon
  return `${iv.toString("hex")}:${encrypted}`;
};

// Function to decrypt card numbers
const decryptCardNumber = (encryptedCardNumber) => {
  // Split the encrypted data into IV and the actual encrypted value
  const [iv, encryptedData] = encryptedCardNumber.split(":");

  // Create a decipher using AES-256-CBC
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    ENCRYPTION_KEY,
    Buffer.from(iv, "hex")
  );

  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};

// Export the functions for external use
module.exports = { encryptCardNumber, decryptCardNumber };
