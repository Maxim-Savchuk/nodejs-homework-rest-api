const { Contact, joiSchema, favoriteJoiSchema } = require("./contact.js");
const { User, joiSignupSchema, joiLoginSchema } = require("./user");

module.exports = {
  User,
  joiSignupSchema,
  joiLoginSchema,
  Contact,
  joiSchema,
  favoriteJoiSchema,
};
