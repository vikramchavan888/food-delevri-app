const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const Resturentdata  = require('./Models/Resturent');
const Fooddata = require("./Models/Fooditems");
const cartRoutes = require("./Routes/cartRoutes");
const ensureAuthenticated = require("./Middlewares/Auth");

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT ;
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.get('/', (req, res) => {
    res.send('server is running on port 3000');
});


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.get("/getResturent",ensureAuthenticated, (req, res) => {
  Resturentdata.find()
    .then((resturent) => res.json(resturent))
    .catch((err) => res.json(err));
});
    

app.get("/getFooditems", (req, res) => {
  Fooddata.find()
    .then((food) => res.json(food))
    .catch((err) => res.json(err));
});


app.use(cartRoutes);


function encrypt(data, key) {
  const cipherText = CryptoJS.AES.encrypt(data, key).toString();
  return cipherText;
}



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})