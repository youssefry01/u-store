const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(20).alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).regex(/[A-Z]/).regex(/[0-9]/).required(),
  roles: Joi.array().items(Joi.string().valid('User', 'Admin')).default(['User']),
});

const loginSchema = Joi.object({
  usernameOrEmail: Joi.alternatives()
    .try(
      Joi.string().email().required(),  // Email validation
      Joi.string().min(3).max(20).alphanum().required() // Username validation
    ),
  password: Joi.string().min(8).required(),
});

module.exports = { registerSchema, loginSchema };