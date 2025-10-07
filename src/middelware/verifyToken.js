const jwt = require("jsonwebtoken");
require("dotenv").config();

const verify_access_token = (req, res, next) => {
  const token = req.headers["x-access-token"];
// console.log("req",req);

  // 1️⃣ Check token presence
  if (!token) {
    return res.status(403).json({
      message: "Access Denied: No access token provided!",
      statusCode: 403,
    });
  }

  // 2️⃣ Verify token
  jwt.verify(token, process.env.JWT_SECRET, (error, item) => {
    if (error) {
      console.error("JWT verification failed:", error);
      return res.status(401).json({
        message: "Invalid or expired token!",
        statusCode: 401,
      });
    }

    // 3️⃣ Save decoded info to request object
    req.user = item;

    console.log("Decoded token:", item);
    // 4️⃣ Continue 
    next();
  });
};

module.exports = { verify_access_token };
