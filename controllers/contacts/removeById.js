const { removeContact } = require("../../model/contacts");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};

module.exports = removeById;
