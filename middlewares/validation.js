const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 404;
      next(error);
      return;
    }
    next();
  };
};

module.exports = validation;
