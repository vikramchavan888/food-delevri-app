const mongoose = require("mongoose");

const Connection_url = process.env.MONGO_URL;

mongoose
  .connect(Connection_url)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error in Connection - ", err);
  });
