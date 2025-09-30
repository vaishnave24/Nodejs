const { registerEmployee } = require("../controllers/employee.controller");
const { employeeRegisterValidator } = require("../middelware/employeeValidators");
const { validaterequest } = require("../middelware/validateRequest");

express = require("express");
const router = express.Router();


router.post("/register",[validaterequest,employeeRegisterValidator],registerEmployee)

module.exports = {employee:router};
