const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string().min(8).max(14).required(),
});

module.exports = contactSchema;
