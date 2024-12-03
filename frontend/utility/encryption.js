const crypto = require("crypto");
require("dotenv").config();
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; 
const IV_LENGTH = 16; 
console.log("ENCRYPTION_KEY:", ENCRYPTION_KEY);
if (!ENCRYPTION_KEY) {
  throw new Error("Encryption key is missing");
}

function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  console.log("Generated IV:", iv.toString("hex"));
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  console.log("Encrypted Text:", encrypted);
  return iv.toString("hex") + ":" + encrypted;
}

function decrypt(text) {
  //console.log("Encrypted Input:", text);
  const textParts = text.split(":");
  const iv = Buffer.from(textParts.shift(), "hex");
  console.log("Extracted IV:", iv.toString("hex"));
  const encryptedText = textParts.join(":");
  console.log("Encrypted Data:", encryptedText);
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  console.log("Decrypted Text:", decrypted);
  return decrypted;
}

module.exports = { encrypt, decrypt };
