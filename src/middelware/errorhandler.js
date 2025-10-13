const errorHandler = (error, req, res, next) => {
  console.log("ERROR from error handler", error);
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log("statusCode", statusCode);

  return res.status(statusCode).json({
    message: error,
  });
};

module.exports = { errorHandler };
