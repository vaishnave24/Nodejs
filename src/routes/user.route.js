const express = require("express");
const {
  registerUser,
  getUser,
  userById,
  updateRecords,
  deleteUser,
} = require("../controllers/user.controller");
const { validaterequest } = require("../middelware/validateRequest");
const router = express.Router();

router.post("/register", [validaterequest], registerUser);

router.get("/get-user", [validaterequest], getUser);

router.get("/get-userById/:name", [validaterequest], userById);

router.put("/update/user", [validaterequest], updateRecords);

router.delete("/delete/user", [validaterequest], deleteUser);

module.exports = router;
