const { validationResult } = require("express-validator");

exports.validaterequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
        message:errors.array()[0].msg,
        errors:errors.array(),
        statusCode:400,
    })
  }
  next();
};
