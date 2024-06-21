const joi = require("joi");
const usersScheme = joi.object({
  name: joi.string().min(2).required(),
  surname: joi.string().min(2).required(),
  city: joi.string().min(2).required(),
  age: joi.number().min(0).required(),
});

const idScheme = joi.object({
  id: joi.number().required(),
});

module.exports = { usersScheme, idScheme };
