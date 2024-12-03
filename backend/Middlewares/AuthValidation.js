const Joi = require("joi");


const addacardvalidation = (req, res, next) => {
  const schema = Joi.object({
    cardNumber: Joi.string().min(12).max(12).required(),
    cardHolderName: Joi.string().min(3).required(),
    expiryDate: Joi.string().required(),
    cvv: Joi.string().min(3).max(3).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad-request", error });
  }
  next();
};

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    phone: Joi.string().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
 
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad-request", error });
  }
  next();
};


const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad-request", error });
  }
  next();
};


module.exports = {
  signupValidation,
  addacardvalidation,
  loginValidation,
};
