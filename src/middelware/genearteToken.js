const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateToken = async (isUser) => {
  console.log("isuser", isUser);
  let payload = {
    phone: isUser.phone,
    role: "employee",
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  console.log("token",token);
  return token;
};
